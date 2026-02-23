import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { type Language, translations } from "./translations";
import type { LoanRecord } from "./types";
import { getCurrencySymbol } from "./utils";

export async function generatePDF(record: LoanRecord, language: Language): Promise<jsPDF> {
	const t = translations[language];
	const isRTL = language === "ar";
	const symbol = getCurrencySymbol(record.currency);

	const container = document.createElement("div");
	container.style.position = "fixed";
	container.style.left = "-9999px";
	container.style.top = "0";
	container.style.width = "794px";
	container.style.background = "#FFFBF0";
	container.style.padding = "0";
	container.style.margin = "0";
	container.style.fontFamily = "'Amiri', 'Times New Roman', serif";
	container.style.direction = isRTL ? "rtl" : "ltr";
	container.style.color = "#2C2C2C";

	container.innerHTML = buildTemplate(record, t, isRTL, symbol);
	document.body.appendChild(container);

	try {
		await document.fonts.load("400 16px Amiri");
		await document.fonts.load("700 16px Amiri");
	} catch {
		// Font may already be loaded
	}
	await document.fonts.ready;

	const canvas = await html2canvas(container, {
		scale: 2,
		backgroundColor: "#FFFBF0",
		logging: false,
		useCORS: true
	});

	document.body.removeChild(container);

	const doc = new jsPDF("portrait", "mm", "a4");
	const pageWidth = doc.internal.pageSize.getWidth();
	const pageHeight = doc.internal.pageSize.getHeight();
	const imgWidth = pageWidth;
	const imgHeight = (canvas.height * imgWidth) / canvas.width;
	const imgData = canvas.toDataURL("image/jpeg", 0.95);

	let heightLeft = imgHeight;
	let position = 0;

	doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
	heightLeft -= pageHeight;

	while (heightLeft > 0) {
		position -= pageHeight;
		doc.addPage();
		doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
		heightLeft -= pageHeight;
	}

	return doc;
}

function sectionHeader(title: string, isRTL: boolean): string {
	return `<div style="background:#064E3B;color:#fff;padding:8px 16px;border-radius:4px;font-size:14px;font-weight:bold;${isRTL ? "" : "letter-spacing:1px;"}margin-bottom:12px;text-align:${isRTL ? "right" : "left"};">${title}</div>`;
}

function goldLine(): string {
	return `<div style="height:1px;background:linear-gradient(to right,transparent,#C4A052,transparent);margin:20px 0;"></div>`;
}

function row(label: string, value: string, bold = false): string {
	const style = bold
		? "font-size:18px;font-weight:bold;color:#064E3B;"
		: "font-size:13px;color:#2C2C2C;";
	return `<div style="display:flex;gap:12px;margin-bottom:6px;align-items:baseline;"><span style="font-size:12px;color:#6B7280;min-width:120px;flex-shrink:0;">${label}</span><span style="${style}">${value}</span></div>`;
}

