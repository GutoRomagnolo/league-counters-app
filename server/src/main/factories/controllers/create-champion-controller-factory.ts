import { makeDbCreateChampion } from '@/main/factories'
import { CreateChampionController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeCreateChampionController = (): Controller => {
  return new CreateChampionController(makeDbCreateChampion())
}
