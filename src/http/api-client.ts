import { VITE_API_URL } from '@/env'
import ky from 'ky'

export const api = {
  agents: ky.create({
    prefixUrl: `${VITE_API_URL}`,
    retry: {
      statusCodes: [401],
    },
  }),
}
