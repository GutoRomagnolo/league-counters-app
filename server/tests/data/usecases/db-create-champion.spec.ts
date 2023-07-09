import { DbCreateChampion } from '@/data/usecases'
import { mockCreateChampionParams, throwError } from '@/tests/domain/mocks'
import { CreateChampionRepositorySpy } from '@/tests/data/mocks'

type SutTypes = {
  sut: DbCreateChampion
  createChampionRepositorySpy: CreateChampionRepositorySpy
}

const makeSut = (): SutTypes => {
  const createChampionRepositorySpy = new CreateChampionRepositorySpy()
  const sut = new DbCreateChampion(createChampionRepositorySpy)
  return {
    sut,
    createChampionRepositorySpy,
  }
}

describe('DbCreateChampion usecase', () => {
  test('Should call CreateChampionRepository with correct values', async () => {
    const { sut, createChampionRepositorySpy } = makeSut()
    const createChampionParams = mockCreateChampionParams()
    await sut.create(createChampionParams)
    expect(createChampionRepositorySpy.params).toEqual({
      name: createChampionParams.name,
      image: createChampionParams.image,
      title: createChampionParams.name,
      sound: createChampionParams.image
    })
  })
})
