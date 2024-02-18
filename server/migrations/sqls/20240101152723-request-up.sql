/* Replace with your SQL commands */
CREATE TABLE request(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    client_id uuid references client(id),
    client_name VARCHAR(200),
    req VARCHAR(500) NOT NULL,
    type VARCHAR(200) NOT NULL
);