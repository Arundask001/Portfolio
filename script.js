/**
 * Interactive Threat Map logic - Expanded 5 Nodes
 */

// 1. DATA FOR MODALS
const portfolioData = {
    'RECON': `
        <div class="bio-container">
            <img src="myphoto.jpg" alt="Arun Das K" class="profile-pic">
            <div class="bio-text">
                <h2>[SYS_MSG]: About Me Decrypted</h2>
                <p>Status: <strong>Aspiring Cyber Security Engineer</strong></p>
                <p>I am a Computer Science undergrad driven by the architecture of secure systems and the thrill of uncovering their vulnerabilities. My primary focus is offensive security and bug bounty hunting, backed by a strong foundation in building resilient backends using Python, Django, and PostgreSQL.</p>
                <p>I approach my technical craft with the same relentless discipline I apply to my physical conditioning: stripping away the unnecessary, optimizing for endurance, and mastering the core mechanics to build true strength.</p>
                <p>Whether I am integrating Generative AI models, fine-tuning complex Data Structures and Algorithms, or mapping a target's attack surface, I thrive on dissecting intricate problems and pushing systems to their absolute limits.</p>
            </div>
        </div>
    `,
    'ARSENAL': `
        <h2>Technical Arsenal (Skills)</h2>
        <div>
            <span class="skill-tag">Data Structures & Algo (DSA)</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">Django</span>
            <span class="skill-tag">C++</span>
            <span class="skill-tag">Java</span>
            <span class="skill-tag">Ethical Hacking</span>
            <span class="skill-tag">GenAI Prompt Eng</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">TCP/IP & DNS</span>
        </div>

        <h2>Core Achievements</h2>
        <ul>
            <li><strong>HackerRank 5-Star Gold Badge:</strong> Secured a top-tier algorithmic problem-solving rating. This highlights a consistent ability to tackle complex coding challenges, optimize logic, and write highly efficient code.</li>
            <li><strong>TryHackMe Diamond/Gold League:</strong> Reached elite ranking tiers on a competitive cybersecurity platform. This demonstrates hands-on, practical experience in navigating secure environments, understanding threat landscapes, and executing practical penetration testing techniques.</li>
        </ul>
    `,
    'PAYLOADS': `
        <h2>Deployed Payloads (Projects)</h2>
        <ul>
            <li>
                <strong>Page Replacement Algorithm Simulation (OS Memory Management):</strong><br>
                A Python-based simulation tool engineered to analyze the inner workings of operating system memory management.<br>
                <em>Technical Implementation:</em> Programmed the logic to compare three fundamental algorithms side-by-side: First-In-First-Out (FIFO), Least Recently Used (LRU), and Optimal. The system processes JSON data to track memory frame handling and page requests.<br>
                <em>Impact & Analytics:</em> Engineered the application to actively monitor system metrics—specifically page faults—and generate data charts for visual performance comparisons.
            </li>
            <li><strong>Generative AI Integrated Solutions:</strong> Built complex interaction layers utilizing GenAI to automate backend tasks.</li>
            <li><strong>Vulnerable Environment Simulator (CTF):</strong> Engineered secure mock-vulnerable environments for ethical hacking practice.</li>
        </ul>
    `,
    'PROTOCOLS': `
        <h2>Training & Certifications</h2>
        <ul class="cert-list">
            <li>
                <a href="Rising Tech Pro.png" target="_blank">[ View Certificate ]</a> <strong>Ethical Hacking (Rising Tech Pro)</strong><br>
                <em>What it proves:</em> Validates a practical understanding of system vulnerabilities, network security, and threat mitigation. This certification underscores my commitment to building secure systems by understanding how they can be exploited.
            </li>
            <li>
                <a href="udemy progect manager.pdf" target="_blank">[ View Certificate ]</a> <strong>Project Management (Udemy)</strong><br>
                <em>What it proves:</em> Demonstrates the ability to look beyond the code and understand the full software development lifecycle. It highlights my capability to organize tasks, manage timelines, and deliver technical projects efficiently from concept to deployment.
            </li>
            <li>
                <a href="Freecodecamp.pdf" target="_blank">[ View Certificate ]</a> <strong>FreeCodeCamp Engineering Certification</strong><br>
                <em>What it proves:</em> Core competency in software engineering fundamentals, algorithm design, and modern development standards.
            </li>
            <li>
                <a href="cse pathshala cert.png" target="_blank">[ View Certificate ]</a> <strong>CSE Pathshala Completion Certificate</strong><br>
                <em>What it proves:</em> Specialized technical training validating computer science fundamentals and application.
            </li>
            <li>
                <strong>Infosys Springboard Technical Series:</strong><br>
                <a href="info1.pdf" target="_blank">[ Module 1 ]</a> | 
                <a href="info 2.pdf" target="_blank">[ Module 2 ]</a> | 
                <a href="info 3.pdf" target="_blank">[ Module 3 ]</a> | 
                <a href="info 4.pdf" target="_blank">[ Module 4 ]</a>
            </li>
        </ul>
    `,
    'HANDSHAKE': `
        <h2>Connection Established</h2>
        <p>The flags have been exposed. You may now securely communicate with the target.</p>
        
        <div style="margin: 25px 0;">
            <a href="CV best1.pdf" download class="btn-download">>> DOWNLOAD COMPLETE RESUME [PDF] <<</a>
        </div>

        <h2>Academic Background</h2>
        <ul>
            <li><strong>Lovely Professional University (LPU)</strong><br> Jalandhar, Punjab | B.Tech Computer Science<br><em>(2023 - Present)</em></li>
            <li><strong>Govt Higher Secondary School</strong><br> Kodakara, Kerala<br><em>(2021 - 2023)</em></li>
            <li><strong>Sree Krishna High School</strong><br> Mattathur, Kerala<br><em>(Jun 2018 - Mar 2021)</em></li>
        </ul>

        <h2>Contact Parameters</h2>
        <ul>
            <li><strong>GitHub:</strong> <a href="https://github.com/Arundask001" target="_blank" style="color: var(--neon-green)">github.com/Arundask001</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/arun-das-552816224" target="_blank" style="color: var(--neon-green)">linkedin.com/in/arun-das-552816224</a></li>
            <li><strong>Email:</strong> <a href="mailto:arundaskarumathil@gmail.com" style="color: var(--neon-green)">arundaskarumathil@gmail.com</a></li>
            <li><strong>Location:</strong> Kerala, India</li>
        </ul>
    `
};

