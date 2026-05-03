/* ── TIMELINE DATA ── */
const timelineSteps = [
  {
    phase: "Phase 1",
    title: "Election Announcement",
    details: `The Election Commission of India (ECI) announces the election schedule, including dates for polling and counting. The <strong>Model Code of Conduct (MCC)</strong> comes into immediate effect.`,
    points: [
      "ECI issues a formal press notification",
      "Model Code of Conduct activated instantly",
      "Dates announced for multiple phases (if applicable)"
    ]
  },
  {
    phase: "Phase 2",
    title: "Voter List Finalization",
    details: `The electoral roll (voter list) is finalized. Citizens can check if their name is on the list and raise objections. New voters can also enroll during special drives.`,
    points: [
      "Final electoral roll published by EROs",
      "Citizens verify their details at voters.eci.gov.in",
      "Last chance for corrections or additions"
    ]
  },
  {
    phase: "Phase 3",
    title: "Nomination of Candidates",
    details: `Candidates file their nomination papers (Form 2B) with the Returning Officer. A security deposit is required. Affidavits declaring assets, liabilities, and criminal cases must be submitted.`,
    points: [
      "Nomination window: usually 7–10 days",
      "Security deposit: ₹25,000 for Lok Sabha, ₹10,000 for state",
      "Criminal background and assets disclosed publicly",
      "Party symbols allotted by ECI"
    ]
  },
  {
    phase: "Phase 4",
    title: "Scrutiny of Nominations",
    details: `The Returning Officer scrutinizes all nominations for legal compliance. Defective or invalid nominations can be rejected on valid legal grounds.`,
    points: [
      "Nominations verified for eligibility",
      "Age, citizenship, criminal disqualification checked",
      "Invalid or defective forms can be rejected"
    ]
  },
  {
    phase: "Phase 5",
    title: "Withdrawal of Candidatures",
    details: `Candidates who no longer wish to contest may withdraw their nomination within the specified window. After this period, the final candidate list is fixed.`,
    points: [
      "Withdrawal allowed within 2 days of scrutiny",
      "Final list of candidates published",
      "Ballot paper / EVM programming begins"
    ]
  },
  {
    phase: "Phase 6",
    title: "Election Campaign",
    details: `Candidates, parties, and their supporters campaign to seek votes. The campaign period ends 48 hours before polling (the <em>silent period</em>).`,
    points: [
      "Public rallies, roadshows, door-to-door canvassing",
      "Advertisement on TV, social media, newspapers",
      "Campaign spending monitored by ECI observers",
      "No campaigning in the final 48-hour silent period"
    ]
  },
  {
    phase: "Phase 7",
    title: "Polling Day",
    details: `Voters cast their ballots at designated polling stations using EVMs. Polling is typically held between 7 AM and 6 PM (timings may vary by state/region).`,
    points: [
      "Voters verify identity and sign the voter register",
      "Indelible ink applied to prevent double voting",
      "EVM button pressed to cast vote",
      "VVPAT slip visible for 7 seconds for verification"
    ]
  },
  {
    phase: "Phase 8",
    title: "Counting of Votes",
    details: `Votes are counted at designated counting centres under strict security. The Returning Officer announces the winner after each round. Results are declared by the ECI.`,
    points: [
      "EVMs matched with their seals and records",
      "Counting in rounds — each round covers one booth",
      "5 VVPAT slips verified randomly per segment",
      "Winner receives the Certificate of Election"
    ]
  },
  {
    phase: "Phase 9",
    title: "Government Formation",
    details: `After results, the party or coalition with a majority (272+ seats in Lok Sabha) forms the government. The President invites the majority leader to form the government and be sworn in as Prime Minister.`,
    points: [
      "Simple majority required: 272 of 543 seats",
      "Coalition negotiations if no outright majority",
      "President appoints the PM & swears in Cabinet",
      "New government assumes office"
    ]
  }
];

/* ── EVM DEMO CANDIDATES ── */
const evmCandidates = [
  { name: "Candidate A", party: "Party 1", sym: "🌸", color: "#FF9933" },
  { name: "Candidate B", party: "Party 2", sym: "🌿", color: "#138808" },
  { name: "Candidate C", party: "Party 3", sym: "⭐", color: "#000080" },
  { name: "NOTA",        party: "None of the Above", sym: "✖", color: "#555" }
];

