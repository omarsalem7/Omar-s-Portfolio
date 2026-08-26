import { useScrollParallax } from "../../hooks/useParallax";
import "./floatingDecorations.scss";

export default function FloatingDecorations() {
  const [, offsetFar] = useScrollParallax(0.18);
  const [, offsetNear] = useScrollParallax(-0.12);

  return (
    <div className="floating-decorations-layer" aria-hidden="true">
      {/* Far Layer (Slower downward drift) */}
      <div
        className="decor-cluster far-cluster"
        style={{
          transform: `translate3d(0, ${offsetFar.toFixed(1)}px, 0)`,
        }}
      >
        <div className="decor-pill decor-1">
          <span className="spark">✦</span>
          <span>LAT 24.7136° N &bull; RIYADH</span>
        </div>
        <div className="decor-pill decor-2">
          <span>&lt;ScalableArchitecture /&gt;</span>
        </div>
      </div>

      {/* Near Layer (Subtle upward / counter drift) */}
      <div
        className="decor-cluster near-cluster"
        style={{
          transform: `translate3d(0, ${offsetNear.toFixed(1)}px, 0)`,
        }}
      >
        <div className="decor-pill decor-3">
          <span className="spark">✦</span>
          <span>Angular &bull; React</span>
        </div>
        {/* <div className="decor-pill decor-4">
          <span>STATE // OPTIMIZED</span>
        </div> */}
      </div>
    </div>
  );
}
