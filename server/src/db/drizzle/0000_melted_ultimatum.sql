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
ALTER TABLE `todos` ADD CONSTRAINT `todos_projectId_todoProjects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `todoProjects`(`id`) ON DELETE no action ON UPDATE no action;