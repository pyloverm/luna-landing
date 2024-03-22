import type { LandingPageData } from "@/config/landing.interface";
import { default as landingDatafr } from "@/data/landingfr.json";

import landingData from "@/data/landing.json";
import landingDataPt from "@/data/landingpt.json";

export const getLandingData = async ({
  lang,
}: {
  lang: string;
}): Promise<LandingPageData> => {
  console.log(lang);
  if (lang === "fr") {
    const data: LandingPageData = landingDatafr;
    return data;
  }
  if (lang === "en") {
    const data: LandingPageData = landingData;
    return data;
  }

  if (lang === "pt") {
    const data: LandingPageData = landingDataPt;
    return data;
  }
  const data: LandingPageData = landingData;

  return data;
};
