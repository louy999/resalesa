import db from '../database/index'
import config from '../config'
import StarsDev from '../types/starsDev.types'

class StartsDevModel {
	async create(nc: StarsDev): Promise<StarsDev> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO startsdev (developer_id, user_id, status) values ($1, $2, $3) returning *`
			const result = await connect.query(sql, [
				nc.developer_id,
				nc.user_id,
				nc.status,
			])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getAll(): Promise<StarsDev[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM startsdev`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOne(id: string): Promise<StarsDev> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT  * from startsdev WHERE id=($1)'
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
	async getUserId(user_id: string): Promise<StarsDev[]> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM startsdev WHERE  user_id=($1)`
			const result = await connect.query(sql, [user_id])
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getDevId(developer_id: string): Promise<StarsDev[]> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM startsdev WHERE  developer_id=($1)`
			const result = await connect.query(sql, [developer_id])
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async update(u: StarsDev): Promise<StarsDev> {
		try {
			const connect = await db.connect()
			const sql = `UPDATE startsdev SET status=$1  WHERE user_id=$2 RETURNING *`
			const result = await connect.query(sql, [u.status, u.user_id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}

	//delete user
	async delete(id: string): Promise<StarsDev> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from startsdev  WHERE id=($1) RETURNING *'
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

export default StartsDevModel
