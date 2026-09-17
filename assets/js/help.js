

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".help-report-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const issue = btn.getAttribute("data-issue") || "Unknown issue";
      console.log("[Help] Reported to admins:", issue);
    });
  });
});
