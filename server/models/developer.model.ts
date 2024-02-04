import db from '../database/index'
import config from '../config'
import Developer from '../types/developer.types'

class DeveloperModel {
	//create developer
	async create(d: Developer): Promise<Developer> {
		try {
			const connect = await db.connect()
			const sql = `INSERT INTO developer (status, sales_name, developer_name, developer_img, phone, business, com_company, com_sales, email, password, location_dev) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 ) returning *`
			const result = await connect.query(sql, [
				d.status === '' ? (d.status = false) : d.status,
				d.sales_name,
				d.developer_name,
				d.developer_img,
				d.phone,
				d.business,
				d.com_company,
				d.com_sales,
				d.email,
				d.password,
				d.location_dev,
			])
			connect.release()
			return result.rows[0]
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
	// get all developer
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
	// get specific developer
	async getOne(id: string): Promise<Developer> {
		try {
			const connect = await db.connect()
			const sql = 'SELECT  * from developer WHERE id=($1)'
			const result = await connect.query(sql, [id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	// get developer by name
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
	// update developer
	async update(u: Developer): Promise<Developer> {
		try {
			const connect = await db.connect()
			const sql = `UPDATE developer SET status=$1, sales_name=$2, developer_img=$3, phone=$4, business=$5, com_company=$6, com_sales=$7, email=$8, password=$9, location_dev=$10 WHERE id=$11 RETURNING *`
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
				u.location_dev,
				u.id,
			])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(` ${err}`)
		}
	}
	//delete developer
	async delete(id: string): Promise<Developer> {
		try {
			const connect = await db.connect()
			const sql = 'DELETE from developer  WHERE id=($1) RETURNING *'
			const result = await connect.query(sql, [id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not delete  user ${id}, ${err}`)
		}
	}
}

export default DeveloperModel
