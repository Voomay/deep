const services = [
  {
    name: 'Aquaculture Systems',
    desc: 'Turnkey freshwater & marine hatcheries, grow-out and R&D facilities.',
    icon: 'fa-solid fa-fish',
    img: 'assets/services/01_Aquaculture/0000_Trout-in-hatchery.jpg',
    tag: 'Turnkey Hatcheries',
    href: 'services.html#service-aquaculture'
  },
  {
    name: 'Recirculating Aquaculture (RAS)',
    desc: 'Advanced closed-loop biofiltration, drum filters & water reuse.',
    icon: 'fa-solid fa-arrows-spin',
    img: 'assets/projects/06_Trout_Hatchery_RAS.png',
    tag: 'Closed-Loop RAS',
    href: 'services.html#service-ras'
  },
  {
    name: 'Live Holding Systems',
    desc: 'Stable water environments for lobster, abalone & shellfish export.',
    icon: 'fa-solid fa-shrimp',
    img: 'assets/services/02_Live_Holding/0001_South-Coast-rock-lobster.jpg',
    tag: 'Live Seafood Holding',
    href: 'services.html#service-live-holding'
  },
  {
    name: 'Commercial Aquarium Systems',
    desc: 'Life-support systems, public exhibits & restaurant display holding.',
    icon: 'fa-solid fa-water',
    img: 'assets/services/03_Aquariums/0001_Protein-Skimmers-at-Two-Oceans-Aquarium.jpg',
    tag: 'Life Support (LSS)',
    href: 'services.html#service-aquarium'
  },
  {
    name: 'Monitoring & Control Systems',
    desc: 'Dissolved oxygen, pH, temperature sensors, datalogging & alarms.',
    icon: 'fa-solid fa-chart-line',
    img: 'assets/services/05_Control_Systems/0002_Monitoring-unit-in-container.jpg',
    tag: 'Sensors & Automation',
    href: 'services.html#service-monitoring'
  },
  {
    name: 'Specialist Swimming Pools',
    desc: 'Dependable filtration for school, 50m commercial and eco-pools.',
    icon: 'fa-solid fa-person-swimming',
    img: 'assets/projects/02_Natural_Pool_01.png',
    tag: '50m & Natural Pools',
    href: 'services.html#service-pools'
  },
  {
    name: 'Design, Consulting & Supply',
    desc: 'System modelling, AutoCAD schematics, GRP/HDPE tanks & pumps.',
    icon: 'fa-solid fa-compass-drafting',
    img: 'assets/services/01_Aquaculture/0009_Fish-farm-pipe-installation.jpg',
    tag: 'Engineering & Supply',
    href: 'services.html#service-consulting'
  }
];

const crop = (coords, alt = '') => `<div class="crop" data-crop="${coords}" role="img" aria-label="${alt}"></div>`;
const btn = (label, target) => `<a class="button" href="${target}">${label} <i class="fa-solid fa-arrow-right"></i></a>`;
const head = (eye, title, label, target) => `<div class="section-head"><div><div class="eyebrow">${eye}</div><h2>${title}</h2></div>${btn(label, target)}</div>`;

const projects = [
  ['High-Capacity Red Tide Mitigation Filtration', 'Large-scale 1,200,000 L/h filtration infrastructure developed for coastal red-tide protection.', 'West Coast, SA', 'assets/projects/01_Red_Tide_Mitigation_Filtration_System.png'],
  ['Commercial Recirculating Aquaculture (RAS)', 'Advanced closed-loop recirculating aquaculture facility with drum filtration and water conditioning loops.', 'Western Cape, SA', 'assets/projects/aquaculture_ras_facility.jpg'],
  ['Trout Hatchery & Juvenile RAS', 'Full recirculating aquaculture system incorporating fibreglass tanks and specialist filtration.', 'Western Cape, SA', 'assets/projects/06_Trout_Hatchery_RAS.png'],
  ['Marine Seawater Pump Station & Reticulation', 'Coastal intake pumping station with high-volume manifold distribution and automated switchgear.', 'Atlantic Coast, SA', 'assets/projects/coastal_pump_station.jpg'],
  ['Natural Swimming Pools & Eco-Pools', 'Specialist biological filtration combining natural aquatic environments with pure water.', 'Helderberg, WC', 'assets/projects/02_Natural_Pool_01.png'],
  ['50m Outdoor Swimming Pool', 'Specialist high-demand filtration and aquatic infrastructure for a 50-metre commercial pool.', 'Western Cape, SA', 'assets/projects/07_Outdoor_50m_Swimming_Pool.png'],
  ['Offshore Lobster Vessel Live Holding', 'Custom sea-water live-well filtration and chilling circuit retrofitted to commercial fishing vessel.', 'Atlantic Coast, SA', 'assets/services/02_Live_Holding/0003_Lobster-fishing-vessel-live-holding-system.jpg'],
  ['Two Oceans Aquarium Life-Support Systems', 'High-capacity industrial foam fractionators and marine life support infrastructure for public exhibits.', 'Cape Town, SA', 'assets/services/03_Aquariums/0001_Protein-Skimmers-at-Two-Oceans-Aquarium.jpg']
];

