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
    summary: 'A workforce management workflow designed to reduce repetitive scheduling work and make leave approvals more structured.',
    challenge: 'Roster preparation took more than three days for a large support operation. Leave and week-off requests required manual coordination across queues, shifts and approvers.',
    approach: 'Built a workflow using Google Apps Script, Google Forms and Slack. The system used rules for week-off handling and routed other requests through role-based approval paths. ChatGPT and Claude supported parts of the development process.',
    result: 'Roster preparation time reduced from 3+ days to under 4 hours for a workforce of 150+ associates. The exact time saved can vary with roster complexity and should be explained with the measurement period during an interview.'
  },
  cost: {
    eyebrow: 'CASE STUDY / 02 · UNIT ECONOMICS',
    title: 'Lowering support cost as volume grew',
    summary: 'Operational improvements and chatbot automation helped support a much larger monthly query volume at a lower cost per query.',
    challenge: 'Support demand grew across multiple consumer apps, creating pressure to maintain service delivery while keeping the unit cost under control.',
    approach: 'Worked on chatbot workflows and automation, operational reporting and support process improvements. The resume records monthly query volume growing from 30,120 to more than 320,000 while cost per query declined.',
    result: 'Cost per query moved from ₹24.99 to ₹5, an approximately 80% reduction. Before presenting this externally, be ready to explain the cost definition, measurement periods, automation contribution and any changes in the calculation.'
  },
  wait: {
    eyebrow: 'CASE STUDY / 03 · CUSTOMER EXPERIENCE',
    title: 'Reducing friction in the support queue',
    summary: 'Improved response operations in a 24/7 global customer support environment.',
    challenge: 'Customers were experiencing a long wait before reaching support, while the team needed to manage staffing and service delivery across multiple channels.',
    approach: 'Worked on day-to-day operations, queue and shift planning, operational tracking and process gaps, with coordination across Tech, Product, Fulfilment and Logistics.',
    result: 'Chat wait time reduced from 41 minutes to 2 minutes, while email turnaround time reduced from 48 hours to 6 hours. The detailed drivers and time period should be added once verified.'
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
