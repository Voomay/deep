/**
 * Deep Blue Aqua - AquaBot Interactive Water Solutions Assistant
 * Provides interactive pre-questions, conversational lead intake (service, location, area, phone number),
 * smart keyword Q&A, and direct WhatsApp / phone escalation.
 */

(function initAquaChatWidget() {
  // Prevent duplicate initialization
  if (document.getElementById('dbaChatContainer')) return;

  // Sound synthesis via Web Audio API (no external audio assets needed)
  let soundEnabled = true;
  let audioCtx = null;

  function playChime() {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        audioCtx = new AudioContext();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      // Pleasant water-bubble pitch rise
      const now = audioCtx.currentTime;
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      // Audio not permitted or supported
    }
  }

  // Knowledge base and conversational flow state
  const state = {
    step: 'idle', // idle | ask_service | ask_location | ask_contact | completed
    leadData: {
      service: '',
      location: '',
      contactName: '',
      contactPhone: '',
      refId: ''
    }
  };

  // Restore stored session if available
  try {
    const saved = sessionStorage.getItem('dba_chat_lead');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.refId) {
        state.leadData = parsed;
        state.step = 'completed';
      }
    }
  } catch (e) {}

  // Widget HTML structure
  const container = document.createElement('div');
  container.id = 'dbaChatContainer';
  container.className = 'dba-chat-container';
  container.innerHTML = `
    <!-- Teaser Prompt Bubble -->
    <div class="dba-chat-teaser" id="dbaChatTeaser">
      <div class="dba-teaser-avatar">
        <i class="fa-solid fa-droplet"></i>
      </div>
      <div class="dba-teaser-content">
        <strong>Need Aquatic Engineering Advice?</strong>
        <p>Chat with our technical desk for aquaculture, RAS, and live holding guidance.</p>
      </div>
      <button class="dba-teaser-close" id="dbaTeaserClose" aria-label="Dismiss chat prompt">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <!-- Floating Launcher -->
    <button class="dba-chat-launcher" id="dbaChatLauncher" aria-label="Open Water Solutions Assistant Chat">
      <div class="dba-launcher-ripple"></div>
      <span class="dba-launcher-icon"><i class="fa-solid fa-comments"></i></span>
      <span class="dba-launcher-close"><i class="fa-solid fa-xmark"></i></span>
      <span class="dba-launcher-online" title="Online"></span>
    </button>

    <!-- Chat Modal Window -->
    <div class="dba-chat-window" id="dbaChatWindow" role="dialog" aria-modal="true" aria-label="Deep Blue Aqua Technical Assistant">
      <!-- Header -->
      <div class="dba-chat-header">
        <div class="dba-header-profile">
          <div class="dba-header-avatar">
            <div class="dba-avatar-fallback"><i class="fa-solid fa-water"></i></div>
            <span class="dba-status-dot"></span>
          </div>
          <div class="dba-header-title">
            <h4>Deep Blue Aqua Technical Desk</h4>
            <span><i class="fa-solid fa-circle" style="font-size:7px;color:#10b981;"></i> Online • Strand, Western Cape</span>
          </div>
        </div>
        <div class="dba-header-controls">
          <button class="dba-ctrl-btn" id="dbaSoundBtn" title="Toggle Sound">
            <i class="fa-solid fa-volume-high"></i>
          </button>
          <button class="dba-ctrl-btn" id="dbaResetBtn" title="Restart Conversation">
            <i class="fa-solid fa-rotate-right"></i>
          </button>
          <button class="dba-ctrl-btn" id="dbaCloseBtn" title="Close Chat">
            <i class="fa-solid fa-minus"></i>
          </button>
        </div>
      </div>

      <!-- Messages Body -->
      <div class="dba-chat-body" id="dbaChatBody">
        <!-- Messages rendered dynamically -->
      </div>

      <!-- Footer & Input -->
      <div class="dba-chat-footer">
        <div class="dba-input-row">
          <input type="text" class="dba-chat-input" id="dbaChatInput" placeholder="Ask about RAS, live holding, monitoring, or projects..." autocomplete="off">
          <button class="dba-send-btn" id="dbaSendBtn" aria-label="Send message">
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
        <div class="dba-chat-footer-note">
          <i class="fa-solid fa-shield-halved"></i> Direct connection to Deep Blue Aquatic Systems (Strand, WC)
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  // DOM Elements
  const launcher = document.getElementById('dbaChatLauncher');
  const chatWindow = document.getElementById('dbaChatWindow');
  const teaser = document.getElementById('dbaChatTeaser');
  const teaserClose = document.getElementById('dbaTeaserClose');
  const chatBody = document.getElementById('dbaChatBody');
  const chatInput = document.getElementById('dbaChatInput');
  const sendBtn = document.getElementById('dbaSendBtn');
  const closeBtn = document.getElementById('dbaCloseBtn');
  const soundBtn = document.getElementById('dbaSoundBtn');
  const resetBtn = document.getElementById('dbaResetBtn');

  // Toggle open/close
  function openChat() {
    container.classList.add('is-open');
    if (teaser) teaser.classList.add('hidden');
    if (window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    }
    setTimeout(() => {
      chatInput.focus();
      if (chatBody.children.length > 2) {
        scrollToBottom();
      } else {
        chatBody.scrollTop = 0;
      }
    }, 150);
  }

  function closeChat() {
    container.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function toggleChat() {
    if (container.classList.contains('is-open')) {
      closeChat();
    } else {
      openChat();
    }
  }

  launcher.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', closeChat);

  // Teaser click
  teaser.addEventListener('click', (e) => {
    if (e.target.closest('#dbaTeaserClose')) {
      teaser.classList.add('hidden');
      try { sessionStorage.setItem('dba_chat_teaser_dismissed', '1'); } catch (e) {}
      return;
    }
    openChat();
  });

  // Sound toggle
  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundBtn.innerHTML = soundEnabled
      ? '<i class="fa-solid fa-volume-high"></i>'
      : '<i class="fa-solid fa-volume-xmark"></i>';
    soundBtn.title = soundEnabled ? 'Mute Sound' : 'Unmute Sound';
  });

  // Reset conversation
  resetBtn.addEventListener('click', () => {
    state.step = 'idle';
    state.leadData = { service: '', location: '', contactName: '', contactPhone: '', refId: '' };
    try { sessionStorage.removeItem('dba_chat_lead'); } catch (e) {}
    chatBody.innerHTML = '';
    renderWelcome();
  });

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && container.classList.contains('is-open')) {
      closeChat();
    }
  });

  function scrollToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function formatTime() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Add Message to Feed
  function addMessage(sender, textOrHtml, isHtml = false) {
    const row = document.createElement('div');
    row.className = `dba-msg-row ${sender}`;

    if (sender === 'bot') {
      const avatar = document.createElement('div');
      avatar.className = 'dba-msg-bot-avatar';
      avatar.innerHTML = '<i class="fa-solid fa-droplet"></i>';
      row.appendChild(avatar);
    }

    const bubble = document.createElement('div');
    bubble.className = 'dba-msg-bubble';

    if (isHtml) {
      bubble.innerHTML = textOrHtml;
    } else {
      bubble.textContent = textOrHtml;
    }

    const time = document.createElement('span');
    time.className = 'dba-msg-time';
    time.textContent = formatTime();
    bubble.appendChild(time);

    row.appendChild(bubble);
    chatBody.appendChild(row);
    scrollToBottom();

    if (sender === 'bot') {
      playChime();
    }
  }

  // Show typing indicator
  function showTypingIndicator() {
    const row = document.createElement('div');
    row.className = 'dba-msg-row bot dba-typing-row';
    row.id = 'dbaTypingIndicator';

    const avatar = document.createElement('div');
    avatar.className = 'dba-msg-bot-avatar';
    avatar.innerHTML = '<i class="fa-solid fa-droplet"></i>';
    row.appendChild(avatar);

    const indicator = document.createElement('div');
    indicator.className = 'dba-typing-indicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    row.appendChild(indicator);

    chatBody.appendChild(row);
    scrollToBottom();
  }

  function hideTypingIndicator() {
    const el = document.getElementById('dbaTypingIndicator');
    if (el) el.remove();
  }

  function botReply(textOrHtml, isHtml = false, delay = 400, onDone = null) {
    showTypingIndicator();
    setTimeout(() => {
      hideTypingIndicator();
      addMessage('bot', textOrHtml, isHtml);
      if (typeof onDone === 'function') onDone();
    }, delay);
  }

  // Render suggestion chips
  function renderChips(chips, label = 'Suggested options:') {
    const wrap = document.createElement('div');
    wrap.className = 'dba-chips-wrap';

    if (label) {
      const title = document.createElement('div');
      title.className = 'dba-chips-label';
      title.textContent = label;
      wrap.appendChild(title);
    }

    chips.forEach(c => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'dba-chip';
      btn.innerHTML = `<i class="${c.icon || 'fa-solid fa-chevron-right'}"></i> <span>${c.label}</span>`;
      btn.onclick = () => {
        // Remove or disable chips in this group to avoid re-clicks
        wrap.querySelectorAll('.dba-chip').forEach(b => b.disabled = true);
        handleChipClick(c);
      };
      wrap.appendChild(btn);
    });

    chatBody.appendChild(wrap);
    scrollToBottom();
  }

  // Initial Welcome
  function renderWelcome() {
    const welcomeText = `
      <strong>👋 Hello! Welcome to Deep Blue Aquatic Systems.</strong><br><br>
      We engineer specialised water environments where water quality, reliability and control matter. How can our technical desk assist you today?
    `;
    addMessage('bot', welcomeText, true);

    const initialChips = [
      { id: 'quote', label: '📋 Discuss Your Project / Quote', icon: 'fa-solid fa-clipboard-check' },
      { id: 'ras', label: '🐟 Recirculating Aquaculture (RAS)', icon: 'fa-solid fa-arrows-spin' },
      { id: 'holding', label: '🦞 Live Holding (Lobster / Abalone)', icon: 'fa-solid fa-box-archive' },
      { id: 'monitoring', label: '📊 Water Quality & DO Monitoring', icon: 'fa-solid fa-chart-line' },
      { id: 'pools', label: '🏊 Commercial & Natural Pools', icon: 'fa-solid fa-water' },
      { id: 'call', label: '📞 Speak With Our Technical Team', icon: 'fa-solid fa-phone' }
    ];

    setTimeout(() => {
      renderChips(initialChips, 'Explore our capabilities or start an enquiry:');
    }, 250);
  }

  // Handle pre-question chip clicks
  function handleChipClick(chip) {
    addMessage('user', chip.label);

    switch (chip.id) {
      case 'quote':
        state.step = 'ask_service';
        botReply(`
          <strong>Let's get your project specifications together! 📋</strong><br><br>
          Which specialist aquatic solution best matches your facility or requirements?
        `, true, 400, () => {
          renderServiceSelector();
        });
        break;

      case 'ras':
        botReply(`
          <strong>Recirculating Aquaculture Systems (RAS): 🐟</strong><br><br>
          Our RAS solutions treat and reuse water rather than continuously discharging. Systems integrate drum filtration, moving-bed biofiltration (MBBR), protein skimmers / foam fractionation, pure oxygenation, temperature control, and automated monitoring for freshwater and marine species.<br><br>
          Would you like to discuss sizing or request an engineering proposal?
        `, true, 450, () => {
          renderChips([
            { id: 'quote_ras', label: 'Discuss an Aquaculture / RAS Project', icon: 'fa-solid fa-calculator' },
            { id: 'call', label: 'Call +27 21 856 2031 Directly', icon: 'fa-solid fa-phone' }
          ], 'Next step:');
        });
        break;

      case 'quote_ras':
        state.leadData.service = 'Recirculating Aquaculture Systems (RAS)';
        startLocationStep();
        break;

      case 'holding':
        botReply(`
          <strong>Live Holding Systems: 🦞</strong><br><br>
          We engineer holding, purging, and pre-export infrastructure for rock lobster, abalone, oysters, and valuable finfish across land-based packing facilities and fishing vessels. Featuring high-efficiency biological filtration, chilling, and pure dissolved oxygen injection to reduce animal stress and eliminate mortality.<br><br>
          Shall we discuss your holding capacity and water treatment setup?
        `, true, 450, () => {
          renderChips([
            { id: 'quote_holding', label: 'Talk to Us About Live Holding', icon: 'fa-solid fa-box-archive' },
            { id: 'call', label: 'Call Strand Technical Team', icon: 'fa-solid fa-phone' }
          ], 'Next step:');
        });
        break;

      case 'quote_holding':
        state.leadData.service = 'Live Holding Systems';
        startLocationStep();
        break;

      case 'monitoring':
        botReply(`
          <strong>Water Quality Monitoring & Automation: 📊</strong><br><br>
          Deep Blue Aqua supplies permanent multi-parameter sensor arrays, optical Dissolved Oxygen (DO), pH, temperature, data loggers, SMS/email alarms, and custom automated switchgear. Partnering with OxyGuard, Campbell Scientific, and Aqualabo.<br><br>
          Would you like to explore monitoring equipment for your facility?
        `, true, 450, () => {
          renderChips([
            { id: 'quote_monitoring', label: 'Explore Monitoring Solutions', icon: 'fa-solid fa-chart-line' },
            { id: 'call', label: 'Speak to Ruben van der Merwe', icon: 'fa-solid fa-phone' }
          ], 'Next step:');
        });
        break;

      case 'quote_monitoring':
        state.leadData.service = 'Water Quality Monitoring & Control';
        startLocationStep();
        break;

      case 'pools':
        botReply(`
          <strong>Specialist Swimming Pool Systems: 🏊</strong><br><br>
          We deliver high-demand filtration and water treatment for commercial 50-metre competition pools, high-use school aquatic centres, eco-pools, and biological natural swimming pools with zero harsh chemicals.
        `, true, 450, () => {
          renderChips([
            { id: 'quote_pools', label: 'Discuss Pool Filtration System', icon: 'fa-solid fa-water' },
            { id: 'call', label: 'Call Office Now', icon: 'fa-solid fa-phone' }
          ], 'Next step:');
        });
        break;

      case 'quote_pools':
        state.leadData.service = 'Specialist Swimming Pool Systems';
        startLocationStep();
        break;

      case 'call':
        state.step = 'ask_contact_fast';
        botReply(`
          <strong>Direct Technical Escalation 📞</strong><br><br>
          You can reach our Strand office directly at <a href="tel:+27218562031" style="color:#009bd0;font-weight:700;">+27 21 856 2031</a> (Mon – Fri 08:00 – 17:00).<br><br>
          Or share your contact details below and an engineer will connect with you promptly:
        `, true, 400, () => {
          renderContactForm(true);
        });
        break;

      default:
        handleFreeTextInput(chip.label);
        break;
    }
  }

  // Step 1: Service Selection
  function renderServiceSelector() {
    const services = [
      { id: 's_aqua', label: '🐟 Complete Aquaculture / Hatchery Facility', service: 'Aquaculture Systems & Hatcheries' },
      { id: 's_ras', label: '🔄 Recirculating Aquaculture Systems (RAS)', service: 'Recirculating Aquaculture Systems (RAS)' },
      { id: 's_holding', label: '🦞 Live Holding (Lobster / Abalone / Shellfish)', service: 'Live Holding Systems' },
      { id: 's_aquarium', label: '🐠 Commercial Aquarium Life-Support Systems', service: 'Commercial Aquarium Systems' },
      { id: 's_monitor', label: '📊 Water Quality Monitoring & Telemetry', service: 'Water Quality Monitoring & Control' },
      { id: 's_pools', label: '🏊 Specialist & Natural Swimming Pools', service: 'Specialist Swimming Pools' },
      { id: 's_consult', label: '📐 Design, CAD Modelling & Feasibility', service: 'Design & Technical Consulting' },
      { id: 's_supply', label: '⚙️ Specialist Equipment & Tanks Supply', service: 'Equipment & Material Supply' }
    ];

    renderChips(services.map(s => ({
      id: s.id,
      label: s.label,
      icon: 'fa-solid fa-check',
      onSelect: () => {
        state.leadData.service = s.service;
        addMessage('user', s.label);
        startLocationStep();
      }
    })), 'Select your project scope:');

    // Override click for these dynamic chips
    chatBody.lastElementChild.querySelectorAll('.dba-chip').forEach((btn, idx) => {
      btn.onclick = () => {
        chatBody.lastElementChild.querySelectorAll('.dba-chip').forEach(b => b.disabled = true);
        services[idx].onSelect();
      };
    });
  }

  // Step 2: Location & Area
  function startLocationStep() {
    state.step = 'ask_location';
    botReply(`
      <strong>Understood! 👍</strong><br><br>
      Where is your project or planned installation located?
    `, true, 350, () => {
      renderLocationPills();
    });
  }

  function renderLocationPills() {
    const regions = [
      { label: '🌊 Western Cape / Cape Town Region', loc: 'Western Cape / Cape Town' },
      { label: '🇿🇦 South Africa (Other Province)', loc: 'South Africa (National)' },
      { label: '🌍 Southern Africa / SADC Region', loc: 'Southern Africa Region' },
      { label: '🌐 International Project', loc: 'International Project' }
    ];

    renderChips(regions.map(r => ({
      id: 'loc_' + r.loc,
      label: r.label,
      icon: 'fa-solid fa-map-pin'
    })), 'Quick regional selection (or type your city/country below):');

    chatBody.lastElementChild.querySelectorAll('.dba-chip').forEach((btn, idx) => {
      btn.onclick = () => {
        chatBody.lastElementChild.querySelectorAll('.dba-chip').forEach(b => b.disabled = true);
        state.leadData.location = regions[idx].loc;
        addMessage('user', regions[idx].label);
        startContactStep();
      };
    });
  }

  // Step 3: Contact Number & Name
  function startContactStep() {
    state.step = 'ask_contact';
    botReply(`
      <strong>Almost done! 🚀</strong><br><br>
      Please provide your <strong>Name</strong> and <strong>Contact Phone / WhatsApp number</strong> so our engineering team can review your requirements and follow up.
    `, true, 350, () => {
      renderContactForm(false);
    });
  }

  function renderContactForm(isFastCallback = false) {
    const card = document.createElement('div');
    card.className = 'dba-lead-card';
    card.innerHTML = `
      <h5><i class="fa-solid fa-id-card"></i> Contact Information</h5>
      <form id="dbaInlineLeadForm">
        <div class="dba-lead-group">
          <label for="dbaNameInput">Your Name & Company *</label>
          <input type="text" id="dbaNameInput" required placeholder="e.g. Johan Steyn, Marine Aqua Ltd">
        </div>
        <div class="dba-lead-group">
          <label for="dbaPhoneInput">Phone / WhatsApp Number *</label>
          <input type="tel" id="dbaPhoneInput" required placeholder="e.g. +27 82 123 4567">
        </div>
        ${!state.leadData.location && !isFastCallback ? `
          <div class="dba-lead-group">
            <label for="dbaLocationInput">Project Location / Country</label>
            <input type="text" id="dbaLocationInput" placeholder="e.g. Western Cape / Namibia / International">
          </div>
        ` : ''}
        <button type="submit" class="dba-lead-submit">
          <span>Submit Details</span> <i class="fa-solid fa-arrow-right"></i>
        </button>
      </form>
    `;

    chatBody.appendChild(card);
    scrollToBottom();

    const form = card.querySelector('#dbaInlineLeadForm');
    form.onsubmit = (e) => {
      e.preventDefault();
      const name = form.querySelector('#dbaNameInput').value.trim();
      const phone = form.querySelector('#dbaPhoneInput').value.trim();
      const locEl = form.querySelector('#dbaLocationInput');
      if (locEl && locEl.value.trim()) {
        state.leadData.location = locEl.value.trim();
      }
      if (!name || !phone) return;

      state.leadData.contactName = name;
      state.leadData.contactPhone = phone;
      if (!state.leadData.service) {
        state.leadData.service = isFastCallback ? 'Technical Consultation' : 'Aquatic Engineering Solution';
      }
      if (!state.leadData.location) {
        state.leadData.location = 'South Africa / International';
      }

      // Generate reference
      state.leadData.refId = 'DBA-' + Math.floor(1000 + Math.random() * 9000);

      // Disable form inputs
      form.querySelectorAll('input, button').forEach(el => el.disabled = true);
      addMessage('user', `Name: ${name} | Phone: ${phone}`);

      finishLeadSubmission();
    };
  }

  // Step 4: Finish & Confirmation Card
  function finishLeadSubmission() {
    state.step = 'completed';

    // Store in session
    try {
      sessionStorage.setItem('dba_chat_lead', JSON.stringify(state.leadData));
    } catch (e) {}

    botReply(`
      <strong>✅ Project Ticket Logged!</strong><br><br>
      Thank you, <strong>${state.leadData.contactName}</strong>. Our engineering desk in Strand has registered your project enquiry.
    `, true, 300, () => {
      renderConfirmationCard();
    });
  }

  function renderConfirmationCard() {
    const { service, location, contactName, contactPhone, refId } = state.leadData;

    // Encoded WhatsApp text
    const waText = encodeURIComponent(
      `Hello Deep Blue Aquatic Systems! I submitted project enquiry #${refId} on your website.\n\n` +
      `• Specialist Service: ${service}\n` +
      `• Project Location: ${location}\n` +
      `• Contact: ${contactName}\n` +
      `• Phone: ${contactPhone}\n\n` +
      `Please connect me with a technical director regarding my requirements.`
    );
    const waUrl = `https://wa.me/27218562031?text=${waText}`;

    const mailtoBody = encodeURIComponent(
      `Enquiry Reference: #${refId}\n` +
      `Name / Company: ${contactName}\n` +
      `Phone: ${contactPhone}\n` +
      `Location: ${location}\n` +
      `Service: ${service}\n\n` +
      `Please provide engineering advice and proposal.`
    );
    const mailtoUrl = `mailto:info@deepblueaqua.net?subject=${encodeURIComponent(`Project Enquiry #${refId} - ${service}`)}&body=${mailtoBody}`;

    const card = document.createElement('div');
    card.className = 'dba-confirm-card';
    card.innerHTML = `
      <div class="dba-confirm-head">
        <div class="dba-confirm-icon"><i class="fa-solid fa-check"></i></div>
        <div>
          <strong>Engineering Ticket Confirmed</strong>
          <span>Reference: #${refId}</span>
        </div>
      </div>
      <div class="dba-confirm-details">
        <div><strong>Solution:</strong> ${service}</div>
        <div><strong>Location:</strong> ${location}</div>
        <div><strong>Contact:</strong> ${contactName} (${contactPhone})</div>
        <div><strong>Status:</strong> Assigned to Engineering Team</div>
      </div>
      <div class="dba-confirm-actions">
        <a href="${waUrl}" target="_blank" rel="noopener" class="dba-btn-wa">
          <i class="fa-brands fa-whatsapp" style="font-size:16px;"></i> Send via WhatsApp
        </a>
        <a href="tel:+27218562031" class="dba-btn-call">
          <i class="fa-solid fa-phone"></i> Call Office: +27 21 856 2031
        </a>
      </div>
    `;

    chatBody.appendChild(card);
    scrollToBottom();
    playChime();
  }

  // Handle free-text input and natural questions
  function handleFreeTextInput(input) {
    const text = input.trim();
    if (!text) return;

    addMessage('user', text);
    chatInput.value = '';

    const lower = text.toLowerCase();

    // Check if in flow
    if (state.step === 'ask_service') {
      state.leadData.service = text;
      startLocationStep();
      return;
    }

    if (state.step === 'ask_location') {
      state.leadData.location = text;
      startContactStep();
      return;
    }

    if (state.step === 'ask_contact') {
      const hasNumber = /\d{6,}/.test(text);
      if (hasNumber) {
        state.leadData.contactPhone = text;
        state.leadData.contactName = state.leadData.contactName || 'Valued Client';
        state.leadData.refId = 'DBA-' + Math.floor(1000 + Math.random() * 9000);
        finishLeadSubmission();
      } else {
        state.leadData.contactName = text;
        botReply(`Thanks ${text}! What is the best phone or WhatsApp number to reach you on?`, false, 300);
      }
      return;
    }

    // Keyword intelligence matching
    if (lower.includes('quote') || lower.includes('price') || lower.includes('cost') || lower.includes('estimate') || lower.includes('how much') || lower.includes('pricing')) {
      state.step = 'ask_service';
      botReply(`
        <strong>Custom Project Sizing & Pricing 📋</strong><br><br>
        Because aquatic systems depend entirely on biological loading, flow rates, species, and environmental conditions, every solution is engineered to order.<br><br>
        Let's gather your project requirements to prepare an accurate technical quote:
      `, true, 350, () => {
        renderServiceSelector();
      });
      return;
    }

    if (lower.includes('ras') || lower.includes('recirculat') || lower.includes('drum filter') || lower.includes('biofilter') || lower.includes('mbbr')) {
      botReply(`
        <strong>Recirculating Aquaculture Systems (RAS) 🐟</strong><br><br>
        Our RAS solutions incorporate mechanical drum filtration, moving-bed biofilters (MBBR), protein skimmers, oxygen injection, and automated water-quality monitoring. RAS gives you full control over culture conditions while dramatically cutting water requirements and biosecurity exposure.<br><br>
        Would you like to discuss an aquaculture project?
      `, true, 400, () => {
        renderChips([
          { id: 'quote_ras', label: 'Discuss RAS Project', icon: 'fa-solid fa-arrows-spin' },
          { id: 'call', label: 'Call +27 21 856 2031', icon: 'fa-solid fa-phone' }
        ]);
      });
      return;
    }

    if (lower.includes('lobster') || lower.includes('abalone') || lower.includes('holding') || lower.includes('seafood') || lower.includes('purging') || lower.includes('shellfish')) {
      botReply(`
        <strong>Live Seafood Holding & Purging Systems 🦞</strong><br><br>
        We design live-holding systems for rock lobster, abalone, oysters, and other high-value aquatic species for land-based packhouses and sea vessels. These systems maintain pristine water quality, chilling, and high DO to minimize product stress and mortality prior to export.<br><br>
        Shall we assist with your live holding setup?
      `, true, 400, () => {
        renderChips([
          { id: 'quote_holding', label: 'Talk to Us About Live Holding', icon: 'fa-solid fa-box-archive' },
          { id: 'call', label: 'Call Technical Desk', icon: 'fa-solid fa-phone' }
        ]);
      });
      return;
    }

    if (lower.includes('monitor') || lower.includes('sensor') || lower.includes('oxygen') || lower.includes('ph') || lower.includes('oxyguard') || lower.includes('alarm') || lower.includes('telemetry')) {
      botReply(`
        <strong>Water Quality Monitoring & Control 📊</strong><br><br>
        Reliable water management starts with reliable information. We supply Dissolved Oxygen sensors, pH, conductivity, temperature probes, automated PLCs, data logging, and SMS/email alarms for aquaculture, live holding, and water treatment. Powered by OxyGuard, Campbell Scientific, and Aqualabo.<br><br>
        Would you like to request sensor specifications or a quotation?
      `, true, 400, () => {
        renderChips([
          { id: 'quote_monitoring', label: 'Explore Monitoring Solutions', icon: 'fa-solid fa-chart-line' },
          { id: 'call', label: 'Call +27 21 856 2031', icon: 'fa-solid fa-phone' }
        ]);
      });
      return;
    }

    if (lower.includes('pool') || lower.includes('swimming') || lower.includes('eco') || lower.includes('natural pool')) {
      botReply(`
        <strong>Specialist Swimming Pool Systems 🏊</strong><br><br>
        We engineer high-capacity filtration for large school swimming pools, 50m outdoor pools, rim-flow systems, and chemical-free biological natural swimming pools in the Western Cape.<br><br>
        Shall we look at your pool filtration upgrade or new build?
      `, true, 400, () => {
        renderChips([
          { id: 'quote_pools', label: 'Request Pool System Quote', icon: 'fa-solid fa-water' },
          { id: 'call', label: 'Call +27 21 856 2031', icon: 'fa-solid fa-phone' }
        ]);
      });
      return;
    }

    if (lower.includes('where') || lower.includes('location') || lower.includes('address') || lower.includes('strand') || lower.includes('office') || lower.includes('cape town')) {
      botReply(`
        <strong>Our Office & Workshop Location 📍</strong><br><br>
        • <strong>Address:</strong> 185 Mills Street, Gants Plaza, Strand 7140, Western Cape, South Africa<br>
        • <strong>Operating Hours:</strong> Monday – Friday 08:00 – 17:00<br>
        • <strong>Coverage:</strong> Western Cape, South Africa nationwide, and international turnkey projects across Africa.
      `, true, 400, () => {
        renderChips([
          { id: 'quote', label: 'Discuss Your Project', icon: 'fa-solid fa-clipboard-check' },
          { id: 'call', label: 'Call +27 21 856 2031', icon: 'fa-solid fa-phone' }
        ]);
      });
      return;
    }

    if (lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('call') || lower.includes('whatsapp') || lower.includes('director')) {
      botReply(`
        <strong>Contact Deep Blue Aquatic Systems 📞</strong><br><br>
        • <strong>Telephone:</strong> <a href="tel:+27218562031" style="color:#009bd0;font-weight:bold;">+27 21 856 2031</a><br>
        • <strong>Email:</strong> <a href="mailto:info@deepblueaqua.net" style="color:#009bd0;font-weight:bold;">info@deepblueaqua.net</a><br>
        • <strong>Address:</strong> 185 Mills Street, Gants Plaza, Strand 7140, Western Cape<br>
        • <strong>Directors:</strong> Grant Brooker (Operations), Ruben van der Merwe (Technical), Brynn Simpson (Financial)<br><br>
        Would you like to speak to an engineer directly?
      `, true, 350, () => {
        renderChips([
          { id: 'call', label: 'Request Direct Callback', icon: 'fa-solid fa-phone-flip' },
          { id: 'quote', label: 'Discuss a Project', icon: 'fa-solid fa-clipboard-list' }
        ]);
      });
      return;
    }

    // Default friendly response
    botReply(`
      Thank you for your message! Deep Blue Aquatic Systems engineers specialized water environments across <strong>aquaculture, RAS, live holding, water monitoring, and specialist swimming pools</strong>.<br><br>
      How would you like to proceed?
    `, true, 400, () => {
      renderChips([
        { id: 'quote', label: '📋 Discuss Your Project', icon: 'fa-solid fa-clipboard-check' },
        { id: 'call', label: '📞 Speak With Our Technical Team', icon: 'fa-solid fa-phone' },
        { id: 'ras', label: '🐟 Recirculating Aquaculture (RAS)', icon: 'fa-solid fa-arrows-spin' }
      ]);
    });
  }

  // Send button & enter key handlers
  sendBtn.addEventListener('click', () => {
    handleFreeTextInput(chatInput.value);
  });

  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleFreeTextInput(chatInput.value);
    }
  });

  // Render initial welcome if empty
  if (chatBody.children.length === 0) {
    if (state.step === 'completed' && state.leadData.refId) {
      addMessage('bot', `
        👋 Welcome back! Your previous project enquiry <strong>#${state.leadData.refId}</strong> is registered on our engineering desk.
      `, true);
      renderConfirmationCard();
    } else {
      renderWelcome();
    }
  }

  // Teaser prompt delayed display (Desktop only, and only if not dismissed)
  setTimeout(() => {
    try {
      if (sessionStorage.getItem('dba_chat_teaser_dismissed')) return;
    } catch (e) {}
    if (window.innerWidth <= 640) return; // Keep mobile screens completely clean and unobstructed
    if (!container.classList.contains('is-open')) {
      teaser.classList.remove('hidden');
    }
  }, 2400);

})();
