"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import Image from "next/image";
import type { CareerCardProps } from "./types";

export default function CareerCard({
  companyUrl,
  termOfEmployment,
  jobTitle,
  companyName,
  defaultLogoImageSrc,
  lightModeLogoImageSrc,
}: CareerCardProps) {
  const { theme, systemTheme } = useTheme();

  const getLogoSrc = () => {
    if (theme === "dark") {
      return defaultLogoImageSrc;
    }
    if (theme === "light") {
      return lightModeLogoImageSrc || defaultLogoImageSrc;
    }
    if (systemTheme === "dark") {
      return defaultLogoImageSrc;
    }
    return lightModeLogoImageSrc || defaultLogoImageSrc;
  };

  const logoSrc = getLogoSrc();

  return (
    // want to center the Card component when the parent is grid
    <Card className="w-full max-w-[500px] content-center items-center justify-center odd:place-self-end even:place-self-start lg:max-w-none">
      <a href={companyUrl} target="_blank">
        <CardHeader>
          <CardDescription className="leading-[36px]">{termOfEmployment}</CardDescription>
          <CardTitle className="leading-[36px]">{jobTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-medium leading-[36px] tracking-tight ">{companyName}</p>
        </CardContent>
        <CardFooter className="h-[90px]">
          <Image src={logoSrc} width={60} height={60} alt="company logo" />
        </CardFooter>
      </a>
    </Card>
  );
}
