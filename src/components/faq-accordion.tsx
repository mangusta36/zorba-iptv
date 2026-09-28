"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export function FaqAccordion({ items }: { items: Array<{ question: string; answer: string }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">
    {items.map((item, index) => <div className="faq-item" key={item.question}>
      <h3><button type="button" aria-expanded={open === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpen(open === index ? null : index)}><span>{item.question}</span><Plus className={open === index ? "faq-plus is-open" : "faq-plus"} aria-hidden="true" /></button></h3>
      <div id={`faq-answer-${index}`} hidden={open !== index}><p>{item.answer}</p></div>
    </div>)}
  </div>;
}
