import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Homepage() {
  return (
  <>
    <Banner></Banner>
    <FeaturedBooks></FeaturedBooks>
  </>
  );
}
