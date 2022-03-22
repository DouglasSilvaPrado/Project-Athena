create table roles (id  serial not null, name varchar(20), primary key (id));
create table tb_course (id  bigserial not null, description varchar(255), duration int4, image varchar(255), name varchar(255), primary key (id));
create table user_roles (user_id int8 not null, role_id int4 not null, primary key (user_id, role_id));
create table users (id  bigserial not null, email varchar(50), password varchar(120), username varchar(20), primary key (id));
alter table users add constraint UKr43af9ap4edm43mmtq01oddj6 unique (username);
alter table users add constraint UK6dotkott2kjsp8vw4d0m25fb7 unique (email);
alter table user_roles add constraint FKh8ciramu9cc9q3qcqiv4ue8a6 foreign key (role_id) references roles;
alter table user_roles add constraint FKhfh9dx7w3ubf1co1vdev94g3f foreign key (user_id) references users;

INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

INSERT INTO tb_course (name,description,duration,image)
    VALUES ('Introdução a lógica de programação', 'Ela é necessária para você que deseja trabalhar com desenvolvimento de sistemas e programas, pois ela permite que você defina sequências lógicas para o desenvolvimento.', 4, 'https://raw.githubusercontent.com/DouglasSilvaPrado/ProjetoAthena/main/Squad55/logica.svg');

INSERT INTO tb_course (name,description,duration,image)
    VALUES ('Social Media', 'Por ser uma profissão nova no mercado, e por mais que esteja em evidência, muitas pessoas ainda não sabem qual o trabalho de um social media, ou possuem ideias equivocadas sobre o assunto.', 6, 'https://raw.githubusercontent.com/DouglasSilvaPrado/ProjetoAthena/a1152507e9c1b610b30b5bcf763139ff5cb8c1bb/Squad55/social.svg');

INSERT INTO tb_course (name,description,duration,image)
    VALUES ('Introdução a games', 'Aprenda os fundamentos dos games e conheça dicas, ferramentas e termos técnicos da criação de games.', 5, 'https://raw.githubusercontent.com/DouglasSilvaPrado/ProjetoAthena/a1152507e9c1b610b30b5bcf763139ff5cb8c1bb/Squad55/games.svg');

INSERT INTO tb_course (name,description,duration,image)
    VALUES ('Introdução a Git e Github', 'O GIT é um Sistema de Controle de Versões Distribuído, O GitHub, é uma espécie de rede social voltada a profissionais de TI cuja tecnologia que o sustenta é o GIT.', 2, 'https://i.ibb.co/k16W3Dt/18.png');

INSERT INTO tb_course (name,description,duration,image)
    VALUES ('Curso Marketing Digital', 'Nada mais é do que as estratégias de marketing pensadas exclusivamente para a internet e os dispositivos móveis com o objetivo de atrair mais consumidores ao negócio e as campanhas comerciais.', 4, 'https://i.ibb.co/xH9JT0f/15.png');

INSERT INTO tb_course (name,description,duration,image)
    VALUES ('Pixel Art', 'Aprenda os fundamentos da pixel art e conheça dicas, ferramentas e termos técnicos da criação de arts 2d pixeladas.', 5, 'https://i.ibb.co/X3JrzgV/19.png');







