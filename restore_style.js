
const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'src', 'style_fixed_encoding.css');
const targetPath = path.join(__dirname, 'src', 'style.css');

const newStyles = `
/* ─── Timer Section ──────────────────────── */
.section-timer {
  padding: 8rem 1.5rem;
  text-align: center;
  background: radial-gradient(circle at center, #3a1a1f 0%, #12080a 100%);
  position: relative;
  z-index: 10;
}

.timer-content h2 {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--champagne);
}

.timer-grid {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.timer-box {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1.5rem 1rem;
  min-width: 100px;
  border-radius: 12px;
  border: 1px solid rgba(238, 43, 75, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer-box span {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

.timer-box label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
  opacity: 0.7;
}

/* ─── Gallery Section ──────────────────────── */
.section-gallery {
  padding: 6rem 1.5rem;
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
  position: relative;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.gallery-item {
  border-radius: 12px;
  overflow: hidden;
  height: 300px;
  position: relative;
  transition: transform 0.4s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.gallery-item:hover {
  transform: translateY(-10px) scale(1.02);
  z-index: 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* ─── Interactive Section ──────────────────────── */
.section-interactive {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  padding: 6rem 1.5rem;
  z-index: 10;
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
}

/* Bucket List */
.bucket-list {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  padding: 2rem;
  border-radius: 20px;
}

.bucket-list h3 {
  font-family: var(--font-serif);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--champagne);
  text-align: center;
}

.bucket-items {
  list-style: none;
}

.bucket-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.1rem;
}

.bucket-item:last-child {
  border-bottom: none;
}

.bucket-item:hover {
  padding-left: 0.5rem;
  color: var(--primary);
}

.bucket-item.completed {
  text-decoration: line-through;
  opacity: 0.5;
}

/* Envelope */
.envelope-wrapper {
  position: relative;
  width: 300px;
  height: 200px;
  margin-top: 2rem;
  cursor: pointer;
  perspective: 1000px;
}

.envelope {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f7e7ce;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

.front {
  position: absolute;
  width: 0;
  height: 0;
  z-index: 10;
}

.front.flap {
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-top: 110px solid #e6cba8; /* darker shade */
  top: 0;
  left: 0;
  transform-origin: top;
  transition: transform 0.6s 0.4s ease;
  z-index: 12;
}

.front.pocket {
  border-left: 150px solid #f0dcb5;
  border-right: 150px solid #f0dcb5;
  border-bottom: 120px solid #e1c49b;
  bottom: 0;
  left: 0;
  z-index: 11;
  border-radius: 0 0 10px 10px;
}

.letter {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 280px;
  height: 180px;
  background: #fff;
  border-radius: 5px;
  padding: 1.5rem;
  z-index: 5;
  transition: transform 0.8s 1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.letter-content {
  font-family: var(--font-serif);
  color: #333;
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: center;
}

.heart-seal {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  z-index: 13;
  transition: opacity 0.4s 0s;
}

/* Open State */
.envelope-wrapper.open .front.flap {
  transform: rotateX(180deg);
  z-index: 1;
  transition: transform 0.6s ease;
}

.envelope-wrapper.open .heart-seal {
  opacity: 0;
  transition-delay: 0.2s;
}

.envelope-wrapper.open .letter {
  transform: translateY(-120px);
  z-index: 20;
}

.click-hint {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

/* Audio Visualizer */
.music-viz {
  display: flex;
  gap: 2px;
  height: 12px;
  align-items: flex-end;
}

.music-viz span {
  width: 3px;
  background: var(--primary);
  animation: vizAnim 0.8s ease-in-out infinite alternate;
}

.music-viz span:nth-child(1) { height: 60%; animation-delay: 0s; }
.music-viz span:nth-child(2) { height: 30%; animation-delay: 0.2s; }
.music-viz span:nth-child(3) { height: 80%; animation-delay: 0.4s; }

.music-btn.playing .music-viz span {
  animation-play-state: running;
}

.music-btn:not(.playing) .music-viz span {
  animation-play-state: paused;
  height: 20%;
}

@keyframes vizAnim {
  0% { height: 20%; }
  100% { height: 100%; }
}

/* Reveal Animation Class */
.reveal-text {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease;
}

.reveal-text.reveal-active {
  opacity: 1;
  transform: translateY(0);
}
`;

try {
    const content = fs.readFileSync(sourcePath, 'utf8');
    const lines = content.split(/\r?\n/);

    // Find the end of the valid content.
    // We know it ends around line 1286 with a closing brace for the media query.
    // The line before that has ".roses-bg .rose-right {" (around 1283)

    let cutOffIndex = -1;

    // Search for the specific unique pattern near the end of the valid file
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('.roses-bg .rose-right {')) {
            // Continue a few lines to find the closing brace of the media query
            // typically 3 lines down: 
            // 1283:   .roses-bg .rose-right {
            // 1284:     opacity: 0.3;
            // 1285:   }
            // 1286: }

            // Let's safe-check a range
            if (lines[i + 3] && lines[i + 3].trim().startsWith('}')) {
                cutOffIndex = i + 3;
                break;
            }
        }
    }

    if (cutOffIndex !== -1) {
        // Keep lines 0 to cutOffIndex (inclusive)
        // Actually, lines[cutOffIndex] might have garbage appended to the "}"
        // So we should strictly set lines[cutOffIndex] to just "}"

        // Check if lines[cutOffIndex] has garbage.
        const lastLine = lines[cutOffIndex];
        if (lastLine.includes('}')) {
            lines[cutOffIndex] = '}\n'; // Clean it up
        }

        const validContent = lines.slice(0, cutOffIndex + 1).join('\n');
        const finalContent = validContent + '\n' + newStyles;

        fs.writeFileSync(targetPath, finalContent, 'utf8');
        console.log(`Successfully restored style.css. Kept ${cutOffIndex + 1} lines of original code.`);
    } else {
        // Fallback: If we can't find the pattern, let's look for line 1286 directly if length permits
        if (lines.length >= 1286) {
            console.log('Pattern not found, falling back to hardcoded line 1286 cut.');
            lines[1286] = '}'; // Discard garbage, assume it was the closing brace
            const validContent = lines.slice(0, 1287).join('\n');
            const finalContent = validContent + '\n' + newStyles;
            fs.writeFileSync(targetPath, finalContent, 'utf8');
        } else {
            console.error('Could not find cutoff point in style.css');
            process.exit(1);
        }
    }

} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
