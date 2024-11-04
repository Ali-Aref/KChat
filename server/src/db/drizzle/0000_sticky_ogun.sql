CREATE TABLE `todos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(128) NOT NULL,
	`description` text,
	`status` enum('NOT_STARTED','IN_PROGRESS','WAITING','DONE','CANCELLED') NOT NULL DEFAULT 'NOT_STARTED',
	`priority` enum('LOW','MEDIUM','HIGH','URGENT') NOT NULL DEFAULT 'LOW',
	`projectId` int NOT NULL DEFAULT 1,
	`createdDate` timestamp DEFAULT (now()),
	`updatedDate` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `todos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `todoProjects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(128) NOT NULL,
	`color` varchar(32),
	CONSTRAINT `todoProjects_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `todoTags` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(128) NOT NULL,
	CONSTRAINT `todoTags_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`username` varchar(32),
	`email` varchar(128),
	`firstName` varchar(128),
	`lastName` varchar(128),
	`password` varchar(255),
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `todos` ADD CONSTRAINT `todos_projectId_todoProjects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `todoProjects`(`id`) ON DELETE cascade ON UPDATE no action;