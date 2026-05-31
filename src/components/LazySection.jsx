"use client"

import dynamic from "next/dynamic"

const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  ssr: false,
  loading: () => <div className="h-64" />,
})

const QuoteSection = dynamic(() => import("@/components/QuoteSection"), {
  ssr: false,
  loading: () => <div className="h-32" />,
})

export default function LazySection() {
  return (
    <>
      <TestimonialsSection />
      <QuoteSection />
    </>
  )
}