/* Replace with your SQL commands */
CREATE TABLE calls(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    phone VARCHAR(200) NOT NULL,
    client_id uuid references client(id)
);