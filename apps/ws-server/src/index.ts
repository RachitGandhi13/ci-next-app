import "dotenv/config";
import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async (socket) => {
    try {
        client.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        });
       
        socket.send("HI there, you are connected on server");
    } catch (err) {
        console.error("DB error:", err);
        socket.send("Error creating user");
    }
});