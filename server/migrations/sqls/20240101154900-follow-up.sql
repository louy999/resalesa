/* Replace with your SQL commands */
CREATE TABLE follow(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    developer_id uuid references developer(id),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);