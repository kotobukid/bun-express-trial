import {sayHello} from "./hello";

const server = Bun.serve({
    port: 3000,
    fetch(request) {
        console.log(request.url);
        sayHello('Bun');
        return new Response("Welcome to Bun!");
    },
});

console.log(`Listening on localhost:${server.port}`);