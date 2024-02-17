/* Replace with your SQL commands */
CREATE TABLE startsdev(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    developer_id uuid references developer(id),
    user_id VARCHAR(500),
    status boolean
);