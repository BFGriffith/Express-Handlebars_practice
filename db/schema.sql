CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int AUTO_INCREMENT NOT NULL,
burgerName varchar(150) NOT NULL,
devoured boolean not null,
date TIMESTAMP,
PRIMARY KEY (id)
);
