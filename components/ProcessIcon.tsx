"use client";
import { useEffect, useMemo, useState } from "react";

type Props = { src: string; size?: number; blue?: string; className?: string };

export default function ProcessIcon({ src, size = 22, blue = "#38bdf8", className }: Props) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = size * 4; c.height = size * 4; // upscale then display small => cleaner edges
      const ctx = c.getContext("2d")!;
      ctx.drawImage(img, 0, 0, c.width, c.height);
      const d = ctx.getImageData(0, 0, c.width, c.height);
      const data = d.data;

      // remove white-ish background & tint to blue
      const [br, bg, bb] = hexToRgb(blue);
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i+1], b = data[i+2];
        // If pixel is almost white, make transparent
        if (r > 240 && g > 240 && b > 240) {
          data[i+3] = 0;
        } else {
          // monochrome → blue tint using luminance
          const lum = 0.2126*r + 0.7152*g + 0.0722*b;
          data[i]   = (lum/255) * br;
          data[i+1] = (lum/255) * bg;
          data[i+2] = (lum/255) * bb;
        }
      }
      ctx.putImageData(d, 0, 0);
      setUrl(c.toDataURL("image/png"));
    };
  }, [src, size, blue]);

  const style: React.CSSProperties = useMemo(() => ({
    width: size, height: size,
    filter: "drop-shadow(0 0 6px rgba(56,189,248,.45))",
  }), [size]);

  if (!url) return <span className="inline-block" style={{ width: size, height: size }} />;
  return <img src={url} alt="" className={className} style={style} />;
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#",""); const n = parseInt(h.length===3? h.replace(/(.)/g,"$1$1"):h,16);
  return [(n>>16)&255, (n>>8)&255, n&255];
}
