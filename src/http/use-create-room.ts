import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateRoomRequest } from "./types/create-room-request";
import type { CreateRoomResponse } from "./types/create-room-response";
import { api } from "./api-client";

export function useCreateRoom() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data: CreateRoomRequest) => {
            const result: CreateRoomResponse = await api.agents
            .post('rooms', {
                json: data,
            })
            .json();

            return result;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['get-rooms'] })
        }
    })
}