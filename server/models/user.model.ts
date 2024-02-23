import db from '../database/index'
import bcrypt from 'bcrypt'
import config from '../config'
import Client from '../types/client.types'

const hashPassword = (password: string) => {
	const salt = parseInt(config.salt as unknown as string, 10)
	return bcrypt.hashSync(`${password}${config.pepper}`, salt)
}

class UserModel {
	//create client
	async create(u: Client): Promise<Client> {
		try {
			const connect = await db.connect()
			const sql =
				'INSERT INTO client ( name, email, password, phone ) values ($1, $2, $3, $4) returning *'
			const result = await connect.query(sql, [
				u.name,
				u.email,
				hashPassword(u.password),
				u.phone,
			])
			connect.release()
			return result.rows[0]
		} catch (err: any) {
			throw new Error(`${err}`)
		}
	}
	//get all Client
	async getAll(): Promise<Client[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from client'
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific Client
	async getOne(id: string): Promise<Client> {
		try {
			const connect = await db.connect()
			const sql = 'SELECT  * from client WHERE id=($1)'
			const result = await connect.query(sql, [id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find user ${id}, ${err}`)
		}
	}
	//get client by email
	async getOneFromEmail(email: string): Promise<Client> {
		try {
			const connect = await db.connect()
			const sql = 'SELECT * from client WHERE email=($1)'
			const result = await connect.query(sql, [email])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	// get Client by phone
	async getOneFromPhone(phone: string): Promise<Client> {
		try {
			const connect = await db.connect()
			const sql = 'SELECT * from client WHERE phone=($1)'
			const result = await connect.query(sql, [phone])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find user ${phone}, ${err}`)
		}
	}
	//update client
	async update(u: Client): Promise<Client> {
		try {
			const connect = await db.connect()
			const sql = `UPDATE client SET name=$1, email=$2,  password=$3, phone=$4  WHERE id=$5 RETURNING *`
			const result = await connect.query(sql, [
				u.name,
				u.email,
				u.password,
				u.phone,
				u.id,
			])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}

	//delete client
	async delete(id: string): Promise<Client> {
		try {
			const connect = await db.connect()
			const sql = 'DELETE from client  WHERE id=($1) RETURNING *'
			const result = await connect.query(sql, [id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//authenticate client
	async auth(email: string, password: string): Promise<any> {
		try {
			const connect = await db.connect()
			const sql = `SELECT password FROM client WHERE email=$1`
			const res = await connect.query(sql, [email])
			if (res.rows.length) {
				const {password: hashPassword} = res.rows[0]
				const isPassValid = bcrypt.compareSync(
					`${password}${config.pepper}`,
					hashPassword
				)
				if (isPassValid) {
					const userInfo = await connect.query(
						`SELECT * FROM client WHERE email=($1)`,
						[email]
					)
					return userInfo.rows[0]
				} else {
					connect.release()
					throw new Error(`Incorrect password. Please try again`)
				}
			} else {
				throw new Error(`not found this email: ${email} please try agin`)
			}
			connect.release()
			return null
		} catch (err) {
			throw new Error(` ${err}`)
		}
	}
}
export default UserModel
