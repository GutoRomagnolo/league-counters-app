import { PrismaHelper } from '@/infra/database'
import { CreateChampionRepository } from '@/data/protocols/database'

export class ChampionPrismaRepository implements CreateChampionRepository {
  async create(championData: CreateChampionRepository.Params): Promise<CreateChampionRepository.Result> {
    console.log("data", championData)
    const championResponse = await PrismaHelper.client.champion.create({ data: championData })
    return championResponse !== null
  }
}
