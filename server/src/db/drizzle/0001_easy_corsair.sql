ALTER TABLE `user` MODIFY COLUMN `username` varchar(32) NOT NULL;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `firstName` varchar(128) NOT NULL;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `lastName` varchar(128) NOT NULL;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `password` varchar(255) NOT NULL;