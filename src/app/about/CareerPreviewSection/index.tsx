"use client";

import CareerCard from "./CareerCard";
import type { CareerCardProps } from "./CareerCard/types";
import careerData from "./careerData.json";

const CAREER_DATA = careerData as CareerCardProps[];

export default function CareerPreviewSection() {
  return (
    <section className="w-full bg-secondary px-4 py-16">
      {/* <h2>career preview section</h2> */}
      <div className="inline-grid w-full grid-flow-row grid-cols-2  gap-8 px-[80px] lg:grid-cols-1 lg:px-0">
        {CAREER_DATA.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
        {CAREER_DATA.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </section>
  );
}
