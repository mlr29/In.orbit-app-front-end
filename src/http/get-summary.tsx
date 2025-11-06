import { API_BASE_URL } from "../lib/api"

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch(`${API_BASE_URL}/summary`)
  const data = await response.json()
  return data.summary
}
