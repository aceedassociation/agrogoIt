CREATE TABLE `inquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`full_name` text NOT NULL,
	`company` text NOT NULL,
	`job_title` text DEFAULT '' NOT NULL,
	`email` text NOT NULL,
	`phone` text DEFAULT '' NOT NULL,
	`country` text NOT NULL,
	`project_type` text NOT NULL,
	`challenge` text NOT NULL,
	`existing_tools` text DEFAULT '' NOT NULL,
	`timeline` text DEFAULT '' NOT NULL,
	`budget` text DEFAULT 'To be discussed' NOT NULL,
	`additional_info` text DEFAULT '' NOT NULL,
	`privacy_consent` integer DEFAULT true NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