/* ── QUIZ DATA ── */
const quizQuestions = [
  {
    q: "How many seats are there in the Lok Sabha (lower house of Parliament)?",
    opts: ["442", "543", "600", "790"],
    ans: 1,
    explain: "The Lok Sabha has 543 directly elected seats. A simple majority of 272 is needed to form the government."
  },
  {
    q: "What is the minimum age to vote in Indian elections?",
    opts: ["16 years", "21 years", "18 years", "25 years"],
    ans: 2,
    explain: "The 61st Constitutional Amendment (1988) lowered the voting age from 21 to 18 years."
  },
  {
    q: "What does 'FPTP' stand for in the Indian electoral system?",
    opts: ["First Party To Poll", "First-Past-the-Post", "Final Preference Through Poll", "Fair Party Tally Process"],
    ans: 1,
    explain: "India uses the First-Past-the-Post system: the candidate with the most votes in a constituency wins, regardless of whether they get a majority."
  },
  {
    q: "What is VVPAT?",
    opts: [
      "Verified Voter Paper Audit Trail",
      "Voter Verified Paper Audit Trail",
      "Virtual Voting Paper Access Terminal",
      "Vote Verification and Polling Audit Tool"
    ],
    ans: 1,
    explain: "VVPAT (Voter Verified Paper Audit Trail) allows voters to verify their vote via a paper slip displayed for 7 seconds after pressing the EVM button."
  },
  {
    q: "The Model Code of Conduct comes into effect when?",
    opts: [
      "One month before polling day",
      "When Parliament is dissolved",
      "As soon as the election schedule is announced",
      "When nomination filing begins"
    ],
    ans: 2,
    explain: "The MCC kicks in immediately upon announcement of the election schedule by the ECI — binding all political parties and the government."
  },
  {
    q: "Which ink is applied to a voter's finger to prevent double voting?",
    opts: ["Permanent black ink", "Washable blue ink", "Indelible violet ink", "UV-reactive ink"],
    ans: 2,
    explain: "Indelible violet/black ink is applied to the left index finger. It cannot be washed off easily and lasts several weeks."
  },
  {
    q: "What is the security deposit for a Lok Sabha candidate?",
    opts: ["₹10,000", "₹50,000", "₹25,000", "₹1,00,000"],
    ans: 2,
    explain: "A Lok Sabha candidate must deposit ₹25,000 (₹12,500 for SC/ST candidates). The deposit is forfeited if the candidate gets less than 1/6th of total votes cast."
  },
  {
    q: "What option allows a voter to reject all candidates on the ballot?",
    opts: ["Blank vote", "Spoilt ballot", "NOTA (None of the Above)", "Abstention"],
    ans: 2,
    explain: "NOTA was introduced by the Supreme Court in 2013. It allows voters to reject all candidates without invalidating the ballot, though NOTA votes don't affect the outcome."
  }
];

