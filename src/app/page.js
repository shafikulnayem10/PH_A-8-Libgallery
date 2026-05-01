export const dynamic = 'force-dynamic';
import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Homepage() {
  return (
  <>
    <Banner></Banner>
    <FeaturedBooks></FeaturedBooks>
    <TestimonialsSection></TestimonialsSection>
    <QuoteSection></QuoteSection>
  </>
  );
}
