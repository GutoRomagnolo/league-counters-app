export interface CreateChampion {
  create: (champion: CreateChampion.Params) => Promise<CreateChampion.Result>
}

export namespace CreateChampion {
  export type Params = {
    name: string;
    image: string;
    title: string;
    sound: string;
  }

  export type Result = boolean
}