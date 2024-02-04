/* Replace with your SQL commands */
CREATE TABLE liked(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    offer_id VARCHAR(200),
    user_id uuid references client(id)
);