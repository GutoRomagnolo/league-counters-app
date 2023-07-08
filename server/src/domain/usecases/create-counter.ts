import { ChampionModel } from '@/domain/models'

export interface CreateCounter {
  create: (counter: CreateCounter.Params) => Promise<CreateCounter.Result>
}

export namespace CreateCounter {
  export type Params = {
    matchupDescription: string;
    counteredChampion: ChampionModel;
    counterChampion: ChampionModel;
  }

  export type Result = boolean
}