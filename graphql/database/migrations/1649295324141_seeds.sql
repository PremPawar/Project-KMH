INSERT INTO roles(title)
VALUES
('admin'),
('blogger');

INSERT INTO permissions(action)
VALUES
('post'),
('manage-users');

INSERT INTO roles_permissions (role_id, permission_id)
VALUES
(1, 1),
(1, 2),
(2, 1);

INSERT INTO users (role_id, email, first_name, last_name)
VALUES
(1, 'ppawar@gmail.com', 'Prem', 'Pawar');

INSERT INTO blog_categories (label, description)
VALUES
('Maval', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Dhanaji', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Sarsenapati', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('British', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Raghujiraje', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Deshmukh', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Tanaji', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Dabhade', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Mahratta', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('German Book', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Kondhana/Singhgad', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Santaji', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('ShivajiMaharaj', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Tirupati', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!'),
('Panipat', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!');




INSERT INTO blog_posts (author_id, title, description, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES 
(1, 'Maratha Contribution in Trupati Mandir', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'anyone_can_code.jpg', 1,'Programming', 'Everyone', 'raghujiraje-tirupati.jpg','Image'),
(1, 'Panipat War casualty Part 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'cloud_storage.jpeg', 1, 'Functional Programming', 'ES6', 'panipat-casualty-1.jpg','Image'),
(1, 'Panipat War casualty Part 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'programming_languages.jpeg', 1, 'Functional Programming', 'ES6', 'panipat-casualty-2.jpg','Image'),
(1, 'German book on mahrattas and shivaji maharaj', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'neuron.jpg', 1, 'Functional Programming', 'ES6', 'shivajimaharaj.jpg','Image'),
(1, 'British scholar villam vincent on Mahrattas', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'mahratta_cavalry.jpg', 1, 'Functional Programming', 'ES6', 'mahratta_cavalry.jpg','Image'),
(1, 'Bara-Maval Deshmukh Mahrattas', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'bara-maval.jpg', 1, 'Functional Programming', 'ES6', 'bara-maval.jpg','Image'),
(1, 'Narvir Subhedar Tanaji Malusare', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'tanaji-malusare.jpg', 1, 'Functional Programming', 'ES6', 'tanaji-malusare.jpg','Image'),
(1, 'Santajirao Ghorpade - Dhanajirao Jadhavrao', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'santajirao-dhanajirao.jpg', 1, 'Functional Programming', 'ES6', 'santajirao-dhanajirao.jpg','Image'),
(1, 'British Report on Shivaji maharaj', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '', 'Shivray2.jpg', 1, 'Functional Programming', 'ES6', 'Shivray2.jpg','Image');

INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(1, 1, 'Amazing Information'),
(1, 1, 'Great Article');

INSERT INTO blog_post_categories (post_id, category_id)
VALUES 
(1, 5),
(1, 14),
(2, 9),
(2, 15),
(3, 9),
(3, 15),
(4, 10),
(5, 13),
(6, 9),
(6, 4),
(7, 1),
(7, 6),
(8, 7),
(8, 11),
(9, 12),
(9, 2);
