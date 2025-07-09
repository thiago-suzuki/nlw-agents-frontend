import type { GetRoomsResponse } from "./types/get-room-response";
import { useQuery } from "@tanstack/react-query";
import { VITE_API_URL } from "@/env";

export function useRooms() {
    return useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch(`${VITE_API_URL}/rooms`)
            const result: GetRoomsResponse  = await response.json()

            return result
        }
    })
}