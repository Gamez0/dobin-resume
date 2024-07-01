import CareerCard from "./CareerCard";

const CAREER_LIST = [
  {
    companyName: "Pozalabs Inc.",
    companyUrl: "https://pozalabs.com",
    duration: "Since August 2022",
    jobTitle: "Front-end Developer",
    logoImageSrc: "/pozalabs_logo.png",
  },
  {
    companyName: "Tmax A&C Inc.",
    companyUrl: "https://www.tmax.co.kr/",
    duration: "Since August 2022",
    jobTitle: "Front-end Developer",
    logoImageSrc: "/tmax_logo.webp",
  },
];

export default function CareerPreviewSection() {
  return (
    <section className="h-2/3">
      <h2>career preview section</h2>
      {CAREER_LIST.map((career, index) => (
        <CareerCard key={index} {...career} />
      ))}
    </section>
  );
}
