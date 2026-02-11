export class SoundManager {
    constructor() {
        this.audio = new Audio('/valentines2026/music.mp3');
        this.audio.loop = true;
        this.audio.volume = 0.5;
        this.isPlaying = false;
        this.btn = document.getElementById('music-toggle');
        this.btnText = this.btn?.querySelector('span.text');

        // Add visualizer bars to button
        if (this.btn) {
            const viz = document.createElement('div');
            viz.className = 'music-viz';
            viz.innerHTML = '<span></span><span></span><span></span>';
            this.btn.appendChild(viz);
            this.viz = viz;
        }

        this.init();
    }

    init() {
        if (!this.btn) return;

        this.btn.addEventListener('click', () => {
            this.toggle();
        });

        // Auto-play attempt on interaction
        document.addEventListener('click', () => {
            if (!this.isPlaying && this.audio.paused) {
                // Optional: uncomment to auto-start on first click
                // this.play(); 
            }
        }, { once: true });
    }

    toggle() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        this.audio.play().then(() => {
            this.isPlaying = true;
            this.btn.classList.add('playing');
            if (this.btnText) this.btnText.textContent = 'PLAYING OUR SONG';
        }).catch(e => {
            console.log('Audio play failed:', e);
        });
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.btn.classList.remove('playing');
        if (this.btnText) this.btnText.textContent = 'VALENTINE.MP3';
    }
}

export function initAudio() {
    return new SoundManager();
}
