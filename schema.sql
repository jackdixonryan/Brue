CREATE DATABASE brue_db

USE brue_db

CREATE TABLE briessGrains (
    id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    lovibond DECIMAL(4, 3),
    lintner INTEGER(3),
    flavor VARCHAR(100),
    info TEXT,
    PRIMARY KEY(id)
);



