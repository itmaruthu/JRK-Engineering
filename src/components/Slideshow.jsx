import { useState, useEffect, useCallback, useRef } from "react";
// Dynamically import all images from assets folder
const imageModules = import.meta.glob("../assests/*.{jpg,jpeg,png,gif,webp}", {
  eager: true,
});
/**
 * ─────────────────────────────────────────────────────────────
 *  Slideshow Component — Drop-in, zero dependencies
 * ─────────────────────────────────────────────────────────────
 *
 *  STEP 1 — Load images dynamically from a folder
 *
 *  Option A: Vite  (place images in src/assets/slides/)
 *    const modules = import.meta.glob("../assets/slides/*.{jpg,jpeg,png,webp,gif}", { eager: true });
 *    const images  = Object.values(modules).map((m) => m.default);
 *
 *  Option B: Create React App / Webpack  (place images in src/assets/slides/)
 *    const ctx    = require.context("../assets/slides", false, /\.(jpe?g|png|webp|gif)$/i);
 *    const images = ctx.keys().map(ctx);
 *
 *  STEP 2 — Pass the array as a prop:
 *    <Slideshow images={images} />
 *
 *  Props:
 *    images       string[]   Required. Array of image src URLs.
 *    interval     number     Auto-play delay in ms. Default: 4000.
 *    autoPlay     boolean    Start playing automatically. Default: true.
 * ─────────────────────────────────────────────────────────────
 */

export default function Slideshow({ interval = 4000, autoPlay = true }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const [fade, setFade] = useState(true);
  const timerRef = useRef(null);

  const imageList = Object.keys(imageModules)
    .filter((key) => !key.endsWith(".mp4")) // Exclude videos
    .map((key, idx) => {
      // Optionally, extract a title or date from filename
      const fileName = key.split("/").pop();
      return {
        id: idx + 1,
        src: imageModules[key].default,
        title: fileName,
        date: null, // You can parse date from filename if needed
      };
    });
  console.log("imageList", imageList);
  const total = imageList.length;

  const goTo = useCallback(
    (next) => {
      setFade(false);
      setTimeout(() => {
        setIndex((next + total) % total);
        setFade(true);
      }, 300);
    },
    [total],
  );

  const prev = () => {
    clearInterval(timerRef.current);
    goTo(index - 1);
  };
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  // Auto-play
  useEffect(() => {
    if (playing && total > 1) {
      timerRef.current = setInterval(next, interval);
    }
    return () => clearInterval(timerRef.current);
  }, [playing, next, interval, total]);

  if (!total) {
    return (
      <div style={styles.empty}>
        <span>No images found.</span>
      </div>
    );
  }

  return (
    <section id="projects" className="gallery section">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          Explore our portfolio of successfully completed engineering and
          construction projects
        </p>
        <div style={styles.wrapper}>
          {/* Main image */}
          <div style={styles.imageWrapper}>
            <img
              key={index}
              src={imageList[index].src}
              alt={`Slide ${index + 1}`}
              style={{ ...styles.image, opacity: fade ? 1 : 0 }}
            />
          </div>

          {/* Prev / Next arrows */}
          {total > 1 && (
            <>
              <button
                style={{ ...styles.arrow, left: 16 }}
                onClick={prev}
                aria-label="Previous"
              >
                &#8592;
              </button>
              <button
                style={{ ...styles.arrow, right: 16 }}
                onClick={next}
                aria-label="Next"
              >
                &#8594;
              </button>
            </>
          )}

          {/* Bottom bar — counter + dots + play/pause */}
          <div style={styles.bar}>
            {/* Play / Pause */}
            <button
              style={styles.playBtn}
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? "⏸" : "▶"}
            </button>

            {/* Dot indicators */}
            <div style={styles.dots}>
              {imageList.map((_, i) => (
                <button
                  key={i}
                  style={{
                    ...styles.dot,
                    ...(i === index ? styles.dotActive : {}),
                  }}
                  onClick={() => {
                    clearInterval(timerRef.current);
                    goTo(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <span style={styles.counter}>
              {index + 1} / {total}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Styles ───────────────────────────────────────────────── */
const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "860px",
    margin: "0 auto",
    background: "#0d0d0d",
    borderRadius: "12px",
    overflow: "hidden",
    fontFamily: "'Georgia', serif",
    userSelect: "none",
    boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: "16/9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#111",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.3s ease",
    display: "block",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-60%)",
    background: "rgba(0,0,0,0.45)",
    border: "none",
    color: "#fff",
    fontSize: "22px",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    transition: "background 0.2s",
    zIndex: 2,
  },
  bar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 16px",
    background: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(8px)",
  },
  playBtn: {
    background: "transparent",
    border: "none",
    color: "#ccc",
    fontSize: "18px",
    cursor: "pointer",
    padding: "4px 8px",
  },
  dots: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap",
    justifyContent: "center",
    flex: 1,
    padding: "0 12px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.3)",
    border: "none",
    cursor: "pointer",
    padding: 0,
    transition: "background 0.2s, transform 0.2s",
  },
  dotActive: {
    background: "#fff",
    transform: "scale(1.35)",
  },
  counter: {
    color: "#aaa",
    fontSize: "13px",
    minWidth: "48px",
    textAlign: "right",
  },
  empty: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
    color: "#888",
    fontSize: "15px",
    border: "1px dashed #333",
    borderRadius: "12px",
  },
};