const articles = [
  ['18 Sep 2026', 'What Is a Recirculating Aquaculture System (RAS)?', 'assets/projects/06_Trout_Hatchery_RAS.png', 'Recirculating Aquaculture Systems allow water to be treated and reused rather than continuously discharged, giving complete control over biological parameters.', '5 min read'],
  ['12 Sep 2026', 'How Drum Filters Work in Aquaculture', 'assets/services/01_Aquaculture/0009_Fish-farm-pipe-installation.jpg', 'Mechanical solids removal is the first critical barrier in modern RAS. Explore how automatic self-cleaning drum filters eliminate waste before biological breakdown.', '4 min read'],
  ['04 Sep 2026', 'Why Water Quality Monitoring Matters in Aquaculture', 'assets/services/05_Control_Systems/0002_Monitoring-unit-in-container.jpg', 'From continuous optical dissolved oxygen sensing to automated multi-parameter telemetry, reliable data logging and alarms safeguard valuable aquatic life.', '6 min read']
];

const testimonials = [
  {
    name: 'Pieter V...',
    role: 'Commercial Marine Hatchery Manager',
    region: 'Western Cape',
    quote: 'Deep Blue Aqua engineered our complete recirculating hatchery system. Water quality parameters and dissolved oxygen levels remain flawlessly stable, resulting in superior juvenile survival rates.'
  },
  {
    name: 'David C...',
    role: 'Operations Director, Live Seafood Exports',
    region: 'Southern Africa',
    quote: 'Their live lobster and abalone holding systems maintain ideal temperature and biofiltration across pre-export cycles. Mortality has dropped to virtually zero during peak seasons.'
  },
  {
    name: 'Marius S...',
    role: 'Facilities Director, Helderberg Aquatic Centre',
    region: 'Western Cape',
    quote: 'Managing a high-demand 50m pool and natural eco-pool requires proven hydraulic design. Deep Blue Aqua delivered robust filtration infrastructure that performs day in and day out.'
  }
];

const agentLogos = [
  { name: "Faivre", src: "assets/brands/agent-faivre.jpg", alt: "Faivre Aquaculture Machinery & Drum Filters" },
  { name: "Linn Aqua", src: "assets/brands/agent-linn-aqua.jpg", alt: "Linn Aqua Water Treatment & Aeration" },
  { name: "OxyGuard", src: "assets/brands/agent-oxyguard.jpg", alt: "OxyGuard Water Monitoring & Control Systems" },
  { name: "Campbell Scientific", src: "assets/brands/agent-campbell-scientific.jpg", alt: "Campbell Scientific Measurement & Control Instrumentation" }
];
const partnerLogos = agentLogos;

