import ColorPalette from "~/components/ColorPalette";
import type { Route } from "./+types/colors";
import Breadcrumb from "~/components/Breadcrumb";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "eprocesso-ds" },
    { name: "description", content: "eprocesso design system" },
  ];
}

export default function Colors() {
  return (
  <div className="page">
    <Breadcrumb/>
    <h1 className="text-xl font-bold">Colors</h1>
    <ColorPalette/>
    
  </div>
);
}
