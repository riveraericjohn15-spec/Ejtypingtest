:root {
    --blood-red: #8b0000;
    --neon-red: #ff0000;
    --dark-bg: #050505;
    --glass: rgba(20, 20, 20, 0.8);
}

body {
    background: var(--dark-bg);
    color: #cccccc;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.glass-container {
    background: var(--glass);
    border: 2px solid var(--blood-red);
    padding: 2.5rem;
    border-radius: 15px;
    width: 85%;
    max-width: 850px;
    text-align: center;
    box-shadow: 0 0 30px rgba(139, 0, 0, 0.3);
}

.site-logo {
    width: 60px;
    height: 60px;
    filter: drop-shadow(0 0 5px var(--neon-red));
    animation: pulse 3s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 15px var(--neon-red)); }
    100% { transform: scale(1); opacity: 0.8; }
}

.horror-title {
    color: var(--blood-red);
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-top: 10px;
}

.stats-bar {
    display: flex;
    justify-content: space-around;
    margin: 25px 0;
    font-size: 1.3rem;
    color: var(--neon-red);
}

.word-display {
    font-size: 1.5rem;
    line-height: 2.2rem;
    margin-bottom: 25px;
    text-align: left;
    min-height: 100px;
}

.word-display span { color: #444; }
.word-display span.correct { color: #eee; }
.word-display span.incorrect { color: var(--neon-red); text-decoration: underline; }
.word-display span.active { border-bottom: 3px solid var(--neon-red); }

.input-field { opacity: 0; position: absolute; }

#reset-btn {
    background: transparent;
    border: 2px solid var(--blood-red);
    color: var(--blood-red);
    padding: 10px 30px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}

#reset-btn:hover {
    background: var(--blood-red);
    color: white;
    box-shadow: 0 0 15px var(--blood-red);
}

.header-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    margin-bottom: 15px;
}

.github-link { color: var(--blood-red); text-decoration: none; }

#focus-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.95);
    color: var(--blood-red);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.hidden { display: none !important; }
