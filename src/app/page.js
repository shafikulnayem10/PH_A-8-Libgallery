export const dynamic = 'force-dynamic';

import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import LazySection from "@/components/LazySection";

export default function Homepage() {
  return (
    <>
      <Banner />
      <FeaturedBooks />
      <LazySection />
    </>
  );
}
