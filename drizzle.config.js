/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
    url: 'postgresql://interview_owner:u4myfSDBrI6z@ep-small-tree-a588nb4o.us-east-2.aws.neon.tech/interview?sslmode=require',
    }
  };