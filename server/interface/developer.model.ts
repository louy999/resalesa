import db from '../database/index'
import config from '../config'
import Developer from '../types/developer.types'

class DeveloperModel {
	async create(d: Developer): Promise<Developer> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO developer (status, sales_name, developer_name, developer_img, phone, business, com_company, com_sales, email, password) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 ) returning *`
			const result = await connect.query(sql, [
				d.status,
				d.sales_name,
				d.developer_name,
				d.developer_img,
				d.phone,
				d.business,
				d.com_company,
				d.com_sales,
				d.email,
				d.password,
			])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getAll(): Promise<Developer[]> {
		try {
			const connect = await db.connect()
			const sql = `SELECT * FROM developer`
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async getOne(id: string): Promise<Developer> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT  * from developer WHERE id=($1)'
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
	async getName(developer_name: string): Promise<Developer> {
		try {
			const connect = await db.connect()
			const sql = `Select * FROM developer WHERE  developer_name=($1)`
			const result = await connect.query(sql, [developer_name])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	async update(u: Developer): Promise<Developer> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE developer SET status=$1, sales_name=$2, developer_img=$3, phone=$4, business=$5, com_company=$6, com_sales=$7, email=$8, password=$9  WHERE id=$10 RETURNING *`
			//run query
			const result = await connect.query(sql, [
				u.status,
				u.sales_name,
				u.developer_img,
				u.phone,
				u.business,
				u.com_company,
				u.com_sales,
				u.email,
				u.password,
				u.id,
			])
			//release connect
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  user ${u.email}, ${err}`)
		}
	}

	//delete user
	async delete(id: string): Promise<Developer> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from developer  WHERE id=($1) RETURNING *'
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

export default DeveloperModel
