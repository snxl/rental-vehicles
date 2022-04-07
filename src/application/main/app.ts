import '../../shared/config/moduleAlias'

import express, { Application } from 'express'
import { serve, setup } from 'swagger-ui-express'
import cors from 'cors'

import httpContext from 'express-http-context'
import 'express-async-errors'

import swaggerConfig from '@src/application/docs'
import Routes from '@src/application/routes'

import noCache from '@src/application/middlewares/noCache'
import onErrors from '../middlewares/onErrors'
import responseTime from '../middlewares/responseTime'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

class App {
  private readonly server: Application

  constructor () {
    this.server = express()
    this.loadBeforeMiddlewares()
    this.loadRoutes()
    this.loadAfterMiddlewares()
  }

  private loadBeforeMiddlewares (): void {
    this.server.use(cors({
      origin: '*',
      credentials: true
    }))

    this.server.get('/admin/favicon.ico', (req, res) => res.status(204))
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: true }))
    this.server.use(httpContext.middleware)

    if (process.env.NODE_ENV !== 'production') {
      this.server.use('/rental-vehicles/api-docs', noCache, serve, setup(swaggerConfig))
    }

    this.server.use(responseTime)
  }

  private loadAfterMiddlewares (): void {
    this.server.use(onErrors)
  }

  private loadRoutes (): void {
    new Routes().load(this.server)
  }

  public getServer (): Application {
    return this.server
  }
}

export default new App().getServer()
