type Offer = {
	id?: string
	date?: string
	developer_id: string
	img: string[]
	status?: string | boolean
	type_estate: string
	type_sale: string
	area: string
	price: string | number
	description: string
	title: string
	location: string
	commission: string | number
	incentive: string | number
	down_payment: string | number
	years: string | number
	check_c: string | number
	developer_name: string | number
	delivery: string | number
}
export default Offer
