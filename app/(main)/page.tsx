"use client"

export default function Home() {
  return (
    <div>
      {Array.from({ length: 100 }).map((_, index) => (
        <p key={index}>Lorem ipsum dolor sit amet consectetur adipisicing elit. {index}</p>
      ))}
    </div>
  );
}
