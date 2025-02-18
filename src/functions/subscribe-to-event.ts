import { db } from '../drizzle/client'
import { subcriptions } from '../drizzle/schema/subscriptions'

interface SubscribeToEventParams {
  name: string
  email: string
}

export async function subscribeToEvent({
  name,
  email,
}: SubscribeToEventParams) {
  const result = await db.insert(subcriptions).values({
    name,
    email,
  }).returning()

  const subscriber = result[0]

  return {
    subscriberId: subscriber.id
  }
}
