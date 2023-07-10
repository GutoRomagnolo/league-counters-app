export interface ExternalAPI {
  fetchUrl(url: string): Promise<string>;
}