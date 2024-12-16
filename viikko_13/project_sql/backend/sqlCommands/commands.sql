CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    author text,
    url text NOT NULL,
    title text NOT NULL,
    likes integer DEFAULT 0
);

insert into blogs (author, url, title) values ('author', 'www.lru.com', 'title');

insert into blogs (author, url, title, likes) values ('author2', 'www.url.com', 'title2', 55);
