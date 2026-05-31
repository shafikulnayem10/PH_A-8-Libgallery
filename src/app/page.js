export const dynamic = 'force-dynamic';

import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import nextDynamic from "next/dynamic";

const TestimonialsSection = nextDynamic(() => import("@/components/TestimonialsSection"), {
  ssr: false,
  loading: () => <div className="h-64" />,
});

const QuoteSection = nextDynamic(() => import("@/components/QuoteSection"), {
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
