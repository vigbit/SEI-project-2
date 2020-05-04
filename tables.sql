CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS profiles (
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INTEGER,
    sex TEXT,
    bloodType TEXT,
    image TEXT

);

CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    doctor TEXT,
    clinic TEXT,
    date INTEGER,
    time INTEGER
);

CREATE TABLE IF NOT EXISTS doctors (
    id SERIAL PRIMARY KEY,
    profile_id INTEGER,
    prescription_id INTEGER,
    name TEXT,
    hospitalName TEXT
);

CREATE TABLE IF NOT EXISTS prescriptions (
    id SERIAL PRIMARY KEY,
    profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
    doctor_id INTEGER,
    drug_id INTEGER
);

CREATE TABLE IF NOT EXISTS drugs (
    id SERIAL PRIMARY KEY,
    prescription_id INTEGER,
    name TEXT,
    image TEXT,
    expiry INTEGER
);