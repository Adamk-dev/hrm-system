insert into lucidhrm.roles  values(1, 'employee', now(), now());
insert into lucidhrm.roles  values(2, 'admin', now(), now());

insert into lucidhrm.task_statuses  values(1, 'pending', now(), now());
insert into lucidhrm.task_statuses  values(2, 'todo', now(), now());
insert into lucidhrm.task_statuses  values(3, 'doing', now(), now());
insert into lucidhrm.task_statuses  values(4, 'done', now(), now());

insert into lucidhrm.task_categories  values(1, 'feature',1, now(), now());
insert into lucidhrm.task_categories  values(2, 'bug', 1, now(), now());

insert into lucidhrm.task_priorities  values(1, 'low', now(), now());
insert into lucidhrm.task_priorities  values(2, 'normal', now(), now());
insert into lucidhrm.task_priorities  values(3, 'high', now(), now());
insert into lucidhrm.task_priorities  values(4, 'urgent', now(), now());

insert into lucidhrm.task_priorities  values(1, 'project A', "project A Description", now(), now());

insert into lucidhrm.clients  values(1, 'client A', "clienta@gmail.com", now(), now(), 1);

insert into lucidhrm.projects  values(1, 'project A', "project A Description", now(), now(), 1);