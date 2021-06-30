DROP DATABASE IF EXISTS fiverr; 

CREATE DATABASE fiverr;
USE fiverr;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,  
  `lastname` varchar(50) NOT NULL,  
  `skills` varchar(50) NOT NULL,
  PRIMARY KEY(`id`)
) ENGINE = InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET = utf8;

INSERT INTO 
 `user`
VALUES
  (1, 'Timothee', 'Augustin', 'react native dev'),
  (2, 'Bastian', 'LeBrun', 'film maker'),
  (3, 'Brian', 'Bertili', 'chef'),
  (4, 'Hughes', 'Briqueler', 'camera man'),
  (5, 'Bastian', 'LeBrun', 'node js Dev'),
  (6, 'Thomas', 'Dietrich', 'singer'),
  (7, 'Joly', 'Pascal', 'gamer'),
  (8, 'Majorie', 'Thomassin', 'dancer'),
  (9, 'Cedric', 'Guyot', 'drummer');


CREATE TABLE `team` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner_id` int NOT NULL,
  `teamname` varchar(50) NOT NULL,  
  PRIMARY KEY(`id`),
  CONSTRAINT FK_UserTeam FOREIGN KEY (owner_id)
    REFERENCES user(id)  
) ENGINE = InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET = utf8;

INSERT INTO 
 `team`
VALUES
  (1, 6, 'Bad Cat');

CREATE TABLE `position` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(155) NOT NULL,
    `user_id` int,
    `team_id` int NOT NULL,
    PRIMARY KEY(`id`),
  CONSTRAINT FK_UserPosition FOREIGN KEY (user_id)
    REFERENCES user(id),
    CONSTRAINT FK_TeamPosition FOREIGN KEY (team_id)
    REFERENCES team(id)   
) ENGINE = InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET = utf8;

INSERT INTO 
 `position`
VALUES
  (1, 'artistic director', 6, 1),
  (2, 'web developer', 1, 1),
  (3, 'video maker', 2, 1);

CREATE TABLE `project` (
    `id` int NOT NULL AUTO_INCREMENT,
    `team_id` int,
    `title` varchar(155) NOT NULL,
    PRIMARY KEY(`id`),
    CONSTRAINT FK_ProjetTeam FOREIGN KEY (team_id)
    REFERENCES team(id)   
) ENGINE = InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET = utf8;
