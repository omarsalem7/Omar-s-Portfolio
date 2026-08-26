import { useScrollParallax } from "../../hooks/useParallax";
import "./parallaxWatermark.scss";

export default function ParallaxWatermark({
  chapter = "01",
  title = "THE SYSTEM",
  align = "right",
  speed = 0.12,
  coordinates = "",
}) {
  const [elementRef, offsetY] = useScrollParallax(speed);

  return (
    <div
      ref={elementRef}
      className={`parallax-watermark-wrap align-${align}`}
      aria-hidden="true"
    >
      <div
        className="watermark-inner"
        style={{
          transform: `translate3d(0, ${offsetY.toFixed(1)}px, 0)`,
        }}
      >
        <span className="watermark-chapter">{chapter}</span>
        <span className="watermark-title">{"// " + title}</span>
        {coordinates && (
          <span className="watermark-coords">{coordinates}</span>
        )}
      </div>
    </div>
  );
}
