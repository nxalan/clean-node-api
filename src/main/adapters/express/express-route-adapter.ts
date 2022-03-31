import { Controller, HttpRequest } from '../../../presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)

    let responseBody
    if (httpResponse.body instanceof Error) {
      responseBody = httpResponse.body.message
    } else {
      responseBody = httpResponse.body
    }

    res.status(httpResponse.statusCode).json(responseBody)
  }
}
