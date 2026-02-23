export function trackEvent(event: string) {
	if (typeof window === "undefined") return;

	try {
		navigator.sendBeacon(
			"/api/track",
			new Blob([JSON.stringify({ event })], { type: "application/json" })
		);
	} catch {
		fetch("/api/track", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ event }),
			keepalive: true
		}).catch(() => {});
	}
}
