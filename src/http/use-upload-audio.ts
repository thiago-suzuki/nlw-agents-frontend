import { useMutation } from '@tanstack/react-query'
import { api } from './api-client'

export function useUploadAudio(roomId: string) {
  return useMutation({
    mutationFn: async (audio: Blob) => {
      const formData = new FormData()
      formData.append('file', audio, 'audio.webm')

      const result = await api.agents
        .post(`rooms/${roomId}/audio`, {
          body: formData,
        })
        .json()

      return result
    }
  })
}