import { createYoga } from "@graphql-yoga/node";
import { createServer } from "http";
import { schema } from "./schema";

// 2
const port = Number(process.env.API_PORT) || 4000;

// 3
const yoga = createYoga({
  schema,
});

// 4
const server = createServer(yoga);

server.listen(port, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});
