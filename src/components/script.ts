import { jsFn } from "../lib/index";

const random = jsFn();

console.log("src/components/script.ts random", random);

setTimeout(() => {
  console.log("src/components/script.ts random2", random);
}, 1000);
