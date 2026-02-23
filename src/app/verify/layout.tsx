import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Verify Agreement | Vérifier l'accord | التحقق من الاتفاقية",
	description:
		"Review and verify a shared loan agreement on DaynRecord. Open a share link or scan a QR code to view agreement details. | Consultez et vérifiez un accord de prêt partagé sur DaynRecord. | راجع وتحقق من اتفاقية دين مشتركة على دَيْن ريكورد.",
	robots: {
		index: true,
		follow: true
	}
};

export default function VerifyLayout({ children }: { children: React.ReactNode }) {
	return children;
}
