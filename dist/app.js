const services = [
  {
    name: 'Aquaculture Systems',
    desc: 'Turnkey freshwater & marine hatcheries, grow-out and R&D facilities.',
    icon: 'fa-solid fa-fish',
    img: 'assets/services/01_Aquaculture/0000_Trout-in-hatchery.webp',
    tag: 'Turnkey Hatcheries',
    href: 'services.html#service-aquaculture'
  },
  {
    name: 'Recirculating Aquaculture (RAS)',
    desc: 'Advanced closed-loop biofiltration, drum filters & water reuse.',
    icon: 'fa-solid fa-arrows-spin',
    img: 'assets/projects/06_Trout_Hatchery_RAS.webp',
    tag: 'Closed-Loop RAS',
    href: 'services.html#service-ras'
  },
  {
    name: 'Agricultural Water Systems',
    desc: 'Borehole & dam water treatment, irrigation filtration, solar pumps & farm aquaponics.',
    icon: 'fa-solid fa-wheat-awn',
    img: 'assets/ruben/IMG_8463.webp',
    tag: 'Farm Water Systems',
    href: 'agriculture.html'
  },
  {
    name: 'Live Holding Systems',
    desc: 'Stable water environments for lobster, abalone & shellfish export.',
    icon: 'fa-solid fa-shrimp',
    img: 'assets/services/02_Live_Holding/0001_South-Coast-rock-lobster.webp',
    tag: 'Live Seafood Holding',
    href: 'services.html#service-live-holding'
  },
  {
    name: 'Commercial Aquarium Systems',
    desc: 'Life-support systems, public exhibits & restaurant display holding.',
    icon: 'fa-solid fa-water',
    img: 'assets/services/03_Aquariums/0001_Protein-Skimmers-at-Two-Oceans-Aquarium.webp',
    tag: 'Life Support (LSS)',
    href: 'services.html#service-aquarium'
  },
  {
    name: 'Monitoring & Control Systems',
    desc: 'Dissolved oxygen, pH, temperature sensors, datalogging & alarms.',
    icon: 'fa-solid fa-chart-line',
    img: 'assets/services/05_Control_Systems/0002_Monitoring-unit-in-container.webp',
    tag: 'Sensors & Automation',
    href: 'services.html#service-monitoring'
  },
  {
    name: 'Specialist Swimming Pools',
    desc: 'Dependable filtration for school, 50m commercial and eco-pools.',
    icon: 'fa-solid fa-person-swimming',
    img: 'assets/ruben/IMG_5367.webp',
    tag: '50m & Natural Pools',
    href: 'services.html#service-pools'
  },
  {
    name: 'Design, Consulting & Supply',
    desc: 'System modelling, AutoCAD schematics, GRP/HDPE tanks & pumps.',
    icon: 'fa-solid fa-compass-drafting',
    img: 'assets/services/01_Aquaculture/0009_Fish-farm-pipe-installation.webp',
    tag: 'Engineering & Supply',
    href: 'services.html#service-consulting'
  }
];

const crop = (coords, alt = '') => `<div class="crop" data-crop="${coords}" role="img" aria-label="${alt}"></div>`;
const btn = (label, target) => `<a class="button" href="${target}">${label} <i class="fa-solid fa-arrow-right"></i></a>`;
const head = (eye, title, label, target) => `<div class="section-head"><div><div class="eyebrow">${eye}</div><h2>${title}</h2></div>${btn(label, target)}</div>`;

