import { useState, useMemo } from "react";
import { monsters } from "@/data/monster";
import type { MonsterKey } from "@/data/monster"

import goblinTitle from "@/features/monster/assets/imgs/section_header/goblin_title.png";
import wolfTitle from "@/features/monster/assets/imgs/section_header/wolf_title.png";
import bossTitle from "@/features/monster/assets/imgs/section_header/boss_title.png";
import npcsTitle from "@/features/monster/assets/imgs/section_header/npcs_title.png";

import MonsterModal from "@/features/monster/components/MonsterModal";
import MonsterCard from "@/features/monster/components/MonsterCard";
import { AnimatePresence } from "framer-motion";

export default function Monsters() {
  const [hoveredCard, setHoveredCard] = useState<MonsterKey | null>(null);
  const [selectMonsterIndex, setSelectMonsterIndex] = useState<number | null>(null);

  const monsterGroups: Record<string, MonsterKey[]> = {
    goblins: ["goblin", "archer", "tank", "bomb"],
    wolfs: ["wolf", "whiteWolf", "redWolf"],
    boss: ["boss"],
    npcs: ["knight", "ghost", "peasant"]
  };

  const allMonstersList = useMemo(() => {
    return Object.keys(monsters).map((key) => ({
      key: key as MonsterKey,
      ...monsters[key as MonsterKey],
    }));
  }, []);

  const openModalAt = (key: MonsterKey) => {
    const index = allMonstersList.findIndex((m) => m.key === key);
    setSelectMonsterIndex(index);
  };

  const containerStyle = "flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 w-full px-6 pb-4 md:flex-wrap md:justify-center md:overflow-visible md:px-0";

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a] text-white px-2 sm:px-4 pb-20 py-20">

      <section id="goblins" className="scroll-mt-24 flex flex-col items-center py-10 gap-6">
        <img src={goblinTitle} className="h-16 md:h-24 object-contain" alt="Goblins" />
        <div className={containerStyle}>
          {monsterGroups.goblins.map((key) => (
            <MonsterCard
              key={key}
              {...monsters[key]}
              name={monsters[key].name}
              marginLeft={monsters[key].marginLeftCard}
              hovered={hoveredCard === key}
              onHover={() => setHoveredCard(key)}
              onLeave={() => setHoveredCard(null)}
              onClick={() => openModalAt(key)}
            />
          ))}
        </div>
      </section>

      <section id="wolfs" className="scroll-mt-24 flex flex-col items-center py-10 gap-6">
        <img src={wolfTitle} className="h-16 md:h-24 object-contain" alt="Wolfs" />
        <div className={containerStyle}>
          {monsterGroups.wolfs.map((key) => (
            <MonsterCard
              key={key}
              {...monsters[key]}
              name={monsters[key].name}
              marginLeft={monsters[key].marginLeftCard}
              hovered={hoveredCard === key}
              onHover={() => setHoveredCard(key)}
              onLeave={() => setHoveredCard(null)}
              onClick={() => openModalAt(key)}
            />
          ))}
        </div>
      </section>

      <section id="boss" className="scroll-mt-24 flex flex-col items-center py-10 gap-6">
        <img src={bossTitle} className="h-16 md:h-24 object-contain" alt="Boss" />
        <div className={containerStyle}>
          {monsterGroups.boss.map((key) => (
            <MonsterCard
              key={key}
              {...monsters[key]}
              name={monsters[key].name}
              marginLeft={monsters[key].marginLeftCard}
              hovered={hoveredCard === key}
              onHover={() => setHoveredCard(key)}
              onLeave={() => setHoveredCard(null)}
              onClick={() => openModalAt(key)}
            />
          ))}
        </div>
      </section>

      <section id="npcs" className="scroll-mt-24 flex flex-col items-center py-10 gap-6">
        <img src={npcsTitle} className="h-16 md:h-24 object-contain" alt="NPCs" />
        <div className={containerStyle}>
          {monsterGroups.npcs.map((key) => (
            <MonsterCard
              key={key}
              {...monsters[key]}
              name={monsters[key].name}
              marginLeft={monsters[key].marginLeftCard}
              hovered={hoveredCard === key}
              onHover={() => setHoveredCard(key)}
              onLeave={() => setHoveredCard(null)}
              onClick={() => openModalAt(key)}
            />
          ))}
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selectMonsterIndex !== null && (
          <MonsterModal
            key={selectMonsterIndex}
            isOpen={true}
            onClose={() => setSelectMonsterIndex(null)}
            monsters={allMonstersList}
            initialIndex={selectMonsterIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
}