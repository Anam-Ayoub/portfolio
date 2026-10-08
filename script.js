const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_education: "Formations",
        nav_skills: "Compétences",
        nav_experience: "Expérience",
        nav_projects: "Projets",
        nav_contact: "Contact",
        hero_hi: "Bonjour, je suis",
        hero_role: "Étudiant en<br><span class='color-ia'>Intelligence Artificielle</span>,<br><span class='color-ds'>Data Science</span><br>& <span class='color-bd'>Big Data</span>",
        hero_desc: "Recherche activement d'un stage PFE (IA / Data Science / DevOps / Big Data) à partir de février 2027.",
        btn_work: "Voir mes projets",
        btn_cv: "Voir mon CV",
        about_title: "À propos de moi",
        about_p1: "Étudiant en Master d’excellence Systèmes de l’Information et Intelligence Artificielle, avec une expertise pratique en <span class='text-highlight'>Machine Learning</span>, <span class='text-highlight'>Deep Learning</span> et <span class='text-highlight'>Analyse de Données</span>. Conception et déploiement de modèles de réseaux de neurones (<span class='text-highlight'>CNN</span>, <span class='text-highlight'>LSTM</span>, <span class='text-highlight'>MLP</span>) dans des projets concrets et mesurables.",
        about_p2: "Double expérience de stage en développement logiciel <span class='text-highlight'>full-stack</span> au sein d’environnements professionnels exigeants (Clinique Avicenne, OCP). Je suis passionné par la technologie et recherche activement de nouvelles opportunités.",
        stat_internships: "Stages Professionnels",
        stat_projects: "Projets Réalisés",
        stat_years: "Années d'études sup.",
        skills_title: "Compétences Techniques",
        exp_title: "Expériences & Formations",
        exp_work: "Expériences Professionnelles",
        exp_edu: "Formations",
        exp_helpdesk: "Stagiaire Développeur Help Desk",
        exp_helpdesk_desc: "<ul class='exp-list'><li>Développement full-stack d’une application web de gestion des tickets d’assistance informatique.</li><li>Diagnostic et résolution de pannes matérielles/logicielles, configuration de systèmes.</li></ul>",
        exp_front: "Stagiaire Développeur Front-end",
        exp_front_desc: "<ul class='exp-list'><li>Développement Front-End d’une application de facturation (HTML/CSS/JS).</li><li>Intégration d’un module de saisie dynamique avec génération et export automatique de PDF.</li></ul>",
        edu_master: "Systèmes de l’Information et Intelligence Artificielle",
        edu_licence: "Systèmes de l’Information et Intelligence Artificielle",
        edu_bts: "Développement des Systèmes d’Information",
        proj_title: "Projets Réalisés",
        proj_car: "Voiture Autonome",
        proj_car_desc: "Jeu de course 3D (Ursina/Python) avec mode manuel et mode autonome IA. Entraînement d'un MLP (PyTorch) par apprentissage supervisé pour prévoir les actions en temps réel.",
        proj_foot: "Classification d'empreintes",
        proj_foot_desc: "Classification d’empreintes animales et de dinosaures. Implémentation d'un CNN custom et Transfer Learning avec MobileNetV2 en TensorFlow/Keras.",
        proj_ora: "OraAdmin Tracking System",
        proj_ora_desc: "Plateforme multi-portails pour la gestion de projets. Base Oracle avec triggers/procédures PL/SQL et interface Streamlit avec suivi en temps réel.",
        btn_github: 'Voir sur GitHub <i class="fas fa-arrow-right"></i>',
        contact_title: "Contactez-moi",
        contact_desc: "Je suis à la recherche d'un stage PFE à partir de février 2027. N'hésitez pas à me contacter !",
        contact_cta: "Envoyer un message",
        contact_email: "Email",
        contact_phone: "Téléphone",
        contact_location: "Localisation",
        footer_rights: "Tous droits réservés.",
        skill_ia: "IA & ML",
        skill_ds: "Data Science",
        skill_prog: "Programmation",
        skill_db: "Bases de Données & Big Data",
        skill_devops: "DevOps & Outils",
        skill_bi: "Business Intelligence"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_education: "Education",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_hi: "Hi, I'm",
        hero_role: "<span class='color-ia'>Artificial Intelligence</span>,<br><span class='color-ds'>Data Science</span><br>& <span class='color-bd'>Big Data</span><br>Student",
        hero_desc: "Actively seeking a PFE Internship (IA / Data Science / DevOps / Big Data) for February 2027.",
        btn_work: "View My Work",
        btn_cv: "View CV",
        about_title: "About Me",
        about_p1: "I am an excellence Master's student in Information Systems and Artificial Intelligence, with practical expertise in <span class='text-highlight'>Machine Learning</span>, <span class='text-highlight'>Deep Learning</span>, and <span class='text-highlight'>Data Analysis</span>. I have experience in designing and deploying neural network models (<span class='text-highlight'>CNN</span>, <span class='text-highlight'>LSTM</span>, <span class='text-highlight'>MLP</span>) in concrete and measurable projects.",
        about_p2: "Additionally, I hold a dual internship experience in <span class='text-highlight'>full-stack</span> software development within demanding professional environments (Clinique Avicenne, OCP). I am passionate about technology and actively looking for opportunities to grow and contribute.",
        stat_internships: "Professional Internships",
        stat_projects: "Projects Completed",
        stat_years: "Years of Higher Ed.",
        skills_title: "Technical Skills",
        exp_title: "Experience & Education",
        exp_work: "Work Experience",
        exp_edu: "Education",
        exp_helpdesk: "Help Desk Developer Intern",
        exp_helpdesk_desc: "<ul class='exp-list'><li>Full-stack development of a web application for IT support ticket management.</li><li>Hardware/software troubleshooting and system configuration.</li></ul>",
        exp_front: "Front-end Developer Intern",
        exp_front_desc: "<ul class='exp-list'><li>Front-End development of a billing application (HTML/CSS/JS).</li><li>Integration of a dynamic input module with automatic PDF generation and export.</li></ul>",
        edu_master: "Information Systems and Artificial Intelligence",
        edu_licence: "Information Systems and Artificial Intelligence",
        edu_bts: "Information Systems Development",
        proj_title: "Projects",
        proj_car: "Self-Driving Car",
        proj_car_desc: "3D racing game (Ursina/Python) with manual and AI autonomous modes. MLP (PyTorch) trained via supervised learning to predict actions in real time.",
        proj_foot: "Footprint Classification",
        proj_foot_desc: "Classification of animal and dinosaur footprints. Implemented Custom CNN and Transfer Learning with MobileNetV2 using TensorFlow/Keras.",
        proj_ora: "OraAdmin Tracking System",
        proj_ora_desc: "Multi-portal platform for academic project management. Oracle DB with PL/SQL triggers/procedures and Streamlit interface with real-time tracking.",
        btn_github: 'View on GitHub <i class="fas fa-arrow-right"></i>',
        contact_title: "Get In Touch",
        contact_desc: "I am currently looking for an internship (PFE) starting February 2027. If you have an opportunity or just want to say hi, feel free to reach out!",
        contact_cta: "Send a Message",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_location: "Location",
        footer_rights: "All Rights Reserved.",
        skill_ia: "AI & ML",
        skill_ds: "Data Science",
        skill_prog: "Programming",
        skill_db: "Databases & Big Data",
        skill_devops: "DevOps & Tools",
        skill_bi: "Business Intelligence"
    }
};

