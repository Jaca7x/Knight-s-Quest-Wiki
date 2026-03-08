import { useEffect, useState } from "react";

type SpriteAnimatorProps = {
  sprite: string;
  frameWidth: number;
  frameHeight: number;
  frames: number;
  scale: number;
  fps?: number;
};

export default function SpriteAnimator({
  sprite,
  frameWidth,
  frameHeight,
  frames,
  scale,
  fps = 8
}: SpriteAnimatorProps) {

  const [frame, setFrame] = useState(0);

  useEffect(() => {

    if (fps === 0) 
    {
        setFrame(0);
        return
    };
    
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames);
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [frames, fps]);

  return (
  <div
    style={{
      width: frameWidth * scale,
      height: frameHeight * scale,
      backgroundImage: `url(${sprite})`,
      backgroundPosition: `-${frame * frameWidth * scale}px 0px`,
      backgroundSize: `${frameWidth * frames * scale}px ${frameHeight * scale}px`,
      backgroundRepeat: "no-repeat",
      imageRendering: "pixelated"
    }}
  />
);
}