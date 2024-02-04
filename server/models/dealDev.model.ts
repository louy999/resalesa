import db from '../database/index'
import config from '../config'
import DealDev from '../types/dealDev.types'

class DealDevModel {
	async create(nc: DealDev): Promise<DealDev> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO dealdev (developer_id, user_id, offer_id) values ($1, $2, $3 ) returning *`
			const result = await connect.query(sql, [
				nc.developer_id,
				nc.user_id,
				nc.offer_id,
			])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getAll(): Promise<DealDev[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM dealdev`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOne(id: string): Promise<DealDev> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT  * from dealdev WHERE id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find user ${id}, ${err}`)
		}
	}
	async getDevId(developer_id: string): Promise<DealDev> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM dealdev WHERE  developer_id=($1)`
			const result = await connect.query(sql, [developer_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getUserId(user_id: string): Promise<DealDev> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM dealdev WHERE  user_id=($1)`
			const result = await connect.query(sql, [user_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}

	//delete user
	async delete(id: string): Promise<DealDev> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from dealdev  WHERE id=($1) RETURNING *'
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

export default DealDevModel