// 2. CANVAS & ANIMATIONS (BUG CRAWLERS)
const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');
let width, height;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

const nodes = document.querySelectorAll('.node');
const getCenter = (el) => {
    const rect = el.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
};

const bugs = [];
const numBugs = 8; // Increased bugs slightly for bigger net

function initBugs() {
    for (let i=0; i<numBugs; i++) {
        bugs.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            size: Math.random() * 2 + 2,
            targetNode: Math.floor(Math.random() * nodes.length)
        });
    }
}
initBugs();

function animateCanvas() {
    ctx.fillStyle = 'rgba(5, 10, 14, 0.4)';
    ctx.fillRect(0, 0, width, height);

    const nodeCenters = Array.from(nodes).map(getCenter);
    
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
    ctx.lineWidth = 1;
    for (let i = 0; i < nodeCenters.length; i++) {
        ctx.moveTo(width/2, height/2); // central hub
        ctx.lineTo(nodeCenters[i].x, nodeCenters[i].y);
        for (let j = i+1; j < nodeCenters.length; j++) {
            // Only draw a line if proximity is reasonable, to avoid a mess
            ctx.moveTo(nodeCenters[i].x, nodeCenters[i].y);
            ctx.lineTo(nodeCenters[j].x, nodeCenters[j].y);
        }
    }
    ctx.stroke();

    bugs.forEach(bug => {
        const target = nodeCenters[bug.targetNode];
        if (target) {
            const dx = target.x - bug.x;
            const dy = target.y - bug.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist < 50) {
                bug.targetNode = Math.floor(Math.random() * nodes.length);
            } else {
                bug.vx += (dx / dist) * 0.05;
                bug.vy += (dy / dist) * 0.05;
            }
        }
        bug.vx *= 0.95;
        bug.vy *= 0.95;
        bug.x += bug.vx;
        bug.y += bug.vy;

        ctx.beginPath();
        ctx.fillStyle = '#39ff14'; 
        ctx.arc(bug.x, bug.y, bug.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = '#39ff14';
        ctx.lineWidth = 1;
        ctx.moveTo(bug.x, bug.y);
        ctx.lineTo(bug.x + bug.vx * 3 + 3, bug.y + bug.vy * 3 - 3);
        ctx.moveTo(bug.x, bug.y);
        ctx.lineTo(bug.x + bug.vx * 3 + 3, bug.y + bug.vy * 3 + 3);
        ctx.stroke();
    });

    requestAnimationFrame(animateCanvas);
}
animateCanvas();

// 3. UI INTERACTIONS
const modal = document.getElementById('content-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal');

nodes.forEach(node => {
    const label = node.querySelector('.node-label');
    const origText = label.getAttribute('data-original');

    node.addEventListener('mouseenter', () => {
        label.classList.add('glitch-anim');
        label.innerText = generateGibberish(origText.length);
        
        let iters = 0;
        const interval = setInterval(() => {
            iters++;
            label.innerText = generateGibberish(origText.length);
            if (iters > 4) {
                clearInterval(interval);
                label.innerText = origText;
                label.classList.remove('glitch-anim');
            }
        }, 50);
    });
});

function generateGibberish(len) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let res = "";
    for(let i=0; i<len; i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
    return res;
}

nodes.forEach(node => {
    node.addEventListener('click', () => {
        const idName = node.getAttribute('id').replace('node-', '').toUpperCase();
        
        modal.classList.remove('hidden');
        modalTitle.innerText = "DECRYPTING...";
        modalContent.innerHTML = "<p>Establishing secure connection...</p><p>Injecting payload...</p><p>Bypassing firewall 100%</p>";
        
        const contentStr = portfolioData[idName];

        setTimeout(() => {
            modalTitle.innerText = "DATA EXTRACTED // " + idName;
            modalContent.innerHTML = contentStr;
        }, 800);
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    setTimeout(() => {
        modalContent.innerHTML = "";
    }, 400); 
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalBtn.click();
    }
});

// 4. SPA ROUTING (LANDING PAGE TO MAP TRANSITION)
const enterMapBtn = document.getElementById('enter-map-btn');
const landingView = document.getElementById('landing-view');
const mapView = document.getElementById('map-view');

enterMapBtn.addEventListener('click', () => {
    // Hide Landing Page
    landingView.classList.remove('active-section');
    landingView.classList.add('hidden-section');
    
    // Show Map
    mapView.classList.remove('hidden-section');
    mapView.classList.add('active-section');
    
    // Crucial: Resize canvas now that it's visible, otherwise it might draw wildly
    resize();
});
