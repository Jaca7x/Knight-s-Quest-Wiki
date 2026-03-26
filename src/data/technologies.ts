import c_logo from "@/features/technologies/assets/imgs/c.png";
import raylib_logo from "@/features/technologies/assets/imgs/raylib.png";

export interface TechnologiesData {
  id: number;
  title: string;
  image: string;
  desc: string;
  tag: string;
  color: string;
  glowColor: string;
}

export const technologies: TechnologiesData[] = [
  {
    id: 1,
    title: "Linguagem C",
    image: c_logo,
    desc: "Conhecida como a 'mãe de todas as linguagens', a Linguagem C é a base para sistemas robustos e alta performance, essencial para qualquer cavaleiro da programação.",
    tag: "CORE SYSTEM ENGINE",
    color: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    id: 2,
    title: "Biblioteca Raylib",
    image: raylib_logo,
    tag: "GRAPHICS & MEDIA LAYER",
    desc: "Conhecida como a 'mãe de todas as linguagens', a Linguagem C é a base para sistemas robustos e alta performance, essencial para qualquer cavaleiro da programação.",
    color: "#ffffff",
    glowColor: "#ffffff",
  },
];
