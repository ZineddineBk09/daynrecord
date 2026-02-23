"use client";

import { useI18n } from "@/lib/i18n";
import { useCallback, useEffect, useRef, useState } from "react";
import SignaturePadLib from "signature_pad";

interface SignaturePadProps {
	onSignatureChange: (dataUrl: string) => void;
	initialValue?: string;
	label?: string;
}

export function SignaturePad({ onSignatureChange, initialValue, label }: SignaturePadProps) {
	const { t } = useI18n();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const padRef = useRef<SignaturePadLib | null>(null);
	const [mode, setMode] = useState<"draw" | "type">("draw");
	const [typedName, setTypedName] = useState("");

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ratio = Math.max(window.devicePixelRatio || 1, 1);
		const rect = canvas.getBoundingClientRect();
		canvas.width = rect.width * ratio;
		canvas.height = rect.height * ratio;

		const ctx = canvas.getContext("2d");
		if (ctx) {
			ctx.scale(ratio, ratio);
		}

		if (padRef.current && initialValue) {
			padRef.current.fromDataURL(initialValue);
		}
	}, [initialValue]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		padRef.current = new SignaturePadLib(canvas, {
			backgroundColor: "rgb(255, 253, 245)",
			penColor: "#064E3B",
			minWidth: 1.5,
			maxWidth: 3
		});

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		padRef.current.addEventListener("endStroke", () => {
			if (padRef.current) {
				onSignatureChange(padRef.current.toDataURL());
			}
		});

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			padRef.current?.off();
		};
	}, [resizeCanvas, onSignatureChange]);

	const handleClear = () => {
		if (padRef.current) {
			padRef.current.clear();
			onSignatureChange("");
		}
	};

	const handleTypeSignature = (name: string) => {
		setTypedName(name);
		if (!name.trim()) {
			onSignatureChange("");
			return;
		}

		const canvas = document.createElement("canvas");
		canvas.width = 400;
		canvas.height = 120;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.fillStyle = "#FFFDF5";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.font = "italic 36px 'Amiri', serif";
		ctx.fillStyle = "#064E3B";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(name, canvas.width / 2, canvas.height / 2);

		onSignatureChange(canvas.toDataURL());
	};

	return (
		<div className="space-y-3">
			<label className="islamic-label">{label || t.signature_label}</label>

			<div className="bg-islamic-cream-200 flex w-fit gap-1 rounded-lg p-1">
				<button
					type="button"
					onClick={() => setMode("draw")}
					className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
						mode === "draw"
							? "bg-islamic-green-800 text-white shadow-sm"
							: "text-islamic-green-800 hover:bg-islamic-cream-300"
					}`}>
					{t.draw}
				</button>
				<button
					type="button"
					onClick={() => setMode("type")}
					className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
						mode === "type"
							? "bg-islamic-green-800 text-white shadow-sm"
							: "text-islamic-green-800 hover:bg-islamic-cream-300"
					}`}>
					{t.type_mode}
				</button>
			</div>

			{mode === "draw" ? (
				<div className="relative">
					<canvas
						ref={canvasRef}
						className="signature-canvas border-islamic-green-700/20 bg-islamic-cream-50 h-36 w-full rounded-lg border-2 border-dashed sm:h-32"
					/>
					<button
						type="button"
						onClick={handleClear}
						className="text-islamic-green-700/60 hover:text-islamic-green-800 absolute end-2 top-2 rounded bg-white/80 px-2 py-1 text-xs">
						{t.clear}
					</button>
				</div>
			) : (
				<div className="relative">
					<input
						type="text"
						className="islamic-input font-amiri text-islamic-green-900 text-center text-2xl italic"
						placeholder={t.type_placeholder}
						value={typedName}
						onChange={(e) => handleTypeSignature(e.target.value)}
					/>
					{typedName && (
						<div className="border-islamic-cream-400 bg-islamic-cream-50 mt-2 rounded-lg border p-4 text-center">
							<span className="font-amiri text-islamic-green-900 text-3xl italic">{typedName}</span>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
