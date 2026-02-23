import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
	"DaynRecord — Free Loan Agreement Generator | Générateur d'accords de prêt | مولد اتفاقيات الديون";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					background: "linear-gradient(135deg, #064E3B 0%, #0A7A5C 50%, #064E3B 100%)",
					fontFamily: "Georgia, serif",
					position: "relative"
				}}>
				{/* Decorative top border */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						height: "6px",
						background: "linear-gradient(to right, #064E3B, #C4A052, #064E3B)",
						display: "flex"
					}}
				/>

				{/* Content */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						padding: "40px"
					}}>
					{/* Bismillah */}
					<div
						style={{
							color: "#C4A052",
							fontSize: "28px",
							marginBottom: "16px",
							opacity: 0.9
						}}>
						بسم الله الرحمن الرحيم
					</div>

					{/* App name */}
					<div
						style={{
							display: "flex",
							fontSize: "72px",
							fontWeight: "bold",
							color: "white",
							letterSpacing: "2px",
							marginBottom: "4px"
						}}>
						<span style={{ color: "#FFFFFF" }}>Dayn</span>
						<span style={{ color: "#C4A052" }}>Record</span>
					</div>

					{/* Arabic app name */}
					<div
						style={{
							fontSize: "28px",
							color: "rgba(196,160,82,0.7)",
							marginBottom: "24px"
						}}>
						دَيْن ريكورد
					</div>

					{/* Taglines in 3 languages */}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "6px",
							marginBottom: "28px"
						}}>
						<div
							style={{
								fontSize: "22px",
								color: "rgba(255,255,255,0.85)",
								textAlign: "center"
							}}>
							Free Loan Agreement Generator
						</div>
						<div
							style={{
								fontSize: "18px",
								color: "rgba(255,255,255,0.55)",
								textAlign: "center"
							}}>
							{"Générateur d'accords de prêt gratuit"}
						</div>
						<div
							style={{
								fontSize: "20px",
								color: "rgba(255,255,255,0.55)",
								textAlign: "center"
							}}>
							مولد اتفاقيات الديون المجاني
						</div>
					</div>

					{/* Gold line */}
					<div
						style={{
							width: "120px",
							height: "2px",
							background: "#C4A052",
							marginBottom: "28px",
							display: "flex"
						}}
					/>

					{/* Features in 3 languages */}
					<div
						style={{
							display: "flex",
							gap: "28px",
							color: "rgba(255,255,255,0.65)",
							fontSize: "15px"
						}}>
						<div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
							<span style={{ color: "#C4A052" }}>✦</span> No Account Needed
						</div>
						<div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
							<span style={{ color: "#C4A052" }}>✦</span> Sans compte
						</div>
						<div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
							<span style={{ color: "#C4A052" }}>✦</span> بدون حساب
						</div>
					</div>

					{/* Verse */}
					<div
						style={{
							marginTop: "32px",
							fontSize: "13px",
							color: "rgba(255,255,255,0.4)",
							fontStyle: "italic",
							textAlign: "center",
							maxWidth: "700px",
							lineHeight: "1.6"
						}}>
						{"\u201C"}When you contract a debt for a specified term, write it down.
						{"\u201D"} — Al-Baqarah 2:282 | {"\u00AB"} Quand vous contractez une dette
						pour un terme fixé, mettez-la par écrit {"\u00BB"}
					</div>
				</div>

				{/* Bottom border */}
				<div
					style={{
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						height: "6px",
						background: "linear-gradient(to right, #064E3B, #C4A052, #064E3B)",
						display: "flex"
					}}
				/>

				{/* Language badges */}
				<div
					style={{
						position: "absolute",
						bottom: "20px",
						left: "40px",
						display: "flex",
						gap: "8px",
						fontSize: "12px"
					}}>
					<div
						style={{
							background: "rgba(255,255,255,0.12)",
							color: "rgba(255,255,255,0.6)",
							padding: "3px 10px",
							borderRadius: "12px",
							display: "flex"
						}}>
						EN
					</div>
					<div
						style={{
							background: "rgba(255,255,255,0.12)",
							color: "rgba(255,255,255,0.6)",
							padding: "3px 10px",
							borderRadius: "12px",
							display: "flex"
						}}>
						FR
					</div>
					<div
						style={{
							background: "rgba(255,255,255,0.12)",
							color: "rgba(255,255,255,0.6)",
							padding: "3px 10px",
							borderRadius: "12px",
							display: "flex"
						}}>
						عربي
					</div>
				</div>

				{/* Author credit */}
				<div
					style={{
						position: "absolute",
						bottom: "20px",
						right: "40px",
						fontSize: "13px",
						color: "rgba(255,255,255,0.35)",
						display: "flex"
					}}>
					by Zineddine Benkhaled
				</div>
			</div>
		),
		{ ...size }
	);
}
