// Havfly Advert Interactive JS Controller - High-Converting Sales Engine

document.addEventListener('DOMContentLoaded', () => {



  // ==========================================================================
  // 2. INTERACTIVE DIAGNOSTIC AUDIT SWITCHER
  // ==========================================================================
  const diagData = {
    cap: {
      painTitle: "Meta Restricts Your Daily Budget At Just ₹4,000",
      painDesc: "Your creatives are generating 3.8x ROAS, but Meta caps your spend. While you wait 60+ days for arbitrary bumps, competitors clone your winning angles and scale past you.",
      impact: "Estimated Lost Profit: <strong>₹60,000 to ₹1,80,000 / month</strong>",
      solutionTitle: "Uncapped Spend From Day 1",
      solutionDesc: "Havfly provisions audited, enterprise-tier Meta Agency Partner accounts with unlimited daily spend limits immediately. Scale straight from ₹10,000 to ₹10,00,000+ daily with zero bottlenecks.",
      perks: [
        "Uncapped daily scaling from minute one",
        "Zero waiting for limit increases",
        "Dominant delivery in the Meta auction"
      ]
    },
    ban: {
      painTitle: "Sudden Business Manager Banned With Zero Human Support",
      painDesc: "Waking up right before Diwali or peak weekend sales to find your primary ad account disabled by automated AI bots with zero human explanation or appeal replies.",
      impact: "Campaigns Halted • <strong>Lakhs in Revenue Lost to Downtime</strong>",
      solutionTitle: "Guaranteed 30-Minute Account Swap",
      solutionDesc: "Under our Zero Ban Downtime Guarantee, our team immediately migrates your existing unspent balance to a fresh, aged, pre-warmed backup agency account in under 30 minutes.",
      perks: [
        "Zero ban downtime replacement guarantee",
        "Instant unspent balance transfer",
        "Dedicated agency partner whitelist"
      ]
    },
    card: {
      painTitle: "Debit/Credit Card Declines & Failed 3DS OTP Checks",
      painDesc: "Indian debit/credit cards failing 3DS checks, RBI transaction limits pausing campaigns, and constant OTP verification failures resetting machine learning.",
      impact: "Pixel Learning Disrupted • <strong>Ads Frozen Mid-Campaign</strong>",
      solutionTitle: "Seamless Domestic UPI & 100% GST Invoicing",
      solutionDesc: "Fund ad spend smoothly via domestic UPI, NEFT, IMPS or Net Banking in Indian Rupees with 100% official GST invoices to claim 18% Input Tax Credit.",
      perks: [
        "Zero payment decline errors or card blocks",
        "Instant balance top-ups via WhatsApp desk",
        "Official 18% GST tax deduction invoices"
      ]
    }
  };

  const diagTabs = document.querySelectorAll('.diag-tab');
  const diagPainTitle = document.getElementById('diag-pain-title');
  const diagPainDesc = document.getElementById('diag-pain-desc');
  const diagImpactBox = document.getElementById('diag-impact-box');
  const diagSolutionTitle = document.getElementById('diag-solution-title');
  const diagSolutionDesc = document.getElementById('diag-solution-desc');
  const diagPerks = document.getElementById('diag-perks');

  diagTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      diagTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const diagKey = tab.getAttribute('data-diag');
      const data = diagData[diagKey];
      if (!data) return;

      if (diagPainTitle) diagPainTitle.textContent = data.painTitle;
      if (diagPainDesc) diagPainDesc.textContent = data.painDesc;
      if (diagImpactBox) {
        diagImpactBox.innerHTML = `<i class="fa-solid fa-arrow-trend-down text-red"></i> <span>${data.impact}</span>`;
      }
      if (diagSolutionTitle) diagSolutionTitle.textContent = data.solutionTitle;
      if (diagSolutionDesc) diagSolutionDesc.textContent = data.solutionDesc;

      if (diagPerks) {
        diagPerks.innerHTML = data.perks
          .map(perk => `<div class="diag-perk-item"><i class="fa-solid fa-check text-green"></i> <span>${perk}</span></div>`)
          .join('');
      }
    });
  });

  // ==========================================================================
  // 3. THE DIRECTOR PROOF VAULT CONTROLLER
  // ==========================================================================
  const directorVaultData = [
    {
      name: "Ritesh Goel",
      title: "Director • E-Commerce & Retail",
      photo: "assets/ritesh-goel.jpg",
      metric: "1 Account Replaced 3 Old BMs",
      kicker: "ONE VERIFIED ACCOUNT, ZERO PAYMENT FAILURES.",
      before: "Managing 2-3 personal ad accounts for one business was a nightmare with non-stop card OTP declines and paused campaigns.",
      after: "Smooth, uninterrupted scaling with just one verified agency account — zero errors, zero switching, 100% uptime.",
      quote: "“We were facing serious issues in scaling our campaigns due to continuous payment failures. Managing 2-3 ad accounts for just one business had become a nightmare. After switching to Havfly Advert, everything ran smoothly with just one verified account — no errors, no switching, just seamless scaling.”"
    },
    {
      name: "Narender Bansal",
      title: "Director • ₹2–2.5 Lakh Daily Ad Spend",
      photo: "assets/narender-bansal.jfif",
      metric: "Scaled to ₹2.5L/Day Without Bans",
      kicker: "SCALING RS 2-2.5 LAKH DAILY, WITHOUT STRESS.",
      before: "Constant payment issues and personal account limits stalled campaigns during peak demand days.",
      after: "Single high-budget agency account running smoothly with instant top-ups and zero stress.",
      quote: "“We were running a daily ad budget of Rs 2–2.5 lakh, but constant payment issues and account restrictions were stalling our campaigns. We had to juggle 2-3 ad accounts just to keep things moving. Then we found Havfly Advert. Now we manage everything from one account without stress.”"
    },
    {
      name: "Parveen Singhal",
      title: "Director • Pan-India Brand Scaling",
      photo: "assets/parveen-singhal.jpg",
      metric: "Pan-India High-Budget Campaigns",
      kicker: "PAN-INDIA SCALE, HIGH-BUDGET SUCCESS.",
      before: "Frequent ad rejections and restricted Business Managers prevented national scale.",
      after: "High-trust agency whitelist delivered smooth ad approvals and lower customer acquisition costs.",
      quote: "“We wanted to scale across India to promote our brand, but account issues held us back. With Havfly Advert’s verified account, we ran high-budget campaigns smoothly and got great results without fear of sudden shutdowns.”"
    },
    {
      name: "Ankit Singal Bansal",
      title: "Director • High-Growth E-Commerce",
      photo: "assets/ankit-singal-bansal.jpeg",
      metric: "Zero Downtime During Festive Drops",
      kicker: "SEAMLESS SCALING, ZERO AD DISRUPTIONS.",
      before: "Constantly losing revenue and momentum during sales events due to sudden policy flags.",
      after: "Guaranteed stability, instant ad approvals, and unlimited budget scaling right when needed most.",
      quote: "“We were constantly losing momentum during high-demand sales events due to sudden policy flags and spend restrictions. Switching to Havfly Advert gave us complete stability, instant ad approvals, and unlimited scaling without interruptions.”"
    },
    {
      name: "Sahil Goyal",
      title: "Director • Performance Marketing Agency",
      photo: "assets/sahil-goyal.jpeg",
      metric: "100% GST Invoicing & Domestic UPI",
      kicker: "UNINTERRUPTED CAMPAIGNS, INSTANT TOP-UPS & GST.",
      before: "Managing client credit cards with foreign markups and decline errors created client friction.",
      after: "Smooth domestic UPI/bank top-ups with official GST invoices for full 18% tax credit.",
      quote: "“Managing multiple accounts with card decline issues was a huge headache. Havfly Advert provided a rock-solid agency account with instant INR top-ups, 100% GST invoicing, and 24/7 dedicated support. Our campaigns have been scaling smoothly ever since.”"
    }
  ];

  const vaultButtons = document.querySelectorAll('.vault-director-btn');
  const dossierImg = document.getElementById('dossier-img');
  const dossierName = document.getElementById('dossier-name');
  const dossierTitle = document.getElementById('dossier-title');
  const dossierMetric = document.getElementById('dossier-metric');
  const dossierKicker = document.getElementById('dossier-kicker');
  const dossierBefore = document.getElementById('dossier-before');
  const dossierAfter = document.getElementById('dossier-after');
  const dossierQuote = document.getElementById('dossier-quote');

  function switchDossier(index) {
    const data = directorVaultData[index];
    if (!data) return;

    if (dossierImg) {
      dossierImg.style.opacity = '0.3';
      setTimeout(() => {
        dossierImg.src = data.photo;
        dossierImg.alt = data.name;
        dossierImg.style.opacity = '1';
      }, 120);
    }

    if (dossierName) dossierName.textContent = data.name;
    if (dossierTitle) dossierTitle.textContent = data.title;
    if (dossierMetric) {
      dossierMetric.innerHTML = `<i class="fa-solid fa-bolt text-yellow"></i> ${data.metric}`;
    }
    if (dossierKicker) dossierKicker.textContent = data.kicker;
    if (dossierBefore) dossierBefore.textContent = data.before;
    if (dossierAfter) dossierAfter.textContent = data.after;
    if (dossierQuote) dossierQuote.textContent = data.quote;

    vaultButtons.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  vaultButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-director'), 10);
      if (!isNaN(idx)) switchDossier(idx);
    });
  });

  // ==========================================================================
  // 4. OBJECTION BUSTER FAQ ACCORDION
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const icon = otherItem.querySelector('.faq-toggle-icon i');
          if (icon) icon.className = 'fa-solid fa-plus';
        });

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
          const icon = item.querySelector('.faq-toggle-icon i');
          if (icon) icon.className = 'fa-solid fa-minus';
        }
      });
    }
  });

  // Ensure first FAQ is active on load
  if (faqItems.length > 0 && !document.querySelector('.faq-item.active')) {
    faqItems[0].classList.add('active');
    const firstIcon = faqItems[0].querySelector('.faq-toggle-icon i');
    if (firstIcon) firstIcon.className = 'fa-solid fa-minus';
  }

  // ==========================================================================
  // 5. LIVE BATCH ALLOCATION COUNTDOWN TIMER
  // ==========================================================================
  const timerEl = document.getElementById('batch-timer');
  if (timerEl) {
    let totalSeconds = 3 * 3600 + 42 * 60 + 18;

    setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
      } else {
        totalSeconds = 4 * 3600;
      }

      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      const pad = (n) => String(n).padStart(2, '0');
      timerEl.textContent = `${pad(h)}h ${pad(m)}m ${pad(s)}s`;
    }, 1000);
  }

  // ==========================================================================
  // 6. LIVE SOCIAL PROOF ACTIVITY TOAST STREAM
  // ==========================================================================
  const activityToast = document.getElementById('activity-toast');
  const toastMsg = document.getElementById('toast-message');
  const toastTime = document.getElementById('toast-time');
  const closeToastBtn = document.getElementById('close-toast-btn');

  const toastNotifications = [
    { text: "<strong>Amit K.</strong> from Mumbai just activated a Verified Agency Account", time: "3 minutes ago • Target: ₹3L/mo" },
    { text: "<strong>Rohan S.</strong> from Delhi scaled past ₹4k daily limit with Havfly", time: "7 minutes ago • Spent: ₹1.8L today" },
    { text: "<strong>Vikram M.</strong> from Bangalore received active Business Manager access", time: "12 minutes ago • 15-Min Setup" },
    { text: "<strong>Pooja T.</strong> from Jaipur scaled D2C fashion store with zero bans", time: "18 minutes ago • 4.5x ROAS" },
    { text: "<strong>Deepak G.</strong> from Surat top-up completed with 100% GST Invoice", time: "24 minutes ago • Domestic UPI" },
    { text: "<strong>Manish V.</strong> from Gurgaon switched 3 personal accounts to 1 Agency BM", time: "31 minutes ago • Zero Downtime" }
  ];

  let toastIndex = 0;
  let toastTimer = null;

  function showNextToast() {
    if (!activityToast || !toastMsg) return;

    const data = toastNotifications[toastIndex];
    toastMsg.innerHTML = data.text;
    if (toastTime) toastTime.textContent = data.time;

    activityToast.classList.add('show');

    setTimeout(() => {
      activityToast.classList.remove('show');
    }, 4500);

    toastIndex = (toastIndex + 1) % toastNotifications.length;
  }

  if (activityToast) {
    setTimeout(() => {
      showNextToast();
      toastTimer = setInterval(showNextToast, 12000);
    }, 4000);

    if (closeToastBtn) {
      closeToastBtn.addEventListener('click', () => {
        activityToast.classList.remove('show');
        if (toastTimer) clearInterval(toastTimer);
      });
    }
  }

  // ==========================================================================
  // 7. SMOOTH SCROLLING FOR INTERNAL ANCHORS
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 64;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

});
