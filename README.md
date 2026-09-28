# Student Notes Portal

> Working title — rename freely.

## 1. What this is

A static, browser-only site — HTML, custom CSS, plain JavaScript for the interactive bits. No build step, no JS framework, no compiled CSS pipeline, no server-side code. Nothing is pulled from a CDN, so the site renders fully offline. Two entry points:

- **Student** — pick a year, then (for Second/Third Year only) a branch, then a semester, then a subject, and land on a page listing that subject's study materials.
- **Admin** — a login screen leading to a content-management panel.

**Scope note (important):** this is a front-end-only prototype. There is no server and no database. The admin login is a JavaScript check against a hardcoded demo credential (`admin` / `admin123`, in `assets/js/admin.js`) — it proves the *flow*, not security. Anyone who opens dev tools can read the password or skip straight to the admin panel by typing its URL. If real access control is ever needed, that requires an actual backend, and is explicitly out of scope for this build (see §7).

**Visual design (4a):** the site uses a dark charcoal / sage-green palette (`#272727` / `#c4d8c7`), pill-shaped buttons and dropdowns, and a system `Helvetica Neue` font stack — remodeled to match two mockups the user supplied (`new_homepage.svg` for the login screen, `newcourseselector.svg` for the course picker). The login screen's decorative shape collage (circles, dot-grid, "bowtie", ring, petal) is pure CSS/inline-SVG — no image assets needed. Bootstrap is still vendored under `vendor/` but is only loaded on `admin-panel.html` now (for its grid classes and modal component); every other page is plain CSS. `vendor/icons/` (Bootstrap Icons) and `vendor/fonts/` (Inter) are left in the tree from the previous design but are no longer referenced by any page — safe to delete if you want to trim the folder.

## 2. User flow

```
login.html
├─ [Student] ──────────────► courses.html
│                              │
│                              ├─ pick a year: First / Second / Third
│                              │
│                              ├─ First Year  ──► pick a semester ──► pick a subject
│                              │                  (no branch step — First Year is the
│                              │                   same curriculum for every branch)
│                              │
│                              └─ Second/Third Year ──► pick a branch ──► pick a semester
│                                                        ──► pick a subject
│                                                              ▼ (navigates)
│                                    courses/subject.html?[branch=..&]year=..&sem=..&subject=..
│                                    (the materials page for that subject; no `branch` param
│                                     for First Year)
│
└─ [Admin] ────────────────► admin-login.html
                               │ (demo credential check, client-side only)
                               ▼
                             admin-panel.html
```

