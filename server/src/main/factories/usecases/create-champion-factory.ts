import { DbCreateChampion } from '@/data/usecases'
import { CreateChampion } from '@/domain/usecases'
import { ChampionPrismaRepository } from '@/infra/database'

export const makeDbCreateChampion = (): CreateChampion => {
  const championPrismaRepository = new ChampionPrismaRepository()
  return new DbCreateChampion(championPrismaRepository)
}
