import db from '../database/index'
import config from '../config'
import Calls from '../types/calls.types'

class CallsModel {
	async create(nc: Calls): Promise<Calls> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO calls (phone, client_id) values ($1, $2) returning *`
			const result = await connect.query(sql, [nc.phone, nc.client_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getAll(): Promise<Calls[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM calls`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOne(id: string): Promise<Calls> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT  * from calls WHERE id=($1)'
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
	async getPhoneId(phone: string): Promise<Calls> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM calls WHERE  phone=($1)`
			const result = await connect.query(sql, [phone])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async update(u: Calls): Promise<Calls> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE calls SET phone=$1 WHERE id=$2 RETURNING *`
			//run query
			const result = await connect.query(sql, [u.phone, u.id])
			//release connect
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//delete user
	async delete(id: string): Promise<Calls> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from calls  WHERE id=($1) RETURNING *'
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

export default CallsModel
