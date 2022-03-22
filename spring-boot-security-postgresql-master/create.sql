create table roles (id  serial not null, name varchar(20), primary key (id));
create table tb_course (id  bigserial not null, description varchar(255), duration int4, image varchar(255), name varchar(255), primary key (id));
create table user_roles (user_id int8 not null, role_id int4 not null, primary key (user_id, role_id));
create table users (id  bigserial not null, email varchar(50), password varchar(120), username varchar(20), primary key (id));
alter table users add constraint UKr43af9ap4edm43mmtq01oddj6 unique (username);
alter table users add constraint UK6dotkott2kjsp8vw4d0m25fb7 unique (email);
alter table user_roles add constraint FKh8ciramu9cc9q3qcqiv4ue8a6 foreign key (role_id) references roles;
alter table user_roles add constraint FKhfh9dx7w3ubf1co1vdev94g3f foreign key (user_id) references users;
