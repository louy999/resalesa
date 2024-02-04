/* Replace with your SQL commands */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE client(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(500) UNIQUE NOT NULL,
    phone text [] UNIQUE NOT NULL,
    interested TEXT [],
    password VARCHAR(500) NOT NULL
);