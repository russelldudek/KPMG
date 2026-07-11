(() => {
  'use strict';

  const sliders = [...document.querySelectorAll('[data-decision-input]')];
  if (!sliders.length) return;

  const routeTitle = document.querySelector('[data-route-title]');
  const routeReason = document.querySelector('[data-route-reason]');
  const evidenceBox = document.querySelector('[data-route-evidence]');

  const routes = {
    bound: {
      title: 'BOUND FIRST',
      reason: 'The opportunity may matter, but the control envelope or evidence base is not ready for a build decision.',
      evidence: ['Name the human decision owner', 'Resolve data access and provenance', 'Set intervention and escalation rules', 'Define a cost ceiling before experimentation']
    },
    stop: {
      title: 'STOP / HARVEST',
      reason: 'The expected business value is too weak for additional build effort. Capture the learning and return capacity to stronger work.',
      evidence: ['Document the rejected hypothesis', 'Capture reusable prompts, tests, or data lessons', 'Name the condition that would justify reopening', 'Return people and budget to higher-value work']
    },
    platform: {
      title: 'PLATFORM CANDIDATE',
      reason: 'The combination of value, readiness, and reuse suggests a capability worth proving as reusable infrastructure rather than a one-off demo.',
      evidence: ['Identify two or more reuse contexts', 'Define common vs domain-specific components', 'Measure unit economics and latency', 'Create a repeatable evaluation pack']
    },
    fast: {
      title: 'FAST PROTOTYPE',
      reason: 'Business value is high enough and adoption friction is manageable. Build the smallest artifact that can create decision-quality evidence.',
      evidence: ['Tie the prototype to a real workflow', 'Use representative enterprise data', 'Name the operator and review step', 'Predefine the scale-or-stop decision']
    },
    controlled: {
      title: 'CONTROLLED PROOF',
      reason: 'Potential value justifies exploration, but consequence or assurance burden demands a tighter test protocol and explicit human authority.',
      evidence: ['Threat-model likely failure modes', 'Design human review and fallback', 'Test under edge cases, not just happy paths', 'Require risk and domain-owner sign-off']
    },
    discovery: {
      title: 'DISCOVERY SPRINT',
      reason: 'The signal is promising but not decision-ready. Resolve the largest uncertainty before committing to an engineering path.',
      evidence: ['Observe the current workflow', 'Quantify the decision or cycle-time pain', 'Test data availability early', 'Compare build, buy, partner, and reuse paths']
    }
  };

  function value(name) {
    const el = document.querySelector(`[data-decision-input="${name}"]`);
    return Number(el?.value || 3);
  }

  function chooseRoute() {
    const business = value('business');
    const data = value('data');
    const reuse = value('reuse');
    const adoption = value('adoption');
    const risk = value('risk');

    if (risk >= 4 && data <= 2) return routes.bound;
    if (business <= 2) return routes.stop;
    if (reuse >= 4 && data >= 3 && risk <= 3) return routes.platform;
    if (business >= 4 && adoption <= 3 && risk <= 3) return routes.fast;
    if (risk >= 4) return routes.controlled;
    return routes.discovery;
  }

  function render() {
    sliders.forEach((slider) => {
      const out = document.querySelector(`[data-output-for="${slider.dataset.decisionInput}"]`);
      if (out) out.textContent = slider.value;
    });

    const route = chooseRoute();
    routeTitle.textContent = route.title;
    routeReason.textContent = route.reason;
    evidenceBox.replaceChildren(...route.evidence.map((item) => {
      const div = document.createElement('div');
      div.className = 'check';
      div.textContent = item;
      return div;
    }));
  }

  sliders.forEach((slider) => slider.addEventListener('input', render));
  render();
})();
