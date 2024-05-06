"use client";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export interface ThreeDCardProps {
  titre: string;
  description: string;
  image: string;
  prix: string;
  cta: string;
}

export function ThreeDCardDemo({
  titre,
  description,
  image,
  prix,
  cta,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {titre}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border-[1px] border-black"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={"p"}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {prix}
          </CardItem>
          <CardItem
            translateZ={20}
            as={"a"}
            href="mailto:vctferreira.pro@gmail.com"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {cta}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
