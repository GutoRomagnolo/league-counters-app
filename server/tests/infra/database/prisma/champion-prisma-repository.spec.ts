import { ChampionPrismaRepository, PrismaHelper } from '@/infra/database'
import { mockCreateChampionParams } from '@/tests/domain/mocks'
import env from '@/main/config/env'

import faker from 'faker'

const makeSut = (): ChampionPrismaRepository => {
  return new ChampionPrismaRepository()
}

describe('ChampionPrismaRepository', () => {
  beforeAll(async () => {
    await PrismaHelper.connect()
  })

  beforeEach(async () => {
    const championTable = PrismaHelper.client.champion.findMany()
    console.log("Champion table", championTable)
  })

  describe('create()', () => {
    test('Should return an account on success', async () => {
      const sut = makeSut()
      const createChampionParams = mockCreateChampionParams()
      const isValid = await sut.create(createChampionParams)
      expect(isValid).toBe(true)
    })
  })
})
