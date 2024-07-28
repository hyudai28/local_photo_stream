import { TextArea, ToggleButton, Button } from "@freee_jp/vibes";

export default function AnswerInput() {
  return (
    <>
      <div>
        <TextArea placeholder="問題の答えを入力してください" />
      </div>
      <div>
        <ToggleButton type="radio">ア: カラスは白い</ToggleButton>
        <ToggleButton type="radio">イ: カラスは黒い</ToggleButton>
        <ToggleButton type="radio">ウ: カラスは黄色い</ToggleButton>
      </div>
      <Button>submit</Button>
    </>
  );
}
