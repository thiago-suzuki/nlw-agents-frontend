import { useQuery } from '@tanstack/react-query'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'
import { api } from './api-client';

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const result: GetRoomQuestionsResponse = await api.agents
        .get(`rooms/${roomId}/questions`)
        .json();

      return result;
    },
  })
}