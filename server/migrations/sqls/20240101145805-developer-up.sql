/* Replace with your SQL commands */
CREATE TABLE developer(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status Boolean NOT NULL,
    sales_name VARCHAR(500),
    developer_name VARCHAR(500) UNIQUE,
    developer_img VARCHAR(500),
    phone VARCHAR(200) NOT NULL,
    business VARCHAR(500),
    com_company VARCHAR(300) NOT NULL,
    com_sales VARCHAR(300),
    email VARCHAR(300),
    location_dev text [],
    password VARCHAR(500)
);