const projects = [
  ['High-Capacity Red Tide Filtration', '1,200,000 L/h coastal seawater filtration plant developed for red-tide protection.', 'West Coast, SA', 'assets/ruben/IMG_3105.webp', 'Site Photo'],
  ['Three Streams Trout Live Logistics', 'Turnkey oxygenated live-haul and holding tanks for leading Franschhoek trout producer.', 'Franschhoek, SA', 'assets/ruben/IMG_6661.webp', 'Site Photo'],
  ['Commercial Greenhouse Aquaponics', 'Integrated commercial recirculating aquaponics with deep-water culture hydroponic beds.', 'Western Cape, SA', 'assets/ruben/IMG_8463.webp', 'Site Photo'],
  ['Mountain Solar Pump Station', 'Off-grid ground-mount solar PV array powering high-lift agricultural dam pumping.', 'Western Cape, SA', 'assets/ruben/IMG_3311.webp', 'Site Photo'],
  ['Commercial RAS Manifold & Pumps', 'Turnkey 8-pump primary and secondary recirculation room supporting commercial finfish RAS.', 'Western Cape, SA', 'assets/ruben/IMG_2598.webp', 'Site Photo'],
  ['Oceanfront Coastal Eco-Pool', 'Chemical-free natural swimming pool with biological wetland filtration on the Atlantic coast.', 'Atlantic Coast, SA', 'assets/ruben/IMG_5367.webp', 'Site Photo'],
  ['Two Oceans Aquarium Life-Support', 'Industrial foam fractionators and protein skimmers for marine predator exhibits.', 'Cape Town, SA', 'assets/services/03_Aquariums/0001_Protein-Skimmers-at-Two-Oceans-Aquarium.webp', 'Site Photo'],
  ['50m Outdoor Swimming Pool', 'High-rate commercial turnover filtration and automated dosing infrastructure for 50m pool.', 'Western Cape, SA', 'assets/projects/07_Outdoor_50m_Swimming_Pool.webp', '3D Engineering Design']
];

const articles = [
  ['18 Sep 2026', 'What Is a Recirculating Aquaculture System (RAS)?', 'assets/projects/06_Trout_Hatchery_RAS.webp', 'Recirculating Aquaculture Systems allow water to be treated and reused rather than continuously discharged, giving complete control over biological parameters.', '5 min read', 'blog-post.html?article=ras-guide'],
  ['12 Sep 2026', 'How Drum Filters Work in Aquaculture & Agriculture', 'assets/ruben/IMG_4619.webp', 'Mechanical solids removal is the first critical barrier in modern water systems. Explore how automatic self-cleaning drum filters eliminate waste before breakdown.', '4 min read', 'blog-post.html?article=drum-filters'],
  ['04 Sep 2026', 'Why Water Quality Monitoring Matters', 'assets/services/05_Control_Systems/0002_Monitoring-unit-in-container.webp', 'From continuous optical dissolved oxygen sensing to automated multi-parameter telemetry, reliable data logging and alarms safeguard valuable aquatic life.', '6 min read', 'blog-post.html?article=monitoring-systems']
];

const testimonials = [
  {
    name: 'Two Oceans Aquarium Operations',
    role: 'Curatorial & Life-Support Systems (LSS)',
    region: 'V&A Waterfront, Cape Town',
    quote: 'Deep Blue Aqua engineered the high-capacity foam fractionation and life-support systems for our marine exhibits. Water clarity and gas-exchange stability have been outstanding across high visitor seasons.'
  },
  {
    name: 'Three Streams Trout Farm',
    role: 'Commercial Aquaculture Operations',
    region: 'Franschhoek Valley, Western Cape',
    quote: 'Their customized live-haul oxygenation circuits and holding manifolds maintain optimal dissolved oxygen for our trout stocks across challenging transport logistics.'
  },
  {
    name: 'Walker Bay Commercial Marine Hatchery',
    role: 'Abalone & Marine Hatchery Operations',
    region: 'Hermanus Coast, Western Cape',
    quote: 'Operating a high-density marine hatchery requires zero tolerance for water-quality failures. Deep Blue Aqua’s biofiltration and sensor telemetry have delivered flawless reliability.'
  },
  {
    name: 'Helderberg Aquatic Centre Facilities',
    role: 'Facilities Management (50m Pool & Eco-Pool)',
    region: 'Western Cape',
    quote: 'Managing a high-demand 50m pool and natural eco-pool requires proven hydraulic design. Deep Blue Aqua delivered robust filtration infrastructure that performs day in and day out.'
  }
];

