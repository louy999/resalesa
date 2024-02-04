import db from '../database/index'
import config from '../config'
import Offer from '../types/offer.types'

class OfferModel {
	//create offer
	async create(o: Offer): Promise<Offer> {
		try {
			const connect = await db.connect()
			const sql =
				'INSERT INTO offer ( developer_id, img, status, type_estate, type_sale, area, price, description, title, location, commission, incentive, down_payment ,years, check_c, developer_name, delivery) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17 ) returning *'
			const result = await connect.query(sql, [
				o.developer_id,
				o.img,
				o.status === '' ? (o.status = false) : o.status,
				o.type_estate,
				o.type_sale,
				o.area,
				o.price,
				o.description,
				o.title,
				o.location,
				o.commission,
				o.incentive,
				o.down_payment,
				o.years,
				o.check_c,
				o.developer_name,
				o.delivery,
			])
			connect.release()
			return result.rows[0]
		} catch (err: any) {
			throw new Error(`${err} `)
		}
	}
	//get all offer
	async getAll(): Promise<Offer[]> {
		try {
			const connect = await db.connect()
			const sql = 'SELECT * from offer'
			const result = await connect.query(sql)
			connect.release()
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific offer
	async getOne(id: string): Promise<Offer> {
		try {
			const connect = await db.connect()
			const sql = 'SELECT  * from offer WHERE id=($1)'
			const result = await connect.query(sql, [id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific offer
	async getDev(developer_id: string): Promise<Offer[]> {
		try {
			const connect = await db.connect()
			const sql = 'SELECT  * from offer WHERE developer_id=($1)'
			const result = await connect.query(sql, [developer_id])
			connect.release()
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//update offer
	async update(o: Offer): Promise<Offer> {
		try {
			const connect = await db.connect()
			const sql = `UPDATE offer SET  img_offer=$1, status=$2, offer_name=$3, price=$4, des=$5, bor=$6, payment=$7, cashback=$8, location=$9, type=$10, delivery=$11  WHERE id=$12 RETURNING *`
			const result = await connect.query(sql)
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//delete offer
	async delete(id: string): Promise<Offer> {
		try {
			const connect = await db.connect()
			const sql = 'DELETE from offer  WHERE id=($1) RETURNING *'
			const result = await connect.query(sql, [id])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
}
export default OfferModel
