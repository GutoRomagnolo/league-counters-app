import { CreateChampion } from '@/domain/usecases'
import { CreateChampionRepository } from '@/data/protocols'

export class DbCreateChampion implements CreateChampion {
  constructor (
    private readonly createChampionRepository: CreateChampionRepository,
  ) {}

  async create(championData: CreateChampion.Params): Promise<CreateChampion.Result> {
    return await this.createChampionRepository.create(championData)
  }
}
