import fastify from "fastify";
import authRoutes from "./modules/auth.route";

// logger shows logs of requests
const server = fastify({ logger: true });

server.get("/", (req, res) => {
  res.send("Hello Fastify Root!");
});

// register all routes
server.register(authRoutes, { prefix: "/auth" });

const start = async () => {
  try {
    const address = await server.listen({ port: 8000, host: "0.0.0.0" });
    console.log(`Fastify✨ server running on ${address}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
