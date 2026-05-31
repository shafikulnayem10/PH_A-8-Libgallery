"use client"

import dynamic from "next/dynamic"

const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const QuoteSection = dynamic(() => import("@/components/QuoteSection"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function LazySection() {
  return (
    <>
      <TestimonialsSection />
      <QuoteSection />
    </>
  )
}