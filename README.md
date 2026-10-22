# Notes-Aid

Notes-Aid is a study portal for engineering students. Pick your branch, year and semester to get module-wise notes, textbooks, previous year papers and embedded YouTube explanations for every subject. Progress on each video is saved locally in the browser.

## Repository layout

| Path | What it is |
| --- | --- |
| `notes-aid/` | Main web app (Next.js 15, React 19, Tailwind 4 + daisyUI, PWA). Curriculum and links live in `src/notes/`. |
| `notes-aid_v2/` | Next-gen app (MongoDB, Redis, NextAuth, Firebase): admin panel, edit links, leaderboard. Work in progress. It has no `package.json` yet, so it does not build. |
| `notes-rag/` | Streamlit "chat with your PDF" prototype using Gemini + FAISS. |

## Running the main app

Requires Node.js 20+.

```bash
cd notes-aid
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

`npm run lint` runs ESLint.

### Routes

- `/` – branch / year / semester selector
- `/[year]/[branch]/[semester]` – subjects and modules, e.g. `/sy/comps/odd`
  - years: `fy`, `sy`, `ty`, `ly`
  - branches: `comps`, `it`, `aids`, `csbs`, `cce`, `excp`, `extc`, `mech`, `rai`
- `/contributors` – contributor list

### Adding notes

Subject data lives in `notes-aid/src/notes/<year>/<branch>/<oddSem|evenSem>/`. Each subject exports its modules, topics, video links and note PDFs, and `src/notes/data.tsx` wires them together. Previous year papers are in `src/notes/pyq.tsx`.

## notes-rag

```bash
cd notes-rag
pip install streamlit PyPDF2 langchain langchain-community langchain-google-genai google-generativeai faiss-cpu python-dotenv
GEMINI_API_KEY=... streamlit run app.py
```

## Contributors

- [@inikunjrathi](https://github.com/inikunjrathi)
- [@aziatashi](https://github.com/aziatashi)

## License

MIT, see [LICENSE](LICENSE).
