// import { Pool } from "pg"
// // import { config } from "src/common/config"

// const pool = new Pool({
//     connectionString: config.databaseUrl
// })

// export class Postgres {
//     async fetch<ResponseType>(SQL: string, ...args: Array<any>): Promise<ResponseType> {
//         const clien = await pool.connect()
//         try {
//             const { rows: [row] } = await clien.query(SQL, args)
//             return row
//         } finally {
//             clien.release()
//         }
//     }

//     async fetchAll<ResponseType>(SQL: string, ...args: Array<any>): Promise<Array<ResponseType>> {
//         const clien = await pool.connect()
//         try {
//             const { rows } = await pool.query(SQL, args)
//             return rows
//         } finally {
//             clien.release()
//         }
//     }
// }

