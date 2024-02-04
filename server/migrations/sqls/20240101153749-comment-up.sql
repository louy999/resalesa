/* Replace with your SQL commands */
CREATE TABLE comment(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    req_id uuid references request(id),
    developer_id uuid references developer(id),
    text VARCHAR(500) NOT NULL
);