document.querySelector('#sections').innerHTML = `
  <!-- Services Section (4-Card Visible Carousel with Real Photos) -->
  <section id="services" class="section wrap tint">
    <div class="services-head">
      <div>
        <div class="eyebrow">OUR SERVICES</div>
        <h2>Specialist Aquatic Systems</h2>
      </div>
      <div class="services-header-actions">
        <a class="button" href="services.html">Explore All Solutions <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
    <div class="services-carousel-wrapper">
      <button type="button" class="carousel-arrow-btn carousel-arrow-left" id="servicesPrevBtn" aria-label="Previous services" title="Previous services">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div class="services-carousel-track" id="servicesTrack">
        ${services.map((s, i) => `
          <a class="card" href="${s.href}">
            <div class="card-media">
              <img src="${s.img}" alt="${s.name}" class="card-img" loading="lazy">
              <span class="media-tag">${s.tag}</span>
            </div>
            <div class="card-body">
              <span class="service-icon"><i class="${s.icon}"></i></span>
              <h3>${s.name}</h3>
              <p>${s.desc}</p>
            </div>
          </a>
        `).join('')}
      </div>
      <button type="button" class="carousel-arrow-btn carousel-arrow-right" id="servicesNextBtn" aria-label="Next services" title="Next services">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </section>

  <!-- Intelligent Automation Section with Water Video Background -->
  <section class="automation">
    <div class="video-bg-container" aria-hidden="true">
      <video class="video-bg-media" autoplay muted loop playsinline poster="assets/services/05_Control_Systems/0002_Monitoring-unit-in-container.jpg">
        <source src="assets/water-filtration-hd.webm" type="video/webm">
        <source src="assets/water-filtration.webm" type="video/webm">
      </video>
      <div class="video-bg-overlay"></div>
    </div>
    <div class="automation-inner">
      <span class="automation-badge"><i class="fa-solid fa-microchip"></i> SPECIALIST MONITORING &amp; CONTROL</span>
      <h2>See What Is Happening in Your Water.</h2>
      <p class="automation-subtitle">Dissolved Oxygen &nbsp;•&nbsp; pH &amp; Temp Sensors &nbsp;•&nbsp; Multi-Parameter Logging &nbsp;•&nbsp; Automated Alarms &amp; Switchgear</p>
      <div class="automation-features">
        <span class="af-item"><i class="fa-solid fa-satellite-dish"></i> 24/7 Multi-Parameter Logging</span>
        <span class="af-item"><i class="fa-solid fa-shield-halved"></i> Automated Fail-Safe Alarms</span>
        <span class="af-item"><i class="fa-solid fa-chart-line"></i> Real-Time Telemetry &amp; Access</span>
      </div>
      <div class="automation-cta">
        <a class="button glow auto-btn" href="services.html#service-monitoring">Explore Monitoring Solutions <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section (Two-Part Split: Image + 4 Core Points) -->
  <section class="section wrap why-choose-section" id="why-choose-us">
    ${head('WHY CHOOSE DEEP BLUE AQUA?', 'More Than Equipment. A Complete Technical Partner.', 'Discuss Your Project', 'contact.html')}
    <div class="why-choose-split">
      <!-- Part 1: Left Engineered Project Media with Trust Highlights -->
      <div class="why-choose-media">
        <img src="assets/projects/01_Red_Tide_Mitigation_Filtration_System.png" alt="Deep Blue Aquatic Systems technical installation" class="why-choose-img" loading="lazy">
        <div class="why-media-badge">
          <div class="wm-stat">
            <strong>15+ Yrs</strong>
            <small>Aquatic Engineering</small>
          </div>
          <div class="wm-divider"></div>
          <div class="wm-stat">
            <strong>Fresh &amp; Marine</strong>
            <small>Proven Solutions</small>
          </div>
          <div class="wm-divider"></div>
          <div class="wm-stat">
            <strong>100%</strong>
            <small>Engineered For Life</small>
          </div>
        </div>
      </div>

      <!-- Part 2: Right 4 Core Engineering Points with Short Descriptions -->
      <div class="why-choose-points">
        <div class="why-point-card">
          <div class="why-point-icon"><i class="fa-solid fa-award"></i></div>
          <div class="why-point-content">
            <h3>Specialist Knowledge</h3>
            <p>Our team combines aquaculture, water-treatment, engineering and technical experience to solve complex aquatic-system challenges.</p>
          </div>
        </div>
        <div class="why-point-card">
          <div class="why-point-icon"><i class="fa-solid fa-diagram-project"></i></div>
          <div class="why-point-content">
            <h3>Complete Project Capability</h3>
            <p>From initial concept and feasibility through design, equipment, manufacturing, installation and commissioning, clients work with one specialist team.</p>
          </div>
        </div>
        <div class="why-point-card">
          <div class="why-point-icon"><i class="fa-solid fa-sliders"></i></div>
          <div class="why-point-content">
            <h3>Custom-Designed Systems</h3>
            <p>We don't believe every project needs the same solution. Systems are developed around the application, species, water conditions and operational requirements.</p>
          </div>
        </div>
        <div class="why-point-card">
          <div class="why-point-icon"><i class="fa-solid fa-fish-fins"></i></div>
          <div class="why-point-content">
            <h3>Freshwater &amp; Marine Experience</h3>
            <p>Extensive field experience spanning freshwater hatcheries, marine RAS, live seafood holding, commercial aquariums and specialist swimming pools.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Projects (High-Res 16:9 Wide Images) -->
  <section class="section wrap tint" id="projects">
    ${head('FEATURED PROJECTS', 'Real Systems. Real Environments.', 'View All Projects', 'services.html')}
    <div class="cards projects">
      ${projects.map((p, i) => `
        <a class="card project-card" href="contact.html?project=${encodeURIComponent(p[0])}">
          <div class="card-media">
            <img src="${p[3]}" alt="${p[0]}" class="card-img" loading="lazy">
          </div>
          <div class="card-body">
            <h3>${p[0]}</h3>
            <p>${p[1]}</p>
            <span class="circle-arrow"><i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </a>
      `).join('')}
    </div>
  </section>

  <!-- Rotating Brand Logos Section (Monochrome Black & White, Uniform Size) -->
  <section class="logos-section">
    <div class="eyebrow">OUR AGENTS</div>
    <div class="logos-marquee-wrapper">
      <div class="logos-slider" aria-label="Rotating International Agent Logos">
        ${[...agentLogos, ...agentLogos, ...agentLogos, ...agentLogos, ...agentLogos, ...agentLogos].map(logo => `
          <div class="agri-logo-card" title="${logo.name}">
            <img src="${logo.src}" alt="${logo.alt}" class="agri-logo-img">
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="section wrap tint testimonials-section" id="testimonials">
    ${head('WHAT OUR CLIENTS SAY', 'Trusted Partnerships. Proven Aquatic Systems.', 'Get In Touch', 'contact.html')}
    <div class="testimonials-grid">
      ${testimonials.map((t, i) => `
        <div class="testimonial-card" data-index="${i}">
          <div class="tc-top">
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
          <p class="tc-quote">“${t.quote}”</p>
          <div class="tc-footer">
            <div class="tc-info">
              <strong>${t.name}</strong>
              <small>${t.role} &nbsp;•&nbsp; <span>${t.region}</span></small>
            </div>
            <i class="fa-solid fa-quote-right tc-watermark"></i>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- Latest Insights (High-Res 16:9 Wide Images) -->
  <section class="section wrap" id="blog">
    ${head('LATEST INSIGHTS', 'Knowledge From Below the Surface', 'View All Articles', 'blog.html')}
    <div class="cards articles">
      ${articles.map((a, i) => `
        <a class="card article-card" href="blog.html">
          <div class="card-media">
            <img src="${a[2]}" alt="${a[1]}" class="card-img" loading="lazy">
            <span class="media-tag article-time"><i class="fa-regular fa-clock"></i> ${a[4]}</span>
          </div>
          <div class="card-body">
            <time><i class="fa-regular fa-calendar"></i> ${a[0]}</time>
            <h3>${a[1]}</h3>
            <span class="read-more">Read Full Article <i class="fa-solid fa-arrow-right"></i></span>
            <span class="circle-arrow"><i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </a>
      `).join('')}
    </div>
  </section>

  <!-- Call to Action (Spacious, High-Impact Padding) -->
  <section class="cta">
    <div class="cta-inner wrap">
      <div class="cta-content">
        <span class="cta-badge"><i class="fa-solid fa-water"></i> SPECIALIST AQUATIC ENGINEERING</span>
        <h2>Have a Water Challenge? Let’s Engineer the Solution.</h2>
        <p>From aquaculture and live holding to specialist filtration, monitoring and aquatic-system design, our team can help you develop a solution suited to your project.</p>
      </div>
      <div class="cta-actions">
        <a class="button glow cta-primary" href="contact.html">Discuss Your Project <i class="fa-solid fa-arrow-right"></i></a>
        <a class="cta-phone" href="tel:+27218562031"><i class="fa-solid fa-phone"></i> <span>Call 021 856 2031</span></a>
      </div>
    </div>
  </section>

  <!-- Modern Redesigned Footer -->
  <footer class="main-footer">
    <div class="footer-top wrap">
      <div class="footer-grid">
        <!-- Brand & Summary -->
        <div class="footer-col brand-col">
          <a class="footer-brand" href="index.html" aria-label="Deep Blue Aqua">
            <img src="assets/logo-white.png" alt="Deep Blue Aqua" class="footer-logo">
          </a>
          <p class="footer-desc">
            South African aquatic engineering and water technology company specialising in the design, manufacture, supply and installation of systems where water quality, reliability and control matter.
          </p>
          <div class="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://wa.me/27218562031" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        <!-- Solutions Links -->
        <div class="footer-col">
          <h4 class="footer-heading">Our Solutions</h4>
          <ul class="footer-links">
            <li><a href="services.html#service-aquaculture"><i class="fa-solid fa-angle-right"></i> Aquaculture Systems</a></li>
            <li><a href="services.html#service-ras"><i class="fa-solid fa-angle-right"></i> Recirculating Systems (RAS)</a></li>
            <li><a href="services.html#service-live-holding"><i class="fa-solid fa-angle-right"></i> Live Holding Systems</a></li>
            <li><a href="services.html#service-aquarium"><i class="fa-solid fa-angle-right"></i> Commercial Aquarium Systems</a></li>
            <li><a href="services.html#service-monitoring"><i class="fa-solid fa-angle-right"></i> Monitoring &amp; Control Systems</a></li>
            <li><a href="services.html#service-pools"><i class="fa-solid fa-angle-right"></i> Specialist Swimming Pools</a></li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html"><i class="fa-solid fa-angle-right"></i> Home</a></li>
            <li><a href="about.html"><i class="fa-solid fa-angle-right"></i> About Our Company</a></li>
            <li><a href="services.html"><i class="fa-solid fa-angle-right"></i> Specialist Solutions</a></li>
            <li><a href="index.html#why-choose-us"><i class="fa-solid fa-angle-right"></i> Why Choose Us</a></li>
            <li><a href="index.html#projects"><i class="fa-solid fa-angle-right"></i> Featured Projects</a></li>
            <li><a href="blog.html"><i class="fa-solid fa-angle-right"></i> Insights &amp; Articles</a></li>
            <li><a href="contact.html"><i class="fa-solid fa-angle-right"></i> Discuss Your Project</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-col contact-col">
          <h4 class="footer-heading">Get in Touch</h4>
          <div class="footer-contact-list">
            <a href="tel:+27218562031" class="footer-contact-item">
              <span class="fci-icon"><i class="fa-solid fa-phone"></i></span>
              <div class="fci-text">
                <span class="fci-label">Call Our Office</span>
                <strong>+27 21 856 2031</strong>
              </div>
            </a>
            <a href="mailto:info@deepblueaqua.net" class="footer-contact-item">
              <span class="fci-icon"><i class="fa-solid fa-envelope"></i></span>
              <div class="fci-text">
                <span class="fci-label">Email Enquiries</span>
                <strong>info@deepblueaqua.net</strong>
              </div>
            </a>
            <div class="footer-contact-item">
              <span class="fci-icon"><i class="fa-solid fa-location-dot"></i></span>
              <div class="fci-text">
                <span class="fci-label">Office &amp; Workshop</span>
                <span>185 Mills Street, Gants Plaza, Strand 7140, Western Cape</span>
              </div>
            </div>
            <div class="footer-contact-item">
              <span class="fci-icon"><i class="fa-solid fa-clock"></i></span>
              <div class="fci-text">
                <span class="fci-label">Business Hours</span>
                <span>Mon – Fri: 08:00 – 17:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Sub-bar -->
    <div class="footer-bottom">
      <div class="footer-bottom-inner wrap">
        <div class="copyright-info">
          <span>© 2026 Deep Blue Aquatic Systems (Pty) Ltd. All rights reserved.</span>
          <span class="sep">|</span>
          <span class="tag">Specialist Aquatic Systems</span>
        </div>
        <div class="footer-legal">
          <a href="contact.html" data-policy="Privacy Policy">Privacy Policy</a>
          <span class="dot">•</span>
          <a href="contact.html" data-policy="Terms & Conditions">Terms & Conditions</a>
          <span class="dot">•</span>
          <a href="contact.html" data-policy="Quality & Environmental Policy">Quality Policy</a>
        </div>
        <a href="#home" class="back-to-top" aria-label="Back to top">
          <span>Top</span> <i class="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  </footer>
`;

// Render crop sprites for reference graphics (like header brand logo, about image, and logos)
function renderCrops() {
  document.querySelectorAll('[data-crop]').forEach(el => {
    if (el.children.length) return;
    const [x, y, w, h] = el.dataset.crop.split(',').map(Number);
    el.style.aspectRatio = `${w}/${h}`;
    el.innerHTML = `<img src="assets/reference.png" alt="" draggable="false" style="width:${803/w*100}%;left:${-x/w*100}%;top:${-y/h*100}%">`;
  });
}
renderCrops();

// Modal Details Dialog
const modal = document.querySelector('#detail');
function show(title, body) {
  document.querySelector('#detail-content').innerHTML = `<h2>${title}</h2>${body}`;
  modal.showModal();
}
document.querySelector('.close').onclick = () => modal.close();
modal.addEventListener('click', e => {
  if (e.target === modal) modal.close();
});

// Mobile Navigation Drawer & Backdrop Overlay
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('nav');
let navBackdrop = document.querySelector('.dba-backdrop');
if (!navBackdrop) {
  navBackdrop = document.createElement('div');
  navBackdrop.className = 'dba-backdrop';
  navBackdrop.id = 'dbaNavBackdrop';
  document.body.appendChild(navBackdrop);
}

function openNavDrawer() {
  if (!nav) return;
  nav.classList.add('open');
  navBackdrop.classList.add('active');
  document.body.classList.add('nav-open');
  if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeNavDrawer() {
  if (!nav) return;
  nav.classList.remove('open');
  navBackdrop.classList.remove('active');
  document.body.classList.remove('nav-open');
  if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (menuBtn) {
  menuBtn.onclick = (e) => {
    e.stopPropagation();
    if (nav && nav.classList.contains('open')) {
      closeNavDrawer();
    } else {
      openNavDrawer();
    }
  };
}

navBackdrop.onclick = closeNavDrawer;
document.querySelectorAll('.nav-close-btn').forEach(btn => btn.onclick = closeNavDrawer);
document.querySelectorAll('nav a:not(.dropdown-item):not(.nav-link-main)').forEach(a => a.addEventListener('click', closeNavDrawer));

// Services dropdown mobile toggle
const mobileDropToggle = document.querySelector('.mobile-dropdown-toggle');
const servicesDrop = document.querySelector('#servicesDropdown');
if (mobileDropToggle && servicesDrop) {
  mobileDropToggle.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const expanded = servicesDrop.classList.toggle('mobile-expanded');
    mobileDropToggle.classList.toggle('active', expanded);
  };
}


// Interactive Service Click
document.querySelectorAll('[data-service]').forEach(el => el.onclick = e => {
  e.preventDefault();
  const s = services[el.dataset.service];
  show(s[0], `
    <p style="font-size:17px;font-weight:600;color:#009bd0;">${s[1]}</p>
    <p>From complete recirculating aquaculture systems and live holding to specialist filtration, monitoring, and automated electrical control — our team delivers practical systems designed around the unique requirements of your project.</p>
    <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;">
      <a class="button" href="contact.html?service=${encodeURIComponent(s[0])}">Discuss Your Project <i class="fa-solid fa-arrow-right"></i></a>
      <a class="button dark" href="services.html">View Solutions Details</a>
    </div>
  `);
});

// Interactive Project Click
document.querySelectorAll('[data-project]').forEach(el => el.onclick = e => {
  e.preventDefault();
  const p = projects[el.dataset.project];
  show(p[0], `
    <img src="${p[3]}" alt="${p[0]}" style="width:100%;height:240px;object-fit:cover;border-radius:12px;margin:12px 0 18px;">
    <p>${p[1]}</p>
    <p><strong>Location / Application:</strong> ${p[2]}</p>
    <a class="button" href="contact.html?project=${encodeURIComponent(p[0])}">Discuss a Similar Project <i class="fa-solid fa-arrow-right"></i></a>
  `);
});

// Interactive Video Buttons
document.querySelectorAll('[data-video]').forEach(el => el.onclick = () => {
  show('Specialist Aquatic Systems in Action', `
    <div style="margin-bottom: 16px; border-radius: 12px; overflow: hidden; background: #011326; box-shadow: 0 8px 24px rgba(0,0,0,0.3);">
      <video controls autoplay muted playsinline style="width:100%; height:auto; display:block; max-height: 380px; object-fit: contain; background: #000;" poster="assets/article-cleanwater.jpg">
        <source src="assets/water-filtration-hd.webm" type="video/webm">
        <source src="assets/water-filtration.webm" type="video/webm">
        Your browser does not support HTML5 video.
      </video>
    </div>
    <p><strong>Engineered Water Systems That Sustain Life</strong> — From recirculating aquaculture systems and live seafood holding to commercial aquariums, water quality monitoring, and specialist swimming pools.</p>
    <p>Contact our engineering desk in Strand, Western Cape for system design, component selection, AutoCAD drawings, and project proposals.</p>
    <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:14px;">
      <a class="button glow" href="contact.html"><i class="fa-solid fa-comments"></i> Discuss Your Project</a>
      <a class="button" href="tel:+27218562031"><i class="fa-solid fa-phone"></i> 021 856 2031</a>
    </div>
  `);
});

// Policy dialogs
document.querySelectorAll('[data-policy]').forEach(el => el.onclick = e => {
  e.preventDefault();
  show(el.dataset.policy, '<p>Please contact <a href="mailto:info@deepblueaqua.net">info@deepblueaqua.net</a> for the complete ' + el.dataset.policy.toLowerCase() + ' documentation and compliance certificates.</p>');
});

// Services 4-Card Carousel Navigation Controls
const servicesTrack = document.getElementById('servicesTrack');
const sPrevBtn = document.getElementById('servicesPrevBtn');
const sNextBtn = document.getElementById('servicesNextBtn');

if (servicesTrack) {
  const getCardStep = () => {
    const firstCard = servicesTrack.querySelector('.card');
    return firstCard ? firstCard.offsetWidth + 20 : 280;
  };

  if (sPrevBtn) {
    sPrevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      servicesTrack.scrollBy({ left: -getCardStep(), behavior: 'smooth' });
    });
  }

  if (sNextBtn) {
    sNextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      servicesTrack.scrollBy({ left: getCardStep(), behavior: 'smooth' });
    });
  }

  // Mouse Drag to Slide
  let isDown = false;
  let startX;
  let scrollLeft;

  servicesTrack.addEventListener('mousedown', (e) => {
    isDown = true;
    servicesTrack.classList.add('dragging');
    startX = e.pageX - servicesTrack.offsetLeft;
    scrollLeft = servicesTrack.scrollLeft;
  });

  servicesTrack.addEventListener('mouseleave', () => {
    isDown = false;
    servicesTrack.classList.remove('dragging');
  });

  servicesTrack.addEventListener('mouseup', () => {
    isDown = false;
    servicesTrack.classList.remove('dragging');
  });

  servicesTrack.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - servicesTrack.offsetLeft;
    const walk = (x - startX) * 1.5;
    servicesTrack.scrollLeft = scrollLeft - walk;
  });
}

// ============================================================
// HERO BACKGROUND IMAGE SLIDER (DYNAMIC REALISTIC PHOTOGRAPHY)
// ============================================================
(() => {
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroSlideCaption = document.getElementById('heroSlideCaption');
  const heroPrev = document.getElementById('heroPrev');
  const heroNext = document.getElementById('heroNext');
  const heroSection = document.getElementById('home');

  if (!heroSlides.length) return;

  let currentSlide = 0;
  let slideTimer = null;

  const showSlide = (index) => {
    currentSlide = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((s, i) => {
      s.classList.toggle('active', i === currentSlide);
    });
    heroDots.forEach((d, i) => {
      d.classList.toggle('active', i === currentSlide);
    });
    if (heroSlideCaption && heroSlides[currentSlide]) {
      heroSlideCaption.textContent = heroSlides[currentSlide].getAttribute('data-caption') || '';
    }
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    slideTimer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  };

  if (heroPrev) {
    heroPrev.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(currentSlide - 1);
      startAutoPlay();
    });
  }

  if (heroNext) {
    heroNext.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(currentSlide + 1);
      startAutoPlay();
    });
  }

  heroDots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(idx);
      startAutoPlay();
    });
  });

  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoPlay);
    heroSection.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
})();