Every step is a rounded pill dropdown revealed in place on `courses.html` itself — one page, no reload per step. The Branch dropdown is hidden entirely when Year = First Year (there's nothing to pick), and reappears for Second/Third Year. Only the final subject-card click navigates, to the materials page.

**Why First Year skips the branch step:** the real curriculum (see `assets/js/data.js`) has First Year students across every branch taking the same subjects — it only splits into 19 shared subjects across two semesters (10 odd, 9 even), not seven branch-specific sets. Second and Third Year remain branch-specific.

## 3. Folder structure

```
project-root/
├── login.html
├── courses.html
├── admin-login.html
├── admin-panel.html
├── index.html                 ← redirects straight to login.html
├── README.md
│
├── vendor/                    ← Bootstrap, Bootstrap Icons and Inter, vendored (no CDN)
│   ├── css/bootstrap.min.css
│   ├── js/bootstrap.bundle.min.js
│   ├── icons/bootstrap-icons.min.css (+ fonts/)
│   └── fonts/inter-*.woff2
│
├── assets/
│   ├── css/
│   │   └── style.css          ← palette, layout and @font-face declarations
│   ├── js/
│   │   ├── data.js            ← single source of truth: First Year (shared) + branches (SY/TY)
│   │   ├── courses.js         ← drives the year → [branch] → sem → subject picker
│   │   ├── subject-page.js    ← reads the URL, looks up data.js, renders the materials list
│   │   └── admin.js           ← demo login check + admin-panel UI logic
│   └── img/
│
├── courses/
│   └── subject.html           ← ONE template file, reused for every subject (see §4)
│
└── materials/                 ← the actual files students download, organized to mirror the data
    ├── first-year/
    │   ├── odd/<subject-id>/{notes,slides}.txt     (10 real subjects)
    │   └── even/<subject-id>/{notes,slides}.txt    (9 real subjects)
    ├── it/{sy,ty}/{odd,even}/<subject-id>/...
    ├── aids/…
    ├── csbs/…
    ├── rai/…
    ├── mech/…
    ├── excp/…
    └── cs/…
```

## 4. What each file does

| File | Purpose |
|---|---|
| `login.html` | Two options: **Student** → `courses.html`, **Admin** → `admin-login.html`. |
| `courses.html` | Picker: year → (branch, if SY/TY) → semester → subject, all in place, driven by `data.js`. |
| `courses/subject.html` | Shared template. Reads `?branch=&year=&sem=&subject=` from the URL (`branch` omitted for First Year), looks up the matching entry in `data.js`, renders the subject name and its materials, each linking into `materials/...`. |
| `admin-login.html` | Username/password form. Checks against a hardcoded value in `admin.js`. Success → `admin-panel.html`. Demo-only, not real auth. |
| `admin-panel.html` | Add a subject (to First Year directly, or to a branch/year/sem), and see a per-branch + First-Year subject count. In-memory only — lost on refresh. |
| `assets/js/data.js` | The whole catalog as one JS object. Adding a subject means editing this file (or using the admin panel, in-memory only), not creating new pages. |

**`data.js` shape:**

```js
const SITE_DATA = {
  firstYear: {
    odd:  [ { id, name, materials: [ { type, title, file }, ... ] }, ... ],  // 10 real subjects
    even: [ { id, name, materials: [ ... ] }, ... ]                          // 9 real subjects
  },
  branches: [
    {
      id: "it",
      name: "Information Technology",
      years: {
        sy: { label: "Second Year", semesters: { odd: { subjects: [...] }, even: { subjects: [...] } } },
        ty: { label: "Third Year",  semesters: { odd: { subjects: [...] }, even: { subjects: [...] } } }
      }
    }
    // ...one object per branch — no `fy` key here, First Year lives in `firstYear` above
  ]
};
```

Every branch now carries real curriculum, transcribed from the syllabus screenshots (First Year shared, plus Second/Third Year per branch for cs, it, aids, csbs, rai, mech, excp). Open electives, departmental electives, mini project, and MNCC are excluded everywhere, per the confirmed rule — including retroactively from `cs` Second Year, which still had "Mini Project" left over from before that rule existed. Subject counts by branch (SY-odd / SY-even / TY-odd / TY-even):

| Branch | SY odd | SY even | TY odd | TY even |
|---|---|---|---|---|
| cs (Comps) | 6 | 5 | 4 | 3 |
| it | 6 | 6 | 9 | 8 |
| aids | 6 | 7 | 4 | 3 |
| csbs | 6 | 6 | 7 | 6 |
| rai | 6 | 6 | 3 | 3 |
| mech | 7 | 6 | 4 | 3 |
| excp | 10 | 9 | 6 | 6 |

First Year: 10 (odd) + 9 (even) = 19. Grand total: 180 subjects.

## 5. Getting started

No build step — open `login.html` directly in a browser, or serve the folder with any static file server (e.g. `python3 -m http.server`).

**To add a First Year subject:** add its entry to `data.js` under `firstYear.odd` or `firstYear.even`, then drop its files into `materials/first-year/<odd|even>/<subject-id>/`.

**To add a Second/Third Year subject:** add its entry under the right branch/year/semester in `data.js`, then drop its files into `materials/<branch>/<year>/<sem>/<subject-id>/`.

## 6. Known gaps

- "Comps" is assumed to be the same branch as the existing `cs` entry — flag it if your college treats them as separate branches.
- Every subject currently ships with two placeholder material files (`notes.txt`, `slides.txt`, both just a stand-in line of text) — swap in the real files under `materials/...` whenever you have them.
- No search, no real authentication, no persistence for admin-panel edits (see §7).

## 7. Explicitly out of scope

- Real authentication / authorization (needs a backend + database)
- Persisting admin-panel edits (needs a backend)
- Search across subjects/materials
- Any server-side code at all

If any of these turn out to be needed, this becomes a different (bigger) project than what's described here.
