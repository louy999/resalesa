/* Replace with your SQL commands */
CREATE TABLE notificationd(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    type VARCHAR(200) NOT NULL,
    show BOOLEAN NOT NULL,
    developer_id uuid references developer(id)
);