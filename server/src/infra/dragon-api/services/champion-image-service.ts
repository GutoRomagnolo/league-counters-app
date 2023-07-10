import { ExternalAPI } from '@/infra/protocols';
import env from '@/main/config/env';

export class ChampionImageService {
  constructor(private externalAPI: ExternalAPI) {}

  public async buildChampionImageUrl(
      skinKey: string,
      championKey: string
    ): Promise<string> {
    try {
      const pathToImage = `latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${championKey}/${skinKey}.jpg`
      const fullChampionImageUrl = `${env.dragonApiBaseUrl}/${pathToImage}`;

      await this.externalAPI.fetchUrl(fullChampionImageUrl);
      return fullChampionImageUrl;
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}