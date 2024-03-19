import { createPool } from 'mysql2';

const pool = createPool({
  host: "mysql.stud.ntnu.no",
  user: "fs_tdt4140_1_flashy_dev",
  password: "flashydev",
  database: "fs_tdt4140_1_flashy_db",
  connectionLimit: 10,
});

export default pool;
