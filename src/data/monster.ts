import goblinSprite from "@/features/monster/assets/imgs/sprites/goblin/goblin_sprite.png";
import goblinArcherSprite from "@/features/monster/assets/imgs/sprites/goblin/goblin_archer_sprite.png";
import goblinTankSprite from "@/features/monster/assets/imgs/sprites/goblin/goblin_tank_sprite.png";
import goblinBombSprite from "@/features/monster/assets/imgs/sprites/goblin/goblin_bomb_sprite.png";

import wolfSprite from "@/features/monster/assets/imgs/sprites/wolf/wolf_sprite.png";
import whiteWolfSprite from "@/features/monster/assets/imgs/sprites/wolf/white_wolf_sprite.png";
import redWolfSprite from "@/features/monster/assets/imgs/sprites/wolf/red_wolf_sprite.png";

import bossSprite from "@/features/monster/assets/imgs/sprites/boss/boss_attack.png";

import npcSprite from "@/features/monster/assets/imgs/sprites/npcs/npc_sprite.png";
import ghostSprite from "@/features/monster/assets/imgs/sprites/npcs/npc_ghost_sprite.png";
import peasantSprite from "@/features/monster/assets/imgs/sprites/npcs/peasant_sprite.png";

export type MonsterKey =
  | "goblin"
  | "archer"
  | "tank"
  | "bomb"
  | "wolf"
  | "whiteWolf"
  | "redWolf"
  | "boss"
  | "knight"
  | "ghost"
  | "peasant";

export interface MonsterData {
  name: string;
  description: string;
  sprite: string;
  frameWidth: number;
  frameHeight: number;
  frames: number;
  scale: number;
  fps: number;
  marginLeftModal: number;
  marginLeftCard: number;
  marginBottom: number;
  valueAtk: string;
  valueLife: string;
  valueSpe: string;
}

export const monsters: Record<MonsterKey, MonsterData> = {
  goblin: {
    name: "Goblin",
    description:
      "Um goblin comum, de estatura baixa e olhar desconfiado. Empunha uma faca gasta pelo tempo e prefere atacar alvos distraídos. Sozinho é fraco, mas raramente anda desacompanhado.",
    sprite: goblinSprite,
    frameWidth: 139.7,
    frameHeight: 128,
    frames: 6,
    scale: 1,
    fps: 10,
    marginLeftModal: 1,
    marginLeftCard: 40,
    marginBottom: 0,
    valueAtk: "20",
    valueLife: "50",
    valueSpe: "100",
  },
  archer: {
    name: "Goblin Archer",
    description:
      "Um goblin de olhar atento que prefere manter distância do perigo. Armado com um arco simples e flechas improvisadas, ataca seus alvos de longe com precisão surpreendente.",
    sprite: goblinArcherSprite,
    frameWidth: 158,
    frameHeight: 128,
    frames: 9,
    scale: 1,
    fps: 10,
    marginLeftModal: 0,
    marginLeftCard: 25,
    marginBottom: 0,
    valueAtk: "15",
    valueLife: "50",
    valueSpe: "95",
  },
  tank: {
    name: "Goblin Tank",
    description:
      "Um goblin de porte incomum, mais alto e robusto. Empunha um pesado martelo capaz de esmagar inimigos com facilidade.",
    sprite: goblinTankSprite,
    frameWidth: 220,
    frameHeight: 200,
    frames: 10,
    scale: 1,
    fps: 10,
    marginLeftModal: 5,
    marginLeftCard: 55,
    marginBottom: 60,
    valueAtk: "35",
    valueLife: "200",
    valueSpe: "40",
  },
  bomb: {
    name: "Goblin Bomba",
    description:
      "Ágil e imprevisível, alterna entre ataques à distância e combate corpo a corpo com bombas rudimentares.",
    sprite: goblinBombSprite,
    frameWidth: 100,
    frameHeight: 128,
    frames: 8,
    scale: 2.5,
    fps: 10,
    marginLeftModal: 0,
    marginLeftCard: 0,
    marginBottom: 0,
    valueAtk: "50",
    valueLife: "70",
    valueSpe: "30",
  },
  wolf: {
    name: "Lobo",
    description:
      "Um lobo feroz que habita regiões selvagens, rápido e agressivo, atacando com investidas precisas.",
    sprite: wolfSprite,
    frameWidth: 180,
    frameHeight: 180,
    frames: 6,
    scale: 1,
    fps: 7,
    marginLeftModal: 0,
    marginLeftCard: 20,
    marginBottom: 60,
    valueAtk: "20",
    valueLife: "100",
    valueSpe: "95",
  },
  whiteWolf: {
    name: "Lobo Albino",
    description:
      "Raro e extremamente veloz, observa seus inimigos antes de atacar no momento exato.",
    sprite: whiteWolfSprite,
    frameWidth: 180,
    frameHeight: 180,
    frames: 4,
    scale: 1,
    fps: 8,
    marginLeftModal: 0,
    marginLeftCard: 20,
    marginBottom: 60,
    valueAtk: "20",
    valueLife: "100",
    valueSpe: "140",
  },
  redWolf: {
    name: "Lobo Rubro",
    description:
      "Um lobo sanguinário e brutal. Não caça por necessidade, mas por puro instinto de destruição.",
    sprite: redWolfSprite,
    frameWidth: 180,
    frameHeight: 180,
    frames: 5,
    scale: 1,
    fps: 6,
    marginLeftModal: 0,
    marginLeftCard: 0,
    marginBottom: 60,
    valueAtk: "40",
    valueLife: "200",
    valueSpe: "70",
  },
  boss: {
    name: "Brakkor, O Dourado",
    description:
      "Um colossal rei goblin que carrega o ouro de reinos destruídos. Sua força é devastadora.",
    sprite: bossSprite,
    frameWidth: 140,
    frameHeight: 128,
    frames: 9,
    scale: 2,
    fps: 6,
    marginLeftModal: 2,
    marginLeftCard: 35,
    marginBottom: 10,
    valueAtk: "40",
    valueLife: "2000",
    valueSpe: "10",
  },
  knight: {
    name: "Cavaleiro Jovem",
    description:
      "Um guerreiro em início de jornada, determinado a provar seu valor.",
    sprite: npcSprite,
    frameWidth: 120,
    frameHeight: 150,
    frames: 4,
    scale: 1,
    fps: 2,
    marginLeftModal: 0,
    marginLeftCard: 0,
    marginBottom: -40,
    valueAtk: "15",
    valueLife: "100",
    valueSpe: "60",
  },
  ghost: {
    name: "Cavaleiro Fantasma",
    description:
      "Uma presença etérea que surge para oferecer dicas aos viajantes.",
    sprite: ghostSprite,
    frameWidth: 120,
    frameHeight: 150,
    frames: 3,
    scale: 1,
    fps: 2,
    marginLeftModal: 0,
    marginLeftCard: 0,
    marginBottom: -40,
    valueAtk: "0",
    valueLife: "0",
    valueSpe: "0",
  },
  peasant: {
    name: "Fazendeiro",
    description: "Trabalhador humilde que cuida de suas terras todos os dias.",
    sprite: peasantSprite,
    frameWidth: 120,
    frameHeight: 150,
    frames: 2,
    scale: 1,
    fps: 2,
    marginLeftModal: 0,
    marginLeftCard: 5,
    marginBottom: -40,
    valueAtk: "10",
    valueLife: "85",
    valueSpe: "35",
  },
};
