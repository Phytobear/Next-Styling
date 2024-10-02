import pg from "pg";

export const db = new pg.Pool({
  connectionString: process.env.NEXT_POSTGRES,
});


// From here, you can now import db without all of the extra hassle to your files:

// import { db } from "@/utils/utilities.js";
