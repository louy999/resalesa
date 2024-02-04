import db from '../database/index'
import config from '../config'
import Cash from '../types/cash.types'

class CashModel {
	async create(nc: Cash): Promise<Cash> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO cash (per) values ($1) returning *`
			const result = await connect.query(sql, [nc.per])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getAll(): Promise<Cash[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM cash`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async update(u: Cash): Promise<Cash> {
		try {
			const connect = await db.connect()
			const sql = `UPDATE cash SET per=$1  WHERE id=$2 RETURNING *`
			const result = await connect.query(sql, [u.per, u.id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//delete user
	async delete(id: string): Promise<Cash> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from cash  WHERE id=($1) RETURNING *'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not delete  user ${id}, ${err}`)
		}
	}
}

export default CashModel
