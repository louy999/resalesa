/* Replace with your SQL commands */
CREATE TABLE dealdev(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    developer_id uuid references developer(id),
    user_id uuid references client(id),
    offer_id uuid references offer(id)
);