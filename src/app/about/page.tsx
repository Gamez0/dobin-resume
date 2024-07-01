import CareerPreviewSection from "./CareerPreviewSection";

export default function AboutPage() {
  return (
    <div className="size-full">
      <section className="h-2/3 ?">
        <h2>나는 이런 개발자입니다. 자기 소개</h2>
      </section>
      <section className="h-2/3">
        <h2>skill set preview section</h2>
      </section>
      <CareerPreviewSection />
    </div>
  );
}
