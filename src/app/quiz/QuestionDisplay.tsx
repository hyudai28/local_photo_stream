import { useState } from "react";
import { Message } from "@freee_jp/vibes";
import { placeholderQuestions } from "@/app/quiz/data/placeholders/questions";

export default function QuestionDisplay() {
  const [currentQuestion, setCurrentQuestion] = useState(
    placeholderQuestions[1]
  );

  return (
    <div>
      <Message>{currentQuestion.question}</Message>
    </div>
  );
}
