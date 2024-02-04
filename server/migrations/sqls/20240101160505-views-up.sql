/* Replace with your SQL commands */
CREATE TABLE views(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    offer_id uuid references offer(id),
    client_id VARCHAR(200)
);