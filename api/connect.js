import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wjddms12",
  database: "sns-react-app",
});
