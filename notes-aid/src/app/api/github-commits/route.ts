import { NextRequest, NextResponse } from "next/server"
import { fetchFromRepo } from "@/lib/github"

// Define a type for GitHub commit data
interface GitHubCommit {
  sha: string
  commit: {
    message: string
    author: {
      date: string
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  try {
    const commits = await fetchFromRepo<GitHubCommit[]>("commits")

    // Process the commits to the format your frontend expects
    const notifications = commits.map((commit: GitHubCommit) => ({
      id: commit.sha,
      message: commit.commit.message,
      date: commit.commit.author.date,
      read: false,
    }))

    // Return the processed data
    return NextResponse.json(notifications, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      },
    })
  } catch (error) {
    console.error("Error fetching GitHub commits:", error)
    return NextResponse.json(
      { error: "Failed to fetch commits" },
      { status: 500 }
    )
  }
}
