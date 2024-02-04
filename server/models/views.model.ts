import db from '../database/index'
import config from '../config'
import Views from '../types/views.types'

class ViewsModel {
	async create(nc: Views): Promise<Views> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO views (offer_id, client_id) values ($1, $2) returning *`
			const result = await connect.query(sql, [nc.offer_id, nc.client_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getAll(): Promise<Views[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM views`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOne(id: string): Promise<Views> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT  * from views WHERE id=($1)'
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
	async getOfferId(offer_id: string): Promise<Views> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM views WHERE  offer_id=($1)`
			const result = await connect.query(sql, [offer_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
}

export default ViewsModel
