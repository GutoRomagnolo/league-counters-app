import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok } from '@/presentation/helpers'
import { CreateChampion } from '@/domain/usecases'

export class CreateChampionController implements Controller {
  constructor (
    private readonly createChampion: CreateChampion
  ) {}

  async handle (request: CreateChampionController.Request): Promise<HttpResponse> {
    try {
      const { name, image, title, sound } = request
      const championCreated = await this.createChampion.create({
        name: name,
        image: image,
        title: title,
        sound: sound
      })
      return ok(championCreated)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace CreateChampionController {
  export type Request = {
    name: string
    image: string
    title: string
    sound: string
  }
}
