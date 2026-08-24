import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./systemCanvas.scss";

const SKILLS_LIST = [
  { name: "Angular", color: "#C0EB6A" },
  { name: "React", color: "#C0EB6A" },
  { name: "TypeScript", color: "#C0EB6A" },
  { name: "Next.js", color: "#C0EB6A" },
  { name: "Redux", color: "#485550" },
  { name: "ABP Framework", color: "#485550" },
  { name: "PrimeNG", color: "#485550" },
  { name: "Tailwind CSS", color: "#485550" },
  { name: "REST APIs", color: "#485550" },
  { name: "UI / UX", color: "#C0EB6A" },
  { name: "Performance", color: "#C0EB6A" },
  { name: "Esri Maps", color: "#485550" },
];

export default function SystemCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let isVisible = true;

    // ── 1. Three.js Scene, Camera & Renderer Setup ──
    const scene = new THREE.Scene();

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 480;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // 100% transparent canvas
    container.appendChild(renderer.domElement);

    // ── 2. Globe Master Pivot Group ──
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const sphereRadius = 4.4;

    // ── 3. Wireframe Earth Lat/Long Rings & Dot Lattice ──
    const slateColor = new THREE.Color(0x485550);
    const limeColor = new THREE.Color(0xc0eb6a);

    // 3a. Dot Matrix Sphere (Fibonacci distribution for uniform Earth surface points)
    const dotCount = 900;
    const dotPositions = [];
    const dotColors = [];

    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / dotCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.cos(phi);
      const z = sphereRadius * Math.sin(phi) * Math.sin(theta);

      dotPositions.push(x, y, z);

      const isLime = Math.random() > 0.8;
      const c = isLime ? limeColor : slateColor;
      dotColors.push(c.r, c.g, c.b);
    }

    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(dotPositions, 3)
    );
    dotGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(dotColors, 3)
    );

    const dotMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
    });

    const pointCloud = new THREE.Points(dotGeometry, dotMaterial);
    globeGroup.add(pointCloud);

    // 3b. Latitude & Longitude Circles (Wireframe Grid)
    const latLineMat = new THREE.LineBasicMaterial({
      color: 0x485550,
      transparent: true,
      opacity: 0.22,
    });

    // Equator and Latitude lines
    [-2.8, -1.4, 0, 1.4, 2.8].forEach((latY) => {
      const ringRad = Math.sqrt(Math.max(0, sphereRadius * sphereRadius - latY * latY));
      const ringGeo = new THREE.BufferGeometry();
      const ringPts = [];
      for (let j = 0; j <= 64; j++) {
        const a = (j / 64) * Math.PI * 2;
        ringPts.push(new THREE.Vector3(Math.cos(a) * ringRad, latY, Math.sin(a) * ringRad));
      }
      ringGeo.setFromPoints(ringPts);
      const ring = new THREE.Line(ringGeo, latLineMat);
      globeGroup.add(ring);
    });

    // Longitude Meridian Circles
    [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4].forEach((rotY) => {
      const merGeo = new THREE.BufferGeometry();
      const merPts = [];
      for (let j = 0; j <= 64; j++) {
        const a = (j / 64) * Math.PI * 2;
        merPts.push(
          new THREE.Vector3(
            Math.sin(a) * sphereRadius,
            Math.cos(a) * sphereRadius,
            0
          )
        );
      }
      merGeo.setFromPoints(merPts);
      const mer = new THREE.Line(merGeo, latLineMat);
      mer.rotation.y = rotY;
      globeGroup.add(mer);
    });

    // 3c. Equatorial Tech Halo Ring
    const haloGeo = new THREE.RingGeometry(sphereRadius + 0.9, sphereRadius + 1.15, 64);
    haloGeo.rotateX(Math.PI / 2.3);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xc0eb6a,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const haloRing = new THREE.Mesh(haloGeo, haloMat);
    globeGroup.add(haloRing);

    // ── 4. Create High-Resolution Billboard Canvas Sprites for Skills ──
    const createSkillSprite = (skill) => {
      const canvas = document.createElement("canvas");
      canvas.width = 384;
      canvas.height = 112;
      const ctx = canvas.getContext("2d");

      // Draw modern pill container
      const isLime = skill.color === "#C0EB6A";
      ctx.fillStyle = isLime ? "rgba(192, 235, 106, 0.95)" : "rgba(72, 85, 80, 0.92)";
      ctx.strokeStyle = "rgba(72, 85, 80, 0.25)";
      ctx.lineWidth = 4;

      const r = 36;
      ctx.beginPath();
      ctx.roundRect(8, 8, 368, 96, r);
      ctx.fill();
      ctx.stroke();

      // Inner dot indicator
      ctx.fillStyle = isLime ? "#485550" : "#C0EB6A";
      ctx.beginPath();
      ctx.arc(42, 56, 12, 0, Math.PI * 2);
      ctx.fill();

      // Text label
      ctx.fillStyle = isLime ? "#28322e" : "#FFFFFF";
      ctx.font = "bold 32px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(skill.name, 68, 56);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
      });

      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(1.9, 0.58, 1);
      return sprite;
    };

    const skillSprites = [];
    const skillNodesCount = SKILLS_LIST.length;
    const skillOrbitRadius = sphereRadius + 0.65;

    // Distribute skills evenly across the sphere using spherical coordinates
    SKILLS_LIST.forEach((skill, index) => {
      const phi = Math.acos(1 - (2 * (index + 0.5)) / skillNodesCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * index;

      const x = skillOrbitRadius * Math.sin(phi) * Math.cos(theta);
      const y = skillOrbitRadius * Math.cos(phi);
      const z = skillOrbitRadius * Math.sin(phi) * Math.sin(theta);

      const sprite = createSkillSprite(skill);
      sprite.position.set(x, y, z);
      sprite.userData = { ...skill, basePos: new THREE.Vector3(x, y, z) };

      // Add a connecting line from the earth surface to the skill badge
      const surfPoint = new THREE.Vector3(x, y, z).normalize().multiplyScalar(sphereRadius);
      const lineGeo = new THREE.BufferGeometry().setFromPoints([surfPoint, new THREE.Vector3(x, y, z)]);
      const lineMat = new THREE.LineBasicMaterial({
        color: skill.color === "#C0EB6A" ? 0xc0eb6a : 0x485550,
        transparent: true,
        opacity: 0.45,
      });
      const connectLine = new THREE.Line(lineGeo, lineMat);
      globeGroup.add(connectLine);

      globeGroup.add(sprite);
      skillSprites.push(sprite);
    });

    // ── 5. Mouse Drag & Pointer Interaction Setup ──
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const rotationVelocity = { x: 0.003, y: 0.005 };

    const handlePointerDown = (e) => {
      isDragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;

        globeGroup.rotation.y += deltaX * 0.007;
        globeGroup.rotation.x += deltaY * 0.007;

        rotationVelocity.y = deltaX * 0.0015;
        rotationVelocity.x = deltaY * 0.0015;

        previousMousePosition = { x: clientX, y: clientY };
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", handlePointerDown);
    container.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);

    container.addEventListener("touchstart", handlePointerDown, { passive: true });
    container.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    // ── 6. Resize & Intersection Observers ──
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth && newHeight) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    intersectionObserver.observe(container);

    // ── 7. Animation Loop ──
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();

      if (!isDragging) {
        // Smooth continuous Earth rotation
        globeGroup.rotation.y += 0.007 + rotationVelocity.y;
        globeGroup.rotation.x += rotationVelocity.x;

        // Dampen manual drag velocity
        rotationVelocity.x *= 0.94;
        rotationVelocity.y *= 0.94;
      }

      // Rotate equatorial ring slowly on separate axis for dynamic motion
      haloRing.rotation.z += delta * 0.15;

      // Adjust sprite opacity based on distance to camera (front vs back of globe)
      const worldPos = new THREE.Vector3();
      skillSprites.forEach((sprite) => {
        sprite.getWorldPosition(worldPos);
        const distToCam = worldPos.distanceTo(camera.position);

        // Fade skills that are on the back side of Earth
        if (worldPos.z < -0.5) {
          sprite.material.opacity = Math.max(0.18, (distToCam - 14) / 4);
          sprite.scale.set(1.5, 0.46, 1);
        } else {
          sprite.material.opacity = 0.95;
          sprite.scale.set(1.9, 0.58, 1);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // ── 8. Cleanup Lifecycle ──
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener("mousedown", handlePointerDown);
      container.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      container.removeEventListener("touchstart", handlePointerDown);
      container.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      dotGeometry.dispose();
      dotMaterial.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="system-canvas-wrapper earth-pure" ref={mountRef} />
  );
}
