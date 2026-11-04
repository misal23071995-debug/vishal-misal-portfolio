const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

const filters = document.querySelectorAll('.filter-chip');
const projects = document.querySelectorAll('.project-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  projects.forEach(project => {
    project.hidden = filter !== 'all' && project.dataset.category !== filter;
  });
}));

const caseStudies = {
  roster: {
    eyebrow: 'CASE STUDY / 01 · WORKFORCE AUTOMATION',
    title: 'From manual roster planning to an automated workflow',
    summary: 'A leave and roster system for a 24/7 support operation of 150+ associates across in-house and partner teams.',
    challenge: 'Every weekly roster was built by hand and took more than three days. Leave and week-off requests came in through different channels and needed manual checks against queue and shift coverage.',
    approach: 'Built a workflow with Google Forms, Google Apps Script and Slack. Associates submit requests through one form. Week-offs that fit coverage rules are approved automatically and spread across the week; other requests go to the right lead on Slack for role-based approval. A live dashboard shows daily headcount, coverage alerts and partner-wise shrinkage. ChatGPT and Claude helped with the scripting.',
    result: 'Roster preparation went from 3+ days to under 4 hours for 150+ associates. Coverage gaps now show up before the shift starts, not after.'
  },
  cost: {
    eyebrow: 'CASE STUDY / 02 · UNIT ECONOMICS',
    title: 'Lowering support cost as volume grew 10×',
    summary: 'Support for 6 consumer apps (Kuku FM, KukuTV, GURU, Stories, Bhakti and Kuku Tamil) across chat, email, WhatsApp, social and app stores.',
    challenge: 'Monthly queries grew from 30,120 to more than 3,20,000. Hiring in line with that growth would have pushed support cost up sharply.',
    approach: 'Moved repeat queries to a yellow.ai chatbot, automated refunds through the bot, and kept agents for the cases that needed a person. I tracked volume, cost and quality monthly and reviewed them with the CEO.',
    result: 'Cost per query fell from ₹24.99 to ₹10.32 in 2024 and to ₹5 in 2025, about 80% lower overall, while volume grew more than 10×.'
  },
  bot: {
    eyebrow: 'CASE STUDY / 03 · CONVERSATIONAL AI',
    title: 'More automation, happier customers',
    summary: 'Scaling a chatbot without letting the customer experience slip. Kuku FM, January to October 2024.',
    challenge: 'Automation numbers can look good while customers get stuck. I wanted the bot to resolve more chats and keep customers satisfied, not just deflect them.',
    approach: 'Reviewed bot conversations, retrained its answers and utterances, and moved refunds into the bot flow so customers no longer waited for an agent.',
    result: 'Bot resolution rose from 79% to 98% of chats while monthly chats grew 2.5× (52,844 to 1,31,022). Bot DSAT fell from 29% to 11%, even as the share of bot chats being rated grew from 8% to 38%. Agent-handled chats fell 71%, and the bot\'s share of refunds rose from 40% to 91%.'
  },
  wait: {
    eyebrow: 'CASE STUDY / 04 · CUSTOMER EXPERIENCE',
    title: 'Clearing the queue in a 24/7 global operation',
    summary: 'A D2C health wearables brand with customers worldwide, handling about 27,000 contacts a week across chat, email and voice.',
    challenge: 'In early September 2025, customers waited an average of 16.5 minutes for a chat agent, and weekly email TAT had reached 24.5 hours.',
    approach: 'Rebuilt staffing and shift coverage around real demand, improved routing, redistributed email workload, and tracked queue health daily. I worked with Tech, Product, Fulfilment and Logistics teams to fix the issues behind repeat contacts.',
    result: 'Average chat wait fell from 16.5 minutes to under 2 minutes within 6 weeks. Weekly email TAT fell from 24.5 hours to about 6 hours. Average handle time dropped from 16 to 11 minutes.'
  },
  refunds: {
    eyebrow: 'CASE STUDY / 05 · ROOT CAUSE',
    title: 'Removing contact drivers at the source',
    summary: 'Two examples from Kuku FM of fixing why customers contacted support, not just answering them faster.',
    challenge: 'Refunds had reached about 20% of monthly revenue. Separately, the app rating dropped from 4.6 to 3.8 after a backlash against ads on KukuTV.',
    approach: 'I tracked cancellation, refund and renewal patterns to find the drivers. We shortened the refund window from 7 days to 3 and made auto-renewal communication clearer before customers were charged. For the ratings drop, I traced the reviews to unsuitable ads and set up an ad review process to block them.',
    result: 'Refunds fell from about 20% to about 10% of revenue after the refund window change, then to 5–7% after the renewal communication change. The app rating recovered from 3.8 to 4.6.'
  },
  partners: {
    eyebrow: 'CASE STUDY / 06 · PARTNER MANAGEMENT',
    title: 'Running outsourced support as one team',
    summary: 'Four BPO partners working alongside the in-house team at Ultrahuman, 24/7.',
    challenge: 'Most of the agent capacity was outsourced, but the customer experience was still ours to own.',
    approach: 'I owned each partner end to end: per-seat and per-contact commercials, service levels, billing and hiring. I set up the Scorecard, QC process and structured feedback reviews with a clear escalation path, and led a vendor transition.',
    result: 'The combined team scaled from 60 to 150 associates, and unplanned shrinkage averaged 4.8% against a 6% target.'
  }
};
const dialog = document.querySelector('#caseDialog');
document.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => {
  const data = caseStudies[button.dataset.case];
  if (!data) return;
  document.querySelector('#dialogEyebrow').textContent = data.eyebrow;
  document.querySelector('#dialogTitle').textContent = data.title;
  document.querySelector('#dialogSummary').textContent = data.summary;
  document.querySelector('#dialogChallenge').textContent = data.challenge;
  document.querySelector('#dialogApproach').textContent = data.approach;
  document.querySelector('#dialogResult').textContent = data.result;
  dialog.showModal();
}));
document.querySelector('#dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

document.querySelector('#copyEmail').addEventListener('click', async () => {
  const status = document.querySelector('#copyStatus');
  try {
    await navigator.clipboard.writeText('misal23071995@gmail.com');
    status.textContent = 'Email copied.';
  } catch {
    status.textContent = 'Copy unavailable here. Use the email link above.';
  }
});