let currentLang = 'fr';

// --- Typewriter Effect Function ---
function typeWriterEffect(element, text, speed = 30) {
    element.innerHTML = '';
    element.classList.remove('typing-done');
    let i = 0;
    let currentHTML = '';
    
    function type() {
        if (i < text.length) {
            // Instantly append HTML tags (like <br> or <span>) without breaking them
            if (text.charAt(i) === '<') {
                let tag = '';
                while (i < text.length && text.charAt(i) !== '>') {
                    tag += text.charAt(i);
                    i++;
                }
                tag += '>';
                currentHTML += tag;
                i++;
            } else {
                currentHTML += text.charAt(i);
                i++;
            }
            element.innerHTML = currentHTML;
            setTimeout(type, speed);
        } else {
            element.classList.add('typing-done');
        }
    }
    type();
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (element.classList.contains('typewriter-text')) {
                typeWriterEffect(element, translations[currentLang][key], 25);
            } else {
                element.innerHTML = translations[currentLang][key];
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Run initially to populate text and start typewriter
    updateContent();

    // --- Language Toggle Logic ---
    const langBtn = document.getElementById('lang-toggle');
    
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        document.documentElement.lang = currentLang;
        updateContent();
    });

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            if(icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // --- CV Modal Logic ---
    const viewCvBtn = document.getElementById('view-cv-btn');
    const cvModal = document.getElementById('cv-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    if (viewCvBtn && cvModal && closeModalBtn) {
        // Open Modal
        viewCvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cvModal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling in background
        });

        // Close Modal via button
        closeModalBtn.addEventListener('click', () => {
            cvModal.classList.remove('show');
            document.body.style.overflow = '';
        });

        // Close Modal by clicking outside the content
        cvModal.addEventListener('click', (e) => {
            if (e.target === cvModal) {
                cvModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
        
        // Close Modal via Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && cvModal.classList.contains('show')) {
                cvModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }

    // --- Back to Top Button ---
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Active Nav Link Highlighting ---
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) {
                current = section.getAttribute('id');
            }
        });
        navAnchors.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });
});
