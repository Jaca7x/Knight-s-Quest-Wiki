import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import goblinTilte from "../assets/imgs/monsters/goblins-title.png";
import goblinSprite from "../assets/imgs/sprites/goblin_sprite.png";
import goblinArcherSprite from "../assets/imgs/sprites/goblin_archer_sprite.png";
import goblinTankSprite from "../assets/imgs/sprites/goblin_tank_sprite.png";
import goblinBombSprite from "../assets/imgs/sprites/goblin_bomb_sprite.png";

import SpriteAnimator from "../components/SpriteAnimator";

export default function Monsters() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a] text-white">

      <section id="goblins" className="flex flex-col items-center py-20 gap-6">
        <div>
          <img
            src={goblinTilte}
            alt="Goblins Title"
            className="h-28 object-contain"
          />
        </div>

        <div className="flex flex-row flex-wrap justify-center items-stretch gap-10 text-center px-4">

          <div
            className="bg-black/40 p-6 rounded-lg min-w-[240px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30"
            onMouseEnter={() => setHoveredCard("goblin")}
            onMouseLeave={() => setHoveredCard(null)}
          >

            <div className="flex items-center justify-center h-[200px] w-full">
              <SpriteAnimator
                sprite={goblinSprite}
                frameWidth={139.7}
                frameHeight={128}
                scale={1}
                frames={6}
                fps={hoveredCard === "goblin" ? 10 : 0}
              />
            </div>
            <p className="text-[#c9a227] font-semibold mt-4 uppercase tracking-widest">
              Goblin
            </p>
          </div>

          <div
            className="bg-black/40 p-6 rounded-lg min-w-[240px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30"
            onMouseEnter={() => setHoveredCard("archer")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-center h-[200px] w-full">
              <SpriteAnimator
                sprite={goblinArcherSprite}
                frameWidth={151}
                frameHeight={128}
                scale={1.0}
                frames={9}
                fps={hoveredCard === "archer" ? 10 : 0}
              />
            </div>
            <p className="text-[#c9a227] font-semibold mt-4 uppercase tracking-widest">
              Goblin Arqueiro
            </p>
          </div>

          <div
            className="bg-black/40 p-6 rounded-lg min-w-[320px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30"
            onMouseEnter={() => setHoveredCard("tank")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-center h-[160px] w-full">
              <SpriteAnimator
                sprite={goblinTankSprite}
                frameWidth={300}
                frameHeight={195}
                scale={1}
                frames={10}
                fps={hoveredCard === "tank" ? 10 : 0}
              />
            </div>
            <p className="text-[#c9a227] font-semibold mt-4 uppercase tracking-widest">
              Goblin Tank
            </p>
          </div>

          <div
            className="bg-black/40 p-6 rounded-lg min-w-[240px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30"
            onMouseEnter={() => setHoveredCard("bomb")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-center h-[200px] w-full">
              <SpriteAnimator
                sprite={goblinBombSprite}
                frameWidth={128}
                frameHeight={128}
                scale={2.5}
                frames={8}
                fps={hoveredCard === "bomb" ? 10 : 0}
              />
            </div>
            <p className="text-[#c9a227] font-semibold mt-4 uppercase tracking-widest">
              Goblin Bomba
            </p>
          </div>

        </div>
      </section>

      <section id="wolfs">
        <h2>Lobos</h2>
      </section>

    </div>
  );
}