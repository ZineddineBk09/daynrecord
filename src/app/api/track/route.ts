import { NextResponse } from "next/server";

let memoryStore: Record<string, number> = {};
let useMemory = false;

async function getStore() {
	try {
		const { getStore } = await import("@netlify/blobs");
		return getStore({ name: "daynrecord-analytics", consistency: "strong" });
	} catch {
		useMemory = true;
		return null;
	}
}

async function getCount(event: string): Promise<number> {
	if (useMemory) return memoryStore[event] || 0;

	const store = await getStore();
	if (!store) return memoryStore[event] || 0;

	try {
		const data = await store.get(event, { type: "json" }) as { count: number } | null;
		return data?.count || 0;
	} catch {
		return 0;
	}
}

async function increment(event: string): Promise<number> {
	const current = await getCount(event);
	const next = current + 1;

	if (useMemory) {
		memoryStore[event] = next;
		return next;
	}

	const store = await getStore();
	if (!store) {
		memoryStore[event] = next;
		return next;
	}

	try {
		await store.setJSON(event, { count: next, lastUpdated: new Date().toISOString() });
	} catch {
		memoryStore[event] = next;
	}
	return next;
}

export async function POST(request: Request) {
	try {
		const { event } = await request.json();
		if (!event || typeof event !== "string") {
			return NextResponse.json({ error: "Missing event name" }, { status: 400 });
		}
		const count = await increment(event);
		return NextResponse.json({ event, count });
	} catch {
		return NextResponse.json({ error: "Invalid request" }, { status: 400 });
	}
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const secret = searchParams.get("secret");

	if (secret !== (process.env.ANALYTICS_SECRET || "daynrecord-stats")) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const contracts = await getCount("contract_generated");
	const pdfDownloads = await getCount("pdf_downloaded");
	const shareLinks = await getCount("share_link_copied");

	return NextResponse.json({
		contracts_generated: contracts,
		pdf_downloads: pdfDownloads,
		share_links_copied: shareLinks,
		fetched_at: new Date().toISOString()
	});
}
