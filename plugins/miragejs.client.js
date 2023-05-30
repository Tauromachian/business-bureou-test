export default defineNuxtPlugin(async () => {
  if (process.env.NODE_ENV !== "production") {
    const { makeServer } = await import("@/mockserver/index");
    makeServer();
  }
});
