(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if (navToggle && nav) {
    const setNavOpen = (open) => {
      navToggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    };
    navToggle.addEventListener('click', () => setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setNavOpen(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        setNavOpen(false);
        navToggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (navToggle.getAttribute('aria-expanded') !== 'true') return;
      if (!nav.contains(event.target) && !navToggle.contains(event.target)) setNavOpen(false);
    });
  }

  const rig = document.querySelector('[data-proof-rig]');
  if (rig) {
    const stages = [...rig.querySelectorAll('[data-rig-stage]')];
    const bins = [...rig.querySelectorAll('[data-asset-bin]')];
    const run = rig.querySelector('[data-rig-run]');
    const status = rig.querySelector('[data-rig-status]');
    const specimen = rig.querySelector('[data-specimen]');
    let timer = null;
    let stepTimers = [];
    const labels = ['Framing the work', 'Bounding authority and risk', 'Building the minimum proof', 'Stress-testing quality and economics', 'Compounding the learning'];

    function clearCycle() { stepTimers.forEach(clearTimeout); stepTimers = []; if (timer) clearTimeout(timer); }
    function setStage(index) {
      stages.forEach((el, i) => el.classList.toggle('is-active', i <= index));
      rig.style.setProperty('--rig-step', Math.max(0, index));
      if (specimen) specimen.setAttribute('data-step', String(index));
      status.textContent = index < 4 ? labels[index] : 'Proof complete: choose the asset left behind';
    }
    function finish() { bins.forEach((el, i) => setTimeout(() => el.classList.add('is-earned'), reduced.matches ? 0 : i * 180)); }
    function cycle() {
      clearCycle(); bins.forEach(el => el.classList.remove('is-earned')); stages.forEach(el => el.classList.remove('is-active'));
      if (reduced.matches) { setStage(4); finish(); return; }
      stages.forEach((_, i) => stepTimers.push(setTimeout(() => setStage(i), 350 + i * 680)));
      stepTimers.push(setTimeout(finish, 3900));
      timer = setTimeout(cycle, 11500);
    }
    run?.addEventListener('click', cycle);
    cycle();
    reduced.addEventListener?.('change', cycle);
  }

  const outcomeData = {
    capability: {code:'ASSET / 01', title:'Reusable capability', copy:'A service, connector, pattern, control, prompt architecture, evaluation harness, or operating mechanism that lowers the cost and risk of the next deployment.', proof:'Two or more credible reuse contexts with an accountable owner.'},
    evidence: {code:'ASSET / 02', title:'Reusable evidence', copy:'A test set, benchmark, failure pattern, cost model, adoption signal, or decision record that makes the next experiment faster and more defensible.', proof:'The learning can change a future build, review, or investment decision.'},
    stop: {code:'ASSET / 03', title:'Fast no', copy:'A disciplined termination that preserves the rejected hypothesis, triggering condition, reusable lessons, and capacity returned to higher-value work.', proof:'The team can explain why it stopped and what would justify reopening.'}
  };
  const consoleEl = document.querySelector('[data-outcome-console]');
  if (consoleEl) {
    const tabs=[...consoleEl.querySelectorAll('[data-outcome]')];
    const renderOutcome=(key, focus=false)=>{
      const data=outcomeData[key];
      tabs.forEach(t=>t.setAttribute('aria-selected', String(t.dataset.outcome===key)));
      consoleEl.dataset.active=key;
      consoleEl.querySelector('[data-outcome-code]').textContent=data.code;
      consoleEl.querySelector('[data-outcome-title]').textContent=data.title;
      consoleEl.querySelector('[data-outcome-copy]').textContent=data.copy;
      consoleEl.querySelector('[data-outcome-proof] span').textContent=data.proof;
      if (focus) consoleEl.querySelector('.outcome-display').focus();
    };
    tabs.forEach((tab, idx)=>{
      tab.addEventListener('click',()=>renderOutcome(tab.dataset.outcome));
      tab.addEventListener('keydown',(e)=>{
        if (!['ArrowLeft','ArrowRight'].includes(e.key)) return;
        e.preventDefault(); const next=(idx+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length; tabs[next].focus(); renderOutcome(tabs[next].dataset.outcome);
      });
    });
  }

  const system = document.querySelector('.system-log');
  if (system && 'IntersectionObserver' in window) {
    const entries=[...system.querySelectorAll('article')];
    const observer=new IntersectionObserver((items)=>items.forEach(item=>{
      if (item.isIntersecting) item.target.classList.add('is-seen');
    }), {threshold:.35});
    entries.forEach(el=>observer.observe(el));
  }

  const sliders = [...document.querySelectorAll('[data-decision-input]')];
  if (!sliders.length) return;
  const routeTitle = document.querySelector('[data-route-title]');
  const routeReason = document.querySelector('[data-route-reason]');
  const evidenceBox = document.querySelector('[data-route-evidence]');
  const routes = {
    bound: {title:'BOUND FIRST',reason:'The opportunity may matter, but the control envelope or evidence base is not ready for a build decision.',evidence:['Name the human decision owner','Resolve data access and provenance','Set intervention and escalation rules','Define a cost ceiling before experimentation']},
    stop: {title:'STOP / HARVEST',reason:'Expected business value is too weak for more build effort. Capture the learning and return capacity to stronger work.',evidence:['Document the rejected hypothesis','Capture reusable prompts, tests, or data lessons','Name the condition that would justify reopening','Return people and budget to higher-value work']},
    platform: {title:'PLATFORM CANDIDATE',reason:'Value, readiness, and reuse suggest a capability worth proving as reusable infrastructure rather than a one-off demo.',evidence:['Identify two or more reuse contexts','Define common vs domain-specific components','Measure unit economics and latency','Create a repeatable evaluation pack']},
    fast: {title:'FAST PROTOTYPE',reason:'Business value is high and adoption friction is manageable. Build the smallest artifact that can create decision-quality evidence.',evidence:['Tie the prototype to a real workflow','Use representative enterprise data','Name the operator and review step','Predefine the scale-or-stop decision']},
    controlled: {title:'CONTROLLED PROOF',reason:'Potential value justifies exploration, but consequence demands a tighter protocol and explicit human authority.',evidence:['Threat-model likely failure modes','Design human review and fallback','Test edge cases, not only happy paths','Require risk and domain-owner sign-off']},
    discovery: {title:'DISCOVERY SPRINT',reason:'The signal is promising but not decision-ready. Resolve the largest uncertainty before committing to an engineering path.',evidence:['Observe the current workflow','Quantify decision or cycle-time pain','Test data availability early','Compare build, buy, partner, and reuse paths']}
  };
  const value=name=>Number(document.querySelector(`[data-decision-input="${name}"]`)?.value||3);
  function chooseRoute(){const b=value('business'),d=value('data'),u=value('reuse'),a=value('adoption'),r=value('risk');if(r>=4&&d<=2)return 'bound';if(b<=2)return 'stop';if(u>=4&&d>=3&&r<=3)return 'platform';if(b>=4&&a<=3&&r<=3)return 'fast';if(r>=4)return 'controlled';return 'discovery';}
  function render(){sliders.forEach(s=>{const o=document.querySelector(`[data-output-for="${s.dataset.decisionInput}"]`);if(o)o.textContent=s.value;});const key=chooseRoute(),route=routes[key];routeTitle.textContent=route.title;routeReason.textContent=route.reason;evidenceBox.replaceChildren(...route.evidence.map(item=>{const d=document.createElement('div');d.className='check';d.textContent=item;return d;}));document.querySelectorAll('[data-route-node]').forEach(n=>n.classList.toggle('is-active',n.dataset.routeNode===key));document.querySelector('[data-route-marker]')?.setAttribute('data-route',key);}
  sliders.forEach(s=>s.addEventListener('input',render)); render();
})();