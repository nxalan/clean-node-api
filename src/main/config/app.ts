import express, { Express } from 'express'
import setupMiddlewares from '@/main/config/middlewares'
import setupRoutes from '@/main/config/routes'
import setupStaticFiles from '@/main/config/static-files'
import setupSwagger from '@/main/config/swagger'
import * as dotenv from 'dotenv'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  dotenv.config()
  setupStaticFiles(app)
  setupSwagger(app)
  setupMiddlewares(app)
  setupRoutes(app)
  return app
}
