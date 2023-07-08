import { ChampionModel } from '@/domain/models'

export type CounterModel = {
  id: string;
  matchupDescription: string;
  counteredChampion: ChampionModel;
  counterChampion: ChampionModel;
}
