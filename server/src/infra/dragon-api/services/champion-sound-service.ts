import { ExternalAPI } from '@/infra/protocols';
import env from '@/main/config/env';

export class ChampionSoundService {
  constructor(private externalAPI: ExternalAPI) {}

  public async buildChampionAudioUrl(
      patchVersion: string,
      championKey: string,
      language: string
    ): Promise<string> {
    try {
      const pathToSound = `${patchVersion}/plugins/rcp-be-lol-game-data/global/${language}/v1/champion-choose-vo/${championKey}.ogg`
      const fullChampionAudioUrl = `${env.dragonApiBaseUrl}/${pathToSound}`;

      await this.externalAPI.fetchUrl(fullChampionAudioUrl);
      return fullChampionAudioUrl;
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}