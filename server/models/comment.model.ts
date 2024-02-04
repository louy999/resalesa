import db from '../database/index'
import config from '../config'
import Comment from '../types/comment.types'

class CommentModel {
	async create(nc: Comment): Promise<Comment> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO comment (req_id, developer_id, text) values ($1, $2, $3 ) returning *`
			const result = await connect.query(sql, [
				nc.req_id,
				nc.developer_id,
				nc.text,
			])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getAll(): Promise<Comment[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM comment`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOne(id: string): Promise<Comment> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT  * from comment WHERE id=($1)'
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
	async getReqId(req_id: string): Promise<Comment> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM comment WHERE  req_id=($1)`
			const result = await connect.query(sql, [req_id])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async update(nc: Comment): Promise<Comment> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE comment SET text=$1 WHERE id=$2 RETURNING *`
			//run query
			const result = await connect.query(sql, [nc.text, nc.id])
			//release connect
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  user  ${err}`)
		}
	}

	//delete user
	async delete(id: string): Promise<Comment> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from comment  WHERE id=($1) RETURNING *'
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

export default CommentModel
