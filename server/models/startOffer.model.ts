import db from '../database/index'
import config from '../config'
import StarsOffer from '../types/starsOffer.types'

class StartsOfferModel {
	async create(nc: StarsOffer): Promise<StarsOffer> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO startsoffer (req_id, offer_id) values ($1, $2) returning *`
			const result = await connect.query(sql, [nc.offer_id, nc.user_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getAll(): Promise<StarsOffer[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM startsoffer`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOne(id: string): Promise<StarsOffer> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT  * from startsoffer WHERE id=($1)'
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
	async getUserId(user_id: string): Promise<StarsOffer> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM startsoffer WHERE  user_id=($1)`
			const result = await connect.query(sql, [user_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOfferId(offer_id: string): Promise<StarsOffer> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM startsoffer WHERE  offer_id=($1)`
			const result = await connect.query(sql, [offer_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}

	//delete user
	async delete(id: string): Promise<StarsOffer> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from startsoffer  WHERE id=($1) RETURNING *'
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

export default StartsOfferModel
