/* Replace with your SQL commands */
CREATE TABLE offer(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    developer_id uuid references developer(id),
    img text [],
    status BOOLEAN,
    type_estate VARCHAR(250),
    type_sale VARCHAR(200),
    area NUMERIC(4),
    price NUMERIC(10),
    description VARCHAR(3000),
    title VARCHAR(300),
    location VARCHAR(200),
    commission VARCHAR(300),
    incentive VARCHAR(300),
    down_payment VARCHAR(300),
    delivery NUMERIC(3),
    years VARCHAR(300),
    developer_name VARCHAR(300) references developer(developer_name),
    check_c VARCHAR(300)
);