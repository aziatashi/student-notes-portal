const REPO_API = "https://api.github.com/repos/aziatashi/student-notes-portal";

// GitHub allows 60 unauthenticated requests an hour per server IP, so responses
// are shared across visitors. Next.js caches only 200s, so if GitHub fails the
// last good response keeps being served.
const CACHE_SECONDS = 600;

export async function fetchFromRepo<T>(path: string): Promise<T> {
  const token = process.env.GITHUB_TOKEN;
  const response = await fetch(`${REPO_API}/${path}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    next: { revalidate: CACHE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`GitHub API responded with status: ${response.status}`);
  }

  return response.json();
}
