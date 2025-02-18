ALTER TABLE "subscriptions" DROP CONSTRAINT "subscriptions_name_unique";--> statement-breakpoint
ALTER TABLE "subscriptions" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_email_unique" UNIQUE("email");