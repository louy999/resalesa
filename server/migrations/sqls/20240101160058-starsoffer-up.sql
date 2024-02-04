/* Replace with your SQL commands */
CREATE TABLE startsoffer(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    offer_id uuid references offer(id),
    user_id uuid references client(id)
);