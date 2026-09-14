

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
    subjectsArea.innerHTML = "";

    const ready = state.year && state.sem && (state.year === "fy" || state.branch);
    if (!ready) {
      const hint = document.createElement("div");
      hint.className = "empty-state";
      hint.textContent = state.year === "fy"
        ? "Pick a semester to see subjects."
        : "Pick a year, branch and semester to see subjects.";
      subjectsArea.appendChild(hint);
      return;
    }

    let subjects = [];
    if (state.year === "fy") {
      subjects = (SITE_DATA.firstYear && SITE_DATA.firstYear[state.sem]) || [];
    } else {
      const branch = findBranch(state.branch);
      const yearObj = branch && branch.years[state.year];
      const semObj = yearObj && yearObj.semesters[state.sem];
      subjects = (semObj && semObj.subjects) || [];
    }

    if (subjects.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "No subjects added for this semester yet.";
      subjectsArea.appendChild(empty);
      return;
    }

    const grid = document.createElement("div");
    grid.className = "subject-grid";
    subjects.forEach(function (subj) {
      const params = new URLSearchParams();
      if (state.year !== "fy") params.set("branch", state.branch);
      params.set("year", state.year);
      params.set("sem", state.sem);
      params.set("subject", subj.id);

      const a = document.createElement("a");
      a.className = "subject-card";
      a.href = "courses/subject.html?" + params.toString();
      a.innerHTML =
        '<span class="subject-card-name">' + subj.name + "</span>" +
        '<span class="subject-card-count">' + subj.materials.length + " material" + (subj.materials.length === 1 ? "" : "s") + "</span>";
      grid.appendChild(a);
    });
    subjectsArea.appendChild(grid);
  }

  renderSubjects();
});
