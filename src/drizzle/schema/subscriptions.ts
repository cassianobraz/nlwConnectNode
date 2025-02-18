import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const subcriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('name').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})