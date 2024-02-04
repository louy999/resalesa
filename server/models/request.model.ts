import db from '../database/index'
import config from '../config'
import Request from '../types/request.types'

class RequestModel {
	//create req
	async create(r: Request): Promise<Request> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO request (client_id, req, type) values ($1, $2, $3 ) returning *`
			const result = await connect.query(sql, [r.client_id, r.req, r.type])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	//ger all req
	async getAll(): Promise<Request[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM request`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	//get specific req
	async getOne(id: string): Promise<Request> {
		try {
			const connect = await db.connect()
			const sql = 'SELECT  * from request WHERE id=($1)'
			const result = await connect.query(sql, [id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	// get req by clientId
	async getClientId(client_id: string): Promise<Request> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM request WHERE  client_id=($1)`
			const result = await connect.query(sql, [client_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	//update req
	async update(u: Request): Promise<Request> {
		try {
			const connect = await db.connect()
			const sql = `UPDATE request SET req=$1, type=$2  WHERE id=$3 RETURNING *`
			const result = await connect.query(sql, [u.req, u.type, u.id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//delete req
	async delete(id: string): Promise<Request> {
		try {
			const connect = await db.connect()
			const sql = 'DELETE from request  WHERE id=($1) RETURNING *'
			const result = await connect.query(sql, [id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
}

export default RequestModel
