import { MessageBlock } from "@freee_jp/vibes";

export default function ResultMessage() {
  return (
    <div>
      <MessageBlock success>
        正解です、私がカラスが白いと言ったら白く塗るべきなのですか
      </MessageBlock>
      <MessageBlock error>
        不正解です、なぜならカラスは白いからです。
      </MessageBlock>
    </div>
  );
}
