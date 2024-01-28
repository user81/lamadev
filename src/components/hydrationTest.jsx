"use client";

export default function hydrationTest() {
  const a = Math.random();
  console.log(a);
  return <div>{a}</div>;
}