const agentLogos = [
  { name: "Faivre", src: "assets/brands/agent-faivre.webp", alt: "Faivre Aquaculture Machinery & Drum Filters" },
  { name: "Rainbow Reservoirs", src: "assets/brands/agent-rainbow.png", alt: "Rainbow Reservoirs Premium Water Storage" },
  { name: "Aqualabo", src: "assets/brands/agent-aqualabo.png", alt: "Aqualabo Water Quality Sensors & Instrumentation" },
  { name: "OxyGuard", src: "assets/brands/agent-oxyguard.webp", alt: "OxyGuard Water Monitoring & Control Systems" },
  { name: "Campbell Scientific", src: "assets/brands/agent-campbell-scientific.webp", alt: "Campbell Scientific Measurement & Telemetry" },
  { name: "Linn Aqua", src: "assets/brands/agent-linn-aqua.webp", alt: "Linn Aqua Water Treatment & Aeration" }
];
const partnerLogos = agentLogos;

document.querySelector('#sections').innerHTML = `
  <!-- Services Section (Visible Carousel with Real Photos) -->
  <section id="services" class="section wrap tint">
    <div class="services-head">
      <div>
        <div class="eyebrow">OUR SERVICES</div>
        <h2>Specialist Aquatic &amp; Water Systems</h2>
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
      <video class="video-bg-media" autoplay muted loop playsinline preload="none" poster="assets/services/05_Control_Systems/0002_Monitoring-unit-in-container.webp">
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

  <!-- Agricultural Solutions Feature Band (Farms & Irrigation) -->
  <section class="section wrap" style="padding-top:40px;padding-bottom:40px;">
    <div class="agri-band-box">
      <div class="agri-band-split">
        <div class="agri-band-content">
          <span class="eyebrow" style="color:#059669;"><i class="fa-solid fa-wheat-awn"></i> TURNKEY FARM WATER SYSTEMS</span>
          <h2>Water Solutions for Agriculture &amp; Commercial Farms</h2>
          <p>From borehole iron and manganese filtration to automatic self-cleaning Faivre drum filters for drip irrigation, mountain solar pump houses, and biosecure livestock water.</p>
          <div class="agri-band-tags">
            <span class="agri-tag"><i class="fa-solid fa-circle-check"></i> Borehole Iron &amp; Manganese Removal</span>
            <span class="agri-tag"><i class="fa-solid fa-circle-check"></i> Faivre Drum Filtration for Irrigation</span>
            <span class="agri-tag"><i class="fa-solid fa-circle-check"></i> Mountain Solar Pump Stations</span>
            <span class="agri-tag"><i class="fa-solid fa-circle-check"></i> Biosecure Livestock Water Treatment</span>
          </div>
          <div class="agri-band-actions">
            <a class="button glow agri-cta-btn" href="agriculture.html">Explore Agricultural Systems <i class="fa-solid fa-arrow-right"></i></a>
            <a class="agri-quote-btn" href="contact.html?service=Agriculture" data-quote-trigger><i class="fa-solid fa-calculator"></i> Request Farm Quote</a>
          </div>
        </div>
        <div class="agri-band-media">
          <img src="assets/ruben/IMG_8463.webp" alt="Commercial greenhouse aquaponics and farm water treatment" loading="lazy">
          <div class="agri-media-caption">
            <strong>Commercial Greenhouse Aquaponics &amp; Farm Water</strong>
            <span>Western Cape, South Africa • Deep Blue Aqua</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section (Two-Part Split: Image + 4 Core Points) -->
  <section class="section wrap why-choose-section" id="why-choose-us">
    ${head('WHY CHOOSE DEEP BLUE AQUA?', 'More Than Equipment. A Complete Technical Partner.', 'Discuss Your Project', 'contact.html')}
    <div class="why-choose-split">
      <!-- Part 1: Left Engineered Project Media with Trust Highlights -->
      <div class="why-choose-media">
        <img src="assets/ruben/IMG_3105.webp" alt="Deep Blue Aquatic Systems technical installation" class="why-choose-img" loading="lazy">
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

  <!-- Featured Projects (With Real Ruben Site Photos & Labels) -->
  <section class="section wrap tint" id="projects">
    ${head('FEATURED PROJECTS', 'Real Systems. Real Environments.', 'View All Projects & Case Studies', 'projects.html')}
    <div class="cards projects" id="homeProjectsGrid">
      ${projects.map((p, i) => `
        <a class="card project-card ${i >= 3 ? 'mobile-hide-project' : ''}" href="projects.html#case-studies">
          <div class="card-media">
            <img src="${p[3]}" alt="${p[0]}" class="card-img" loading="lazy">
            ${p[4] && p[4] !== 'Site Photo' ? `
            <span class="media-tag concept-badge">
              <i class="fa-solid fa-compass-drafting"></i> ${p[4]}
            </span>` : ''}
          </div>
          <div class="card-body">
            <h3>${p[0]}</h3>
            <p>${p[1]}</p>
            <span class="circle-arrow"><i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </a>
      `).join('')}
    </div>
    <div class="mobile-projects-more-cta">
      <a class="button" href="projects.html">View All Projects &amp; Case Studies <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </section>

  <!-- Brands We Represent Section (Monochrome Black & White, Uniform Size) -->
  <section class="logos-section">
    <div class="eyebrow">BRANDS WE REPRESENT • TECHNOLOGY PARTNERS</div>
    <div class="logos-marquee-wrapper">
      <div class="logos-slider" aria-label="Rotating International Agent Logos">
        ${[...agentLogos, ...agentLogos, ...agentLogos, ...agentLogos].map(logo => `
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

  <!-- Latest Insights (High-Res 16:9 Wide Images with Direct Links) -->
  <section class="section wrap" id="blog">
    ${head('LATEST INSIGHTS', 'Knowledge From Below the Surface', 'View All Articles', 'blog.html')}
    <div class="cards articles">
      ${articles.map((a, i) => `
        <a class="card article-card" href="${a[5]}">
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
        <p>From aquaculture and live holding to agricultural filtration, water monitoring and aquatic-system design, our team can help you develop a solution suited to your project.</p>
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
            <img src="assets/logo-white.webp" onerror="this.onerror=null;this.src='assets/logo-white.png'" alt="Deep Blue Aqua" class="footer-logo">
          </a>
          <p class="footer-desc">
            South African aquatic engineering and water technology company specialising in the design, manufacture, supply and installation of systems where water quality, reliability and control matter.
          </p>
          <div class="footer-socials">
            <a href="https://linkedin.com/company/deep-blue-aqua" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://wa.me/27218562031" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        <!-- Solutions Links -->
        <div class="footer-col">
          <h4 class="footer-heading">Our Solutions</h4>
          <ul class="footer-links">
            <li><a href="services.html#service-aquaculture"><i class="fa-solid fa-angle-right"></i> Aquaculture Systems</a></li>
            <li><a href="services.html#service-ras"><i class="fa-solid fa-angle-right"></i> Recirculating Systems (RAS)</a></li>
            <li><a href="agriculture.html"><i class="fa-solid fa-angle-right"></i> Agricultural Water Systems</a></li>
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
            <li><a href="agriculture.html"><i class="fa-solid fa-angle-right"></i> Farm Water Systems</a></li>
            <li><a href="projects.html"><i class="fa-solid fa-angle-right"></i> Projects &amp; Case Studies</a></li>
            <li><a href="index.html#why-choose-us"><i class="fa-solid fa-angle-right"></i> Why Choose Us</a></li>
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
          <a href="privacy.html">Privacy Policy</a>
          <span class="dot">•</span>
          <a href="terms.html">Terms & Conditions</a>
          <span class="dot">•</span>
          <a href="quality-policy.html">Quality Policy</a>
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
  if (!heroSlides.length) return;

  let currentSlide = 0;
  let slideTimer = null;

  const showSlide = (index) => {
    currentSlide = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((s, i) => {
      s.classList.toggle('active', i === currentSlide);
    });
  };

  const startAutoPlay = () => {
    if (slideTimer) clearInterval(slideTimer);
    slideTimer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  };

  startAutoPlay();
})();
