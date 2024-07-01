"use client";
import { useTheme } from "next-themes";
import CareerCard from "./CareerCard";
import type { CareerCardProps } from "./CareerCard/types";
import careerData from "./careerData.json";

const CAREER_DATA = careerData as CareerCardProps[];

export default function CareerPreviewSection() {
  return (
    <section className="h-2/3 w-full bg-secondary p-4">
      <h2>career preview section</h2>
      {CAREER_DATA.map((career, index) => (
        <CareerCard key={index} {...career} />
      ))}
    </section>
  );
}
