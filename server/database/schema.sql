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
  postal_code INT NOT NULL,
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
  employee_number INT,
  user_id INT NOT NULL,
  website_link VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE candidat (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cv VARCHAR(100),
  photo VARCHAR(100),
  user_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id),
  is_disabled BOOLEAN  NOT NULL
);

CREATE TABLE offer(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  titre VARCHAR(100) NOT NULL,
  wage INT,
  description TEXT NOT NULL,
  location VARCHAR(100) NOT NULL,
  is_teleworking BOOLEAN,
  contract_type VARCHAR(100) NOT NULL,
  company_id INT NOT NULL,
  FOREIGN KEY (company_id) REFERENCES company(id),
  is_opened_to_disabled BOOLEAN NOT NULL
);

CREATE TABLE favorite(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  offer_id INT NOT NULL,
  FOREIGN KEY (offer_id) REFERENCES offer(id),
  candidat_id INT NOT NULL,
  FOREIGN KEY (candidat_id) REFERENCES candidat(id)
);

CREATE TABLE candidature (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  statut VARCHAR(100),
  is_refused BOOLEAN,
  candidat_id  INT NOT NULL,
  FOREIGN KEY (candidat_id) REFERENCES candidat(id),
  offer_id  INT NOT NULL,
  FOREIGN KEY (offer_id) REFERENCES offer(id)
);

CREATE TABLE tag(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) 
);

CREATE TABLE offer_tag(
  offer_id INT NOT NULL,
  FOREIGN KEY (offer_id) REFERENCES offer(id),
  tag_id INT NOT NULL,
  FOREIGN KEY(tag_id) REFERENCES tag(id)
);

