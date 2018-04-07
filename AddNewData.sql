create table Game(
	brief_text varchar(255) not null,
	topic_source varchar(50) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into Game(brief_text, topic_source)
values(
	"this is new product", "Game Life"
);

