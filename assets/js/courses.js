

document.addEventListener("DOMContentLoaded", function () {
  const ddYear = document.getElementById("dd-year");
  const ddBranch = document.getElementById("dd-branch");
  const ddSem = document.getElementById("dd-sem");
  const branchOptions = document.getElementById("branchOptions");
  const subjectsArea = document.getElementById("subjectsArea");
  const dds = document.querySelectorAll(".dd");

  const YEAR_LABELS = { fy: "First Year", sy: "Second Year", ty: "Third Year" };
  const SEM_LABELS = { odd: "Odd", even: "Even" };

  let state = { year: null, branch: null, sem: null };

  function closeAll(except) {
    dds.forEach(function (dd) { if (dd !== except) dd.classList.remove("open"); });
  }

  function findBranch(id) {
    return SITE_DATA.branches.find(function (b) { return b.id === id; });
  }

  function bindOptionClicks(dd) {
    const key = dd.querySelector(".dd-trigger").getAttribute("data-dd");
    dd.querySelectorAll(".dd-option").forEach(function (opt) {
      opt.addEventListener("click", function (e) {
        e.stopPropagation();
        selectValue(key, opt.getAttribute("data-value"), opt, dd);
      });
    });
  }

  function populateBranches() {
    branchOptions.innerHTML = "";
    SITE_DATA.branches.forEach(function (b) {
      const opt = document.createElement("div");
      opt.className = "dd-option";
      opt.setAttribute("data-value", b.id);
      opt.textContent = b.name;
      branchOptions.appendChild(opt);
    });
    bindOptionClicks(ddBranch);
  }

  function resetDropdownLabel(dd, text) {
    dd.querySelector(".dd-label").textContent = text;
    dd.querySelectorAll(".dd-option").forEach(function (o) { o.classList.remove("active"); });
  }

  function selectValue(key, value, optEl, dd) {
    state[key] = value;

    const labelText = key === "year" ? YEAR_LABELS[value]
      : key === "sem" ? SEM_LABELS[value]
      : optEl.textContent;
    dd.querySelector(".dd-label").textContent = labelText;
    dd.querySelectorAll(".dd-option").forEach(function (o) { o.classList.remove("active"); });
    optEl.classList.add("active");
    dd.classList.remove("open");

    if (key === "year") {
      state.branch = null;
      resetDropdownLabel(ddBranch, "Branch");
      if (value === "fy") {
        ddBranch.classList.add("d-none");
      } else {
        ddBranch.classList.remove("d-none");
        populateBranches();
      }
    }

    renderSubjects();
  }

  // Year and Sem panels are static, so bind them once up front.
  bindOptionClicks(ddYear);
  bindOptionClicks(ddSem);

  dds.forEach(function (dd) {
    const trigger = dd.querySelector(".dd-trigger");
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      const willOpen = !dd.classList.contains("open");
      closeAll();
      if (willOpen) dd.classList.add("open");
    });
  });

  document.addEventListener("click", function () { closeAll(); });

  
  function renderSubjects() {
    const list = document.getElementById("subjectList");
    if (!list) return;
    list.innerHTML = '<p class="text-muted">Select branch and semester to view subjects.</p>';
  }
});
