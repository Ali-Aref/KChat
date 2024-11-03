CREATE TABLE `todoTags` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(128) NOT NULL,
	CONSTRAINT `todoTags_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE `tags`;