document.addEventListener('DOMContentLoaded', () => {
            /* =========================================
           0. SPLASH SCREEN LOGIC
        ========================================= */
        const splashScreen = document.getElementById('splash-screen');
        
        if (splashScreen) {
            // Show the splash screen for 1.5 seconds (1500 milliseconds)
            setTimeout(() => {
                // Add the fade-out class
                splashScreen.classList.add('splash-fade');
                
                // Remove it entirely from the DOM after the CSS fade transition finishes
                setTimeout(() => {
                    splashScreen.style.display = 'none';
                }, 600); 
            }, 1500); 
        }

    /* =========================================
       1. DATA-DRIVEN 4-SEMESTER SYLLABUS ENGINE
       (All 40+ Papers and 240+ Units[cite: 1])
    ========================================= */
    const wbsuCurriculum = [
        {
            semester: "Semester I (Core)",
            sections: [
                {
                    papers: [
                        { id: "s1-mgt", title: "Management Principles" },
                        { id: "s1-eco", title: "Economics for Managers" },
                        { id: "s1-comm", title: "Business Communication" },
                        { id: "s1-env", title: "Business Environment" },
                        { id: "s1-acc", title: "Accounting for Managers", link: "s1-acc-u1.html"}, // Example mapped file
                        { id: "s1-stat", title: "Statistics for Business" },
                        { id: "s1-mis", title: "MIS & Computer Apps" }
                    ]
                }
            ]
        },
        {
            semester: "Semester II (Core)",
            sections: [
                {
                    papers: [
                        { id: "s2-fin", title: "Financial Management" },
                        { id: "s2-mkt", title: "Marketing Management" },
                        { id: "s2-hr", title: "Human Resource Mgmt" },
                        { id: "s2-ops", title: "Operations Management" },
                        { id: "s2-sci", title: "Management Science" },
                        { id: "s2-res", title: "Business Research Methods" },
                        { id: "s2-ob", title: "Organization Behaviour" }
                    ]
                }
            ]
        },
        {
            semester: "Semester III",
            sections: [
                {
                    subtitle: "Core Papers",
                    papers: [
                        { id: "s3-ba", title: "Business Analytics" },
                        { id: "s3-int", title: "Internship Project" }
                    ]
                },
                {
                    subtitle: "Systems & Ops",
                    papers: [
                        { id: "s3-dec", title: "Decision Models" },
                        { id: "s3-prog", title: "Programming Logic (C/Python)" },
                        { id: "s3-tqm", title: "Total Quality Mgmt" }
                    ]
                },
                {
                    subtitle: "Finance",
                    papers: [
                        { id: "s3-tax", title: "Corporate Taxation" },
                        { id: "s3-fms", title: "Financial Markets & Services" },
                        { id: "s3-inv", title: "Investment Management" }
                    ]
                },
                {
                    subtitle: "Marketing",
                    papers: [
                        { id: "s3-imc", title: "Integrated Mktg Comm." },
                        { id: "s3-mres", title: "Marketing Research" },
                        { id: "s3-cb", title: "Consumer Behaviour" }
                    ]
                },
                {
                    subtitle: "Human Resources",
                    papers: [
                        { id: "s3-hrp", title: "HR Planning & Analytics" },
                        { id: "s3-hrd", title: "Human Resource Dev." },
                        { id: "s3-comp", title: "Compensation Management" }
                    ]
                }
            ]
        },
        {
            semester: "Semester IV",
            sections: [
                {
                    subtitle: "Core Papers",
                    papers: [
                        { id: "s4-sim", title: "Strategic & Innovation Mgmt" },
                        { id: "s4-proj", title: "Final Project Report" }
                    ]
                },
                {
                    subtitle: "Systems & Ops",
                    papers: [
                        { id: "s4-sad", title: "Systems Analysis (SSAD)" },
                        { id: "s4-net", title: "Networking Fundamentals" },
                        { id: "s4-dbm", title: "DBMS and RDBMS" }
                    ]
                },
                {
                    subtitle: "Finance",
                    papers: [
                        { id: "s4-feng", title: "Financial Engineering" },
                        { id: "s4-sfm", title: "Strategic Financial Mgmt" },
                        { id: "s4-mcs", title: "Management Control Systems" }
                    ]
                },
                {
                    subtitle: "Marketing",
                    papers: [
                        { id: "s4-sdm", title: "Sales & Distribution" },
                        { id: "s4-srv", title: "Service Mktg & Retail" },
                        { id: "s4-dig", title: "Digital Marketing" }
                    ]
                },
                {
                    subtitle: "Human Resources",
                    papers: [
                        { id: "s4-shrm", title: "Strategic HRM" },
                        { id: "s4-pm", title: "Performance Management" },
                        { id: "s4-ir", title: "Industrial Relations" }
                    ]
                }
            ]
        }
    ];

    // Function to generate the Sidebar HTML dynamically
    function generateSidebar(curriculum) {
        //let html = `<div class="search-container"><input type="text" id="sidebarSearch" class="sidebar-search" placeholder="Search syllabus..."></div>`;
        let html = `
            <div class="search-container">
                <input type="text" id="sidebarSearch" class="sidebar-search" placeholder="Search syllabus...">
            </div>
            <div style="margin-bottom: 15px; padding: 0 5px;">
                <a href="dashboard.html" style="display: block; width: 100%; text-decoration: none; padding: 10px; background: var(--light-accent-bg); color: var(--primary-color); text-align: center; border-radius: 6px; font-weight: 700; border: 1px solid var(--primary-color);">🏠 Dashboard Home</a>
            </div>
        `;
        
        curriculum.forEach(sem => {
            html += `<div class="sidebar-section accordion">
                        <h3 class="accordion-header">${sem.semester}</h3>
                        <ul class="accordion-content">`;
            
            sem.sections.forEach(section => {
                if (section.subtitle) {
                    html += `<div class="nav-subtitle">${section.subtitle}</div>`;
                }
                
                section.papers.forEach(paper => {
                    html += `
                        <li class="sub-accordion">
                            <div class="sub-accordion-header">${paper.title}</div>
                            <ul class="sub-accordion-content">`;
                    
                    // Generate 6 Units for every paper based on syllabus structure[cite: 1]
                    // Generate 10 Units for every paper
                    for (let i = 1; i <= 6; i++) {
                        let topicId = `${paper.id}-u${i}`;
                        
                        // Automatically generates a link like "s1-acc-u2.html"
                        let href = `${topicId}.html`; 
                        
                        html += `<li><a href="${href}" data-topic="${topicId}">Unit ${i} <span class="completion-mark">✅</span></a></li>`;
                    }
                    html += `</ul></li>`;
                });
            });
            html += `</ul></div>`;
        });
        return html;
    }

    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        // Inject the generated HTML
        sidebarContainer.innerHTML = generateSidebar(wbsuCurriculum);
        
        // 1A. Auto-Highlight Active Page & Open Accordions
        const currentTopic = document.body.getAttribute('data-current-topic');
        if (currentTopic) {
            const activeLink = document.querySelector(`a[data-topic="${currentTopic}"]`);
            if (activeLink) {
                activeLink.classList.add('active-link');
                const parentSub = activeLink.closest('.sub-accordion');
                if(parentSub) parentSub.classList.add('active');
                const parentAcc = activeLink.closest('.accordion');
                if(parentAcc) parentAcc.classList.add('active');
            }
        }

   
            /* =========================================
           5. MOBILE MENU TOGGLE LOGIC
        ========================================= */
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const sidebar = document.getElementById('sidebar-container');

        if (mobileMenuBtn && sidebar) {
            // Toggle the sidebar when the hamburger icon is clicked
            mobileMenuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('show');
            });

            // Excellent UX: Auto-close the sidebar when a student clicks a unit link on mobile
            sidebar.addEventListener('click', (e) => {
                if (e.target.tagName === 'A' && window.innerWidth <= 992) {
                    // Check if it's an actual link, not an accordion toggle
                    if(e.target.getAttribute('href') !== '#') {
                        sidebar.classList.remove('show');
                    }
                }
            });
        }

        // 1B. Apply Saved Progress Checkmarks
        document.querySelectorAll('.sub-accordion-content a').forEach(link => {
            const topicId = link.getAttribute('data-topic');
            if (localStorage.getItem(`completed_${topicId}`) === "true") {
                link.classList.add('completed');
            }
        });

        // 1C. Accordion Interaction Logic
        const accordions = document.querySelectorAll('.accordion-header');
        accordions.forEach(acc => {
            acc.addEventListener('click', function() {
                this.parentElement.classList.toggle('active');
            });
        });

        const subAccordions = document.querySelectorAll('.sub-accordion-header');
        subAccordions.forEach(subAcc => {
            subAcc.addEventListener('click', function(e) {
                e.stopPropagation();
                // Close siblings
                const siblings = this.closest('.accordion-content').querySelectorAll('.sub-accordion');
                siblings.forEach(sibling => {
                    if (sibling !== this.parentElement) sibling.classList.remove('active');
                });
                this.parentElement.classList.toggle('active');
            });
        });

        // 1D. Live Search Filter
        const searchInput = document.getElementById('sidebarSearch');
        searchInput.addEventListener('keyup', function() {
            const filter = this.value.toLowerCase();
            const papers = document.querySelectorAll('.sub-accordion');
            
            papers.forEach(paper => {
                const text = paper.textContent.toLowerCase();
                if (text.includes(filter)) {
                    paper.style.display = "";
                    if(filter.length > 2) {
                        paper.closest('.accordion').classList.add('active');
                        paper.classList.add('active'); // Expand matching paper
                    }
                } else {
                    paper.style.display = "none";
                }
            });
        });
    }

    /* =========================================
       2. PROGRESS TRACKING (Mark as Complete)
    ========================================= */
    const completeBtn = document.getElementById('markCompleteBtn');
    if (completeBtn) {
        const currentTopic = document.body.getAttribute('data-current-topic');
        
        if (localStorage.getItem(`completed_${currentTopic}`) === "true") {
            completeBtn.classList.add('is-done');
            completeBtn.innerHTML = "✅ Completed";
        }

        completeBtn.addEventListener('click', () => {
            const isDone = completeBtn.classList.contains('is-done');
            const sidebarLink = document.querySelector(`a[data-topic="${currentTopic}"]`);
            
            if (!isDone) {
                localStorage.setItem(`completed_${currentTopic}`, "true");
                completeBtn.classList.add('is-done');
                completeBtn.innerHTML = "✅ Completed";
                if(sidebarLink) sidebarLink.classList.add('completed');
            } else {
                localStorage.removeItem(`completed_${currentTopic}`);
                completeBtn.classList.remove('is-done');
                completeBtn.innerHTML = "✔️ Mark as Complete";
                if(sidebarLink) sidebarLink.classList.remove('completed');
            }
        });
    }

    /* =========================================
       3. AUTHENTICATION (Split-Screen Login)
    ========================================= */
    const loginForm = document.getElementById('loginForm');
    const userDatabase = { "admin": "admin123", "Sandipan": "DMM-2026-11", "Neha": "DMM-2026-01", "Prodip": "DMM-2026-02", "Amrita": "DMM-2026-03", "Shreya": "DMM-2026-04", "Koyel": "DMM-2026-05", "Srijit": "DMM-2026-06", "Indrajit": "DMM-2026-07", "Sagar": "DMM-2026-08", "Shabnam": "DMM-2026-09", "Rabi": "DMM-2026-10", "Diptak": "DMM-2026-12", "Abhijit": "DMM-2026-13", "Suman": "DMM-2026-14", "Debajyoti": "DMM-2026-15", "Sk": "DMM-2026-16", "Gargi": "DMM-2026-17", "Pallabi": "DMM-2026-18", "Debadrick": "DMM-2026-19", "Deep": "DMM-2026-20", "Payel": "DMM-2026-21", "_": "DMM-2026-22", "Neha": "DMM-2026-23", "Souvik": "DMM-2026-24", "": "DMM-2026-25",}; // Add your 200 users here

    if (loginForm) {
        const errorMsg = document.getElementById('error-msg');
        const loginBtn = document.getElementById('loginBtn');
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');

        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.textContent = type === 'password' ? '👁️' : '🙈';
        });

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const userVal = document.getElementById('username').value.trim();
            const passVal = passwordInput.value.trim();

            loginBtn.textContent = "Verifying...";
            
            setTimeout(() => {
                if (userDatabase.hasOwnProperty(userVal) && userDatabase[userVal] === passVal) {
                    sessionStorage.setItem("isLoggedIn", "true");
                    sessionStorage.setItem("currentUser", userVal);
                    window.location.href = "dashboard.html"; 
                } else {
                    errorMsg.textContent = "Invalid Roll Number or Password.";
                    loginBtn.textContent = "Access Curriculum";
                }
            }, 700); 
        });
    }

    /* =========================================
       4. GLOBAL UI TOGGLES (Focus & Dark Mode)
    ========================================= */
    if (document.getElementById('mainWrapper')) {
        if (sessionStorage.getItem("isLoggedIn") !== "true") window.location.href = "index.html";
        document.getElementById('logoutBtn').addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.clear();
            window.location.href = "index.html";
        });
        
        window.onscroll = function() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            const bar = document.getElementById("myBar");
            if(bar) bar.style.width = scrolled + "%";
        };
    }

    const focusModeBtn = document.getElementById('focusModeBtn');
    if (focusModeBtn) {
        focusModeBtn.addEventListener('click', () => document.body.classList.toggle('focus-mode'));
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        if (darkModeToggle) darkModeToggle.textContent = "☀️";
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (document.documentElement.getAttribute("data-theme") === "dark") {
                document.documentElement.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
                darkModeToggle.textContent = "🌙";
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
                darkModeToggle.textContent = "☀️";
            }
        });
    }
});

function copyText(elementId, btnElement) {
    navigator.clipboard.writeText(document.getElementById(elementId).innerText).then(() => {
        const originalText = btnElement.innerText;
        btnElement.innerText = "Copied!";
        setTimeout(() => btnElement.innerText = originalText, 2000);
    });
}
