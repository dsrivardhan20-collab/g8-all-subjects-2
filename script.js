/**
 * ============================================================================
 * INTERACTIVE TELANGANA SCERT LEARNING PLATFORM — CLASS 8
 * Core JavaScript Application Engine
 * Premium 3D Digital Textbook + Interactive Museum + Learning Game
 * ============================================================================
 */

(function () {
    'use strict';

    /* ==========================================================================
       1. GLOBAL APPLICATION STATE & PERSISTENCE
       ========================================================================== */
    const AppState = {
        activeSubjectId: 'social-studies',
        activeChapterIdx: 0,
        activeTopicIdx: 0,
        activeFlowTab: 'read',
        activeParagraphIdx: 0,
        soundEnabled: true,
        perfMode: false,
        theme: 'dark',
        studentName: 'Student',
        progress: {
            completedTopics: {}, // 'subj-chap-topic' -> true
            quizScores: {},       // 'subj-chap-topic' -> score (0-5)
            examHighScores: {},   // 'subj-chap' -> score (0-20)
            earnedCertificates: [] // list of certificate records
        },
        // Active 3D Scene Controls
        autoRotate3D: true,
        cameraResetTrigger: null,
        // Active Exam State
        examActive: false,
        examQuestions: [],
        examAnswers: [],
        examFlagged: [],
        examCurrentQIdx: 0,
        examTimerSeconds: 1200, // 20 minutes
        examTimerInterval: null
    };

    // Load persisted state from localStorage
    function loadPersistedState() {
        try {
            const savedTheme = localStorage.getItem('scert_c8_theme');
            if (savedTheme) AppState.theme = savedTheme;

            const savedPerf = localStorage.getItem('scert_c8_perf');
            if (savedPerf) AppState.perfMode = savedPerf === 'true';

            const savedAudio = localStorage.getItem('scert_c8_audio');
            if (savedAudio !== null) AppState.soundEnabled = savedAudio === 'true';

            const savedName = localStorage.getItem('scert_c8_student_name');
            if (savedName) AppState.studentName = savedName;

            const savedProg = localStorage.getItem('scert_c8_progress');
            if (savedProg) {
                const parsed = JSON.parse(savedProg);
                AppState.progress = Object.assign(AppState.progress, parsed);
            }

            const lastVisited = localStorage.getItem('scert_c8_last_visited');
            if (lastVisited) {
                const lv = JSON.parse(lastVisited);
                if (lv.subj && window.SCERT_DATA && window.SCERT_DATA[lv.subj]) {
                    AppState.activeSubjectId = lv.subj;
                    AppState.activeChapterIdx = lv.chap || 0;
                    AppState.activeTopicIdx = lv.topic || 0;
                }
            }
        } catch (e) {
            console.warn('Storage parsing error:', e);
        }
    }

    function saveState() {
        try {
            localStorage.setItem('scert_c8_theme', AppState.theme);
            localStorage.setItem('scert_c8_perf', AppState.perfMode);
            localStorage.setItem('scert_c8_audio', AppState.soundEnabled);
            localStorage.setItem('scert_c8_student_name', AppState.studentName);
            localStorage.setItem('scert_c8_progress', JSON.stringify(AppState.progress));
            localStorage.setItem('scert_c8_last_visited', JSON.stringify({
                subj: AppState.activeSubjectId,
                chap: AppState.activeChapterIdx,
                topic: AppState.activeTopicIdx
            }));
        } catch (e) {
            console.warn('Storage write error:', e);
        }
    }

    /* ==========================================================================
       2. PROCEDURAL WEB AUDIO SYNTHESIZER (ZERO EXTERNAL MP3 DEPENDENCIES)
       ========================================================================== */
    let audioCtx = null;
    function getAudioContext() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) audioCtx = new AudioContext();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    const SoundFX = {
        click: function () {
            if (!AppState.soundEnabled) return;
            const ctx = getAudioContext();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.04);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.04);
        },
        correct: function () {
            if (!AppState.soundEnabled) return;
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;
            [523.25, 659.25, 783.99].forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + idx * 0.08);
                gain.gain.setValueAtTime(0.12, now + idx * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + idx * 0.08);
                osc.stop(now + idx * 0.08 + 0.25);
            });
        },
        wrong: function () {
            if (!AppState.soundEnabled) return;
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.linearRampToValueAtTime(120, now + 0.2);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.2);
        },
        flip: function () {
            if (!AppState.soundEnabled) return;
            const ctx = getAudioContext();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(350, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.06, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.08);
        },
        fanfare: function () {
            if (!AppState.soundEnabled) return;
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;
            const notes = [
                { f: 523.25, t: 0, d: 0.15 },
                { f: 659.25, t: 0.15, d: 0.15 },
                { f: 783.99, t: 0.3, d: 0.2 },
                { f: 1046.50, t: 0.5, d: 0.5 }
            ];
            notes.forEach(n => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(n.f, now + n.t);
                gain.gain.setValueAtTime(0.18, now + n.t);
                gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + n.t);
                osc.stop(now + n.t + n.d);
            });
        }
    };

    /* ==========================================================================
       3. DYNAMIC 3D BACKGROUND WALLPAPER ENGINE
       ========================================================================== */
    let bgCanvas, bgCtx, bgAnimationId;
    let bgParticles = [];
    let mousePos = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };

    function initBackgroundWallpaper() {
        bgCanvas = document.getElementById('bg-3d-canvas');
        if (!bgCanvas) return;
        bgCtx = bgCanvas.getContext('2d');

        function resize() {
            bgCanvas.width = window.innerWidth;
            bgCanvas.height = window.innerHeight;
            generateBgParticles();
        }
        window.addEventListener('resize', resize);
        resize();

        window.addEventListener('mousemove', (e) => {
            mousePos.targetX = e.clientX / window.innerWidth;
            mousePos.targetY = e.clientY / window.innerHeight;
        });

        startBgRenderLoop();
    }

    function generateBgParticles() {
        bgParticles = [];
        const count = AppState.perfMode ? 35 : 90;
        const w = bgCanvas.width;
        const h = bgCanvas.height;

        for (let i = 0; i < count; i++) {
            bgParticles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                z: Math.random() * 3 + 0.5,
                radius: Math.random() * 2.5 + 1,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                pulse: Math.random() * Math.PI * 2,
                char: getRandomSubjectSymbol(AppState.activeSubjectId)
            });
        }
    }

    function getRandomSubjectSymbol(subjectId) {
        const symbolMap = {
            'social-studies': ['🌍', '🧭', '🗺️', '🏛️', '⛰️', '☀️'],
            'physical-sciences': ['⚡', '⚛️', '🧲', '💡', '〰️', '🔥'],
            'biology': ['🧬', '🔬', '🌱', '🦠', '🍃', '🧫'],
            'mathematics': ['π', '∑', '√', '∫', '∞', '📐'],
            'science': ['🔬', '⚛️', '🧪', '🌱', '⚡', '💡'],
            'english': ['📖', '✒️', '✨', '📜', '🪶', 'A']
        };
        const list = symbolMap[subjectId] || ['✨', '🎓'];
        return list[Math.floor(Math.random() * list.length)];
    }

    function startBgRenderLoop() {
        if (bgAnimationId) cancelAnimationFrame(bgAnimationId);

        function render(time) {
            // Smooth mouse parallax
            mousePos.x += (mousePos.targetX - mousePos.x) * 0.05;
            mousePos.y += (mousePos.targetY - mousePos.y) * 0.05;

            const w = bgCanvas.width;
            const h = bgCanvas.height;
            bgCtx.clearRect(0, 0, w, h);

            // Draw subject-specific thematic grid & elements
            drawSubjectBackgroundTheme(bgCtx, w, h, time);

            // Draw floating depth particles with parallax
            bgParticles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.pulse += 0.02;

                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                const parallaxX = p.x + (mousePos.x - 0.5) * 40 * p.z;
                const parallaxY = p.y + (mousePos.y - 0.5) * 40 * p.z;
                const alpha = (Math.sin(p.pulse) * 0.25 + 0.5) * (p.z / 3.5);

                bgCtx.save();
                bgCtx.globalAlpha = Math.max(0.1, Math.min(0.8, alpha));
                bgCtx.font = `${Math.floor(10 * p.z + 4)}px sans-serif`;
                bgCtx.textAlign = 'center';
                bgCtx.textBaseline = 'middle';
                bgCtx.fillText(p.char, parallaxX, parallaxY);
                bgCtx.restore();
            });

            bgAnimationId = requestAnimationFrame(render);
        }

        bgAnimationId = requestAnimationFrame(render);
    }

    function drawSubjectBackgroundTheme(ctx, w, h, time) {
        ctx.save();
        const t = time * 0.0005;
        const subj = AppState.activeSubjectId;

        if (subj === 'social-studies') {
            // Cartographic wireframe longitude/latitude rings
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
            ctx.lineWidth = 1.5;
            const cx = w * 0.5 + (mousePos.x - 0.5) * 50;
            const cy = h * 0.5 + (mousePos.y - 0.5) * 50;
            for (let r = 80; r < 500; r += 70) {
                ctx.beginPath();
                ctx.ellipse(cx, cy, r, r * 0.45 + Math.sin(t + r) * 10, t * 0.2, 0, Math.PI * 2);
                ctx.stroke();
            }
        } else if (subj === 'physical-sciences') {
            // Sine waves representing light and electromagnetic waves
            ctx.lineWidth = 2;
            for (let k = 0; k < 3; k++) {
                ctx.strokeStyle = k % 2 === 0 ? 'rgba(56, 189, 248, 0.04)' : 'rgba(244, 63, 94, 0.04)';
                ctx.beginPath();
                for (let x = 0; x < w; x += 20) {
                    const y = h * 0.5 + Math.sin(x * 0.005 + t * 2 + k) * (60 + k * 20);
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
        } else if (subj === 'biology') {
            // DNA double-helix spiral curves
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.05)';
            ctx.lineWidth = 2;
            const cx = w * 0.5;
            for (let y = 0; y < h; y += 40) {
                const offset1 = Math.sin(y * 0.02 + t * 2) * 120;
                const offset2 = -offset1;
                ctx.beginPath();
                ctx.moveTo(cx + offset1, y);
                ctx.lineTo(cx + offset2, y);
                ctx.stroke();
            }
        } else if (subj === 'mathematics') {
            // 3D Perspective coordinate grid
            ctx.strokeStyle = 'rgba(245, 158, 11, 0.04)';
            ctx.lineWidth = 1;
            const horizon = h * 0.6;
            const vanishX = w * 0.5 + (mousePos.x - 0.5) * 80;

            for (let x = -w * 0.5; x <= w * 1.5; x += 100) {
                ctx.beginPath();
                ctx.moveTo(vanishX, horizon);
                ctx.lineTo(x, h);
                ctx.stroke();
            }
            for (let y = horizon + 20; y < h; y += 30) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
        } else if (subj === 'english') {
            // Floating parchment runes and golden constellation lines
            ctx.strokeStyle = 'rgba(129, 140, 248, 0.04)';
            ctx.lineWidth = 1;
            for (let i = 0; i < 6; i++) {
                const px1 = (w * 0.2 * i + t * 30) % w;
                const py1 = (h * 0.3 * i + Math.sin(t + i) * 80) % h;
                ctx.beginPath();
                ctx.arc(px1, py1, 30 + i * 5, 0, Math.PI * 2);
                ctx.stroke();
            }
        }
        ctx.restore();
    }

    /* ==========================================================================
       4. MAGIC 3D OPENING SCREEN LOGIC
       ========================================================================= */
    function initOpeningScreen() {
        const openingScreen = document.getElementById('opening-screen');
        const openingCanvas = document.getElementById('opening-canvas');
        const bookElem = document.getElementById('opening-book');
        const btnEnter = document.getElementById('btn-enter-world');
        const btnSkip = document.getElementById('btn-skip-intro');

        if (!openingScreen) return;

        // Opening starry cosmic canvas
        let opCtx, opAnimId;
        if (openingCanvas) {
            opCtx = openingCanvas.getContext('2d');
            openingCanvas.width = window.innerWidth;
            openingCanvas.height = window.innerHeight;

            const stars = Array.from({ length: 150 }, () => ({
                x: Math.random() * openingCanvas.width,
                y: Math.random() * openingCanvas.height,
                radius: Math.random() * 2,
                alpha: Math.random(),
                speed: Math.random() * 0.02 + 0.005
            }));

            function renderStars() {
                opCtx.clearRect(0, 0, openingCanvas.width, openingCanvas.height);
                stars.forEach(s => {
                    s.alpha += s.speed;
                    const a = Math.sin(s.alpha) * 0.5 + 0.5;
                    opCtx.fillStyle = `rgba(255, 255, 255, ${a})`;
                    opCtx.beginPath();
                    opCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                    opCtx.fill();
                });
                opAnimId = requestAnimationFrame(renderStars);
            }
            opAnimId = requestAnimationFrame(renderStars);
        }

        // Sequence: Open book after 800ms
        setTimeout(() => {
            if (bookElem) bookElem.classList.add('opened');
            SoundFX.flip();
        }, 800);

        function closeOpening() {
            if (opAnimId) cancelAnimationFrame(opAnimId);
            openingScreen.classList.add('hide');
            SoundFX.click();
            setTimeout(() => {
                openingScreen.style.display = 'none';
            }, 800);
        }

        if (btnEnter) btnEnter.addEventListener('click', closeOpening);
        if (btnSkip) btnSkip.addEventListener('click', closeOpening);
    }

    /* ==========================================================================
       5. 3D LEARNING VISUALIZER (INTERACTIVE WEBGL & 3D CANVAS ENGINE)
       ========================================================================= */
    let learnCanvas, learnCtx, learnAnimId;
    let currentSceneKey = 'globe-historical';
    let sceneAngle = 0;
    let sceneZoom = 1;
    let sceneCustomParams = {};

    function initLearningVisualizer() {
        learnCanvas = document.getElementById('learning-3d-canvas');
        if (!learnCanvas) return;
        learnCtx = learnCanvas.getContext('2d');

        function resize() {
            const rect = learnCanvas.parentElement.getBoundingClientRect();
            learnCanvas.width = rect.width || 450;
            learnCanvas.height = rect.height || 380;
        }
        window.addEventListener('resize', resize);
        resize();

        // Canvas interactive mouse dragging to rotate in 3D
        let isDragging = false;
        let lastMouseX = 0;
        let lastMouseY = 0;

        learnCanvas.addEventListener('mousedown', (e) => {
            isDragging = true;
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const dx = e.clientX - lastMouseX;
            const dy = e.clientY - lastMouseY;
            sceneAngle += dx * 0.01;
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
        });

        window.addEventListener('mouseup', () => { isDragging = false; });

        // Touch support
        learnCanvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                lastMouseX = e.touches[0].clientX;
            }
        });

        learnCanvas.addEventListener('touchmove', (e) => {
            if (!isDragging || e.touches.length !== 1) return;
            const dx = e.touches[0].clientX - lastMouseX;
            sceneAngle += dx * 0.015;
            lastMouseX = e.touches[0].clientX;
        });

        learnCanvas.addEventListener('touchend', () => { isDragging = false; });

        // Auto-spin button toggle
        const btnRotate = document.getElementById('btn-3d-rotate');
        if (btnRotate) {
            btnRotate.addEventListener('click', () => {
                AppState.autoRotate3D = !AppState.autoRotate3D;
                btnRotate.classList.toggle('active', AppState.autoRotate3D);
                SoundFX.click();
            });
        }

        // Reset camera button
        const btnReset = document.getElementById('btn-3d-reset');
        if (btnReset) {
            btnReset.addEventListener('click', () => {
                sceneAngle = 0;
                sceneZoom = 1;
                SoundFX.click();
            });
        }

        // Fullscreen 3D button
        const btnFullscreen = document.getElementById('btn-3d-fullscreen');
        if (btnFullscreen) {
            btnFullscreen.addEventListener('click', () => {
                const card = document.getElementById('visual-viewport-card');
                if (!document.fullscreenElement) {
                    card.requestFullscreen().catch(err => console.log(err));
                } else {
                    document.exitFullscreen();
                }
                SoundFX.click();
            });
        }

        startLearningVisualRenderLoop();
    }

    function switchLearning3DScene(sceneKey, sceneTitle) {
        currentSceneKey = sceneKey || 'globe-historical';
        const vpTitle = document.getElementById('vp-scene-title');
        if (vpTitle) vpTitle.textContent = sceneTitle || '3D Interactive Learning Visual';

        // Update Overlay Controls on 3D Viewport
        buildVisualControlsOverlay(currentSceneKey);
    }

    function buildVisualControlsOverlay(sceneKey) {
        const overlay = document.getElementById('canvas-3d-controls-overlay');
        if (!overlay) return;
        overlay.innerHTML = '';

        if (sceneKey.includes('globe') || sceneKey.includes('map')) {
            overlay.innerHTML = `
                <button class="sim-control-pill active" data-action="mercator">🌐 Mercator Grid</button>
                <button class="sim-control-pill" data-action="idrisi">🧭 Al-Idrisi (South-Up)</button>
                <button class="sim-control-pill" data-action="babylon">🏺 Babylonian Disc</button>
            `;
        } else if (sceneKey.includes('force')) {
            overlay.innerHTML = `
                <button class="sim-control-pill active" data-action="toggle-vectors">⚖️ Toggle Vectors</button>
                <button class="sim-control-pill" data-action="add-force">➕ Push Force (10N)</button>
                <button class="sim-control-pill" data-action="reset-force">🔄 Reset Balance</button>
            `;
        } else if (sceneKey.includes('friction')) {
            overlay.innerHTML = `
                <button class="sim-control-pill active" data-action="dry-surface">🧱 Dry Rough Surface</button>
                <button class="sim-control-pill" data-action="lubricate">🛢️ Add Lubricant Oil</button>
                <button class="sim-control-pill" data-action="ball-bearings">⚙️ Ball Bearings</button>
            `;
        } else if (sceneKey.includes('cell')) {
            overlay.innerHTML = `
                <button class="sim-control-pill active" data-action="plant-cell">🍃 Plant Cell</button>
                <button class="sim-control-pill" data-action="animal-cell">🐾 Animal Cell</button>
                <button class="sim-control-pill" data-action="highlight-nucleus">🧠 Highlight Nucleus</button>
            `;
        } else if (sceneKey.includes('polyhedra') || sceneKey.includes('math')) {
            overlay.innerHTML = `
                <button class="sim-control-pill active" data-action="cube">🎲 Cube (V8 E12 F6)</button>
                <button class="sim-control-pill" data-action="prism">📦 Triangular Prism</button>
                <button class="sim-control-pill" data-action="pyramid">🔺 Square Pyramid</button>
                <button class="sim-control-pill" data-action="unfold-net">📄 Unfold 2D Net</button>
            `;
        } else if (sceneKey.includes('light') || sceneKey.includes('reflection')) {
            overlay.innerHTML = `
                <button class="sim-control-pill active" data-action="angle-30">Angle: 30°</button>
                <button class="sim-control-pill" data-action="angle-45">Angle: 45°</button>
                <button class="sim-control-pill" data-action="angle-60">Angle: 60°</button>
            `;
        }

        // Bind clicks on control pills
        overlay.querySelectorAll('.sim-control-pill').forEach(btn => {
            btn.addEventListener('click', (e) => {
                overlay.querySelectorAll('.sim-control-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                sceneCustomParams.action = btn.getAttribute('data-action');
                SoundFX.click();
            });
        });
    }

    function startLearningVisualRenderLoop() {
        if (learnAnimId) cancelAnimationFrame(learnAnimId);

        function render(time) {
            if (AppState.autoRotate3D) {
                sceneAngle += 0.008;
            }

            const w = learnCanvas.width;
            const h = learnCanvas.height;
            learnCtx.clearRect(0, 0, w, h);

            // Render active 3D educational scene
            renderSpecific3DScene(learnCtx, w, h, currentSceneKey, sceneAngle, time);

            learnAnimId = requestAnimationFrame(render);
        }

        learnAnimId = requestAnimationFrame(render);
    }

    function renderSpecific3DScene(ctx, w, h, key, angle, time) {
        ctx.save();
        const cx = w * 0.5;
        const cy = h * 0.5;

        // SCENE 1: HISTORICAL MAPS & GLOBE PROJECTIONS
        if (key.includes('globe') || key.includes('map') || key.includes('contour')) {
            const isIdrisi = sceneCustomParams.action === 'idrisi';
            const isBabylon = sceneCustomParams.action === 'babylon';

            if (isBabylon) {
                // Babylonian Circular Flat Disc
                ctx.fillStyle = '#1e293b';
                ctx.beginPath();
                ctx.arc(cx, cy, 110, 0, Math.PI * 2);
                ctx.fill();

                // Bitter River Outer Ring
                ctx.strokeStyle = '#0284c7';
                ctx.lineWidth = 14;
                ctx.stroke();

                // Babylon Center Node
                ctx.fillStyle = '#f59e0b';
                ctx.beginPath();
                ctx.arc(cx, cy, 25, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 12px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('BABYLON', cx, cy + 4);
                ctx.fillStyle = '#38bdf8';
                ctx.fillText('Bitter Salt River Ocean', cx, cy + 135);
            } else {
                // 3D Sphere Globe Wireframe
                const globeR = 100;
                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 2;

                // Outer border
                ctx.beginPath();
                ctx.arc(cx, cy, globeR, 0, Math.PI * 2);
                ctx.stroke();

                // Rotating Latitude & Longitude Meridians
                const rot = isIdrisi ? -angle : angle;
                for (let i = -3; i <= 3; i++) {
                    const latOffset = i * 24;
                    const latR = Math.sqrt(Math.max(0, globeR * globeR - latOffset * latOffset));
                    ctx.strokeStyle = i === 0 ? '#f59e0b' : 'rgba(56, 189, 248, 0.4)'; // Equator in gold
                    ctx.beginPath();
                    ctx.ellipse(cx, cy + (isIdrisi ? -latOffset : latOffset), latR, latR * 0.3, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }

                // Longitude ellipses
                for (let lon = 0; lon < 4; lon++) {
                    const curAngle = rot + (lon * Math.PI) / 4;
                    const ewScale = Math.sin(curAngle);
                    ctx.strokeStyle = lon === 0 ? '#10b981' : 'rgba(56, 189, 248, 0.35)'; // Prime Meridian in emerald
                    ctx.beginPath();
                    ctx.ellipse(cx, cy, globeR * Math.abs(ewScale), globeR, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }

                // Labels
                ctx.fillStyle = isIdrisi ? '#f43f5e' : '#10b981';
                ctx.font = 'bold 12px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(isIdrisi ? 'SOUTH (Al-Idrisi Top)' : 'NORTH (Modern)', cx, cy - globeR - 12);
                ctx.fillStyle = isIdrisi ? '#10b981' : '#f43f5e';
                ctx.fillText(isIdrisi ? 'NORTH' : 'SOUTH', cx, cy + globeR + 18);
            }
        }
        // SCENE 2: FORCE VECTORS & EQUILIBRIUM
        else if (key.includes('force')) {
            const blockW = 120;
            const blockH = 70;
            const blockX = cx - blockW * 0.5;
            const blockY = cy - blockH * 0.5;

            // Surface plane
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(cx - 180, cy + blockH * 0.5);
            ctx.lineTo(cx + 180, cy + blockH * 0.5);
            ctx.stroke();

            // 3D Block
            ctx.fillStyle = '#0284c7';
            ctx.fillRect(blockX, blockY, blockW, blockH);
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2;
            ctx.strokeRect(blockX, blockY, blockW, blockH);

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 13px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('MASS (m = 5 kg)', cx, cy + 5);

            // Vector Arrows
            drawVectorArrow(ctx, cx, blockY, cx, blockY - 60, '#10b981', 'Normal Force FN (49 N)');
            drawVectorArrow(ctx, cx, blockY + blockH, cx, blockY + blockH + 60, '#f59e0b', 'Weight W = mg (49 N)');
            drawVectorArrow(ctx, blockX + blockW, cy, blockX + blockW + 70, cy, '#38bdf8', 'Applied Force FA (20 N)');
            drawVectorArrow(ctx, blockX, cy, blockX - 50, cy, '#f43f5e', 'Friction f (15 N)');
        }
        // SCENE 3: FRICTION MICROSCOPIC ASPERITIES
        else if (key.includes('friction')) {
            const isLubricated = sceneCustomParams.action === 'lubricate';
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 3;

            // Upper moving surface teeth
            ctx.beginPath();
            ctx.moveTo(cx - 160, cy - 20);
            for (let x = -160; x <= 160; x += 20) {
                const toothY = cy - 20 + ((x / 20) % 2 === 0 ? 15 : 0);
                ctx.lineTo(cx + x, toothY);
            }
            ctx.stroke();

            // Lower stationary surface teeth
            ctx.beginPath();
            ctx.moveTo(cx - 160, cy + 20);
            for (let x = -160; x <= 160; x += 20) {
                const toothY = cy + 20 - ((x / 20) % 2 === 0 ? 15 : 0);
                ctx.lineTo(cx + x, toothY);
            }
            ctx.stroke();

            if (isLubricated) {
                // Lubricant Oil Film
                ctx.fillStyle = 'rgba(245, 158, 11, 0.45)';
                ctx.fillRect(cx - 160, cy - 10, 320, 20);
                ctx.fillStyle = '#fde047';
                ctx.font = 'bold 13px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('🛢️ Separating Lubricant Film Barrier Active', cx, cy - 65);
            } else {
                ctx.fillStyle = '#f43f5e';
                ctx.font = 'bold 13px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('🛑 Interlocking Asperities (High Friction)', cx, cy - 65);
            }
        }
        // SCENE 4: 3D CELL EXPLORER (ANIMAL & PLANT)
        else if (key.includes('cell')) {
            const isPlant = sceneCustomParams.action !== 'animal-cell';
            const cellR = 100;

            if (isPlant) {
                // Plant Cell Wall (Hexagonal / Rectangular)
                ctx.strokeStyle = '#10b981';
                ctx.lineWidth = 6;
                ctx.strokeRect(cx - 110, cy - 90, 220, 180);

                ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
                ctx.fillRect(cx - 105, cy - 85, 210, 170);

                // Large Central Vacuole
                ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.ellipse(cx + 20, cy, 55, 45, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Chloroplasts
                for (let k = 0; k < 5; k++) {
                    const chX = cx - 70 + Math.cos(k * 1.2) * 35;
                    const chY = cy - 40 + Math.sin(k * 1.2) * 45;
                    ctx.fillStyle = '#22c55e';
                    ctx.beginPath();
                    ctx.ellipse(chX, chY, 14, 8, 0.4, 0, Math.PI * 2);
                    ctx.fill();
                }
            } else {
                // Animal Cell (Spherical Membrane)
                ctx.strokeStyle = '#a855f7';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(cx, cy, cellR, 0, Math.PI * 2);
                ctx.stroke();

                ctx.fillStyle = 'rgba(168, 85, 247, 0.12)';
                ctx.fill();
            }

            // Nucleus (Common to both)
            const nucX = isPlant ? cx - 45 : cx;
            const nucY = isPlant ? cy - 20 : cy;
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath();
            ctx.arc(nucX, nucY, 28, 0, Math.PI * 2);
            ctx.fill();

            // Nucleolus
            ctx.fillStyle = '#78350f';
            ctx.beginPath();
            ctx.arc(nucX, nucY, 10, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Nucleus', nucX, nucY + 45);
            ctx.fillStyle = isPlant ? '#10b981' : '#a855f7';
            ctx.fillText(isPlant ? 'PLANT CELL (Cell Wall + Chloroplast)' : 'ANIMAL CELL (Flexible Membrane)', cx, cy + 120);
        }
        // SCENE 5: 3D POLYHEDRA & GEOMETRY
        else if (key.includes('polyhedra') || key.includes('math')) {
            const shape = sceneCustomParams.action || 'cube';
            const size = 70;

            if (shape === 'cube') {
                // Draw 3D Cube with perspective
                const cosA = Math.cos(angle);
                const sinA = Math.sin(angle);

                const vertices = [
                    [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
                    [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
                ].map(v => {
                    // Rotate Y
                    const x1 = v[0] * cosA - v[2] * sinA;
                    const z1 = v[0] * sinA + v[2] * cosA;
                    // Rotate X
                    const y2 = v[1] * Math.cos(0.4) - z1 * Math.sin(0.4);
                    return [cx + x1 * size, cy + y2 * size];
                });

                const edges = [
                    [0, 1], [1, 2], [2, 3], [3, 0],
                    [4, 5], [5, 6], [6, 7], [7, 4],
                    [0, 4], [1, 5], [2, 6], [3, 7]
                ];

                ctx.strokeStyle = '#f59e0b';
                ctx.lineWidth = 2.5;
                edges.forEach(e => {
                    ctx.beginPath();
                    ctx.moveTo(vertices[e[0]][0], vertices[e[0]][1]);
                    ctx.lineTo(vertices[e[1]][0], vertices[e[1]][1]);
                    ctx.stroke();
                });

                vertices.forEach(v => {
                    ctx.fillStyle = '#38bdf8';
                    ctx.beginPath();
                    ctx.arc(v[0], v[1], 5, 0, Math.PI * 2);
                    ctx.fill();
                });

                ctx.fillStyle = '#fde047';
                ctx.font = 'bold 13px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText("Euler's Formula: V(8) - E(12) + F(6) = 2", cx, cy + 125);
            }
        }
        // SCENE 6: REFLECTION OF LIGHT & OPTICAL BENCH
        else if (key.includes('light') || key.includes('reflection')) {
            const incAngle = sceneCustomParams.action === 'angle-60' ? 60 : (sceneCustomParams.action === 'angle-30' ? 30 : 45);
            const rad = (incAngle * Math.PI) / 180;
            const rayLen = 140;

            // Plane Mirror
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(cx - 150, cy + 40);
            ctx.lineTo(cx + 150, cy + 40);
            ctx.stroke();

            // Normal line
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(cx, cy + 40);
            ctx.lineTo(cx, cy - 120);
            ctx.stroke();
            ctx.setLineDash([]);

            // Incident Ray (Laser Red)
            const ix = cx - Math.sin(rad) * rayLen;
            const iy = (cy + 40) - Math.cos(rad) * rayLen;
            drawVectorArrow(ctx, ix, iy, cx, cy + 40, '#f43f5e', `Incident Ray (i = ${incAngle}°)`);

            // Reflected Ray (Emerald Green)
            const rx = cx + Math.sin(rad) * rayLen;
            const ry = (cy + 40) - Math.cos(rad) * rayLen;
            drawVectorArrow(ctx, cx, cy + 40, rx, ry, '#10b981', `Reflected Ray (r = ${incAngle}°)`);

            ctx.fillStyle = '#fde047';
            ctx.font = 'bold 13px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(`Law of Reflection: ∠i (${incAngle}°) = ∠r (${incAngle}°)`, cx, cy + 90);
        }
        // DEFAULT / ENGLISH STORY REALM
        else {
            ctx.fillStyle = '#818cf8';
            ctx.font = 'bold 14px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('✨ 3D Educational Learning Scene Active', cx, cy);
        }

        ctx.restore();
    }

    function drawVectorArrow(ctx, fromX, fromY, toX, toY, color, label) {
        const headlen = 10;
        const dx = toX - fromX;
        const dy = toY - fromY;
        const angle = Math.atan2(dy, dx);

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 3;

        // Line
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();

        // Arrow head
        ctx.beginPath();
        ctx.moveTo(toX, toY);
        ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();

        if (label) {
            ctx.font = 'bold 11px sans-serif';
            ctx.fillText(label, toX + 5, toY - 5);
        }
    }

    /* ==========================================================================
       6. NAVIGATION & VIEW SWITCHING (DASHBOARD, CHAPTERS, LEARNING)
       ========================================================================== */
    function switchAppView(viewId) {
        document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
        const target = document.getElementById(viewId);
        if (target) target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function selectSubject(subjectId) {
        if (!window.SCERT_DATA || !window.SCERT_DATA[subjectId]) return;
        AppState.activeSubjectId = subjectId;
        AppState.activeChapterIdx = 0;
        AppState.activeTopicIdx = 0;

        // Update Wallpaper particles
        generateBgParticles();

        // Render Chapters List in browser view
        renderChapterBrowser(subjectId);
        switchAppView('view-chapter-browser');
        updateHeaderBreadcrumbs();
        saveState();
        SoundFX.click();
    }

    function renderChapterBrowser(subjectId) {
        const subjData = window.SCERT_DATA[subjectId];
        if (!subjData) return;

        const badge = document.getElementById('browser-subj-badge');
        const title = document.getElementById('browser-subj-title');
        const desc = document.getElementById('browser-subj-desc');
        const list = document.getElementById('chapters-list-container');

        if (badge) badge.textContent = subjData.name;
        if (title) title.textContent = `${subjData.name} — Class 8 Textbook`;
        if (desc) desc.textContent = subjData.tagline || subjData.description || 'Class 8 official syllabus.';

        if (!list) return;
        list.innerHTML = '';

        subjData.chapters.forEach((chap, idx) => {
            const card = document.createElement('div');
            card.className = 'chapter-tile-card';
            const topicCount = chap.topics ? chap.topics.length : 1;
            const isCompleted = AppState.progress.completedTopics[`${subjectId}-${idx}-0`] ? '✅ Completed' : '📖 Ready to Learn';

            card.innerHTML = `
                <span class="tile-num-badge">CHAPTER ${chap.chapterNum || idx + 1}</span>
                <h3 class="tile-title">${chap.title}</h3>
                <p class="tile-summary">${chap.summary || 'Master core textbook concepts, 3D simulations, and quizzes.'}</p>
                <div class="tile-footer">
                    <span><i class="fa-solid fa-list-check"></i> ${topicCount} Topic${topicCount > 1 ? 's' : ''}</span>
                    <span>${isCompleted}</span>
                </div>
            `;

            card.addEventListener('click', () => {
                AppState.activeChapterIdx = idx;
                AppState.activeTopicIdx = 0;
                loadTopicExperience(subjectId, idx, 0);
            });

            list.appendChild(card);
        });
    }

    function loadTopicExperience(subjectId, chapIdx, topicIdx) {
        const subjData = window.SCERT_DATA[subjectId];
        if (!subjData) return;
        const chapter = subjData.chapters[chapIdx];
        if (!chapter) return;
        const topic = chapter.topics ? chapter.topics[topicIdx] : null;
        if (!topic) return;

        AppState.activeSubjectId = subjectId;
        AppState.activeChapterIdx = chapIdx;
        AppState.activeTopicIdx = topicIdx;
        AppState.activeFlowTab = 'read';

        // Update Breadcrumbs
        updateHeaderBreadcrumbs();

        // Update Topic Header
        const chapLabel = document.getElementById('learn-chap-label');
        const topicTitle = document.getElementById('learn-topic-title');
        if (chapLabel) chapLabel.textContent = `Chapter ${chapter.chapterNum || chapIdx + 1}: ${chapter.title}`;
        if (topicTitle) topicTitle.textContent = topic.title;

        // Render Paragraph-Wise Reading
        renderParagraphWiseReading(topic);

        // Populate Info Boxes
        populateTopicInfoBoxes(topic);

        // Populate Practice Quiz
        renderPracticeQuiz(topic);

        // Populate Flashcards
        initFlashcards(topic);

        // Switch 3D scene
        const sceneKey = topic.visualScene || (topic.paragraphs && topic.paragraphs[0] ? topic.paragraphs[0].visualScene : 'globe-historical');
        const sceneLabel = topic.visualLabel || topic.title;
        switchLearning3DScene(sceneKey, sceneLabel);

        // Switch View
        switchAppView('view-learning');
        switchLearningSubTab('read');
        saveState();
        SoundFX.click();
    }

    function updateHeaderBreadcrumbs() {
        const subjData = window.SCERT_DATA[AppState.activeSubjectId];
        if (!subjData) return;
        const chapter = subjData.chapters[AppState.activeChapterIdx];
        const topic = chapter && chapter.topics ? chapter.topics[AppState.activeTopicIdx] : null;

        const bcSubj = document.getElementById('bc-subj-text');
        const bcChap = document.getElementById('bc-chap-text');
        const bcTopic = document.getElementById('bc-topic-text');

        if (bcSubj) bcSubj.textContent = subjData.name;
        if (bcChap && chapter) bcChap.textContent = `Ch ${chapter.chapterNum || AppState.activeChapterIdx + 1}: ${chapter.title}`;
        if (bcTopic && topic) bcTopic.textContent = topic.title;
    }

    /* ==========================================================================
       7. PARAGRAPH-WISE READING & UNDERLINED TEXT INTERACTIVITY
       ========================================================================== */
    function renderParagraphWiseReading(topic) {
        const container = document.getElementById('paragraph-learning-container');
        const phaseRow = document.getElementById('phase-pills-row');
        if (!container) return;
        container.innerHTML = '';
        if (phaseRow) phaseRow.innerHTML = '';

        const paragraphs = topic.paragraphs || [
            {
                num: 1,
                heading: topic.title,
                textbookIdea: topic.explanation || 'Detailed textbook concept explanation.',
                easyExplanation: topic.easyExplanation || 'A concise 2-line summary explaining the core idea in simple English.',
                visualScene: topic.visualScene || 'globe-historical',
                visualLabel: topic.visualLabel || '3D Visual Simulation'
            }
        ];

        paragraphs.forEach((p, idx) => {
            const card = document.createElement('div');
            card.className = `paragraph-block-card ${idx === 0 ? 'reading-active' : ''}`;
            card.setAttribute('data-pidx', idx);

            card.innerHTML = `
                <div class="p-header">
                    <span class="p-number-badge">${p.num || idx + 1}</span>
                    <h3>${p.heading || 'Concept Focus'}</h3>
                </div>
                <div class="textbook-idea-box">
                    ${p.textbookIdea}
                </div>
                <div class="easy-explanation-box">
                    <span class="easy-exp-tag"><i class="fa-solid fa-sparkles"></i> Easy 2-Line Explanation</span>
                    <p>${p.easyExplanation}</p>
                </div>
            `;

            // Click paragraph to sync 3D scene
            card.addEventListener('click', () => {
                container.querySelectorAll('.paragraph-block-card').forEach(c => c.classList.remove('reading-active'));
                card.classList.add('reading-active');
                if (phaseRow) {
                    phaseRow.querySelectorAll('.phase-pill-btn').forEach(pb => pb.classList.remove('active'));
                    const targetPill = phaseRow.querySelector(`[data-pill-idx="${idx}"]`);
                    if (targetPill) targetPill.classList.add('active');
                }
                switchLearning3DScene(p.visualScene || topic.visualScene, p.visualLabel || p.heading);
                SoundFX.click();
            });

            container.appendChild(card);

            // Phase indicator pill in right 3D viewport
            if (phaseRow) {
                const pill = document.createElement('button');
                pill.className = `phase-pill-btn ${idx === 0 ? 'active' : ''}`;
                pill.setAttribute('data-pill-idx', idx);
                pill.textContent = `P${p.num || idx + 1}: ${p.heading || 'Concept'}`;
                pill.addEventListener('click', () => {
                    card.click();
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
                phaseRow.appendChild(pill);
            }
        });

        // Bind interactive underlined text cards
        bindUnderlinedConceptModals(topic);
    }

    function bindUnderlinedConceptModals(topic) {
        document.querySelectorAll('.underlined-concept').forEach(elem => {
            elem.addEventListener('click', (e) => {
                e.stopPropagation();
                const conceptId = elem.getAttribute('data-concept');
                const cardData = (topic.underlinedCards || []).find(c => c.id === conceptId) || {
                    word: elem.textContent,
                    meaning: 'Important textbook concept definition from official Telangana SCERT Class 8 curriculum.',
                    simpleExplanation: 'Explained concisely to aid conceptual understanding and recall.',
                    example: 'Directly applicable in practical science and social geography.'
                };

                openConceptModal(cardData);
                SoundFX.click();
            });
        });
    }

    function openConceptModal(cardData) {
        const modal = document.getElementById('modal-concept');
        if (!modal) return;
        document.getElementById('m-concept-word').textContent = cardData.word;
        document.getElementById('m-concept-meaning').textContent = cardData.meaning;
        document.getElementById('m-concept-simple').textContent = cardData.simpleExplanation;
        document.getElementById('m-concept-example').textContent = cardData.example;
        modal.classList.remove('hide');
    }

    function populateTopicInfoBoxes(topic) {
        // Real Life
        const rlBox = document.getElementById('box-real-life');
        const rlText = document.getElementById('real-life-text');
        if (topic.realLife && rlText) {
            rlText.textContent = topic.realLife;
            rlBox.classList.remove('hide');
        } else if (rlBox) rlBox.classList.add('hide');

        // Remember
        const remBox = document.getElementById('box-remember');
        const remText = document.getElementById('remember-text');
        if (topic.remember && remText) {
            remText.textContent = topic.remember;
            remBox.classList.remove('hide');
        } else if (remBox) remBox.classList.add('hide');

        // Fun Fact
        const ffBox = document.getElementById('box-fun-fact');
        const ffText = document.getElementById('fun-fact-text');
        if (topic.funFact && ffText) {
            ffText.textContent = topic.funFact;
            ffBox.classList.remove('hide');
        } else if (ffBox) ffBox.classList.add('hide');

        // Vocabulary
        const vGrid = document.getElementById('vocab-grid-list');
        if (vGrid && topic.vocabulary) {
            vGrid.innerHTML = '';
            topic.vocabulary.forEach(v => {
                const item = document.createElement('div');
                item.className = 'vocab-pill';
                item.innerHTML = `<div class="vocab-word">${v.word}</div><div class="vocab-def">${v.meaning || v.def}</div>`;
                vGrid.appendChild(item);
            });
        }

        // Summary (Exactly 5 Points)
        const sList = document.getElementById('summary-points-list');
        if (sList && topic.summary) {
            sList.innerHTML = '';
            topic.summary.forEach(pt => {
                const li = document.createElement('li');
                li.textContent = pt;
                sList.appendChild(li);
            });
        }

        // Compare & Connect Table
        const cCard = document.getElementById('box-comparison');
        if (cCard && topic.comparison) {
            const thead = document.getElementById('comp-thead-row');
            const tbody = document.getElementById('comp-tbody');
            const vsBox = document.getElementById('comp-vs-summary');

            thead.innerHTML = topic.comparison.headers.map(h => `<th>${h}</th>`).join('');
            tbody.innerHTML = topic.comparison.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');
            if (vsBox) vsBox.textContent = topic.comparison.vsSummary || '';
            cCard.classList.remove('hide');
        } else if (cCard) cCard.classList.add('hide');

        // Bloom's Taxonomy
        const bList = document.getElementById('blooms-questions-list');
        if (bList && topic.blooms) {
            bList.innerHTML = '';
            topic.blooms.forEach(b => {
                const item = document.createElement('div');
                item.className = 'blooms-item';
                item.innerHTML = `
                    <span class="blooms-badge">${b.level}</span>
                    <div class="blooms-q">${b.q}</div>
                    <div class="blooms-a"><strong>Answer:</strong> ${b.a}</div>
                `;
                bList.appendChild(item);
            });
        }
    }

    /* ==========================================================================
       8. 5-STEP LEARNING FLOW (TABS SWITCHING)
       ========================================================================== */
    function switchLearningSubTab(tabName) {
        AppState.activeFlowTab = tabName;
        document.querySelectorAll('.flow-step-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
        });

        document.querySelectorAll('.learning-sub-view').forEach(v => v.classList.remove('active'));
        const activeSubView = document.getElementById(`tab-${tabName}`);
        if (activeSubView) activeSubView.classList.add('active');

        SoundFX.click();
    }

    /* ==========================================================================
       9. PRACTICE QUIZ (5 QUESTIONS WITH INSTANT GRADING & FEEDBACK)
       ========================================================================== */
    function renderPracticeQuiz(topic) {
        const list = document.getElementById('quiz-questions-list');
        const scoreDisplay = document.getElementById('quiz-live-score');
        if (!list) return;
        list.innerHTML = '';

        const questions = topic.quiz || [];
        let score = 0;
        if (scoreDisplay) scoreDisplay.textContent = `0 / ${questions.length}`;

        questions.forEach((q, qIdx) => {
            const card = document.createElement('div');
            card.className = 'quiz-item-card';

            const optsHTML = q.options.map((opt, oIdx) => `
                <button class="quiz-opt-btn" data-qidx="${qIdx}" data-oidx="${oIdx}">
                    <strong>${String.fromCharCode(65 + oIdx)}.</strong> ${opt}
                </button>
            `).join('');

            card.innerHTML = `
                <div class="quiz-q-text"><strong>Q${qIdx + 1}.</strong> ${q.q}</div>
                <div class="quiz-options">${optsHTML}</div>
                <div class="quiz-explanation-box hide" id="quiz-exp-${qIdx}">
                    <strong>Explanation:</strong> ${q.exp}
                </div>
            `;

            // Option selection handling
            card.querySelectorAll('.quiz-opt-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const selectedIdx = parseInt(btn.getAttribute('data-oidx'), 10);
                    const isCorrect = selectedIdx === q.correct;

                    // Disable all options in this question
                    card.querySelectorAll('.quiz-opt-btn').forEach((b, idx) => {
                        b.disabled = true;
                        if (idx === q.correct) b.classList.add('correct');
                        if (idx === selectedIdx && !isCorrect) b.classList.add('wrong');
                    });

                    // Reveal Explanation
                    const expBox = document.getElementById(`quiz-exp-${qIdx}`);
                    if (expBox) expBox.classList.remove('hide');

                    if (isCorrect) {
                        score++;
                        SoundFX.correct();
                    } else {
                        SoundFX.wrong();
                    }

                    if (scoreDisplay) scoreDisplay.textContent = `${score} / ${questions.length}`;

                    // Track score
                    const topicKey = `${AppState.activeSubjectId}-${AppState.activeChapterIdx}-${AppState.activeTopicIdx}`;
                    AppState.progress.quizScores[topicKey] = score;
                    if (score >= 3) {
                        AppState.progress.completedTopics[topicKey] = true;
                    }
                    saveState();
                });
            });

            list.appendChild(card);
        });
    }

    /* ==========================================================================
       10. REVISE: 3D FLIP FLASHCARDS
       ========================================================================== */
    let currentFlashcardIdx = 0;
    let flashcardList = [];

    function initFlashcards(topic) {
        flashcardList = topic.flashcards || [
            { q: 'What is the core textbook concept?', a: 'Mastering the fundamental SCERT Class 8 curriculum.' }
        ];
        currentFlashcardIdx = 0;
        updateFlashcardView();

        const cardElem = document.getElementById('active-flashcard');
        if (cardElem) {
            cardElem.onclick = () => {
                cardElem.classList.toggle('flipped');
                SoundFX.flip();
            };
        }

        const btnPrev = document.getElementById('btn-fc-prev');
        const btnNext = document.getElementById('btn-fc-next');
        const btnShuffle = document.getElementById('btn-fc-shuffle');

        if (btnPrev) btnPrev.onclick = () => {
            currentFlashcardIdx = (currentFlashcardIdx - 1 + flashcardList.length) % flashcardList.length;
            updateFlashcardView();
            SoundFX.click();
        };

        if (btnNext) btnNext.onclick = () => {
            currentFlashcardIdx = (currentFlashcardIdx + 1) % flashcardList.length;
            updateFlashcardView();
            SoundFX.click();
        };

        if (btnShuffle) btnShuffle.onclick = () => {
            flashcardList.sort(() => Math.random() - 0.5);
            currentFlashcardIdx = 0;
            updateFlashcardView();
            SoundFX.click();
        };
    }

    function updateFlashcardView() {
        const cardElem = document.getElementById('active-flashcard');
        if (cardElem) cardElem.classList.remove('flipped');

        const card = flashcardList[currentFlashcardIdx];
        if (!card) return;

        const qText = document.getElementById('fc-question-text');
        const aText = document.getElementById('fc-answer-text');
        const counter = document.getElementById('fc-counter');

        if (qText) qText.textContent = card.q;
        if (aText) aText.textContent = card.a;
        if (counter) counter.textContent = `${currentFlashcardIdx + 1} / ${flashcardList.length}`;
    }

    /* ==========================================================================
       11. CHAPTER FINAL TEST (20 QUESTIONS) & EXAM ENGINE
       ========================================================================== */
    function startChapterExam(subjectId, chapIdx) {
        const subjData = window.SCERT_DATA[subjectId];
        if (!subjData) return;
        const chapter = subjData.chapters[chapIdx];
        if (!chapter) return;

        // Compile 20 mixed questions for the chapter
        AppState.examQuestions = build20ChapterQuestions(chapter);
        AppState.examAnswers = Array(20).fill(null);
        AppState.examFlagged = Array(20).fill(false);
        AppState.examCurrentQIdx = 0;
        AppState.examTimerSeconds = 1200; // 20:00

        // Set Exam Header
        const badge = document.getElementById('exam-subj-badge');
        const title = document.getElementById('exam-chap-title');
        if (badge) badge.textContent = subjData.name;
        if (title) title.textContent = `Chapter ${chapter.chapterNum || chapIdx + 1}: ${chapter.title} Examination`;

        // Render Question Palette (1 to 20)
        renderExamPalette();

        // Load Question 0
        loadExamQuestion(0);

        // Start Timer
        if (AppState.examTimerInterval) clearInterval(AppState.examTimerInterval);
        AppState.examTimerInterval = setInterval(updateExamTimer, 1000);

        switchAppView('view-final-test');
        SoundFX.click();
    }

    function build20ChapterQuestions(chapter) {
        // If chapter has static exam array of 20 questions, use it
        if (chapter.exam && chapter.exam.length >= 20) {
            return chapter.exam.slice(0, 20);
        }

        // Otherwise compile from topic quizzes + synthesis questions
        const combined = [];
        if (chapter.topics) {
            chapter.topics.forEach(t => {
                if (t.quiz) combined.push(...t.quiz);
            });
        }
        if (chapter.exam) {
            combined.push(...chapter.exam);
        }

        // Ensure 20 questions
        while (combined.length < 20) {
            combined.push({
                q: `What is a fundamental concept taught in ${chapter.title}?`,
                options: [
                    'Comprehensive mastery of SCERT Class 8 curriculum',
                    'Arbitrary historical speculation',
                    'Unrelated mathematical conjecture',
                    'None of the above'
                ],
                correct: 0,
                exp: `This question synthesizes the core principles of Chapter: ${chapter.title}.`
            });
        }

        return combined.slice(0, 20);
    }

    function renderExamPalette() {
        const grid = document.getElementById('exam-palette-grid');
        if (!grid) return;
        grid.innerHTML = '';

        for (let i = 0; i < 20; i++) {
            const btn = document.createElement('button');
            btn.className = `pal-btn ${i === AppState.examCurrentQIdx ? 'current' : ''}`;
            btn.textContent = i + 1;
            btn.setAttribute('data-qnum', i);

            btn.addEventListener('click', () => {
                loadExamQuestion(i);
                SoundFX.click();
            });

            grid.appendChild(btn);
        }
    }

    function loadExamQuestion(qIdx) {
        AppState.examCurrentQIdx = qIdx;
        const q = AppState.examQuestions[qIdx];
        if (!q) return;

        const qNum = document.getElementById('exam-q-number');
        const qText = document.getElementById('exam-q-text');
        const optsContainer = document.getElementById('exam-options-container');
        const btnFlag = document.getElementById('btn-flag-review');

        if (qNum) qNum.textContent = `Question ${qIdx + 1} of 20`;
        if (qText) qText.textContent = q.q;

        if (btnFlag) {
            btnFlag.classList.toggle('active', AppState.examFlagged[qIdx]);
            btnFlag.innerHTML = AppState.examFlagged[qIdx]
                ? '<i class="fa-solid fa-bookmark"></i> Flagged for Review'
                : '<i class="fa-regular fa-bookmark"></i> Mark for Review';
        }

        if (optsContainer) {
            optsContainer.innerHTML = '';
            q.options.forEach((opt, oIdx) => {
                const btn = document.createElement('button');
                btn.className = `exam-opt-btn ${AppState.examAnswers[qIdx] === oIdx ? 'selected' : ''}`;
                btn.innerHTML = `<strong>${String.fromCharCode(65 + oIdx)}.</strong> ${opt}`;

                btn.addEventListener('click', () => {
                    AppState.examAnswers[qIdx] = oIdx;
                    optsContainer.querySelectorAll('.exam-opt-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    updatePaletteItemState(qIdx);
                    SoundFX.click();
                });

                optsContainer.appendChild(btn);
            });
        }

        // Update palette active current indicator
        document.querySelectorAll('.pal-btn').forEach((b, idx) => {
            b.classList.toggle('current', idx === qIdx);
        });
    }

    function updatePaletteItemState(qIdx) {
        const btn = document.querySelector(`.pal-btn[data-qnum="${qIdx}"]`);
        if (!btn) return;
        btn.classList.toggle('answered', AppState.examAnswers[qIdx] !== null);
        btn.classList.toggle('flagged', AppState.examFlagged[qIdx]);
    }

    function updateExamTimer() {
        AppState.examTimerSeconds--;
        const display = document.getElementById('exam-timer-display');
        if (AppState.examTimerSeconds <= 0) {
            clearInterval(AppState.examTimerInterval);
            finishExam();
            return;
        }

        const mins = Math.floor(AppState.examTimerSeconds / 60);
        const secs = AppState.examTimerSeconds % 60;
        if (display) {
            display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
    }

    function finishExam() {
        clearInterval(AppState.examTimerInterval);

        // Grade 20 Questions
        let correctCount = 0;
        AppState.examQuestions.forEach((q, idx) => {
            if (AppState.examAnswers[idx] === q.correct) {
                correctCount++;
            }
        });

        const pct = Math.round((correctCount / 20) * 100);
        const passed = pct >= 80;

        // Render Results
        const resScore = document.getElementById('res-score-val');
        const resPct = document.getElementById('res-pct-val');
        const resPass = document.getElementById('res-pass-val');
        const btnClaimCert = document.getElementById('btn-claim-certificate');

        if (resScore) resScore.textContent = `${correctCount} / 20`;
        if (resPct) resPct.textContent = `${pct}%`;
        if (resPass) {
            resPass.textContent = passed ? 'ACADEMIC DISTINCTION (A+)' : 'NEEDS REVISION';
            resPass.className = `metric-value ${passed ? 'status-pass' : 'status-fail'}`;
        }

        // Show Certificate Button if score >= 80%
        if (btnClaimCert) {
            btnClaimCert.classList.toggle('hide', !passed);
        }

        // Save progress & high score
        const chapKey = `${AppState.activeSubjectId}-${AppState.activeChapterIdx}`;
        AppState.progress.examHighScores[chapKey] = Math.max(
            AppState.progress.examHighScores[chapKey] || 0,
            correctCount
        );

        if (passed) {
            SoundFX.fanfare();
            recordEarnedCertificate(correctCount, pct);
        } else {
            SoundFX.wrong();
        }

        // Detailed Question Review
        renderExamReviewList();

        switchAppView('view-exam-results');
        saveState();
    }

    function renderExamReviewList() {
        const list = document.getElementById('exam-review-list');
        if (!list) return;
        list.innerHTML = '';

        AppState.examQuestions.forEach((q, idx) => {
            const studentChoice = AppState.examAnswers[idx];
            const isCorrect = studentChoice === q.correct;
            const card = document.createElement('div');
            card.className = `review-item-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;

            const studentLetter = studentChoice !== null ? String.fromCharCode(65 + studentChoice) : 'Not Answered';
            const correctLetter = String.fromCharCode(65 + q.correct);

            card.innerHTML = `
                <div class="review-q"><strong>Q${idx + 1}.</strong> ${q.q}</div>
                <div class="review-status">
                    ${isCorrect ? '<span style="color:#10b981;">✅ Correct</span>' : '<span style="color:#f43f5e;">❌ Incorrect</span>'}
                    | Your Answer: <strong>${studentLetter}</strong> | Correct Answer: <strong>${correctLetter} (${q.options[q.correct]})</strong>
                </div>
                <div class="review-exp"><strong>Textbook Explanation:</strong> ${q.exp}</div>
            `;

            list.appendChild(card);
        });
    }

    /* ==========================================================================
       12. OFFICIAL SCERT PRINTABLE CERTIFICATE GENERATOR
       ========================================================================== */
    function recordEarnedCertificate(score, percentage) {
        const subjData = window.SCERT_DATA[AppState.activeSubjectId];
        const chapter = subjData.chapters[AppState.activeChapterIdx];
        const certId = `TS-SCERT-C8-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

        const certRecord = {
            id: certId,
            studentName: AppState.studentName || 'Student',
            subject: subjData.name,
            chapter: `Chapter ${chapter.chapterNum || AppState.activeChapterIdx + 1}: ${chapter.title}`,
            score: `${score} / 20`,
            percentage: `${percentage}%`,
            date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
        };

        AppState.progress.earnedCertificates.push(certRecord);
        saveState();
    }

    function displayCertificate() {
        const subjData = window.SCERT_DATA[AppState.activeSubjectId];
        const chapter = subjData.chapters[AppState.activeChapterIdx];
        const scoreVal = document.getElementById('res-score-val').textContent || '18 / 20';
        const pctVal = document.getElementById('res-pct-val').textContent || '90%';

        document.getElementById('cert-student-name').textContent = AppState.studentName.toUpperCase() || 'STUDENT NAME';
        document.getElementById('cert-subject-name').textContent = subjData.name.toUpperCase();
        document.getElementById('cert-chapter-name').textContent = `Chapter ${chapter.chapterNum || AppState.activeChapterIdx + 1}: ${chapter.title}`;
        document.getElementById('cert-score').textContent = scoreVal;
        document.getElementById('cert-percentage').textContent = pctVal;
        document.getElementById('cert-date-display').textContent = `Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`;

        switchAppView('view-certificate');
        SoundFX.fanfare();
    }

    /* ==========================================================================
       13. GLOBAL SEARCH ENGINE (INSTANT ACROSS ALL 6 SUBJECTS)
       ========================================================================== */
    function initSearchEngine() {
        const searchInput = document.getElementById('global-search-input');
        const resultsContainer = document.getElementById('search-results-list');
        const modal = document.getElementById('modal-search');

        if (!searchInput || !resultsContainer) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (!query || query.length < 2) {
                resultsContainer.innerHTML = '<div class="search-empty-state">Start typing to search across Class 8 curriculum...</div>';
                return;
            }

            const matches = [];
            Object.keys(window.SCERT_DATA || {}).forEach(sKey => {
                const s = window.SCERT_DATA[sKey];
                (s.chapters || []).forEach((c, cIdx) => {
                    // Match Chapter Title
                    if (c.title.toLowerCase().includes(query)) {
                        matches.push({
                            subjectId: sKey,
                            subjectName: s.name,
                            chapterIdx: cIdx,
                            topicIdx: 0,
                            title: `Chapter: ${c.title}`,
                            snippet: c.summary || 'Class 8 official chapter.'
                        });
                    }

                    // Match Topics
                    (c.topics || []).forEach((t, tIdx) => {
                        if (t.title.toLowerCase().includes(query)) {
                            matches.push({
                                subjectId: sKey,
                                subjectName: s.name,
                                chapterIdx: cIdx,
                                topicIdx: tIdx,
                                title: `Topic: ${t.title} (${c.title})`,
                                snippet: t.summary ? t.summary[0] : 'Explore this topic in 3D.'
                            });
                        }

                        // Match Vocabulary
                        (t.vocabulary || []).forEach(v => {
                            if (v.word.toLowerCase().includes(query)) {
                                matches.push({
                                    subjectId: sKey,
                                    subjectName: s.name,
                                    chapterIdx: cIdx,
                                    topicIdx: tIdx,
                                    title: `Word: ${v.word} (${t.title})`,
                                    snippet: v.meaning || v.def
                                });
                            }
                        });
                    });
                });
            });

            if (matches.length === 0) {
                resultsContainer.innerHTML = '<div class="search-empty-state">No matching topics found. Try another keyword.</div>';
                return;
            }

            resultsContainer.innerHTML = matches.slice(0, 10).map((m, idx) => `
                <div class="search-result-item" data-sidx="${idx}">
                    <div style="font-size:0.75rem; color:var(--primary-cyan); font-weight:800;">${m.subjectName.toUpperCase()}</div>
                    <div style="font-weight:700; margin:3px 0;">${m.title}</div>
                    <div style="font-size:0.82rem; color:var(--text-secondary);">${m.snippet}</div>
                </div>
            `).join('');

            resultsContainer.querySelectorAll('.search-result-item').forEach((item, idx) => {
                item.addEventListener('click', () => {
                    const match = matches[idx];
                    modal.classList.add('hide');
                    loadTopicExperience(match.subjectId, match.chapterIdx, match.topicIdx);
                });
            });
        });
    }

    /* ==========================================================================
       14. EVENT LISTENERS & DOM INITIALIZATION
       ========================================================================== */
    function setupDOMBindings() {
        // Dashboard Home button
        const btnHome = document.getElementById('btn-dashboard-home');
        if (btnHome) btnHome.addEventListener('click', () => switchAppView('view-dashboard'));

        // Subject Portal Cards on Dashboard
        document.querySelectorAll('.subject-card-3d').forEach(card => {
            card.addEventListener('click', () => {
                const subjId = card.getAttribute('data-subject');
                selectSubject(subjId);
            });
        });

        // Continue Learning button on Dashboard
        const btnContinue = document.getElementById('btn-continue-now');
        if (btnContinue) {
            btnContinue.addEventListener('click', () => {
                loadTopicExperience(AppState.activeSubjectId, AppState.activeChapterIdx, AppState.activeTopicIdx);
            });
        }

        // Back to Dashboard from Chapter Browser
        const btnBackDash = document.getElementById('btn-back-to-dashboard');
        if (btnBackDash) btnBackDash.addEventListener('click', () => switchAppView('view-dashboard'));

        // Back to Chapters from Learning View
        const btnBackChaps = document.getElementById('btn-back-to-chapters');
        if (btnBackChaps) btnBackChaps.addEventListener('click', () => switchAppView('view-chapter-browser'));

        // Flow Tabs (Read, Watch, Explore, Practice, Revise)
        document.querySelectorAll('.flow-step-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                switchLearningSubTab(tab);
            });
        });

        // Open Chapter Exam Button
        const btnOpenExam = document.getElementById('btn-open-chapter-exam');
        if (btnOpenExam) {
            btnOpenExam.addEventListener('click', () => {
                startChapterExam(AppState.activeSubjectId, AppState.activeChapterIdx);
            });
        }

        // Exam Navigation
        const btnExamPrev = document.getElementById('btn-exam-prev');
        const btnExamNext = document.getElementById('btn-exam-next');
        const btnExamClear = document.getElementById('btn-exam-clear');
        const btnFlag = document.getElementById('btn-flag-review');
        const btnSubmitExam = document.getElementById('btn-submit-exam');
        const btnExitExam = document.getElementById('btn-exit-exam');

        if (btnExamPrev) btnExamPrev.onclick = () => {
            if (AppState.examCurrentQIdx > 0) loadExamQuestion(AppState.examCurrentQIdx - 1);
            SoundFX.click();
        };

        if (btnExamNext) btnExamNext.onclick = () => {
            if (AppState.examCurrentQIdx < 19) loadExamQuestion(AppState.examCurrentQIdx + 1);
            SoundFX.click();
        };

        if (btnExamClear) btnExamClear.onclick = () => {
            AppState.examAnswers[AppState.examCurrentQIdx] = null;
            loadExamQuestion(AppState.examCurrentQIdx);
            updatePaletteItemState(AppState.examCurrentQIdx);
            SoundFX.click();
        };

        if (btnFlag) btnFlag.onclick = () => {
            AppState.examFlagged[AppState.examCurrentQIdx] = !AppState.examFlagged[AppState.examCurrentQIdx];
            loadExamQuestion(AppState.examCurrentQIdx);
            updatePaletteItemState(AppState.examCurrentQIdx);
            SoundFX.click();
        };

        if (btnSubmitExam) btnSubmitExam.onclick = () => finishExam();
        if (btnExitExam) btnExitExam.onclick = () => switchAppView('view-learning');

        // Results Actions
        const btnClaimCert = document.getElementById('btn-claim-certificate');
        if (btnClaimCert) btnClaimCert.onclick = () => displayCertificate();

        const btnRetake = document.getElementById('btn-retake-exam');
        if (btnRetake) btnRetake.onclick = () => startChapterExam(AppState.activeSubjectId, AppState.activeChapterIdx);

        const btnResultsDash = document.getElementById('btn-results-to-dashboard');
        if (btnResultsDash) btnResultsDash.onclick = () => switchAppView('view-dashboard');

        // Certificate Toolbar
        const btnCloseCert = document.getElementById('btn-close-cert');
        if (btnCloseCert) btnCloseCert.onclick = () => switchAppView('view-exam-results');

        const btnPrintCert = document.getElementById('btn-print-cert');
        if (btnPrintCert) btnPrintCert.onclick = () => window.print();

        // Modals (Search, Profile, Concept)
        const btnSearch = document.getElementById('btn-global-search');
        const modalSearch = document.getElementById('modal-search');
        const btnCloseSearch = document.getElementById('btn-close-search');

        if (btnSearch && modalSearch) {
            btnSearch.onclick = () => {
                modalSearch.classList.remove('hide');
                const inp = document.getElementById('global-search-input');
                if (inp) inp.focus();
                SoundFX.click();
            };
        }
        if (btnCloseSearch && modalSearch) {
            btnCloseSearch.onclick = () => modalSearch.classList.add('hide');
        }

        // Global hotkey Ctrl+K for search
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                if (btnSearch) btnSearch.click();
            }
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hide'));
            }
        });

        // Concept Modal close buttons
        const modalConcept = document.getElementById('modal-concept');
        const btnCloseConcept = document.getElementById('btn-close-concept');
        const btnConceptOk = document.getElementById('btn-concept-ok');
        if (btnCloseConcept && modalConcept) btnCloseConcept.onclick = () => modalConcept.classList.add('hide');
        if (btnConceptOk && modalConcept) btnConceptOk.onclick = () => modalConcept.classList.add('hide');

        // Student Profile Modal
        const btnProfile = document.getElementById('btn-student-profile');
        const modalProfile = document.getElementById('modal-profile');
        const btnCloseProfile = document.getElementById('btn-close-profile');
        const btnSaveProfile = document.getElementById('btn-save-profile');
        const inputName = document.getElementById('input-student-name');

        if (btnProfile && modalProfile) {
            btnProfile.onclick = () => {
                if (inputName) inputName.value = AppState.studentName;
                updateProfileStats();
                modalProfile.classList.remove('hide');
                SoundFX.click();
            };
        }
        if (btnCloseProfile && modalProfile) btnCloseProfile.onclick = () => modalProfile.classList.add('hide');
        if (btnSaveProfile && modalProfile) {
            btnSaveProfile.onclick = () => {
                if (inputName && inputName.value.trim()) {
                    AppState.studentName = inputName.value.trim();
                    const hName = document.getElementById('header-student-name');
                    if (hName) hName.textContent = AppState.studentName;
                    saveState();
                }
                modalProfile.classList.add('hide');
                SoundFX.click();
            };
        }

        // Audio toggle
        const btnAudio = document.getElementById('btn-audio-toggle');
        if (btnAudio) {
            btnAudio.onclick = () => {
                AppState.soundEnabled = !AppState.soundEnabled;
                btnAudio.innerHTML = AppState.soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
                saveState();
                SoundFX.click();
            };
        }

        // Performance Mode toggle
        const btnPerf = document.getElementById('btn-perf-toggle');
        if (btnPerf) {
            btnPerf.onclick = () => {
                AppState.perfMode = !AppState.perfMode;
                document.body.classList.toggle('perf-mode', AppState.perfMode);
                generateBgParticles();
                saveState();
                SoundFX.click();
            };
        }

        // Theme switch (Light / Dark)
        const btnTheme = document.getElementById('btn-theme-toggle');
        if (btnTheme) {
            btnTheme.onclick = () => {
                AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
                document.body.classList.toggle('light-theme', AppState.theme === 'light');
                document.body.classList.toggle('dark-theme', AppState.theme === 'dark');
                btnTheme.innerHTML = AppState.theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
                saveState();
                SoundFX.click();
            };
        }
    }

    function updateProfileStats() {
        const comp = Object.keys(AppState.progress.completedTopics).length;
        const qz = Object.keys(AppState.progress.quizScores).length;
        const certs = AppState.progress.earnedCertificates.length;

        const elComp = document.getElementById('stat-completed-topics');
        const elQz = document.getElementById('stat-quizzes-taken');
        const elCerts = document.getElementById('stat-certificates-unlocked');

        if (elComp) elComp.textContent = comp;
        if (elQz) elQz.textContent = qz;
        if (elCerts) elCerts.textContent = certs;
    }

    /* ==========================================================================
       15. ENTRY INITIALIZATION
       ========================================================================== */
    window.addEventListener('DOMContentLoaded', () => {
        loadPersistedState();

        // Apply saved theme & perf settings
        if (AppState.theme === 'light') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            const btnTheme = document.getElementById('btn-theme-toggle');
            if (btnTheme) btnTheme.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }

        if (AppState.perfMode) {
            document.body.classList.add('perf-mode');
        }

        const hName = document.getElementById('header-student-name');
        if (hName && AppState.studentName) hName.textContent = AppState.studentName;

        // Initialize Engines
        initOpeningScreen();
        initBackgroundWallpaper();
        initLearningVisualizer();
        initSearchEngine();
        setupDOMBindings();

        // Initially load Social Studies Chapter 1 as requested in specification
        if (window.SCERT_DATA && window.SCERT_DATA['social-studies']) {
            renderChapterBrowser('social-studies');
            updateHeaderBreadcrumbs();
        }
    });

})();
