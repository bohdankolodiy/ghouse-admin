import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    // store_cors: "*", // Дозволяє запити з будь-якого домену (тимчасове рішення)
    // admin_cors: "*",
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: "*", // Дозволяє запити з будь-якого домену (тимчасове рішення)
      adminCors:
        process.env.ADMIN_CORS || "https://ghouse-admin-nine.vercel.app",

      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  admin: {
    disable: true,
  },
});
