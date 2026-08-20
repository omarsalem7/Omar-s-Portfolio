import { useState, useEffect, useRef, useCallback } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import "./app.scss";

const CHAPTERS = [
  { id: "discipline", label: "The Discipline", chapter: "Ch. 1", number: "01", title: "Omar Salem — Full Stack Engineer" },
  { id: "works", label: "Selected Works", chapter: "Ch. 2", number: "02", title: "Selected Works & Systems" },
  { id: "journey", label: "The Journey", chapter: "Ch. 3", number: "03", title: "Milestones & Architecture" },
  { id: "words", label: "The Word", chapter: "Ch. 4", number: "04", title: "Peer Recommendations" },
  { id: "inquiry", label: "Inquiry", chapter: "Ch. 5", number: "05", title: "Direct Contact & Inquiry" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const touchStartY = useRef(0);
  const lastWheelTime = useRef(0);

  const goToSlide = useCallback((targetIndex) => {
    if (targetIndex === currentSlide || isTransitioning) return;
    if (targetIndex < 0 || targetIndex >= CHAPTERS.length) return;

    setDirection(targetIndex > currentSlide ? "next" : "prev");
    setIsTransitioning(true);
    setCurrentSlide(targetIndex);
    setMenuOpen(false);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  }, [currentSlide, isTransitioning]);

  const handleNextSlide = useCallback(() => {
    if (currentSlide < CHAPTERS.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  const handlePrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;

      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        handlePrevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(CHAPTERS.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, goToSlide]);

  // Wheel navigation (debounced)
  useEffect(() => {
    const handleWheel = (e) => {
      const scrollable = e.target.closest(".slide-content-scroll");
      if (scrollable) {
        const atTop = scrollable.scrollTop <= 5;
        const atBottom = scrollable.scrollHeight - scrollable.scrollTop - scrollable.clientHeight <= 5;
        if (e.deltaY > 0 && !atBottom) return;
        if (e.deltaY < 0 && !atTop) return;
      }

      const now = Date.now();
      if (now - lastWheelTime.current < 750) return;
      
      if (Math.abs(e.deltaY) > 25) {
        lastWheelTime.current = now;
        if (e.deltaY > 0) {
          handleNextSlide();
        } else {
          handlePrevSlide();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleNextSlide, handlePrevSlide]);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
  };

  const getSlideClass = (index) => {
    if (index === currentSlide) return "active";
    if (index < currentSlide) {
      return direction === "next" ? "exit-to-top" : "enter-from-top";
    } else {
      return direction === "next" ? "enter-from-bottom" : "exit-to-bottom";
    }
  };

  const currentChapter = CHAPTERS[currentSlide];
  const progressPercent = ((currentSlide + 1) / CHAPTERS.length) * 100;

  return (
    <div 
      className="app pear-theme"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Architectural Background Grid & Corner Sparks */}
      <div className="architectural-grid">
        <div className="grid-line line-v line-v-left"></div>
        <div className="grid-line line-v line-v-right"></div>
        <div className="grid-line line-h line-h-top"></div>
        <div className="grid-line line-h line-h-bottom"></div>
        
        {/* Intersection Crosshair Stars (✦) */}
        <span className="crosshair-node ch-top-left">✦</span>
        <span className="crosshair-node ch-top-right">✦</span>
        <span className="crosshair-node ch-bottom-left">✦</span>
        <span className="crosshair-node ch-bottom-right">✦</span>

        {/* Ambient Subtle Warm Sheen */}
        <div className="ambient-sheen"></div>
      </div>

      {/* Minimalist Architectural Topbar */}
      <Topbar 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
        chapters={CHAPTERS}
      />

      {/* Pear Chapter Drawer Menu */}
      <Menu 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
        chapters={CHAPTERS}
      />

      {/* Pear.no Style Chapter Rail Navigation */}
      <nav className="chapter-rail" aria-label="Chapter Rail Navigation">
        <div className="rail-track">
          <div 
            className="rail-indicator" 
            style={{ 
              top: `${(currentSlide / (CHAPTERS.length - 1)) * 80}%` 
            }}
          />
        </div>
        <div className="rail-items">
          {CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              className={`rail-item ${currentSlide === idx ? "on" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to ${ch.chapter}: ${ch.label}`}
            >
              <span className="ch-num">{ch.chapter}</span>
              <span className="ch-label">{ch.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Slide Viewport Deck */}
      <main className="slides-container">
        {/* Ch. 1: The Discipline (Intro) */}
        <section 
          className={`slide-wrapper ${getSlideClass(0)}`}
          aria-hidden={currentSlide !== 0}
        >
          <div className="slide-content-scroll">
            <Intro goToSlide={goToSlide} />
          </div>
        </section>

        {/* Ch. 2: Selected Works */}
        <section 
          className={`slide-wrapper ${getSlideClass(1)}`}
          aria-hidden={currentSlide !== 1}
        >
          <div className="slide-content-scroll">
            <Portfolio />
          </div>
        </section>

        {/* Ch. 3: The Journey (Works / Timeline) */}
        <section 
          className={`slide-wrapper ${getSlideClass(2)}`}
          aria-hidden={currentSlide !== 2}
        >
          <div className="slide-content-scroll">
            <Works />
          </div>
        </section>

        {/* Ch. 4: The Word (Testimonials) */}
        <section 
          className={`slide-wrapper ${getSlideClass(3)}`}
          aria-hidden={currentSlide !== 3}
        >
          <div className="slide-content-scroll">
            <Testimonials />
          </div>
        </section>

        {/* Ch. 5: Inquiry (Contact) */}
        <section 
          className={`slide-wrapper ${getSlideClass(4)}`}
          aria-hidden={currentSlide !== 4}
        >
          <div className="slide-content-scroll">
            <Contact />
          </div>
        </section>
      </main>

      {/* Pear Architectural Bottom Dock */}
      <footer className="bottom-dock">
        <div className="dock-meta-left">
          <span className="ch-badge">{currentChapter.chapter}</span>
          <span className="ch-sep">&bull;</span>
          <span className="ch-title">{currentChapter.title}</span>
        </div>

        <div className="dock-progress-wrapper">
          <span className="dock-num">{currentChapter.number}</span>
          <div className="dock-track">
            <div 
              className="dock-fill" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="dock-total">0{CHAPTERS.length}</span>
        </div>

        <div className="dock-controls">
          <button
            className="dock-arrow-btn"
            onClick={handlePrevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous Chapter"
            title="Previous Chapter (Arrow Up)"
          >
            <FiArrowUp />
          </button>
          <button
            className="dock-arrow-btn"
            onClick={handleNextSlide}
            disabled={currentSlide === CHAPTERS.length - 1}
            aria-label="Next Chapter"
            title="Next Chapter (Arrow Down)"
          >
            <FiArrowDown />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;


