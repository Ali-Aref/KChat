ALTER TABLE `todos` DROP FOREIGN KEY `todos_projectId_todoProjects_id_fk`;
--> statement-breakpoint
ALTER TABLE `todos` ADD CONSTRAINT `todos_projectId_todoProjects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `todoProjects`(`id`) ON DELETE cascade ON UPDATE no action;