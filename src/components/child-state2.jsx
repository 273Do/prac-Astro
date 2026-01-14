import { useStore } from "@nanostores/react";
import { isDemo } from "../utils/demoStore";

export default function ChildState2() {
  const isDemoState = useStore(isDemo);

  console.log(isDemoState);

  return isDemoState ? <p>デモだよ！</p> : <p>終わり...</p>;
}
