import { CreateChampionRepository } from '@/data/protocols'

import faker from 'faker'

export class CreateChampionRepositorySpy implements CreateChampionRepository {
  params: CreateChampionRepository.Params
  result = true

  async create (params: CreateChampionRepository.Params): Promise<CreateChampionRepository.Result> {
    this.params = params
    return this.result
  }
}
