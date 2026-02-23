import type { LoanRecord } from "./types";

export async function generateHash(data: Omit<LoanRecord, "document_hash">): Promise<string> {
	const text = JSON.stringify(data);
	const encoder = new TextEncoder();
	const buffer = encoder.encode(text);
	const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function generateVerificationCode(): string {
	const chars = "0123456789ABCDEF";
	const segments = 4;
	const segmentLength = 4;
	const parts: string[] = [];

	for (let s = 0; s < segments; s++) {
		let segment = "";
		for (let i = 0; i < segmentLength; i++) {
			segment += chars[Math.floor(Math.random() * chars.length)];
		}
		parts.push(segment);
	}

	return parts.join("-");
}

export async function verifyDocument(documentJson: string, expectedHash: string): Promise<boolean> {
	try {
		const data = JSON.parse(documentJson);
		const { document_hash: _, ...rest } = data;
		const computedHash = await generateHash(rest);
		return computedHash === expectedHash;
	} catch {
		return false;
	}
}
