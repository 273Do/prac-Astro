import { useStore } from "@nanostores/react";
import { isDemo } from "../utils/demoStore";

export default function ChildState() {
  // read the store value with the `useStore` hook
  const $isDemo = useStore(isDemo);
  // write to the imported store using `.set`

  const onClick = () => {
    isDemo.set(!$isDemo);
    const item = isDemo.get();
  };

  return <button onClick={onClick}>{}</button>;
}
