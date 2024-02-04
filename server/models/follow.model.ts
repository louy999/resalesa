import db from '../database/index'
import config from '../config'
import Follow from '../types/follow.types'

class FollowModel {
	async create(nc: Follow): Promise<Follow> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO follow (developer_id) values ($1) returning *`
			const result = await connect.query(sql, [nc.developer_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getAll(): Promise<Follow[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM follow`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOne(id: string): Promise<Follow> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT  * from follow WHERE id=($1)'
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
	//delete user
	async delete(id: string): Promise<Follow> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from follow  WHERE id=($1) RETURNING *'
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

export default FollowModel
