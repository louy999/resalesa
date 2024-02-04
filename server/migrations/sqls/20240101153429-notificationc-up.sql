/* Replace with your SQL commands */
CREATE TABLE notificationc(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id uuid references client(id),
    type VARCHAR(300) NOT NULL,
    show BOOLEAN NOT NULL
);