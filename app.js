// Catholic Eritrean Church site — small touches only.
// The content itself is static HTML; this just handles the church-year-aware
// greeting on the hero and smooth scrolling for the nav.

// Rotate a small seasonal note based on the time of year.
// These are fixed points of the church calendar, not parish-specific facts.
(function seasonalNote() {
  const now = new Date();
  const m = now.getMonth() + 1; // 1-12
  const d = now.getDate();
  let note = "";
  if (m === 1 && d <= 10) note = "✦ Timket (Epiphany) season is near — check the bulletin for the feast schedule.";
  else if (m === 12) note = "✦ Preparing for Gena (ገና) — Christmas in our tradition is celebrated on January 7.";
  else if (m === 1 && d >= 5 && d <= 9) note = "✦ Gena (ገና) — Christmas in our tradition is celebrated on January 7.";
  else if (m >= 2 && m <= 4) note = "✦ Tsom (ጾም) — the Great Fast. Mezmur and Mass times for Lent are in the bulletin.";
  else if (m === 8) note = "✦ The Fast of the Assumption and the feasts of St. Mary fall in this season — see the bulletin for dates.";
  if (note) {
    const p = document.createElement("p");
    p.className = "note";
    p.style.textAlign = "center";
    p.textContent = note;
    document.querySelector(".hero").appendChild(p);
  }
})();

// Smooth-scroll for in-page nav links.
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
