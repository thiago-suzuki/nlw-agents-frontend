import type { GetRoomsResponse } from "./types/get-room-response";
import { useQuery } from "@tanstack/react-query";
import { api } from "./api-client";

export function useRooms() {
    return useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const result: GetRoomsResponse = await api.agents
                .get('rooms')
                .json();

            return result;
        }
    })
}