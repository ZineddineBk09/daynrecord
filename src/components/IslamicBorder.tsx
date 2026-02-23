"use client";

interface IslamicBorderProps {
	children: React.ReactNode;
	className?: string;
}

export function IslamicBorder({ children, className = "" }: IslamicBorderProps) {
	return (
		<div className={`relative ${className}`}>
			{/* Corner decorations */}
			<svg
				className="text-islamic-gold-400 absolute -top-1 -left-1 h-6 w-6"
				viewBox="0 0 24 24"
				fill="currentColor">
				<path d="M0 0 L12 0 L12 2 L2 2 L2 12 L0 12 Z" />
				<circle
					cx="6"
					cy="6"
					r="1.5"
				/>
			</svg>
			<svg
				className="text-islamic-gold-400 absolute -top-1 -right-1 h-6 w-6 rotate-90"
				viewBox="0 0 24 24"
				fill="currentColor">
				<path d="M0 0 L12 0 L12 2 L2 2 L2 12 L0 12 Z" />
				<circle
					cx="6"
					cy="6"
					r="1.5"
				/>
			</svg>
			<svg
				className="text-islamic-gold-400 absolute -bottom-1 -left-1 h-6 w-6 -rotate-90"
				viewBox="0 0 24 24"
				fill="currentColor">
				<path d="M0 0 L12 0 L12 2 L2 2 L2 12 L0 12 Z" />
				<circle
					cx="6"
					cy="6"
					r="1.5"
				/>
			</svg>
			<svg
				className="text-islamic-gold-400 absolute -right-1 -bottom-1 h-6 w-6 rotate-180"
				viewBox="0 0 24 24"
				fill="currentColor">
				<path d="M0 0 L12 0 L12 2 L2 2 L2 12 L0 12 Z" />
				<circle
					cx="6"
					cy="6"
					r="1.5"
				/>
			</svg>
			{children}
		</div>
	);
}
