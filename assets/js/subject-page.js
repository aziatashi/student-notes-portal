

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const branchId = params.get("branch");
  const yearId = params.get("year");
  const semId = params.get("sem");
  const subjectId = params.get("subject");

  const YEAR_LABELS = { fy: "First Year", sy: "Second Year", ty: "Third Year" };
  const SEM_LABELS = { odd: "Odd Semester", even: "Even Semester" };

  const subjectTitle = document.getElementById("subjectTitle");
  const subjectCrumb = document.getElementById("subjectCrumb");
  const materialsList = document.getElementById("materialsList");
  const notFound = document.getElementById("notFound");

  function fail() {
    subjectTitle.textContent = "Not found";
    notFound.classList.remove("d-none");
  }

  if (!yearId || !semId || !subjectId || (yearId !== "fy" && !branchId)) {
    fail();
    return;
  }

  let subject = null;
  let crumbParts = [];

  if (yearId === "fy") {
    const subjects = (SITE_DATA.firstYear && SITE_DATA.firstYear[semId]) || [];
    subject = subjects.find(function (s) { return s.id === subjectId; });
    crumbParts = [YEAR_LABELS.fy, SEM_LABELS[semId] || semId];
  } else {
    const branch = SITE_DATA.branches.find(function (b) { return b.id === branchId; });
    const yearObj = branch && branch.years[yearId];
    const semObj = yearObj && yearObj.semesters[semId];
    subject = semObj && (semObj.subjects || []).find(function (s) { return s.id === subjectId; });
    if (branch) crumbParts = [branch.name, YEAR_LABELS[yearId] || yearId, SEM_LABELS[semId] || semId];
  }

  if (!subject) { fail(); return; }

  subjectCrumb.textContent = crumbParts.join(" • ");
  subjectTitle.textContent = subject.name;

  materialsList.innerHTML = "";
  if (!subject.materials || subject.materials.length === 0) {
    materialsList.innerHTML = '<div class="empty-state">No materials added for this subject yet.</div>';
    return;
  }

  subject.materials.forEach(function (m) {
    const row = document.createElement("a");
    row.className = "material-row";
    row.href = "../" + m.file;
    row.setAttribute("download", "");
    row.innerHTML =
      '<div class="name">' + m.title + "</div>" +
      '<div class="type">' + m.type + "</div>";
    materialsList.appendChild(row);
  });
});