function buildTemplate(
	record: LoanRecord,
	t: (typeof translations)["en"],
	isRTL: boolean,
	symbol: string
): string {
	const align = isRTL ? "right" : "left";

	const witnessBlocks = record.witnesses
		.map(
			(w, i) => `
    ${record.witnesses.length > 1 ? `<div style="font-size:13px;font-weight:bold;color:#064E3B;margin-bottom:8px;">${t.witness_label} ${i + 1}</div>` : ""}
    ${w.signature ? `<img src="${w.signature}" style="height:50px;max-width:200px;object-fit:contain;margin-bottom:4px;" />` : ""}
    <div style="font-size:11px;color:#6B7280;">${t.pdf_name} ${w.name}</div>
    <div style="font-size:11px;color:#6B7280;margin-bottom:12px;">${t.pdf_signed} ${w.timestamp}</div>
  `
		)
		.join("");

	return `
    <div style="padding:40px 50px;text-align:${align};">
      <!-- Top border -->
      <div style="height:4px;background:linear-gradient(to right,#064E3B,#C4A052,#064E3B);border-radius:2px;"></div>
      <div style="height:1px;background:linear-gradient(to right,#064E3B,#C4A052,#064E3B);margin-top:3px;"></div>

      <!-- Title -->
      <div style="text-align:center;margin:24px 0 8px;">
        <img src="/logo/logo-no-text.png" style="height:60px;width:60px;object-fit:contain;margin:0 auto 8px;" />
        <div style="font-size:26px;font-weight:bold;color:#064E3B;${isRTL ? "" : "letter-spacing:2px;"}">${t.pdf_title}</div>
        <div style="font-size:14px;color:#C4A052;margin-top:4px;font-family:'Amiri',serif;">بسم الله الرحمن الرحيم</div>
      </div>

      <!-- Meta -->
      <div style="display:flex;justify-content:space-between;font-size:10px;color:#6B7280;margin-bottom:8px;">
        <span>${t.pdf_generated} ${record.generated_at}</span>
        <span>${t.pdf_doc_ref} ${record.verification_code}</span>
      </div>

      ${goldLine()}

      <!-- Parties -->
      ${sectionHeader(t.pdf_parties, isRTL)}
      ${row(t.pdf_creditor, record.creditor_name)}
      ${row(t.pdf_debtor, record.debtor_name)}

      <div style="margin-top:20px;"></div>

      <!-- Loan Details -->
      ${sectionHeader(t.pdf_loan_details, isRTL)}
      ${row(t.pdf_amount, `${symbol}${record.amount} ${record.currency}`, true)}
      ${row(t.pdf_due_date, record.due_date)}
      ${record.terms ? `<div style="margin-top:8px;"><span style="font-size:12px;color:#6B7280;">${t.pdf_terms}</span><div style="font-size:12px;color:#2C2C2C;margin-top:4px;padding:8px 12px;background:#F5EDD6;border-radius:4px;white-space:pre-wrap;">${record.terms}</div></div>` : ""}

      <div style="margin-top:20px;"></div>

      <!-- Debtor Declaration -->
      ${sectionHeader(t.pdf_declaration, isRTL)}
      <div style="font-size:12px;color:#2C2C2C;margin-bottom:12px;">${t.pdf_declaration_text}</div>
      ${record.debtor_signature ? `<img src="${record.debtor_signature}" style="height:55px;max-width:220px;object-fit:contain;margin-bottom:4px;" />` : ""}
      <div style="font-size:11px;color:#6B7280;">${t.pdf_name} ${record.debtor_name}</div>
      <div style="font-size:11px;color:#6B7280;">${t.pdf_signed} ${record.debtor_timestamp}</div>
      ${record.debtor_location ? `<div style="font-size:11px;color:#6B7280;">${t.pdf_location} ${record.debtor_location}</div>` : ""}

      <div style="margin-top:20px;"></div>

      <!-- Witnesses -->
      ${sectionHeader(record.witnesses.length === 1 ? t.pdf_witness : t.pdf_witnesses, isRTL)}
      ${witnessBlocks}

      <div style="margin-top:20px;"></div>

      <!-- Integrity -->
      ${sectionHeader(t.pdf_integrity, isRTL)}
      <div style="background:#F0EBE0;border-radius:6px;padding:16px;">
        <div style="font-size:11px;color:#2C2C2C;margin-bottom:8px;">${t.pdf_integrity_text}</div>
        <div style="font-size:11px;color:#6B7280;">${t.pdf_doc_ref} ${record.verification_code}</div>
        <div style="font-size:10px;color:#6B7280;word-break:break-all;margin-top:4px;">${t.pdf_hash} SHA-256: ${record.document_hash}</div>
        <div style="font-size:10px;color:#6B7280;margin-top:8px;">${t.pdf_verify_instructions}</div>
      </div>

      <!-- Footer -->
      ${goldLine()}
      <div style="text-align:center;font-size:10px;color:#6B7280;">
        <div>${t.pdf_footer1}</div>
        <div>${t.pdf_footer2}</div>
      </div>

      <!-- Bottom border -->
      <div style="height:1px;background:linear-gradient(to right,#064E3B,#C4A052,#064E3B);margin-top:16px;"></div>
      <div style="height:4px;background:linear-gradient(to right,#064E3B,#C4A052,#064E3B);border-radius:2px;margin-top:3px;"></div>
    </div>
  `;
}
