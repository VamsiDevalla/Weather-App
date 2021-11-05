import { Application, Router } from 'express'
import { StaticController } from './static/static.controller'
import { WeatherController } from './weather/weather.controller'

const _routes: [string, Router][] = [
  ['/', StaticController],
  ['/weather', WeatherController]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route
    app.use(url, controller)
  })
}
