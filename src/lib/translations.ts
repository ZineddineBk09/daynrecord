export type Language = "en" | "fr" | "ar";

export interface TranslationStrings {
	// Common
	app_name: string;
	app_tagline: string;
	bismillah: string;
	verse: string;
	verse_ref: string;
	continue_btn: string;
	back_btn: string;
	confirm_btn: string;
	language_label: string;

	// Hero
	hero_title: string;
	hero_description: string;

	// Steps
	step_agreement: string;
	step_confirmation: string;
	step_witnesses: string;
	step_complete: string;

	// Agreement Form
	agreement_title: string;
	agreement_description: string;
	parties_heading: string;
	creditor_label: string;
	creditor_placeholder: string;
	debtor_label: string;
	debtor_placeholder: string;
	loan_details_heading: string;
	amount_label: string;
	amount_placeholder: string;
	due_date_label: string;
	terms_label: string;
	terms_optional: string;
	terms_placeholder: string;

	// Errors
	error_creditor_required: string;
	error_debtor_required: string;
	error_amount_required: string;
	error_due_date_required: string;
	error_acknowledge: string;
	error_signature: string;
	error_witness_name: string;
	error_witness_signature: string;
	error_witness_confirmed: string;

	// Debtor Confirmation
	debtor_title: string;
	debtor_description: string;
	summary_heading: string;
	creditor: string;
	debtor: string;
	amount: string;
	due_date: string;
	terms: string;
	declaration_heading: string;
	declaration_checkbox: string;
	declaration_description: string;
	signature_label: string;
	location_label: string;
	location_optional: string;
	location_placeholder: string;
	draw: string;
	type_mode: string;
	clear: string;
	type_placeholder: string;

	// Witness
	witness_title: string;
	witness_description: string;
	witness_count_heading: string;
	one_witness: string;
	two_witnesses: string;
	witness_label: string;
	witness_name_label: string;
	witness_name_placeholder: string;
	witness_signature_label: string;
	witness_confirmed: string;
	witness_confirmed_desc: string;
	generate_contract: string;
	generating: string;

	// Generated Record
	generated_title: string;
	generated_description: string;
	document_ref: string;
	qr_description: string;
	download_pdf: string;
	copy_share: string;
	copied: string;
	security_heading: string;
	security_hash: string;
	security_no_storage: string;
	security_verify: string;
	security_copies: string;
	document_hash: string;
	start_new: string;
	witnesses_label: string;
	generated_label: string;

	// Verify page
	verify_title: string;
	verify_description: string;
	verifying: string;
	verify_error_title: string;
	verify_error_decode: string;
	verify_preview_title: string;
	verify_preview_message: string;
	verify_details: string;
	verify_scan_qr: string;
	back_to_home: string;

	// Error pages
	not_found_title: string;
	not_found_description: string;
	not_found_verse: string;
	not_found_go_home: string;
	not_found_go_back: string;

	error_page_title: string;
	error_page_description: string;
	error_page_verse: string;
	error_page_try_again: string;
	error_page_go_home: string;
	error_page_details: string;

	offline_title: string;
	offline_description: string;
	offline_verse: string;
	offline_retry: string;
	offline_banner: string;
	offline_back_online: string;

	// PDF
	pdf_title: string;
	pdf_parties: string;
	pdf_creditor: string;
	pdf_debtor: string;
	pdf_loan_details: string;
	pdf_amount: string;
	pdf_due_date: string;
	pdf_terms: string;
	pdf_declaration: string;
	pdf_declaration_text: string;
	pdf_name: string;
	pdf_signed: string;
	pdf_location: string;
	pdf_witness: string;
	pdf_witnesses: string;
	pdf_integrity: string;
	pdf_integrity_text: string;
	pdf_doc_ref: string;
	pdf_hash: string;
	pdf_verify_instructions: string;
	pdf_footer1: string;
	pdf_footer2: string;
	pdf_generated: string;
}

