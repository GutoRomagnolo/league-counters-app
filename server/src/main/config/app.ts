import setupRoutes from '@/main/config/routes'
import setupStaticFiles from '@/main/config/static-files'

import express, { Express } from 'express'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  setupStaticFiles(app)
  setupRoutes(app)
  return app
}