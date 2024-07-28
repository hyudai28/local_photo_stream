"use client";

import "@freee_jp/vibes/css";
import ResultMessage from "./ResuletMessage";
import AnswerInput from "./AnswerInput";
import Question from "./Question";

export default function Page() {
  return (
    <div>
      <Question />
      <AnswerInput />
      <ResultMessage />
    </div>
  );
}
