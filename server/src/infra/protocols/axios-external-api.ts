import axios from 'axios';
import { ExternalAPI } from '@/infra/protocols';

export class AxiosExternalAPI implements ExternalAPI {
  public async fetchUrl(url: string): Promise<string> {
    const response = await axios.get(url);
    return response.data;
  }
}

export default AxiosExternalAPI;
