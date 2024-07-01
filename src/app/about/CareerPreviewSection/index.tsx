import CareerCard from "./CareerCard";
import type { CareerCardProps } from "./CareerCard/types";
import careerData from "./careerData.json";

const CAREER_DATA = careerData as CareerCardProps[];

export default function CareerPreviewSection() {
  return (
    <section className="h-2/3">
      <h2>career preview section</h2>
      {CAREER_DATA.map((career, index) => (
        <CareerCard key={index} {...career} />
      ))}
    </section>
  );
}
