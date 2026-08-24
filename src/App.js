import { useState, useEffect, useCallback } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { FiArrowUp } from "react-icons/fi";
import "./app.scss";

const CHAPTERS = [
  { id: "intro", label: "The Discipline", chapter: "Ch. 1" },
  { id: "portfolio", label: "Selected Works", chapter: "Ch. 2" },
  { id: "works", label: "The Journey", chapter: "Ch. 3" },
  { id: "testimonials", label: "The Word", chapter: "Ch. 4" },
  { id: "contact", label: "Inquiry", chapter: "Ch. 5" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const goToSlide = useCallback((targetIndex) => {
    if (targetIndex < 0 || targetIndex >= CHAPTERS.length) return;
    if (targetIndex === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentSlide(0);
      setMenuOpen(false);
      return;
    }
    const targetId = CHAPTERS[targetIndex].id;
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setCurrentSlide(targetIndex);
    setMenuOpen(false);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Sticky navbar appearance trigger
      setIsScrolled(scrollY > 20);

      // Show scroll-to-top button after scrolling past 280px
      if (scrollY > 280) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Track active section for Topbar and Menu
      const scrollPosition = scrollY + 160;
      const sectionElements = CHAPTERS.map((ch) =>
        document.getElementById(ch.id)
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const top = el.offsetTop - 80;
          if (scrollPosition >= top) {
            setCurrentSlide(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app pear-theme">
      {/* Architectural Background Grid */}
      <div className="architectural-grid">
        <div className="grid-line line-v line-v-left"></div>
        <div className="grid-line line-v line-v-right"></div>

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
        isScrolled={isScrolled}
      />

      {/* Chapter Drawer Menu */}
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
        chapters={CHAPTERS}
      />

      {/* Continuous Page Sections Container */}
      <main className="slides-container">
        {/* Ch. 1: The Discipline (Intro) */}
        <section className="slide-wrapper active" id="intro-wrapper">
          <div className="slide-content-scroll">
            <Intro goToSlide={goToSlide} />
          </div>
        </section>

        {/* Ch. 2: Selected Works */}
        <section className="slide-wrapper active" id="portfolio-wrapper">
          <div className="slide-content-scroll">
            <Portfolio />
          </div>
        </section>

        {/* Ch. 3: The Journey (Works / Timeline) */}
        <section className="slide-wrapper active" id="works-wrapper">
          <div className="slide-content-scroll">
            <Works />
          </div>
        </section>

        {/* Ch. 4: The Word (Testimonials) */}
        <section className="slide-wrapper active" id="testimonials-wrapper">
          <div className="slide-content-scroll">
            <Testimonials />
          </div>
        </section>

        {/* Ch. 5: Inquiry (Contact) */}
        <section className="slide-wrapper active" id="contact-wrapper">
          <div className="slide-content-scroll">
            <Contact />
          </div>
        </section>
      </main>

      {/* Floating Scroll To Top Button */}
      <button
        className={`scroll-to-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <FiArrowUp className="up-icon" />
      </button>
    </div>
  );
}

export default App;
