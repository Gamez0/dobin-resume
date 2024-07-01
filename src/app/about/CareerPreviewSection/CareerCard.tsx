import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface CareerCardProps {
  companyUrl: string;
  duration: string;
  jobTitle: string;
  companyName: string;
  logoImageSrc: string;
}

export default function CareerCard({
  companyUrl,
  duration,
  jobTitle,
  companyName,
  logoImageSrc,
}: CareerCardProps) {
  return (
    <Card className="w-[500px]">
      <a href={companyUrl} target="_blank">
        <CardHeader>
          <CardDescription className="leading-[36px]">{duration}</CardDescription>
          <CardTitle className="leading-[36px]">{jobTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-medium leading-[36px] tracking-tight ">{companyName}</p>
        </CardContent>
        <CardFooter className="h-[90px]">
          <Image src={logoImageSrc} width={60} height={60} alt="company logo" />
        </CardFooter>
      </a>
    </Card>
  );
}
