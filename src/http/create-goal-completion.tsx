import { API_BASE_URL } from "../lib/api";

export async function createGoalCompletion(goalId: string) {
  await fetch(`${API_BASE_URL}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