export const translations: Record<Language, TranslationStrings> = {
	en: {
		app_name: "DaynRecord",
		app_tagline: "Transparent Loan Agreements",
		bismillah: "بسم الله الرحمن الرحيم",
		verse:
			"\u201CO you who believe, when you contract a debt for a specified term, write it down.\u201D",
		verse_ref: "Al-Baqarah 2:282",
		continue_btn: "Continue",
		back_btn: "Back",
		confirm_btn: "Confirm",
		language_label: "Language",

		hero_title: "Record Your Agreement",
		hero_description:
			"Create a transparent, tamper-evident loan record in seconds. No accounts needed. No data stored. Just clarity and trust between parties.",

		step_agreement: "Agreement",
		step_confirmation: "Confirmation",
		step_witnesses: "Witnesses",
		step_complete: "Complete",

		agreement_title: "Create Loan Record",
		agreement_description: "Enter the details of the agreement between parties",
		parties_heading: "Parties",
		creditor_label: "Creditor Full Name",
		creditor_placeholder: "Who is lending?",
		debtor_label: "Debtor Full Name",
		debtor_placeholder: "Who is borrowing?",
		loan_details_heading: "Loan Details",
		amount_label: "Amount",
		amount_placeholder: "0.00",
		due_date_label: "Due Date",
		terms_label: "Terms & Conditions",
		terms_optional: "(optional)",
		terms_placeholder:
			"e.g., Monthly installments of $500, first payment due March 1st. No interest charged.",

		error_creditor_required: "Creditor name is required",
		error_debtor_required: "Debtor name is required",
		error_amount_required: "Please enter a valid positive amount",
		error_due_date_required: "Due date is required",
		error_acknowledge: "You must acknowledge the debt",
		error_signature: "Signature is required",
		error_witness_name: "Witness name is required",
		error_witness_signature: "Witness signature is required",
		error_witness_confirmed: "Witnesses must confirm their presence",

		debtor_title: "Debtor Confirmation",
		debtor_description: "Review the agreement and provide your acknowledgment",
		summary_heading: "Agreement Summary",
		creditor: "Creditor",
		debtor: "Debtor",
		amount: "Amount",
		due_date: "Due Date",
		terms: "Terms",
		declaration_heading: "Debtor Declaration",
		declaration_checkbox: "I acknowledge this debt and agree to repay it",
		declaration_description:
			"By checking this, you confirm the details above are accurate and you commit to repayment according to the stated terms.",
		signature_label: "Debtor Signature",
		location_label: "Location",
		location_optional: "(optional)",
		location_placeholder: "City, Country",
		draw: "Draw",
		type_mode: "Type",
		clear: "Clear",
		type_placeholder: "Type your full name",

		witness_title: "Witness Confirmation",
		witness_description: "Record the presence and testimony of witnesses",
		witness_count_heading: "Number of Witnesses",
		one_witness: "One Witness",
		two_witnesses: "Two Witnesses",
		witness_label: "Witness",
		witness_name_label: "Full Name",
		witness_name_placeholder: "Witness full name",
		witness_signature_label: "Signature",
		witness_confirmed: "I/We witnessed this agreement",
		witness_confirmed_desc:
			"By checking this, the witness(es) confirm their presence during this agreement and attest to its accuracy.",
		generate_contract: "Generate Contract",
		generating: "Generating...",

		generated_title: "Contract Generated",
		generated_description: "Your loan agreement has been created successfully",
		document_ref: "Document Reference",
		qr_description:
			"Scan this QR code to view the agreement summary. Share it with the other party so they can review the record.",
		download_pdf: "Download PDF",
		copy_share: "Copy Share Link",
		copied: "Copied!",
		security_heading: "Security & Privacy",
		security_hash: "Document hash (SHA-256) embedded for tamper detection",
		security_no_storage: "No data stored on any server \u2014 everything stays in your browser",
		security_verify: "Anyone can verify document authenticity by comparing hashes",
		security_copies: "All parties receive identical copies of the agreement",
		document_hash: "Document Hash (SHA-256)",
		start_new: "Start New Record",
		witnesses_label: "Witnesses",
		generated_label: "Generated",

		verify_title: "Agreement Details",
		verify_description:
			"Review the details of a shared loan agreement.",
		verifying: "Loading...",
		verify_error_title: "Invalid Link",
		verify_error_decode: "This share link could not be read. It may be incomplete or expired.",
		verify_preview_title: "Agreement Summary",
		verify_preview_message:
			"This agreement was shared with you. Review the details below and confirm they match the PDF you received.",
		verify_details: "Agreement Details",
		verify_scan_qr: "Scan the QR code on the PDF or open a share link to view agreement details here.",
		back_to_home: "Back to DaynRecord",

		not_found_title: "Page Not Found",
		not_found_description: "The path you seek has not been written down. Perhaps it was never recorded, or the ink has faded.",
		not_found_verse: "\u201CYou must not be against writing contracts for a fixed period\u2014whether the sum is small or great.\u201D",
		not_found_go_home: "Return Home",
		not_found_go_back: "Go Back",

		error_page_title: "Something Went Wrong",
		error_page_description: "An unexpected error has occurred. Like a misplaced ledger, the record could not be completed. Please try again.",
		error_page_verse: "\u201CBe mindful of Allah, for Allah is the One Who teaches you. And Allah has perfect knowledge of all things.\u201D",
		error_page_try_again: "Try Again",
		error_page_go_home: "Return Home",
		error_page_details: "Error Details",

		offline_title: "No Connection",
		offline_description: "You appear to be offline. DaynRecord works best with an internet connection, but your current work is safe in your browser.",
		offline_verse: "\u201CAnd Allah has perfect knowledge of all things.\u201D",
		offline_retry: "Retry Connection",
		offline_banner: "You are currently offline",
		offline_back_online: "Connection restored",

		pdf_title: "LOAN AGREEMENT RECORD",
		pdf_parties: "PARTIES",
		pdf_creditor: "Creditor:",
		pdf_debtor: "Debtor:",
		pdf_loan_details: "LOAN DETAILS",
		pdf_amount: "Amount:",
		pdf_due_date: "Due Date:",
		pdf_terms: "Terms:",
		pdf_declaration: "DEBTOR DECLARATION",
		pdf_declaration_text:
			"I acknowledge this debt and commit to repayment according to the terms stated above.",
		pdf_name: "Name:",
		pdf_signed: "Signed:",
		pdf_location: "Location:",
		pdf_witness: "WITNESS",
		pdf_witnesses: "WITNESSES",
		pdf_integrity: "DOCUMENT INTEGRITY",
		pdf_integrity_text:
			"This record was generated electronically and has not been stored by the service.",
		pdf_doc_ref: "Document Reference:",
		pdf_hash: "Document Hash:",
		pdf_verify_instructions: "To verify: Upload this document to the verification page.",
		pdf_footer1: "This document records a private agreement between parties.",
		pdf_footer2: "All participants received a copy at generation time.",
		pdf_generated: "Generated:"
	},

	fr: {
		app_name: "DaynRecord",
		app_tagline: "Accords de pr\u00eat transparents",
		bismillah:
			"\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u0631\u062D\u064A\u0645",
		verse:
			"\u00AB \u00D4 vous qui croyez, quand vous contractez une dette \u00e0 \u00e9ch\u00e9ance d\u00e9termin\u00e9e, mettez-la en \u00e9crit. \u00BB",
		verse_ref: "Al-Baqarah 2:282",
		continue_btn: "Continuer",
		back_btn: "Retour",
		confirm_btn: "Confirmer",
		language_label: "Langue",

		hero_title: "Enregistrez votre accord",
		hero_description:
			"Cr\u00e9ez un accord de pr\u00eat transparent et infalsifiable en quelques secondes. Aucun compte requis. Aucune donn\u00e9e stock\u00e9e. Juste clart\u00e9 et confiance.",

		step_agreement: "Accord",
		step_confirmation: "Confirmation",
		step_witnesses: "T\u00e9moins",
		step_complete: "Termin\u00e9",

		agreement_title: "Cr\u00e9er un accord de pr\u00eat",
		agreement_description: "Saisissez les d\u00e9tails de l\u2019accord entre les parties",
		parties_heading: "Parties",
		creditor_label: "Nom complet du cr\u00e9ancier",
		creditor_placeholder: "Qui pr\u00eate ?",
		debtor_label: "Nom complet du d\u00e9biteur",
		debtor_placeholder: "Qui emprunte ?",
		loan_details_heading: "D\u00e9tails du pr\u00eat",
		amount_label: "Montant",
		amount_placeholder: "0,00",
		due_date_label: "Date d\u2019\u00e9ch\u00e9ance",
		terms_label: "Termes et conditions",
		terms_optional: "(facultatif)",
		terms_placeholder:
			"Ex. : Versements mensuels de 500\u20ac, premier paiement le 1er mars. Sans int\u00e9r\u00eat.",

		error_creditor_required: "Le nom du cr\u00e9ancier est requis",
		error_debtor_required: "Le nom du d\u00e9biteur est requis",
		error_amount_required: "Veuillez saisir un montant positif valide",
		error_due_date_required: "La date d\u2019\u00e9ch\u00e9ance est requise",
		error_acknowledge: "Vous devez reconna\u00eetre la dette",
		error_signature: "La signature est requise",
		error_witness_name: "Le nom du t\u00e9moin est requis",
		error_witness_signature: "La signature du t\u00e9moin est requise",
		error_witness_confirmed: "Les t\u00e9moins doivent confirmer leur pr\u00e9sence",

		debtor_title: "Confirmation du d\u00e9biteur",
		debtor_description: "V\u00e9rifiez l\u2019accord et fournissez votre reconnaissance",
		summary_heading: "R\u00e9sum\u00e9 de l\u2019accord",
		creditor: "Cr\u00e9ancier",
		debtor: "D\u00e9biteur",
		amount: "Montant",
		due_date: "Date d\u2019\u00e9ch\u00e9ance",
		terms: "Termes",
		declaration_heading: "D\u00e9claration du d\u00e9biteur",
		declaration_checkbox: "Je reconnais cette dette et m\u2019engage \u00e0 la rembourser",
		declaration_description:
			"En cochant cette case, vous confirmez que les d\u00e9tails ci-dessus sont exacts et vous vous engagez au remboursement selon les termes \u00e9nonc\u00e9s.",
		signature_label: "Signature du d\u00e9biteur",
		location_label: "Lieu",
		location_optional: "(facultatif)",
		location_placeholder: "Ville, Pays",
		draw: "Dessiner",
		type_mode: "Saisir",
		clear: "Effacer",
		type_placeholder: "Saisissez votre nom complet",

		witness_title: "Confirmation des t\u00e9moins",
		witness_description: "Enregistrez la pr\u00e9sence et le t\u00e9moignage des t\u00e9moins",
		witness_count_heading: "Nombre de t\u00e9moins",
		one_witness: "Un t\u00e9moin",
		two_witnesses: "Deux t\u00e9moins",
		witness_label: "T\u00e9moin",
		witness_name_label: "Nom complet",
		witness_name_placeholder: "Nom complet du t\u00e9moin",
		witness_signature_label: "Signature",
		witness_confirmed: "J\u2019ai/Nous avons t\u00e9moign\u00e9 de cet accord",
		witness_confirmed_desc:
			"En cochant cette case, le(s) t\u00e9moin(s) confirment leur pr\u00e9sence lors de cet accord et attestent de son exactitude.",
		generate_contract: "G\u00e9n\u00e9rer le contrat",
		generating: "G\u00e9n\u00e9ration...",

		generated_title: "Contrat g\u00e9n\u00e9r\u00e9",
		generated_description:
			"Votre accord de pr\u00eat a \u00e9t\u00e9 cr\u00e9\u00e9 avec succ\u00e8s",
		document_ref: "R\u00e9f\u00e9rence du document",
		qr_description: "Scannez ce QR code pour voir le r\u00e9sum\u00e9 de l\u2019accord. Partagez-le avec l\u2019autre partie pour qu\u2019elle puisse consulter le document.",
		download_pdf: "T\u00e9l\u00e9charger PDF",
		copy_share: "Copier le lien",
		copied: "Copi\u00e9 !",
		security_heading: "S\u00e9curit\u00e9 & Confidentialit\u00e9",
		security_hash:
			"Hash du document (SHA-256) int\u00e9gr\u00e9 pour d\u00e9tecter toute alt\u00e9ration",
		security_no_storage:
			"Aucune donn\u00e9e stock\u00e9e sur un serveur \u2014 tout reste dans votre navigateur",
		security_verify:
			"N\u2019importe qui peut v\u00e9rifier l\u2019authenticit\u00e9 en comparant les hashs",
		security_copies: "Toutes les parties re\u00e7oivent des copies identiques de l\u2019accord",
		document_hash: "Hash du document (SHA-256)",
		start_new: "Nouvel enregistrement",
		witnesses_label: "T\u00e9moins",
		generated_label: "G\u00e9n\u00e9r\u00e9",

		verify_title: "D\u00e9tails de l\u2019accord",
		verify_description:
			"Consultez les d\u00e9tails d\u2019un accord de pr\u00eat partag\u00e9.",
		verifying: "Chargement...",
		verify_error_title: "Lien invalide",
		verify_error_decode: "Ce lien de partage n\u2019a pas pu \u00eatre lu. Il est peut-\u00eatre incomplet.",
		verify_preview_title: "R\u00e9sum\u00e9 de l\u2019accord",
		verify_preview_message:
			"Cet accord vous a \u00e9t\u00e9 partag\u00e9. V\u00e9rifiez les d\u00e9tails ci-dessous et confirmez qu\u2019ils correspondent au PDF que vous avez re\u00e7u.",
		verify_details: "D\u00e9tails de l\u2019accord",
		verify_scan_qr: "Scannez le QR code sur le PDF ou ouvrez un lien de partage pour voir les d\u00e9tails ici.",
		back_to_home: "Retour \u00e0 DaynRecord",

		not_found_title: "Page introuvable",
		not_found_description: "Le chemin que vous cherchez n\u2019a pas \u00e9t\u00e9 inscrit. Peut-\u00eatre n\u2019a-t-il jamais \u00e9t\u00e9 enregistr\u00e9, ou l\u2019encre s\u2019est estompe\u0301e.",
		not_found_verse: "\u00AB Ne d\u00e9daignez pas d\u2019\u00e9crire la dette, petite ou grande, avec son \u00e9ch\u00e9ance. \u00BB",
		not_found_go_home: "Retour \u00e0 l\u2019accueil",
		not_found_go_back: "Revenir en arri\u00e8re",

		error_page_title: "Une erreur est survenue",
		error_page_description: "Une erreur inattendue s\u2019est produite. Comme un registre \u00e9gar\u00e9, l\u2019enregistrement n\u2019a pas pu \u00eatre compl\u00e9t\u00e9. Veuillez r\u00e9essayer.",
		error_page_verse: "\u00AB Craignez Allah, car c\u2019est Allah qui vous enseigne. Et Allah est Omniscient. \u00BB",
		error_page_try_again: "R\u00e9essayer",
		error_page_go_home: "Retour \u00e0 l\u2019accueil",
		error_page_details: "D\u00e9tails de l\u2019erreur",

		offline_title: "Pas de connexion",
		offline_description: "Vous semblez \u00eatre hors ligne. DaynRecord fonctionne mieux avec une connexion Internet, mais vos donn\u00e9es actuelles sont en s\u00e9curit\u00e9 dans votre navigateur.",
		offline_verse: "\u00AB Et Allah est Omniscient. \u00BB",
		offline_retry: "R\u00e9essayer la connexion",
		offline_banner: "Vous \u00eates actuellement hors ligne",
		offline_back_online: "Connexion r\u00e9tablie",

		pdf_title: "CONTRAT DE PR\u00caT",
		pdf_parties: "PARTIES",
		pdf_creditor: "Cr\u00e9ancier :",
		pdf_debtor: "D\u00e9biteur :",
		pdf_loan_details: "D\u00c9TAILS DU PR\u00caT",
		pdf_amount: "Montant :",
		pdf_due_date: "Date d\u2019\u00e9ch\u00e9ance :",
		pdf_terms: "Termes :",
		pdf_declaration: "D\u00c9CLARATION DU D\u00c9BITEUR",
		pdf_declaration_text:
			"Je reconnais cette dette et m\u2019engage \u00e0 rembourser selon les termes \u00e9nonc\u00e9s ci-dessus.",
		pdf_name: "Nom :",
		pdf_signed: "Sign\u00e9 :",
		pdf_location: "Lieu :",
		pdf_witness: "T\u00c9MOIN",
		pdf_witnesses: "T\u00c9MOINS",
		pdf_integrity: "INT\u00c9GRIT\u00c9 DU DOCUMENT",
		pdf_integrity_text:
			"Ce document a \u00e9t\u00e9 g\u00e9n\u00e9r\u00e9 \u00e9lectroniquement et n\u2019a pas \u00e9t\u00e9 stock\u00e9 par le service.",
		pdf_doc_ref: "R\u00e9f\u00e9rence du document :",
		pdf_hash: "Hash du document :",
		pdf_verify_instructions:
			"Pour v\u00e9rifier : T\u00e9l\u00e9versez ce document sur la page de v\u00e9rification.",
		pdf_footer1: "Ce document enregistre un accord priv\u00e9 entre les parties.",
		pdf_footer2: "Toutes les parties ont re\u00e7u une copie lors de la g\u00e9n\u00e9ration.",
		pdf_generated: "G\u00e9n\u00e9r\u00e9 :"
	},

	ar: {
		app_name: "\u062F\u064E\u064A\u0652\u0646 \u0631\u064A\u0643\u0648\u0631\u062F",
		app_tagline:
			"\u0627\u062A\u0641\u0627\u0642\u064A\u0627\u062A \u0642\u0631\u0636 \u0634\u0641\u0627\u0641\u0629",
		bismillah:
			"\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u0631\u062D\u064A\u0645",
		verse:
			"\u00AB \u064A\u0627 \u0623\u064E\u064A\u064F\u0651\u0647\u064E\u0627 \u0627\u0644\u064E\u0651\u0630\u064A\u0646\u064E \u0622\u0645\u064E\u0646\u064F\u0648\u0627 \u0625\u0650\u0630\u064E\u0627 \u062A\u064E\u062F\u064E\u0627\u064A\u064E\u0646\u062A\u064F\u0645 \u0628\u0650\u062F\u064E\u064A\u0652\u0646\u064D \u0625\u0650\u0644\u0649 \u0623\u064E\u062C\u064E\u0644\u064D \u0645\u064F\u0633\u064E\u0645\u064B\u0651\u0649 \u0641\u064E\u0627\u0643\u0652\u062A\u064F\u0628\u064F\u0648\u0647\u064F \u00BB",
		verse_ref: "\u0627\u0644\u0628\u0642\u0631\u0629 \u0662:\u0662\u0668\u0662",
		continue_btn: "\u0645\u062A\u0627\u0628\u0639\u0629",
		back_btn: "\u0631\u062C\u0648\u0639",
		confirm_btn: "\u062A\u0623\u0643\u064A\u062F",
		language_label: "\u0627\u0644\u0644\u063A\u0629",

		hero_title: "\u0633\u062C\u0651\u0644 \u0627\u062A\u0641\u0627\u0642\u064A\u062A\u0643",
		hero_description:
			"\u0623\u0646\u0634\u0626 \u0633\u062C\u0644 \u0642\u0631\u0636 \u0634\u0641\u0627\u0641 \u0648\u063A\u064A\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u0644\u0627\u0639\u0628 \u0641\u064A \u062B\u0648\u0627\u0646\u064D. \u0628\u062F\u0648\u0646 \u062D\u0633\u0627\u0628\u0627\u062A. \u0628\u062F\u0648\u0646 \u062A\u062E\u0632\u064A\u0646. \u0641\u0642\u0637 \u0648\u0636\u0648\u062D \u0648\u062B\u0642\u0629 \u0628\u064A\u0646 \u0627\u0644\u0623\u0637\u0631\u0627\u0641.",

		step_agreement: "\u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0629",
		step_confirmation: "\u0627\u0644\u062A\u0623\u0643\u064A\u062F",
		step_witnesses: "\u0627\u0644\u0634\u0647\u0648\u062F",
		step_complete: "\u0645\u0643\u062A\u0645\u0644",

		agreement_title: "\u0625\u0646\u0634\u0627\u0621 \u0633\u062C\u0644 \u0642\u0631\u0636",
		agreement_description:
			"\u0623\u062F\u062E\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0629 \u0628\u064A\u0646 \u0627\u0644\u0623\u0637\u0631\u0627\u0641",
		parties_heading: "\u0627\u0644\u0623\u0637\u0631\u0627\u0641",
		creditor_label:
			"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0644\u062F\u0627\u0626\u0646",
		creditor_placeholder: "\u0645\u0646 \u064A\u064F\u0642\u0631\u0650\u0636\u061F",
		debtor_label:
			"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0644\u0645\u062F\u064A\u0646",
		debtor_placeholder: "\u0645\u0646 \u064A\u0642\u062A\u0631\u0636\u061F",
		loan_details_heading: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0642\u0631\u0636",
		amount_label: "\u0627\u0644\u0645\u0628\u0644\u063A",
		amount_placeholder: "0.00",
		due_date_label:
			"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642",
		terms_label:
			"\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645",
		terms_optional: "(\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
		terms_placeholder:
			"\u0645\u062B\u0627\u0644: \u0623\u0642\u0633\u0627\u0637 \u0634\u0647\u0631\u064A\u0629 \u0628\u0642\u064A\u0645\u0629 500 \u062F\u062C\u060C \u0623\u0648\u0644 \u062F\u0641\u0639\u0629 \u0641\u064A 1 \u0645\u0627\u0631\u0633. \u0628\u062F\u0648\u0646 \u0641\u0648\u0627\u0626\u062F.",

		error_creditor_required:
			"\u0627\u0633\u0645 \u0627\u0644\u062F\u0627\u0626\u0646 \u0645\u0637\u0644\u0648\u0628",
		error_debtor_required:
			"\u0627\u0633\u0645 \u0627\u0644\u0645\u062F\u064A\u0646 \u0645\u0637\u0644\u0648\u0628",
		error_amount_required:
			"\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0645\u0628\u0644\u063A \u0635\u062D\u064A\u062D",
		error_due_date_required:
			"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642 \u0645\u0637\u0644\u0648\u0628",
		error_acknowledge:
			"\u064A\u062C\u0628 \u0627\u0644\u0625\u0642\u0631\u0627\u0631 \u0628\u0627\u0644\u062F\u064A\u0646",
		error_signature: "\u0627\u0644\u062A\u0648\u0642\u064A\u0639 \u0645\u0637\u0644\u0648\u0628",
		error_witness_name:
			"\u0627\u0633\u0645 \u0627\u0644\u0634\u0627\u0647\u062F \u0645\u0637\u0644\u0648\u0628",
		error_witness_signature:
			"\u062A\u0648\u0642\u064A\u0639 \u0627\u0644\u0634\u0627\u0647\u062F \u0645\u0637\u0644\u0648\u0628",
		error_witness_confirmed:
			"\u064A\u062C\u0628 \u0639\u0644\u0649 \u0627\u0644\u0634\u0647\u0648\u062F \u062A\u0623\u0643\u064A\u062F \u062D\u0636\u0648\u0631\u0647\u0645",

		debtor_title: "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0645\u062F\u064A\u0646",
		debtor_description:
			"\u0631\u0627\u062C\u0639 \u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0629 \u0648\u0642\u062F\u0651\u0645 \u0625\u0642\u0631\u0627\u0631\u0643",
		summary_heading:
			"\u0645\u0644\u062E\u0635 \u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0629",
		creditor: "\u0627\u0644\u062F\u0627\u0626\u0646",
		debtor: "\u0627\u0644\u0645\u062F\u064A\u0646",
		amount: "\u0627\u0644\u0645\u0628\u0644\u063A",
		due_date:
			"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642",
		terms: "\u0627\u0644\u0634\u0631\u0648\u0637",
		declaration_heading: "\u0625\u0642\u0631\u0627\u0631 \u0627\u0644\u0645\u062F\u064A\u0646",
		declaration_checkbox:
			"\u0623\u064F\u0642\u0631\u0651 \u0628\u0647\u0630\u0627 \u0627\u0644\u062F\u064E\u0651\u064A\u0652\u0646 \u0648\u0623\u0644\u062A\u0632\u0645 \u0628\u0633\u062F\u0627\u062F\u0647",
		declaration_description:
			"\u0628\u062A\u062D\u062F\u064A\u062F \u0647\u0630\u0627 \u0627\u0644\u0645\u0631\u0628\u0639\u060C \u062A\u0624\u0643\u062F \u0623\u0646 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0639\u0644\u0627\u0647 \u062F\u0642\u064A\u0642\u0629 \u0648\u062A\u0644\u062A\u0632\u0645 \u0628\u0627\u0644\u0633\u062F\u0627\u062F \u0648\u0641\u0642 \u0627\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0645\u0630\u0643\u0648\u0631\u0629.",
		signature_label: "\u062A\u0648\u0642\u064A\u0639 \u0627\u0644\u0645\u062F\u064A\u0646",
		location_label: "\u0627\u0644\u0645\u0648\u0642\u0639",
		location_optional: "(\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
		location_placeholder:
			"\u0627\u0644\u0645\u062F\u064A\u0646\u0629\u060C \u0627\u0644\u0628\u0644\u062F",
		draw: "\u0631\u0633\u0645",
		type_mode: "\u0643\u062A\u0627\u0628\u0629",
		clear: "\u0645\u0633\u062D",
		type_placeholder:
			"\u0627\u0643\u062A\u0628 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644",

		witness_title: "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0634\u0647\u0648\u062F",
		witness_description:
			"\u0633\u062C\u0651\u0644 \u062D\u0636\u0648\u0631 \u0648\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u0634\u0647\u0648\u062F",
		witness_count_heading: "\u0639\u062F\u062F \u0627\u0644\u0634\u0647\u0648\u062F",
		one_witness: "\u0634\u0627\u0647\u062F \u0648\u0627\u062D\u062F",
		two_witnesses: "\u0634\u0627\u0647\u062F\u0627\u0646",
		witness_label: "\u0627\u0644\u0634\u0627\u0647\u062F",
		witness_name_label: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
		witness_name_placeholder:
			"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0644\u0634\u0627\u0647\u062F",
		witness_signature_label: "\u0627\u0644\u062A\u0648\u0642\u064A\u0639",
		witness_confirmed:
			"\u0623\u0634\u0647\u062F / \u0646\u0634\u0647\u062F \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0627\u062A\u0641\u0627\u0642",
		witness_confirmed_desc:
			"\u0628\u062A\u062D\u062F\u064A\u062F \u0647\u0630\u0627 \u0627\u0644\u0645\u0631\u0628\u0639\u060C \u064A\u0624\u0643\u062F \u0627\u0644\u0634\u0627\u0647\u062F(\u0648\u0646) \u062D\u0636\u0648\u0631\u0647\u0645 \u0623\u062B\u0646\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0627\u062A\u0641\u0627\u0642 \u0648\u064A\u0634\u0647\u062F\u0648\u0646 \u0639\u0644\u0649 \u062F\u0642\u062A\u0647.",
		generate_contract: "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0639\u0642\u062F",
		generating: "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0646\u0634\u0627\u0621...",

		generated_title: "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0639\u0642\u062F",
		generated_description:
			"\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u062A\u0641\u0627\u0642\u064A\u0629 \u0627\u0644\u0642\u0631\u0636 \u0628\u0646\u062C\u0627\u062D",
		document_ref: "\u0645\u0631\u062C\u0639 \u0627\u0644\u0645\u0633\u062A\u0646\u062F",
		qr_description:
			"\u0627\u0645\u0633\u062D \u0631\u0645\u0632 QR \u0644\u0639\u0631\u0636 \u0645\u0644\u062E\u0635 \u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0629. \u0634\u0627\u0631\u0643\u0647 \u0645\u0639 \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u0622\u062E\u0631 \u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0633\u062C\u0644.",
		download_pdf: "\u062A\u062D\u0645\u064A\u0644 PDF",
		copy_share:
			"\u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629",
		copied: "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E!",
		security_heading:
			"\u0627\u0644\u0623\u0645\u0627\u0646 \u0648\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629",
		security_hash:
			"\u0647\u0627\u0634 \u0627\u0644\u0645\u0633\u062A\u0646\u062F (SHA-256) \u0645\u0636\u0645\u0651\u0646 \u0644\u0643\u0634\u0641 \u0623\u064A \u062A\u0644\u0627\u0639\u0628",
		security_no_storage:
			"\u0644\u0627 \u062A\u064F\u062E\u0632\u0651\u0646 \u0623\u064A \u0628\u064A\u0627\u0646\u0627\u062A \u0639\u0644\u0649 \u0623\u064A \u062E\u0627\u062F\u0645 \u2014 \u0643\u0644 \u0634\u064A\u0621 \u064A\u0628\u0642\u0649 \u0641\u064A \u0645\u062A\u0635\u0641\u062D\u0643",
		security_verify:
			"\u064A\u0645\u0643\u0646 \u0644\u0623\u064A \u0634\u062E\u0635 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u062D\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F \u0628\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0647\u0627\u0634\u0627\u062A",
		security_copies:
			"\u064A\u062D\u0635\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0637\u0631\u0627\u0641 \u0639\u0644\u0649 \u0646\u0633\u062E \u0645\u062A\u0637\u0627\u0628\u0642\u0629 \u0645\u0646 \u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0629",
		document_hash: "\u0647\u0627\u0634 \u0627\u0644\u0645\u0633\u062A\u0646\u062F (SHA-256)",
		start_new: "\u0633\u062C\u0644 \u062C\u062F\u064A\u062F",
		witnesses_label: "\u0627\u0644\u0634\u0647\u0648\u062F",
		generated_label: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u0634\u0627\u0621",

		verify_title:
			"\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0629",
		verify_description:
			"\u0631\u0627\u062C\u0639 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u062A\u0641\u0627\u0642\u064A\u0629 \u0627\u0644\u0642\u0631\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629.",
		verifying: "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...",
		verify_error_title: "\u0631\u0627\u0628\u0637 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D",
		verify_error_decode:
			"\u062A\u0639\u0630\u0631 \u0642\u0631\u0627\u0621\u0629 \u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629. \u0642\u062F \u064A\u0643\u0648\u0646 \u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644.",
		verify_preview_title:
			"\u0645\u0644\u062E\u0635 \u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0629",
		verify_preview_message:
			"\u062A\u0645\u062A \u0645\u0634\u0627\u0631\u0643\u0629 \u0647\u0630\u0647 \u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0629 \u0645\u0639\u0643. \u0631\u0627\u062C\u0639 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u062F\u0646\u0627\u0647 \u0648\u062A\u0623\u0643\u062F \u0645\u0646 \u062A\u0637\u0627\u0628\u0642\u0647\u0627 \u0645\u0639 PDF \u0627\u0644\u0630\u064A \u0627\u0633\u062A\u0644\u0645\u062A\u0647.",
		verify_details:
			"\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0629",
		verify_scan_qr: "\u0627\u0645\u0633\u062D \u0631\u0645\u0632 QR \u0639\u0644\u0649 PDF \u0623\u0648 \u0627\u0641\u062A\u062D \u0631\u0627\u0628\u0637 \u0645\u0634\u0627\u0631\u0643\u0629 \u0644\u0639\u0631\u0636 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0627\u062A\u0641\u0627\u0642\u064A\u0629 \u0647\u0646\u0627.",
		back_to_home: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 DaynRecord",

		not_found_title: "\u0627\u0644\u0635\u0641\u062D\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629",
		not_found_description: "\u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0630\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0647 \u0644\u0645 \u064A\u064F\u0643\u062A\u0628. \u0631\u0628\u0645\u0627 \u0644\u0645 \u064A\u064F\u0633\u062C\u0651\u0644 \u0642\u0637\u060C \u0623\u0648 \u0623\u0646 \u0627\u0644\u062D\u0628\u0631 \u0642\u062F \u062A\u0644\u0627\u0634\u0649.",
		not_found_verse: "\u00AB \u0648\u0644\u0627 \u062A\u0633\u0623\u0645\u0648\u0627 \u0623\u0646 \u062A\u0643\u062A\u0628\u0648\u0647 \u0635\u063A\u064A\u0631\u064B\u0627 \u0623\u0648 \u0643\u0628\u064A\u0631\u064B\u0627 \u0625\u0644\u0649 \u0623\u062C\u0644\u0647 \u00BB",
		not_found_go_home: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
		not_found_go_back: "\u0631\u062C\u0648\u0639",

		error_page_title: "\u062D\u062F\u062B \u062E\u0637\u0623",
		error_page_description: "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639. \u0643\u0633\u062C\u0644\u0651 \u0636\u0627\u0626\u0639\u060C \u0644\u0645 \u064A\u062A\u0645\u0643\u0651\u0646 \u0645\u0646 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0629. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.",
		error_page_verse: "\u00AB \u0648\u0627\u062A\u0642\u0648\u0627 \u0627\u0644\u0644\u0647 \u0648\u064A\u0639\u0644\u0645\u0643\u0645 \u0627\u0644\u0644\u0647 \u0648\u0627\u0644\u0644\u0647 \u0628\u0643\u0644 \u0634\u064A\u0621 \u0639\u0644\u064A\u0645 \u00BB",
		error_page_try_again: "\u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629",
		error_page_go_home: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
		error_page_details: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062E\u0637\u0623",

		offline_title: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u062A\u0635\u0627\u0644",
		offline_description: "\u064A\u0628\u062F\u0648 \u0623\u0646\u0643 \u063A\u064A\u0631 \u0645\u062A\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A. \u064A\u0639\u0645\u0644 DaynRecord \u0628\u0634\u0643\u0644 \u0623\u0641\u0636\u0644 \u0645\u0639 \u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A\u060C \u0644\u0643\u0646 \u0628\u064A\u0627\u0646\u0627\u062A\u0643 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0622\u0645\u0646\u0629 \u0641\u064A \u0645\u062A\u0635\u0641\u062D\u0643.",
		offline_verse: "\u00AB \u0648\u0627\u0644\u0644\u0647 \u0628\u0643\u0644 \u0634\u064A\u0621 \u0639\u0644\u064A\u0645 \u00BB",
		offline_retry: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u062A\u0635\u0627\u0644",
		offline_banner: "\u0623\u0646\u062A \u063A\u064A\u0631 \u0645\u062A\u0635\u0644 \u062D\u0627\u0644\u064A\u064B\u0627",
		offline_back_online: "\u062A\u0645 \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u062A\u0635\u0627\u0644",

		pdf_title:
			"\u0633\u062C\u0644 \u0627\u062A\u0641\u0627\u0642\u064A\u0629 \u0627\u0644\u0642\u0631\u0636",
		pdf_parties: "\u0627\u0644\u0623\u0637\u0631\u0627\u0641",
		pdf_creditor: "\u0627\u0644\u062F\u0627\u0626\u0646:",
		pdf_debtor: "\u0627\u0644\u0645\u062F\u064A\u0646:",
		pdf_loan_details: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0642\u0631\u0636",
		pdf_amount: "\u0627\u0644\u0645\u0628\u0644\u063A:",
		pdf_due_date:
			"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642:",
		pdf_terms: "\u0627\u0644\u0634\u0631\u0648\u0637:",
		pdf_declaration: "\u0625\u0642\u0631\u0627\u0631 \u0627\u0644\u0645\u062F\u064A\u0646",
		pdf_declaration_text:
			"\u0623\u064F\u0642\u0631\u0651 \u0628\u0647\u0630\u0627 \u0627\u0644\u062F\u064E\u0651\u064A\u0652\u0646 \u0648\u0623\u0644\u062A\u0632\u0645 \u0628\u0627\u0644\u0633\u062F\u0627\u062F \u0648\u0641\u0642 \u0627\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0645\u0630\u0643\u0648\u0631\u0629 \u0623\u0639\u0644\u0627\u0647.",
		pdf_name: "\u0627\u0644\u0627\u0633\u0645:",
		pdf_signed: "\u0627\u0644\u062A\u0648\u0642\u064A\u0639:",
		pdf_location: "\u0627\u0644\u0645\u0648\u0642\u0639:",
		pdf_witness: "\u0627\u0644\u0634\u0627\u0647\u062F",
		pdf_witnesses: "\u0627\u0644\u0634\u0647\u0648\u062F",
		pdf_integrity: "\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F",
		pdf_integrity_text:
			"\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0633\u062C\u0644 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u064B\u0627 \u0648\u0644\u0645 \u064A\u062A\u0645 \u062A\u062E\u0632\u064A\u0646\u0647 \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u062E\u062F\u0645\u0629.",
		pdf_doc_ref: "\u0645\u0631\u062C\u0639 \u0627\u0644\u0645\u0633\u062A\u0646\u062F:",
		pdf_hash: "\u0647\u0627\u0634 \u0627\u0644\u0645\u0633\u062A\u0646\u062F:",
		pdf_verify_instructions:
			"\u0644\u0644\u062A\u062D\u0642\u0642: \u0627\u0631\u0641\u0639 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062A\u0646\u062F \u0639\u0644\u0649 \u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u062D\u0642\u0642.",
		pdf_footer1:
			"\u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062A\u0646\u062F \u064A\u0633\u062C\u0644 \u0627\u062A\u0641\u0627\u0642\u064B\u0627 \u062E\u0627\u0635\u064B\u0627 \u0628\u064A\u0646 \u0627\u0644\u0623\u0637\u0631\u0627\u0641.",
		pdf_footer2:
			"\u062D\u0635\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0639\u0644\u0649 \u0646\u0633\u062E\u0629 \u0639\u0646\u062F \u0627\u0644\u0625\u0646\u0634\u0627\u0621.",
		pdf_generated: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u0634\u0627\u0621:"
	}
};
