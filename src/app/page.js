import dynamic from "next/dynamic";
import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";

export const fetchCache = 'force-no-store'; 

const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  ssr: false,
  loading: () => <div className="h-64" />,
});

const QuoteSection = dynamic(() => import("@/components/QuoteSection"), {
  ssr: false,
  loading: () => <div className="h-32" />,
});

export default function Homepage() {
  return (
    <>
      <Banner />
      <FeaturedBooks />
      <TestimonialsSection />
      <QuoteSection />
    </>
  );
}
