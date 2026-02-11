import './style.css';
import { initHero } from './components/hero.js';
import { initStory } from './components/story.js';
import { initAudio } from './components/audio.js';
import { initTimer } from './components/timer.js';
import { initUI } from './components/ui.js';

// ─── Build the HTML ────────────────────────
document.querySelector('#app').innerHTML = `
  <!-- Three.js Background Canvas -->
  <canvas id="bg-canvas"></canvas>

  <!-- Film Grain Overlay -->
  <div class="film-grain"></div>

  <!-- Background Scene -->
  <div class="hero-bg">
    <div class="gradient-layer"></div>
    <div class="nebula nebula-1"></div>
    <div class="nebula nebula-2"></div>
  </div>

  <!-- Light Leaks -->
  <div class="light-leak" style="top:-25%; left:-25%; width:50%; height:50%; background:rgba(238,43,75,0.08);"></div>
  <div class="light-leak" style="bottom:-25%; right:-25%; width:50%; height:50%; background:rgba(212,175,55,0.04);"></div>

  <!-- Header -->
  <header class="site-header">
    <div class="site-logo">
      <div class="icon-wrap">
        <span style="font-size:1.2rem;">❤️</span>
      </div>
      <span>The Archive of Us</span>
    </div>
    <div class="header-nav">
      <button class="music-btn" id="music-toggle">
        <span class="text">VALENTINE.MP3</span>
        🎵
      </button>
    </div>
  </header>

  <main>
    <!-- ═══════ HERO ═══════ -->
    <section id="hero">
      <!-- 3D Heart Visual (behind text) -->
      <div class="hero-heart-wrap">
        <div class="hero-heart-inner">
          <div class="hero-heart-shell"></div>
          <div class="hero-heart-glow"></div>
          <img class="hero-heart-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKcp3ZQWkZIA5v0NbUEINgzaBbhv9eMekSgjlwPTjKAmnxcXxdYSisHchFSbZ7aZMY0tPKL9TTExGLa6Mx7dui6jRkcoOKGOGyH6qt7PXnx9_F-B2fF3iWBCMYvFzr2p7B83hac9rR0aV1YED0shzbFa8JkPejGcuZrT4w-SMQtC9kuPqHqEbNPs3zUqvEAewugMz0HHvQXBUnK60q5nt0rk7ylBW1-oUnA5FVoh1l2VqlPNh4Y3wsUaq473IbVLHAlaKj4Os3eecY"
            alt="3D Glass Heart" />
          <div class="hero-caustic"></div>
        </div>
      </div>

      <!-- Ambient Particles -->
      <div class="ambient-particle" style="top:5rem; left:15%; width:0.5rem; height:0.5rem; background:rgba(238,43,75,0.4); filter:blur(2px);"></div>
      <div class="ambient-particle" style="top:33%; left:25%; width:0.25rem; height:0.25rem; background:rgba(255,255,255,0.3);"></div>
      <div class="ambient-particle" style="bottom:33%; right:33%; width:0.75rem; height:0.75rem; background:rgba(238,43,75,0.2); filter:blur(4px);"></div>
      <div class="ambient-particle" style="top:50%; right:10%; width:0.5rem; height:0.5rem; background:rgba(247,231,206,0.3); filter:blur(2px);"></div>

      <!-- Hero Text -->
      <div style="max-width: 56rem; position: relative; z-index: 20;">
        <p class="hero-subtitle">Our Story. Part One.</p>
        <h1 class="hero-heading">
          From the Moment <br>
          <span class="highlight">I Found You</span>, <br>
          Everything Changed ❤️
        </h1>
      </div>
    </section>

    <!-- ═══════ SECTION 1: THE BEGINNING TIMELINE ═══════ -->
    <section class="section-beginning" id="beginning">
      <div class="section-hero-heading">
        <h2>The Day My World <br><span class="highlight">Got Brighter</span></h2>
        <p>A cinematic journey back to the very first moments that changed the trajectory of my life forever.</p>
      </div>

      <div class="timeline">
        <div class="timeline-line"><div class="timeline-line-inner"></div></div>

        <!-- Memory 1 -->
        <div class="timeline-node">
          <div class="timeline-icon">
            <span style="font-size:1rem;">✨</span>
          </div>
          <div class="memory-frame">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc9NUL5y995fbzo-M31QOyX6m2Cref1iOYVSI3YBfb44EDtQX4nenWkuhqbmhYtQAledbDFFtUNHclehEfRpSVJKxSKiQv_CDhEX4aKlFu5M4c74GlooY7Bh6YMiMs5Wa_l3DLbi1mcTat77XGL36Mr6HS-jQV9DnRwhh7HOklysV04kZqwDuZaXDo_gOgQyOkDQy2WLUu5H9XX8POhAQdFpGKSXYKAWgjpjmkb5gQIdW6spxpFVWz1XzM6KkoiWstn78KuOZVSlKb"
              alt="The First Smile" />
            <div class="overlay"></div>
            <div class="content">
              <span class="date-label">The Beginning</span>
              <h3>The First Smile</h3>
              <p>Time seemed to pause when I first saw you. It wasn't just a smile; it was the dawn of a new world I didn't know I was waiting for.</p>
            </div>
          </div>
        </div>

        <!-- Memory 2 -->
        <div class="timeline-node">
          <div class="timeline-icon">
            <span style="font-size:1rem;">💬</span>
          </div>
          <div class="memory-frame">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL_6xF11NSbe_cMLfwOLcexXHvW6bNXrMVL6j4Q5Jp-z5rtMwIPdq3f6_PrvOmLz6GAkq04sLib90rc9CODhTB9DfS8VvIpCHvGtO2A-KJy2F6J2hIFp94kEtPnKuQLDO16XsyetZxF6fQSq9bIhC_Y1RHZmD8Cs4vW-o0Jfl8j4-Kgn3EB0rjvxovolzmye-nn0mzjAt4u5hGXJCwqKoErfNl65MskbyLLB3wu9AWg2_lNwT9zjsJCWtrh_voeTpNsE23ODiqVH6Q"
              alt="The First Conversation" />
            <div class="overlay"></div>
            <div class="content">
              <span class="date-label">The Spark</span>
              <h3>The First Conversation</h3>
              <p>Hours felt like minutes. We spoke about everything and nothing, and for the first time, I felt truly understood.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════ SECTION 2: FALLING IN LOVE (ROSES) ═══════ -->
    <section class="section-roses" id="falling">
      <div class="roses-bg">
        <div class="rose-left"></div>
        <div class="rose-right"></div>
      </div>

      <!-- Drifting Petals -->
      <div class="petal" style="top:-10%; left:10%; width:2rem; height:2rem; background:rgba(238,43,75,0.4); animation: drift 20s linear infinite;"></div>
      <div class="petal" style="top:-5%; left:40%; width:1.5rem; height:1rem; background:rgba(238,43,75,0.6); animation: drift 15s linear infinite reverse;"></div>
      <div class="petal" style="top:-15%; left:70%; width:2.5rem; height:2.5rem; background:rgba(238,43,75,0.3); filter:blur(4px); animation: drift 20s linear infinite;"></div>
      <div class="petal" style="top:20%; left:85%; width:1.25rem; height:1.25rem; background:rgba(238,43,75,0.5); animation: drift 15s linear infinite reverse;"></div>

      <div class="roses-content">
        <div class="part-label">Part II: The Awakening</div>
        <h2>I Fell For You, <br><span class="italic-light">Slowly…</span> <br>Then All At Once</h2>
        <div class="divider-line"></div>
        <p class="story-text">Like a rose claiming its color from the dawn, my heart found its rhythm in the quiet moments we shared.</p>
      </div>

      <!-- Ambient light flares -->
      <div style="position:absolute; top:25%; left:25%; width:24rem; height:24rem; background:rgba(238,43,75,0.1); border-radius:50%; filter:blur(120px); pointer-events:none;"></div>
      <div style="position:absolute; bottom:25%; right:25%; width:16rem; height:16rem; background:rgba(238,43,75,0.2); border-radius:50%; filter:blur(100px); pointer-events:none;"></div>
    </section>

    <!-- ═══════ SECTION 3: OUR JOURNEY (TIMER) ═══════ -->
    <section class="section-timer" id="timer-section">
      <div class="timer-content reveal-text">
        <h2>We've Been In Love For...</h2>
        <div id="timer-container" class="timer-grid">
          <div class="timer-box"><span id="t-years">0</span><label>Years</label></div>
          <div class="timer-box"><span id="t-days">0</span><label>Days</label></div>
          <div class="timer-box"><span id="t-hours">0</span><label>Hours</label></div>
          <div class="timer-box"><span id="t-minutes">0</span><label>Mins</label></div>
          <div class="timer-box"><span id="t-seconds">0</span><label>Secs</label></div>
        </div>
        <p>...and every second has been magic. ✨</p>
      </div>
    </section>

    <!-- ═══════ SECTION 4: MEMORY LANE (GALLERY) ═══════ -->
    <section class="section-gallery" id="gallery">
      <h2 class="reveal-text">Our <span class="highlight">Memory Lane</span></h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="https://picsum.photos/400/600?random=1" alt="Memory"></div>
        <div class="gallery-item"><img src="https://picsum.photos/400/400?random=2" alt="Memory"></div>
        <div class="gallery-item"><img src="https://picsum.photos/400/500?random=3" alt="Memory"></div>
        <div class="gallery-item"><img src="https://picsum.photos/400/450?random=4" alt="Memory"></div>
        <div class="gallery-item"><img src="https://picsum.photos/400/550?random=5" alt="Memory"></div>
        <div class="gallery-item"><img src="https://picsum.photos/400/400?random=6" alt="Memory"></div>
      </div>
    </section>

    <!-- ═══════ SECTION 5: BUCKET LIST & LOVE NOTE ═══════ -->
    <section class="section-interactive">
      <!-- Bucket List -->
      <div class="bucket-list glass-card reveal-text">
        <h3>Our Bucket List 🌍</h3>
        <ul class="bucket-items">
          <li class="bucket-item"><span>✈️</span> See the Northern Lights</li>
          <li class="bucket-item"><span>🐶</span> Adopt a Puppy</li>
          <li class="bucket-item"><span>🍝</span> Learn to Cook Pasta in Italy</li>
          <li class="bucket-item"><span>🏡</span> Build Our Dream Home</li>
          <li class="bucket-item"><span>💍</span> Grow Old Together</li>
        </ul>
      </div>

      <!-- Love Note Envelope -->
      <div class="envelope-wrapper reveal-text">
        <div class="envelope">
          <div class="front flap"></div>
          <div class="front pocket"></div>
          <div class="letter">
            <div class="letter-content">
              <p>My Dearest,</p>
              <p>You are the finest, loveliest, tenderest, and most beautiful person I have ever known—and even that is an understatement.</p>
              <p>Happy Valentine's Day! ❤️</p>
            </div>
          </div>
          <div class="heart-seal">❤️</div>
        </div>
        <p class="click-hint">(Click to Open)</p>
      </div>
    </section>

    <!-- ═══════ SECTION 6: REASONS I LOVE YOU ═══════ -->
    <section class="section-reasons" id="reasons">
      <!-- Background bokeh -->
      <div class="bokeh" style="top:-10%; left:-10%; width:24rem; height:24rem; background:rgba(238,43,75,0.2);"></div>
      <div class="bokeh" style="bottom:-20%; right:-5%; width:31rem; height:31rem; background:rgba(238,43,75,0.1);"></div>
      <div class="bokeh" style="top:40%; right:10%; width:16rem; height:16rem; background:rgba(238,43,75,0.15);"></div>

      <header class="reasons-header">
        <div class="reasons-badge">
          <span>❤️</span>
          <span>Section 04</span>
        </div>
        <h2>Reasons I <span class="highlight">Love</span> You</h2>
        <p>A few of the infinite reasons why my world is brighter with you in it.</p>
      </header>

      <div class="reasons-grid" id="cards-container"></div>

      <div class="continue-scroll">
        <button class="circle-btn" onclick="document.getElementById('ending').scrollIntoView({behavior:'smooth'})">
          <span style="font-size:1.5rem;">↓</span>
        </button>
        <span class="label">Continue Scrolling</span>
      </div>
    </section>

    <!-- ═══════ FINAL: THE VALENTINE PROPOSAL ═══════ -->
    <section class="section-final" id="ending">
      <div class="vignette"></div>

      <!-- CSS Particles -->
      <div class="css-particle red" style="width:0.5rem; height:0.5rem; top:20%; left:15%; opacity:0.4;"></div>
      <div class="css-particle red" style="width:0.25rem; height:0.25rem; top:45%; left:80%; opacity:0.6;"></div>
      <div class="css-particle gold" style="width:0.75rem; height:0.75rem; top:70%; left:25%; opacity:0.3;"></div>
      <div class="css-particle gold" style="width:0.25rem; height:0.25rem; top:10%; left:60%; opacity:0.5;"></div>
      <div class="css-particle red" style="width:0.5rem; height:0.5rem; top:85%; left:85%; opacity:0.4;"></div>

      <div style="position:relative; z-index:10; display:flex; flex-direction:column; align-items:center; text-align:center; max-width:56rem; width:100;">

        <!-- Top label -->
        <div style="position:absolute; top:-8rem; left:50%; transform:translateX(-50%); opacity:0.4;">
          <span style="text-transform:uppercase; letter-spacing:0.5em; font-size:0.7rem; font-weight:600;">Our Eternal Journey</span>
        </div>

        <!-- Heart -->
        <div class="final-heart-wrap">
          <div class="final-heart-inner">
            <div class="glow-1"></div>
            <div class="glow-2"></div>
            <svg class="final-heart-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <!-- Floating particles around heart -->
            <div style="position:absolute; inset:0; animation: pulse 3s ease-in-out infinite;">
              <div style="position:absolute; top:0; right:0; width:0.5rem; height:0.5rem; background:var(--primary); border-radius:50%; filter:blur(1px);"></div>
              <div style="position:absolute; bottom:2.5rem; left:0; width:0.75rem; height:0.75rem; background:rgba(250,204,21,0.6); border-radius:50%; filter:blur(2px);"></div>
              <div style="position:absolute; top:50%; right:-1rem; width:0.25rem; height:0.25rem; background:#fff; border-radius:50%;"></div>
            </div>
          </div>
        </div>

        <p class="final-subtitle">Every moment led to this...</p>
        <h2 class="final-heading">
          Be My Valentine <br>
          <span class="gradient-text">Forever?</span>
        </h2>

        <div class="cta-wrapper">
          <div class="cta-glow"></div>
          <button class="cta-btn" id="yes-btn">
            <span>Yes, Always</span>
            <span>❤️</span>
          </button>
        </div>

        <div class="forever-msg" id="forever-msg">You are my forever. ❤️</div>

        <div class="final-footer">
          <div class="footer-line"></div>
          <p class="footer-text">With all my love, forever yours</p>
        </div>
      </div>

      <!-- Side info -->
      <div class="final-side-info left">
        <p class="label">Our Date</p>
        <p class="value">February 14, 2026</p>
      </div>
      <div class="final-side-info right">
        <p class="label">Location</p>
        <p class="value">Deep In My Heart</p>
      </div>
    </section>
  </main>

  <!-- Scroll Indicator -->
  <div class="scroll-indicator" id="scroll-indicator">
    <span>Scroll to Begin Our Story</span>
    <div class="pulse-ring">
      <div class="ping"></div>
      <div class="ring"></div>
      <div class="center-btn">
        <span style="color:var(--primary); font-size:1.3rem;">↓</span>
      </div>
    </div>
  </div>
`;

// ─── Initialize ────────────────────────
initHero();
initStory();
initAudio();
initTimer('2024-02-14'); // Replace with your actual start date
initUI();

// ─── Hide scroll indicator on scroll ────────────────────────
const scrollInd = document.getElementById('scroll-indicator');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200 && scrollInd) {
    scrollInd.style.opacity = '0';
    scrollInd.style.pointerEvents = 'none';
  } else if (scrollInd) {
    scrollInd.style.opacity = '1';
    scrollInd.style.pointerEvents = 'auto';
  }
}, { passive: true });
