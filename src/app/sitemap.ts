import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://daynrecord.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: SITE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1.0,
			alternates: {
				languages: {
					en: SITE_URL,
					fr: `${SITE_URL}?lang=fr`,
					ar: `${SITE_URL}?lang=ar`
				}
			}
		},
		{
			url: `${SITE_URL}/verify`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
			alternates: {
				languages: {
					en: `${SITE_URL}/verify`,
					fr: `${SITE_URL}/verify?lang=fr`,
					ar: `${SITE_URL}/verify?lang=ar`
				}
			}
		}
	];
}