/* ── BUILD TIMELINE ── */
function buildTimeline() {
  const container = document.querySelector('.timeline-container');
  timelineSteps.forEach((step, i) => {
    const el = document.createElement('div');
    el.className = 'tl-item' + (i === 0 ? ' active' : '');
    el.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-header">
        <span class="tl-phase">${step.phase}</span>
        <span class="tl-title">${step.title}</span>
      </div>
      <div class="tl-body">
        <p>${step.details}</p>
        <ul>${step.points.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>`;
    el.addEventListener('click', () => {
      document.querySelectorAll('.tl-item').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
    });
    container.appendChild(el);
  });
}

/* ── BUILD EVM DEMO ── */
function buildEVM() {
  const container = document.getElementById('evm-candidates');
  if (!container) return;
  let voted = false;
  evmCandidates.forEach((c, i) => {
    const row = document.createElement('div');
    row.className = 'evm-cand-row';
    row.id = `evm-row-${i}`;
    row.innerHTML = `
      <div class="evm-cand-sym" style="background:${c.color}22">${c.sym}</div>
      <div class="evm-cand-name">${c.name}<br/><small style="color:var(--muted);font-weight:400">${c.party}</small></div>
      <button class="evm-vote-btn" title="Vote"></button>`;
    row.addEventListener('click', () => {
      if (voted) return;
      voted = true;
      row.classList.add('voted');
      document.querySelector('.evm-demo-note').textContent = '✅ Vote cast! VVPAT slip printed for ' + c.name;
      document.querySelectorAll('.evm-cand-row').forEach(r => r.style.pointerEvents = 'none');
    });
    container.appendChild(row);
  });
}

/* ── JOURNEY TABS ── */
function initTabs() {
  document.querySelectorAll('.jtab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.jtab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.jpanel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
  });
}

/* ── QUIZ ENGINE ── */
let qIdx = 0, correctCount = 0, totalPoints = 0, streak = 0, answered = false;
let timerId = null, timeLeft = 15;

function updateHUD() {
  const timerEl = document.getElementById('quiz-timer');
  timerEl.textContent = `⏱️ ${timeLeft}s`;
  if (timeLeft <= 5) timerEl.classList.add('warning');
  else timerEl.classList.remove('warning');

  const streakEl = document.getElementById('quiz-streak');
  streakEl.textContent = `🔥 ${streak}`;
  if (streak >= 3) streakEl.classList.add('hot');
  else streakEl.classList.remove('hot');

  document.getElementById('quiz-score-display').textContent = `🏆 ${totalPoints}`;
}

function startTimer() {
  clearInterval(timerId);
  timeLeft = 15;
  updateHUD();
  timerId = setInterval(() => {
    timeLeft--;
    updateHUD();
    if (timeLeft <= 0) {
      clearInterval(timerId);
      answerQ(-1); // Timeout
    }
  }, 1000);
}

function renderQuestion() {
  const q = quizQuestions[qIdx];
  const pct = (qIdx / quizQuestions.length) * 100;
  document.getElementById('quiz-progress').style.width = pct + '%';
  document.getElementById('quiz-counter').textContent = `Question ${qIdx + 1} of ${quizQuestions.length}`;
  document.getElementById('quiz-next').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-hud').style.display = 'flex';

  const card = document.getElementById('quiz-card');
  card.innerHTML = `
    <h4>${q.q}</h4>
    <div class="quiz-options">
      ${q.opts.map((o, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQ(${i})">${o}</button>`).join('')}
    </div>
    <div class="quiz-feedback" id="quiz-feedback"></div>`;
  answered = false;
  startTimer();
}

function answerQ(idx) {
  if (answered) return;
  answered = true;
  clearInterval(timerId);
  
  const q = quizQuestions[qIdx];
  const fb = document.getElementById('quiz-feedback');
  
  document.querySelectorAll('.quiz-opt').forEach((b, i) => {
    b.disabled = true;
    if (i === q.ans) b.classList.add('correct');
    else if (i === idx) b.classList.add('wrong');
  });

  if (idx === q.ans) {
    let pts = 1000 + (timeLeft * 50);
    if (streak >= 4) pts = Math.floor(pts * 2);
    else if (streak >= 2) pts = Math.floor(pts * 1.5);
    
    totalPoints += pts;
    streak++;
    correctCount++;
    
    const scoreEl = document.getElementById('quiz-score-display');
    scoreEl.classList.remove('pop');
    void scoreEl.offsetWidth; // trigger reflow
    scoreEl.classList.add('pop');
    
    fb.className = 'quiz-feedback correct show';
    fb.innerHTML = `✅ Correct! <strong>+${pts} pts</strong><br/>${q.explain}`;
  } else {
    streak = 0;
    fb.className = 'quiz-feedback wrong show';
    if (idx === -1) fb.innerHTML = `⏰ Time's up! The answer was: <strong>${q.opts[q.ans]}</strong>.<br/>${q.explain}`;
    else fb.innerHTML = `❌ Incorrect.<br/>${q.explain}`;
  }
  
  updateHUD();

  if (qIdx < quizQuestions.length - 1) {
    document.getElementById('quiz-next').style.display = 'inline-block';
  } else {
    setTimeout(showResult, 1500);
  }
}

function quizNext() {
  qIdx++;
  renderQuestion();
}

function showResult() {
  document.getElementById('quiz-progress').style.width = '100%';
  document.getElementById('quiz-card').innerHTML = '';
  document.getElementById('quiz-nav').style.display = 'none';
  document.getElementById('quiz-hud').style.display = 'none';
  
  let rank = totalPoints >= 10000 ? '👑 Chief Election Commissioner' :
             totalPoints >= 6000 ? '🕵️ Election Observer' :
             totalPoints >= 3000 ? '🗳️ Informed Citizen' :
                                   '🌱 Novice Voter';

  const res = document.getElementById('quiz-result');
  res.style.display = 'block';
  res.innerHTML = `
    <div class="quiz-score">${totalPoints} <span style="font-size:1.5rem; color:var(--text)">pts</span></div>
    <h3>Rank: ${rank}</h3>
    <p>You answered ${correctCount} out of ${quizQuestions.length} correctly.</p>
    <button class="quiz-retry" onclick="resetQuiz()">↩ Play Again</button>`;
}

function resetQuiz() {
  qIdx = 0; correctCount = 0; totalPoints = 0; streak = 0; answered = false;
  document.getElementById('quiz-nav').style.display = 'flex';
  renderQuestion();
}

/* ── NAV SCROLL HIGHLIGHT ── */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active-link'));
        const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (link) link.style.color = 'var(--saffron)';
        else links.forEach(l => l.style.color = '');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => obs.observe(s));
}

/* ── ANIMATE RESULT BARS ON SCROLL ── */
function initResultBars() {
  const bars = document.querySelectorAll('.rv-fill');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.width = getComputedStyle(e.target).getPropertyValue('--pct'); }
    });
  });
  bars.forEach(b => { b.style.width = '0%'; obs.observe(b); });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  buildTimeline();
  buildEVM();
  initTabs();
  renderQuestion();
  initNavHighlight();
  initResultBars();
});


