"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { trackFaqExpandQuestion } from "@/lib/analytics"

export type FaqItem = { id: string; question: string; answer: React.ReactNode }

type FaqAccordionProps = {
  items: FaqItem[]
  type?: "single" | "multiple"
}

export function FaqAccordion({ items, type = "single" }: FaqAccordionProps) {
  const handleValueChange = (value: string) => {
    if (value) trackFaqExpandQuestion(value)
  }

  return (
    <Accordion
      type={type}
      className="w-full"
      onValueChange={handleValueChange}
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="text-left text-base font-medium py-4">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
