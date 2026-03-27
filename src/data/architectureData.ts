import src_file from "@/features/technologies/assets/imgs/icons-files/folder-src.svg";

export interface FolderData {
  id: number;
  name: string;
  icon: string;
  desc: string;
}

export const folders: FolderData[] = [
  {
    id: 1,
    name: "src",
    icon: src_file,
    desc: "teste",
  },
  {
    id: 2,
    name: "assests",
    icon: src_file,
    desc: "teste",
  },
];
