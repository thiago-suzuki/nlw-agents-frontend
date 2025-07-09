import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import dayjs  from "@/lib/dayjs";
import { useRooms } from "@/http/use-rooms";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function RoomList() {
    const { data, isLoading } = useRooms()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Salas Recentes</CardTitle>
                <CardDescription>
                    Acesso rápido para as salas criadas recentemente
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">

                {isLoading && (
                    <p className="text-muted-foreground text-sm">
                        Carregando salas...
                    </p>
                )}
                
                {data?.map((room) => {
                    return (
                        <Link
                            key={room.id}
                            className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent"
                            to={`/room/${room.id}`}
                        >
                            <div className="flex-1 flex flex-col gap-1">
                                <h3 className="font-medium">{room.name}</h3>

                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="text-xs">
                                        {dayjs(room.createdAt).toNow()}
                                    </Badge>

                                    <Badge variant="secondary" className="text-xs">
                                        {room.questionsCount} pergunta(s)
                                    </Badge>
                                </div>
                            </div>

                            <span className="flex items-center gap-1 text-sm">
                                Entrar
                                <ArrowRight className="size-3" />
                            </span>
                        </Link>
                    ) 
                })}
            </CardContent>
        </Card>
    )
}