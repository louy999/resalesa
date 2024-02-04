import db from '../database/index'
import config from '../config'
import NotificationDev from '../types/notificationDev.types'

class NotificationDevModel {
	async create(nd: NotificationDev): Promise<NotificationDev> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO notificationd (developer_id, type, show) values ($1, $2, $3 ) returning *`
			const result = await connect.query(sql, [nd.developer_id, nd.type, nd.show])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getAll(): Promise<NotificationDev[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM notificationd`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOne(id: string): Promise<NotificationDev> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT  * from notificationd WHERE id=($1)'
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
	async getDevId(developer_id: string): Promise<NotificationDev> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM notificationd WHERE  developer_id=($1)`
			const result = await connect.query(sql, [developer_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async update(nd: NotificationDev): Promise<NotificationDev> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE notificationd SET show=$1 WHERE id=$2 RETURNING *`
			//run query
			const result = await connect.query(sql, [nd.show, nd.id])
			//release connect
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  user  ${err}`)
		}
	}

	//delete user
	async delete(id: string): Promise<NotificationDev> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from notificationd  WHERE id=($1) RETURNING *'
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

export default NotificationDevModel
