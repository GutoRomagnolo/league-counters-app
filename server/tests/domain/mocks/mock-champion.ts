import { CreateChampion } from '@/domain/usecases'

import faker from 'faker'

export const mockCreateChampionParams = (): CreateChampion.Params => ({
  name: faker.name.findName(),
  image: faker.image.image(),
  title: faker.name.title(),
  sound: faker.image.image()
})