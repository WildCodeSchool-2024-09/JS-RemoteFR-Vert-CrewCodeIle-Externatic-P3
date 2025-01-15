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
  is_active BOOLEAN DEFAULT FALSE
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

INSERT INTO role (label)
VALUES
('Candidat'),
('Entreprise'),
('Administrateur');


INSERT INTO user (firstname, lastname, email, password, address, postal_code, city, tel, role_id, is_active)
VALUES
('Alice', 'Johnson', 'alice.johnson@example.com', 'password123', '123 Elm St', '12345', 'New York', '1234567890', 1, TRUE),
('Bob', 'Smith', 'bob.smith@example.com', 'password123', '456 Oak St', '23456', 'Los Angeles', '2345678901', 2, TRUE),
('Charlie', 'Brown', 'charlie.brown@example.com', 'password123', '789 Pine St', '34567', 'Chicago', '3456789012', 1, FALSE),
('Diana', 'Davis', 'diana.davis@example.com', 'password123', '321 Maple St', '45678', 'Houston', '4567890123', 2, TRUE),
('Edward', 'Wilson', 'edward.wilson@example.com', 'password123', '654 Cedar St', '56789', 'Phoenix', '5678901234', 3, TRUE),
('Fiona', 'Martinez', 'fiona.martinez@example.com', 'password123', '987 Elm St', '67890', 'Philadelphia', '6789012345', 1, FALSE),
('George', 'Anderson', 'george.anderson@example.com', 'password123', '147 Spruce St', '78901', 'San Antonio', '7890123456', 2, TRUE),
('Hannah', 'Taylor', 'hannah.taylor@example.com', 'password123', '258 Birch St', '89012', 'San Diego', '8901234567', 3, TRUE),
('Ian', 'Thomas', 'ian.thomas@example.com', 'password123', '369 Walnut St', '90123', 'Dallas', '9012345678', 1, FALSE),
('Julia', 'Moore', 'julia.moore@example.com', 'password123', '741 Chestnut St', '12345', 'San Jose', '1234567890', 2, TRUE);

INSERT INTO company (company_name, employee_number, user_id, website_link, description)
VALUES
('Tech Innovators Inc.', 250, 1, 'https://techinnovators.com', 'A leading company in tech innovations, providing cutting-edge solutions.'),
('Green Energy Solutions', 120, 2, 'https://greenenergy.com', 'Focused on renewable energy solutions to combat climate change.'),
('Health First Clinics', 50, 3, 'https://healthfirst.com', 'Network of healthcare clinics offering comprehensive medical services.'),
('EduSmart Learning', 80, 4, 'https://edusmartlearning.com', 'Educational platform providing online courses and training programs.'),
('Urban Developers Ltd.', 300, 5, 'https://urbandevelopers.com', 'Specializes in urban development and construction projects.'),
('Creative Minds Agency', 25, 6, 'https://creativeminds.com', 'A creative agency offering marketing, branding, and design services.'),
('FinTech Pioneers', 200, 7, 'https://fintechpioneers.com', 'Innovative solutions for the financial technology sector.'),
('Global Logistics Corp.', 500, 8, 'https://globallogistics.com', 'Provides global logistics and supply chain management services.'),
('NextGen Biotech', 150, 9, 'https://nextgenbiotech.com', 'Biotechnology company specializing in genetic research and development.'),
('Adventure Travels Co.', 40, 10, 'https://adventuretravels.com', 'Travel agency offering unique adventure travel experiences worldwide.');

INSERT INTO candidat (cv, photo, user_id, is_disabled)
VALUES
('cv_alice.pdf', 'alice_photo.jpg', 1, FALSE),
('cv_bob.pdf', 'bob_photo.jpg', 2, FALSE),
('cv_charlie.pdf', 'charlie_photo.jpg', 3, TRUE),
('cv_diana.pdf', 'diana_photo.jpg', 4, FALSE),
('cv_edward.pdf', 'edward_photo.jpg', 5, TRUE),
('cv_fiona.pdf', 'fiona_photo.jpg', 6, FALSE),
('cv_george.pdf', 'george_photo.jpg', 7, FALSE),
('cv_hannah.pdf', 'hannah_photo.jpg', 8, TRUE),
('cv_ian.pdf', 'ian_photo.jpg', 9, FALSE),
('cv_julia.pdf', 'julia_photo.jpg', 10, FALSE);

INSERT INTO offer (titre, wage, description, location, is_teleworking, contract_type, company_id, is_opened_to_disabled)
VALUES
('Développeur Full Stack', 50000, 'Développement d\'applications web et mobiles, gestion des bases de données, et intégration des services.', 'Paris', TRUE, 'CDI', 1, TRUE),
('Chef de projet digital', 55000, 'Gestion de projets web, coordination des équipes et suivi des clients.', 'Lyon', FALSE, 'CDI', 2, FALSE),
('Responsable SEO', 40000, 'Optimisation des sites pour les moteurs de recherche, analyse des performances et stratégie SEO.', 'Marseille', TRUE, 'CDI', 3, TRUE),
('Ingénieur Data', 60000, 'Collecte, traitement et analyse de données, création de modèles de machine learning.', 'Bordeaux', FALSE, 'CDI', 4, TRUE),
('Graphiste Web', 35000, 'Création de visuels pour sites web, campagnes publicitaires et supports de communication.', 'Toulouse', TRUE, 'CDD', 5, FALSE),
('Consultant IT', 45000, 'Accompagnement des entreprises dans leurs projets de transformation digitale et gestion des systèmes d\'information.', 'Nantes', FALSE, 'CDI', 6, TRUE),
('Développeur JavaScript', 48000, 'Développement d\'applications avec React.js et Node.js, gestion des API REST.', 'Nice', TRUE, 'CDI', 7, FALSE),
('Chargé de marketing digital', 38000, 'Gestion des campagnes marketing en ligne, analyse des performances et stratégie de contenu.', 'Lille', TRUE, 'CDD', 8, TRUE),
('Administrateur système', 55000, 'Gestion des infrastructures IT, mise en place de solutions de sauvegarde et sécurité des données.', 'Rennes', FALSE, 'CDI', 9, FALSE),
('Développeur PHP', 46000, 'Création et maintenance de sites web avec PHP et MySQL, gestion de la base de données.', 'Paris', TRUE, 'Alternance', 10, TRUE);
