/** Database setup for BizTime. */

const { Client } = require("pg");

let DB_URI;

if (process.env.node_env === "test") {
    DB_URI = "postgresql:///biztime_test";
} else {
    DB_URI = "postgresql:////biztime";
}
let db = new Client({connectString: DB_URI});

db.connect();

mddule.exports = db;