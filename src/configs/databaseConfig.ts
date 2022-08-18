import { createPool } from 'mysql2/promise'

const pool = createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'T3l3f.2020C',
  database: 'UC_RAMOS'
})

export default pool
