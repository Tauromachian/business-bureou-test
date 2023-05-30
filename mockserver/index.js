import { Server } from "miragejs";

import { rawProducts } from "@/utils/data";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    routes() {
      this.get("/products", () => {
        return new Response(200, {}, rawProducts);
      });

      this.get("/products/:id", (_, request) => {
        const product = rawProducts.find(
          (product) => product.id === request.params.id
        );
        return new Response(200, {}, product);
      });
    },
  });

  return server;
}
