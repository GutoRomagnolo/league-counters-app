import { CounterModel } from '@/domain/models'

export type ChampionModel = {
  id: string;
  name: string;
  image: string;
  title: string;
  sound: string;
  counters: CounterModel[];
}
