import { API_BASE_URL } from "../lib/api"

type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch(`${API_BASE_URL}/pending-goals`)
  const data = await response.json()
  return data.pendingGoals
}
