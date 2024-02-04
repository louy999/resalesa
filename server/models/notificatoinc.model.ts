import db from '../database/index'
import config from '../config'
import NotificationClient from '../types/notificationClient.types'

class NotificationClientModel {
	// create notification Dev
	async create(r: NotificationClient): Promise<NotificationClient> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO notificationc (type, show, user_id) values ($1, $2, $3 ) returning *`
			const result = await connect.query(sql, [r.type, r.show, r.user_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	// get all notification Dev
	async getAll(): Promise<NotificationClient[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM notificationc`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	// get specific notification Dev
	async getOne(id: string): Promise<NotificationClient> {
		try {
			const connect = await db.connect()
			const sql = 'SELECT  * from notificationc WHERE id=($1)'
			const result = await connect.query(sql, [id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	// get notification Dev by user id
	async getUserId(user_id: string): Promise<NotificationClient> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM notificationc WHERE  user_id=($1)`
			const result = await connect.query(sql, [user_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	//update notification Dev
	async update(u: NotificationClient): Promise<NotificationClient> {
		try {
			const connect = await db.connect()
			const sql = `UPDATE notificationc SET show=$1  WHERE id=$2 RETURNING *`
			const result = await connect.query(sql, [u.show, u.id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//delete notification Dev
	async delete(id: string): Promise<NotificationClient> {
		try {
			const connect = await db.connect()
			const sql = 'DELETE from notificationc  WHERE id=($1) RETURNING *'
			const result = await connect.query(sql, [id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
}

export default NotificationClientModel
