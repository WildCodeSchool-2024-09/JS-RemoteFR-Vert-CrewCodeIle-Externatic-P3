-- SQLBook: Code
CREATE TABLE role (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  label VARCHAR(100) NOT NULL
);

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  address VARCHAR(100) NOT NULL,
  postal_code VARCHAR(5) NOT NULL,
  city VARCHAR(100) NOT NULL,
  tel VARCHAR(15) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  is_active BOOLEAN DEFAULT FALSE,
  is_role BOOLEAN NOT NULL
);

CREATE TABLE company (
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  company_name VARCHAR(100) NOT NULL,
  sector VARCHAR(100) NOT NULL,
  employee_number INT,
  user_id INT NOT NULL,
  website_link VARCHAR(100),
  description TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

insert into user(id, email, password)
values
  (1, "jdoe@mail.com", "123456");

insert into item(id, title, user_id)
values
  (1, "Stuff", 1),
  (2, "Doodads", 1);
