require("dotenv").config(); //Load the environment variables from .env file

const PORT = process.env.DB_PORT || 3001;

//Create a PostgreSQL pool

function getDatabaseUri() {
  const dbUser = process.env.DATABASE_USER || "postgres";
  const dbPass = process.env.DATABASE_PASS
    ? encodeURI(process.env.DATABASE_PASS)
    : "postgres";
  const dbHost = process.env.DATABASE_HOST || "localhost";
  const dbPort = process.env.DATABASE_PORT || 5432;
  const dbName = process.env.DATABASE_NAME || "vaccine-hub";

  return (
    process.env.DATABASE_URL ||
    `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
  );
}

console.log("Vaccine Hub Config: ");
console.log("PORT: ", PORT);
console.log("Database Uri: ", getDatabaseUri());
console.log("---");

module.exports = {
  PORT,
  getDatabaseUri,
};
