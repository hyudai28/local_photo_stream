"use client";

import "@freee_jp/vibes/css";
import ResultMessage from "./ResuletMessage";
import AnswerInput from "./AnswerInput";
import QuestionDisplay from "./QuestionDisplay";

export default function Page() {
  return (
    <div>
      <QuestionDisplay />
      <AnswerInput />
      <ResultMessage />
    </div>
  );
}
