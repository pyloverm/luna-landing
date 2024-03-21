import type { LandingPageData } from "@/config/landing.interface";
import landingData from "@/data/landing.json";
import landingDatafr from "@/data/landingfr.json";

export const getLandingData = async ({
  lang,
}: {
  lang: string;
}): Promise<LandingPageData> => {
  if (lang === "fr") {
    const data: LandingPageData = landingDatafr;
    return data;
  }
  if (lang === "en") {
    const data: LandingPageData = landingData;
    return data;
  }
  const data: LandingPageData = landingData;

  return data;
};
