import atack from "@/features/technologies/assets/gifs/atack.gif";
import run from "@/features/technologies/assets/gifs/running.gif";
import dialogue from "@/features/technologies/assets/gifs/dialogue.gif";
import jump from "@/features/technologies/assets/gifs/jump.gif";

export interface GameSystemsData {
  id: number;
  title: string;
  gif: string;
}

export const gameSystems: GameSystemsData[] = [
  {
    id: 1,
    title: "Sistema de ataque",
    gif: atack,
  },
  {
    id: 2,
    title: "Sistema de pulo",
    gif: jump,
  },
  {
    id: 3,
    title: "Sistema de corrida",
    gif: run,
  },
  {
    id: 4,
    title: "Sistema de diálogo",
    gif: dialogue,
  },
];
