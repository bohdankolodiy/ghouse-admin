import { defineConfig, loadEnv } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    // store_cors: "*", // Дозволяє запити з будь-якого домену (тимчасове рішення)
    // admin_cors: "*",
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: "*", // Дозволяє запити з будь-якого домену (тимчасове рішення)
      adminCors: process.env.MEDUSA_BACKEND_URL ?? process.env.ADMIN_CORS!,
      authCors: process.env.MEDUSA_BACKEND_URL ?? process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  admin: {
    disable: false,
    backendUrl: process.env.MEDUSA_BACKEND_URL,
    path: "/",
  },
});
