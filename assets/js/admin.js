

var DEMO_ADMIN = { username: "admin", password: "admin123" };

function initAdminLogin() {
  const form = document.getElementById("adminLoginForm");
  if (!form) return;

  const errorBox = document.getElementById("loginError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const u = document.getElementById("username").value.trim();
    const p = document.getElementById("password").value;

    if (u === DEMO_ADMIN.username && p === DEMO_ADMIN.password) {
      window.location.href = "admin-panel.html";
    } else {
      errorBox.classList.remove("d-none");
    }
  });
}

function initAdminPanel() {
  const branchSelect = document.getElementById("addBranch");
  const yearSelect = document.getElementById("addYear");
  const branchWrap = document.getElementById("addBranchWrap");
  const form = document.getElementById("addSubjectForm");
  if (!branchSelect || !form || typeof SITE_DATA === "undefined") return;

  // In-memory clone: edits here never touch the real SITE_DATA or disk, and are lost on refresh.
  const workingData = JSON.parse(JSON.stringify(SITE_DATA));

  const SEM_LABELS = { odd: "Odd Semester", even: "Even Semester" };

  function findBranch(id) {
    return workingData.branches.find(function (b) { return b.id === id; });
  }

  function subjectCount(branch) {
    let count = 0;
    Object.keys(branch.years).forEach(function (yKey) {
      const yearObj = branch.years[yKey];
      Object.keys(yearObj.semesters).forEach(function (sKey) {
        count += (yearObj.semesters[sKey].subjects || []).length;
      });
    });
    return count;
  }

  function firstYearCount() {
    const fy = workingData.firstYear || { odd: [], even: [] };
    return (fy.odd || []).length + (fy.even || []).length;
  }

  function populateBranchSelect() {
    branchSelect.innerHTML = "";
    workingData.branches.forEach(function (b) {
      const opt = document.createElement("option");
      opt.value = b.id;
      opt.textContent = b.name;
      branchSelect.appendChild(opt);
    });
  }

  function syncBranchVisibility() {
    const isFY = yearSelect.value === "fy";
    branchWrap.classList.toggle("d-none", isFY);
    branchSelect.required = !isFY;
  }

  function renderSummary() {
    const body = document.getElementById("summaryBody");
    body.innerHTML = "";

    const fyRow = document.createElement("tr");
    fyRow.style.cursor = "pointer";
    fyRow.setAttribute("data-branch", "__firstYear");
    fyRow.innerHTML = "<td>First Year <span class=\"text-muted small\">(shared, all branches)</span></td><td>" + firstYearCount() + "</td>";
    body.appendChild(fyRow);

    workingData.branches.forEach(function (b) {
      const tr = document.createElement("tr");
      tr.style.cursor = "pointer";
      tr.setAttribute("data-branch", b.id);
      tr.innerHTML = "<td>" + b.name + "</td><td>" + subjectCount(b) + "</td>";
      body.appendChild(tr);
    });
  }

  function showFirstYearModal() {
    document.getElementById("branchModalTitle").textContent = "First Year";
    const body = document.getElementById("branchModalBody");
    const fy = workingData.firstYear || { odd: [], even: [] };
    body.innerHTML =
      '<p class="small text-muted">Shared across every branch — no branch selection needed.</p>' +
      "<div class=\"small\">" + (SEM_LABELS.odd) + ": " + (fy.odd || []).length + " subject(s)</div>" +
      "<div class=\"small\">" + (SEM_LABELS.even) + ": " + (fy.even || []).length + " subject(s)</div>";
    bootstrap.Modal.getOrCreateInstance(document.getElementById("branchModal")).show();
  }

  function showBranchModal(branchId) {
    if (branchId === "__firstYear") { showFirstYearModal(); return; }

    const branch = findBranch(branchId);
    if (!branch) return;

    document.getElementById("branchModalTitle").textContent = branch.name;
    const body = document.getElementById("branchModalBody");
    body.innerHTML = "";

    const YEAR_LABELS = { sy: "Second Year", ty: "Third Year" };
    Object.keys(branch.years).forEach(function (yKey) {
      const yearObj = branch.years[yKey];
      const h = document.createElement("h6");
      h.className = "fw-semibold mt-2";
      h.textContent = YEAR_LABELS[yKey] || yKey;
      body.appendChild(h);

      const ul = document.createElement("ul");
      ul.className = "list-unstyled ms-2 mb-2";
      Object.keys(yearObj.semesters).forEach(function (sKey) {
        const semObj = yearObj.semesters[sKey];
        const li = document.createElement("li");
        li.className = "small text-muted";
        li.textContent = (SEM_LABELS[sKey] || sKey) + ": " + (semObj.subjects || []).length + " subject(s)";
        ul.appendChild(li);
      });
      body.appendChild(ul);
    });

    bootstrap.Modal.getOrCreateInstance(document.getElementById("branchModal")).show();
  }

  document.getElementById("summaryBody").addEventListener("click", function (e) {
    const row = e.target.closest("[data-branch]");
    if (!row) return;
    showBranchModal(row.getAttribute("data-branch"));
  });

  yearSelect.addEventListener("change", syncBranchVisibility);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const yearId = yearSelect.value;
    const semId = document.getElementById("addSem").value;
    const name = document.getElementById("addSubjectName").value.trim();
    if (!name) return;

    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "subject";
    let scopeLabel;

    if (yearId === "fy") {
      if (!workingData.firstYear) workingData.firstYear = { odd: [], even: [] };
      if (!workingData.firstYear[semId]) workingData.firstYear[semId] = [];
      workingData.firstYear[semId].push({ id: id, name: name, materials: [] });
      scopeLabel = "First Year (shared) — " + (SEM_LABELS[semId] || semId);
    } else {
      const branchId = branchSelect.value;
      const branch = findBranch(branchId);
      const semObj = branch.years[yearId].semesters[semId];
      if (!semObj.subjects) semObj.subjects = [];
      semObj.subjects.push({ id: id, name: name, materials: [] });
      const YEAR_LABELS = { sy: "Second Year", ty: "Third Year" };
      scopeLabel = branch.name + " — " + (YEAR_LABELS[yearId] || yearId) + ", " + (SEM_LABELS[semId] || semId);
    }

    const successBox = document.getElementById("addSuccess");
    successBox.textContent = "Added \"" + name + "\" to " + scopeLabel + ". (In-memory only — this resets on refresh.)";
    successBox.classList.remove("d-none");

    form.reset();
    syncBranchVisibility();
    renderSummary();
  });

  populateBranchSelect();
  syncBranchVisibility();
  renderSummary();
}

document.addEventListener("DOMContentLoaded", function () {
  initAdminLogin();
  initAdminPanel();
});
