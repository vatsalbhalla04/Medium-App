import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import type { Context } from 'hono'

export function createPrismaClient(c: Context) {
  const databaseUrl = c.env.DATABASE_URL
  if (!databaseUrl) {
    throw new Error('DATABASE_URL not set in environment')
  }

  return new PrismaClient({
    datasourceUrl: databaseUrl,
  }).$extends(withAccelerate())
}
