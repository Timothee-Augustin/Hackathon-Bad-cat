DROP DATABASE IF EXISTS fiverr; 

CREATE DATABASE fiverr;
USE fiverr;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,  
  `lastname` varchar(50) NOT NULL,  
  PRIMARY KEY(`id`)
) ENGINE = InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET = utf8;

INSERT INTO 
 `user`
VALUES
  (1, 'Timothee', 'Augustin'),
  (2, 'Bastian', 'LeBrun'),
  (3, 'Thomas', 'Dietrich');

  CREATE TABLE `team` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner_id` int NOT NULL,
  `name` varchar(50) NOT NULL,  
  PRIMARY KEY(`id`),
  CONSTRAINT FK_UserTeam FOREIGN KEY (owner_id)
    REFERENCES user(id)  
) ENGINE = InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET = utf8;


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

CREATE TABLE `project` (
    `id` int NOT NULL AUTO_INCREMENT,
    `team_id` int,
    `title` varchar(155) NOT NULL,
    PRIMARY KEY(`id`),
    CONSTRAINT FK_ProjetTeam FOREIGN KEY (team_id)
    REFERENCES team(id)   
) ENGINE = InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET = utf8;
