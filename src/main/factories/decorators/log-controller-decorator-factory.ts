import { Controller } from '@/presentation/protocols'
import { LogControllerDecorator } from '@/main/decorators'
import { LogMongoRepository } from '@/infra/db'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
