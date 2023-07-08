import { CreateChampion } from '@/domain/usecases'

export interface CreateChampionRepository {
  create: (data: CreateChampionRepository.Params) => Promise<CreateChampionRepository.Result>
}

export namespace CreateChampionRepository {
  export type Params = CreateChampion.Params
  export type Result = boolean
}
