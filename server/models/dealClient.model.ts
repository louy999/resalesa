import db from '../database/index'
import config from '../config'
import DealClient from '../types/dealClient.types'

class DealClientModel {
	async create(nc: DealClient): Promise<DealClient> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO dealclient (developer_id, developer_name, user_id,  offer_id) values ($1, $2, $3, $4 ) returning *`
			const result = await connect.query(sql, [
				nc.developer_id,
				nc.developer_name,
				nc.user_id,
				nc.offer_id,
			])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getAll(): Promise<DealClient[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM dealclient`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOne(id: string): Promise<DealClient> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT  * from dealclient WHERE id=($1)'
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

	async getUserId(user_id: string): Promise<DealClient> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM dealclient WHERE  user_id=($1)`
			const result = await connect.query(sql, [user_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getDevId(developer_id: string): Promise<DealClient> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM dealclient WHERE  developer_id=($1)`
			const result = await connect.query(sql, [developer_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOfferId(offer_id: string): Promise<DealClient> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM dealclient WHERE  offer_id=($1)`
			const result = await connect.query(sql, [offer_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}

	//delete user
	async delete(id: string): Promise<DealClient> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from dealclient  WHERE id=($1) RETURNING *'
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

export default DealClientModel
