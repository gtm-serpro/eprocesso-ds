import Breadcrumb from "~/components/Breadcrumb";
import type { Route } from "./+types/components";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "eprocesso-ds" },
    { name: "description", content: "eprocesso design system" },
  ];
}

export default function Components() {
  return (
    <div className="page">
        <Breadcrumb/>
        <h1 className="text-xl font-bold">Components</h1>
    </div>
);
}
