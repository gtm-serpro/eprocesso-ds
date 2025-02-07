import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "eprocesso-ds" },
    { name: "description", content: "eprocesso design system" },
  ];
}

export default function Home() {
  return (
    <div className="page">
      <h1 className="text-xl font-bold">Home</h1>
    </div>
);
}
