CREATE DATABASE aliens;
CREATE TABLE IF NOT EXISTS human (
    id serial PRIMARY KEY,
    name varchar NOT NULL,
    status int NOT NULL
);
-- TODO: Fill the table here;

SELECT *
FROM Human;
-- TODO: Fill the table here;
INSERT INTO human (name, status)
VALUES
    ('Bobba Fett', 1);

CREATE TABLE IF NOT EXISTS alien (
    id serial PRIMARY KEY,
    name varchar NOT NULL,
    status int NOT NULL
);
-- TODO: Fill the table here;
INSERT INTO alien (name, status)
VALUES
    ('Chewbacca', 0);

SELECT *
FROM alien;

CREATE TABLE IF NOT EXISTS spaceship (
    id serial PRIMARY KEY,
    title varchar NOT NULL
);
-- TODO: FIll the table here;
INSERT INTO spaceship (title)
VALUES
    ('Millenium Falcon');

SELECT *
FROM spaceship;

CREATE TABLE IF NOT EXISTS abduction (
    id serial PRIMARY KEY,
    humanId int NOT NULL REFERENCES human (id) ON DELETE RESTRICT,
    shipId int NOT NULL REFERENCES spaceship (id) ON DELETE RESTRICT,
    alienId int NOT NULL REFERENCES alien (id) ON DELETE RESTRICT,
    date date NOT NULL DEFAULT current_date
);
-- TODO: FIll the table here;
INSERT INTO abduction (humanId, shipId, alienId)
VALUES 
    (1,1,1);

SELECT *
FROM abduction;

CREATE TABLE IF NOT EXISTS transportation (
    id serial PRIMARY KEY,
    alienId int NOT NULL REFERENCES alien (id) ON DELETE RESTRICT,
    fromShipId int NOT NULL REFERENCES spaceship (id) ON DELETE RESTRICT,
    toShipId int NOT NULL REFERENCES spaceship (id) ON DELETE RESTRICT,
    humanId int NOT NULL REFERENCES human (id) ON DELETE RESTRICT,
    date date NOT NULL DEFAULT current_date
);
-- TODO: FIll the table here;
SELECT *
FROM transportation;

CREATE TABLE IF NOT EXISTS redemption (
    id serial PRIMARY KEY,
    shipId int NOT NULL REFERENCES spaceship (id),
    humanId int NOT NULL REFERENCES human (id),
    date date NOT NULL DEFAULT current_date
);
-- TODO: FIll the table here;
SELECT *
FROM redemption;

CREATE TABLE IF NOT EXISTS murder (
    id serial PRIMARY KEY,
    alienId int NOT NULL REFERENCES alien (id) ON DELETE RESTRICT,
    humanId int NOT NULL REFERENCES human (id) ON DELETE RESTRICT,
    date date NOT NULL DEFAULT current_date
);
-- TODO: FIll the table here;
SELECT *
FROM murder;

CREATE TABLE IF NOT EXISTS experiment (
    id serial PRIMARY KEY,
    shipId int NOT NULL REFERENCES spaceship (id),
    humanId int NOT NULL REFERENCES human (id),
    date date NOT NULL DEFAULT current_date
);

-- TODO: FIll the table here;
SELECT *
FROM experiment;

CREATE TABLE IF NOT EXISTS experiment_alien (
    experimentId int NOT NULL REFERENCES experiment (id) ON DELETE RESTRICT,
    alienId int NOT NULL REFERENCES alien (id) ON DELETE RESTRICT
);

-- TODO: FIll the table here;
SELECT *
FROM experiment;

CREATE TABLE IF NOT EXISTS excursion (
    id serial PRIMARY KEY,
    alienId int NOT NULL REFERENCES alien (id) ON DELETE RESTRICT,
    shipId int NOT NULL REFERENCES spaceship (id) ON DELETE RESTRICT,
    date date NOT NULL DEFAULT current_date
);

DROP TABLE excursion;
-- TODO: FIll the table here;
SELECT *
FROM excursion;

CREATE TABLE IF NOT EXISTS excursion_human (
    excursionId int NOT NULL REFERENCES excursion (id) ON DELETE RESTRICT,
    humanId int NOT NULL REFERENCES human (id) ON DELETE RESTRICT
);

-- TODO: FIll the table here;
SELECT *
FROM excursion_human;

-- TODO: add id column (???)
CREATE VIEW conviction_log AS (
    SELECT 
        EH.humanId,
        E.shipId,
        E.date,
        0 as source
    FROM excursion E
        JOIN excursion_human EH ON E.id = EH.excursionId
)
UNION ALL
(
    SELECT 
        A.humanId,
        A.shipId,
        A.date,
        1 as source
    FROM abduction A
)
UNION ALL
(
    SELECT 
        T.humanId,
        T.toShipId,
        T.date,
        2 as source
    FROM transportation T
);

