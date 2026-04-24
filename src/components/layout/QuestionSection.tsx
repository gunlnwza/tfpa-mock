import { useState } from "react";

import { Section } from "./Section";
import { RenderBlocks } from "../primitive/renderer/Blocks";

import type { QuestionAnswer } from "../../data/FAQ";


export function QuestionTab({ qa }: { qa: QuestionAnswer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden my-3">
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
      >
        <div className="pr-4">
          <RenderBlocks blocks={qa.question} />
        </div>

        {/* simple chevron */}
        <span
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* Answer */}
      {open && (
        <div className="px-4 py-3 bg-white border-t border-gray-200">
          <RenderBlocks blocks={qa.answer} />
        </div>
      )}
    </div>
  );
}


export function QuestionSection({ title, section }: { title: string; section: QuestionAnswer[] }) {
  return (
    <Section title={ title }>
      {section.map((qa, index) => (
        <QuestionTab key={index} qa={qa} />
      ))}
    </Section>
  );
}
