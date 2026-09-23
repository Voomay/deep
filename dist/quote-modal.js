/* ============================================================
   DEEP BLUE AQUA - INTERACTIVE "GET A QUOTE" MODAL
============================================================ */

(function initQuoteModal() {
  function createModal() {
    if (document.getElementById('quoteModal')) return;

    const modalHTML = `
      <dialog id="quoteModal" class="quote-modal">
        <div class="quote-modal-card">
          <button type="button" class="quote-modal-close" aria-label="Close quote modal" id="closeQuoteModalBtn">
            <i class="fa-solid fa-xmark"></i>
          </button>
          
          <div class="quote-modal-content" id="quoteModalContent">
            <div class="quote-modal-header">
              <h2>Request a Project Quote</h2>
              <p>Tell us about your water system needs. Our engineering desk will evaluate your requirements and prepare a custom proposal.</p>
            </div>

            <form id="quoteModalForm" class="quote-form">
              <div class="quote-form-row">
                <div class="quote-form-group">
                  <label for="qm-firstname">First Name *</label>
                  <input type="text" id="qm-firstname" name="firstName" required placeholder="e.g. Johan">
                </div>
                <div class="quote-form-group">
                  <label for="qm-lastname">Last Name *</label>
                  <input type="text" id="qm-lastname" name="lastName" required placeholder="e.g. van der Merwe">
                </div>
              </div>

              <div class="quote-form-row">
                <div class="quote-form-group">
                  <label for="qm-email">Email Address *</label>
                  <input type="email" id="qm-email" name="email" required placeholder="e.g. johan@agrifarm.co.za">
                </div>
                <div class="quote-form-group">
                  <label for="qm-phone">Phone / WhatsApp *</label>
                  <input type="tel" id="qm-phone" name="phone" required placeholder="e.g. 082 123 4567">
                </div>
              </div>

              <div class="quote-form-row">
                <div class="quote-form-group">
                  <label for="qm-service">Specialist Solution Needed *</label>
                  <select id="qm-service" name="service" required>
                    <option value="">Select an aquatic solution...</option>
                    <option value="Aquaculture Systems & Hatcheries">Aquaculture Systems &amp; Hatcheries</option>
                    <option value="Recirculating Aquaculture Systems (RAS)">Recirculating Aquaculture Systems (RAS)</option>
                    <option value="Live Holding Systems (Lobster/Abalone/Shellfish)">Live Holding Systems (Lobster, Abalone, Shellfish)</option>
                    <option value="Commercial Aquarium Systems">Commercial &amp; Specialist Aquarium Systems</option>
                    <option value="Water Quality Monitoring & Control">Water Quality Monitoring &amp; Automation</option>
                    <option value="Specialist Swimming Pools">Specialist Swimming Pools (Commercial &amp; Natural)</option>
                    <option value="Design & Technical Consulting">Design, Modelling &amp; Technical Consulting</option>
                    <option value="Specialist Equipment & Materials">Specialist Equipment &amp; Material Supply</option>
                  </select>
                </div>
                <div class="quote-form-group">
                  <label for="qm-scale">Project Scale / Application</label>
                  <select id="qm-scale" name="scale">
                    <option value="Commercial RAS Production Facility">Commercial RAS Production Facility</option>
                    <option value="Hatchery & Nursery Facility">Hatchery &amp; Nursery Facility</option>
                    <option value="Live Seafood Holding & Purging">Live Seafood Holding &amp; Purging</option>
                    <option value="Commercial / Public Aquarium Exhibit">Commercial / Public Aquarium Exhibit</option>
                    <option value="Commercial / 50m / School Pool">Commercial / 50m / School Pool</option>
                    <option value="Natural / Eco Swimming Pool">Natural / Eco Swimming Pool</option>
                    <option value="R&D / Research Installation">R&amp;D / Research Installation</option>
                    <option value="Need Technical Feasibility / System Design">Need Technical Feasibility / System Design</option>
                  </select>
                </div>
              </div>

              <div class="quote-form-group">
                <label for="qm-location">Project Location / Country</label>
                <input type="text" id="qm-location" name="location" placeholder="e.g. Western Cape / Southern Africa / International">
              </div>

              <div class="quote-form-group">
                <label for="qm-message">Project Notes & Specifications</label>
                <textarea id="qm-message" name="message" rows="3" placeholder="Tell us about your target species, flow rates, filtration needs, production targets, or timeline..."></textarea>
              </div>

              <div class="quote-form-actions">
                <button type="submit" class="button glow quote-submit-btn">
                  <span>Submit Quote Request</span> <i class="fa-solid fa-paper-plane"></i>
                </button>
                <a href="tel:+27218562031" class="quote-direct-call">
                  <i class="fa-solid fa-phone"></i> Or call: <strong>021 856 2031</strong>
                </a>
              </div>
            </form>

            <div id="quoteModalSuccess" class="quote-success-state" hidden>
              <div class="success-icon-wrap"><i class="fa-solid fa-circle-check"></i></div>
              <h3>Quote Request Received!</h3>
              <p>Thank you, <strong id="successCustomerName">Client</strong>. Your enquiry has been submitted to Deep Blue Aqua's engineering desk. A specialist engineer will review your specifications and reach out within 24 hours.</p>
              <div class="success-meta">
                <div class="sm-item"><strong>Service:</strong> <span id="successService">General</span></div>
                <div class="sm-item"><strong>Phone:</strong> <span id="successPhone">-</span></div>
              </div>
              <div class="success-actions">
                <button type="button" class="button dark" id="successDoneBtn">Done</button>
                <a id="successMailtoBtn" class="button outline" href="#">Open Email Copy <i class="fa-solid fa-envelope"></i></a>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('quoteModal');
    const closeBtn = document.getElementById('closeQuoteModalBtn');
    const form = document.getElementById('quoteModalForm');
    const successState = document.getElementById('quoteModalSuccess');
    const successDoneBtn = document.getElementById('successDoneBtn');

    function closeModal() {
      document.body.style.overflow = '';
      modal.close();
      if (form) form.reset();
      if (successState) successState.hidden = true;
      if (form) form.hidden = false;
    }

    if (closeBtn) closeBtn.onclick = closeModal;
    if (successDoneBtn) successDoneBtn.onclick = closeModal;

    // Close when clicking outside dialog card
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };

    // Close on Escape
    modal.oncancel = () => closeModal();

    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const service = form.service.value;
        const scale = form.scale.value;
        const location = form.location.value.trim();
        const message = form.message.value.trim();

        // Update success card
        const customerNameEl = document.getElementById('successCustomerName');
        const successServiceEl = document.getElementById('successService');
        const successPhoneEl = document.getElementById('successPhone');
        const mailtoBtn = document.getElementById('successMailtoBtn');

        if (customerNameEl) customerNameEl.textContent = `${firstName} ${lastName}`;
        if (successServiceEl) successServiceEl.textContent = service;
        if (successPhoneEl) successPhoneEl.textContent = phone;

        // Prepare email mailto fallback
        const subject = encodeURIComponent(`Quote Request: ${service} - ${firstName} ${lastName}`);
        const body = encodeURIComponent(
          `Dear Deep Blue Aqua Team,\n\n` +
          `I would like to request a quote for the following project:\n\n` +
          `Name: ${firstName} ${lastName}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n` +
          `Location: ${location || 'Not specified'}\n` +
          `Service: ${service}\n` +
          `Estimated Scale: ${scale}\n\n` +
          `Project Details:\n${message || 'Please contact me to discuss requirements.'}\n\n` +
          `Kind regards,\n${firstName} ${lastName}`
        );

        if (mailtoBtn) {
          mailtoBtn.href = `mailto:info@deepblueaqua.net?subject=${subject}&body=${body}`;
        }

        form.hidden = true;
        successState.hidden = false;
      };
    }
  }

  function openQuoteModal(preferredService) {
    createModal();
    const modal = document.getElementById('quoteModal');
    if (!modal) return;
    const serviceSelect = document.getElementById('qm-service');
    if (serviceSelect && preferredService) {
      for (const opt of serviceSelect.options) {
        if (opt.value.toLowerCase().includes(preferredService.toLowerCase())) {
          serviceSelect.value = opt.value;
          break;
        }
      }
    }
    document.body.style.overflow = 'hidden';
    modal.showModal();
  }

  // Attach click listener to all "Get a Quote" buttons across page
  function attachQuoteListeners() {
    createModal();
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a, button');
      if (!target) return;

      const text = (target.textContent || '').trim().toLowerCase();
      const href = target.getAttribute('href') || '';
      const isQuoteTrigger = target.hasAttribute('data-quote-trigger') || 
                             text.includes('get a quote') || 
                             text.includes('get a free quote') || 
                             text.includes('get a custom quote') ||
                             text.includes('request a quote');

      if (isQuoteTrigger) {
        // Prevent default navigation
        e.preventDefault();
        const service = target.getAttribute('data-service-name') || '';
        openQuoteModal(service);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachQuoteListeners);
  } else {
    attachQuoteListeners();
  }

  // Export to window for explicit triggers
  window.openQuoteModal = openQuoteModal;
})();
