import { Stats } from "fs";

const fs = require("fs");
const path = require("path");

export class DirectoryCleanerHelper {
  private unecessaryFilesTitles: string[] = [
    'challenges.json',
    'map.json',
    'mission-assets.json',
    'sticker.json'
  ]

  constructor(private rootFolderPath: string) {}

  public startDirectoryCleaning(): void {
    this.readFolderContent(this.rootFolderPath)
  }

  private readFolderContent(folderPath: string): void {
    fs.readdir(folderPath, (err: Error, contents: string[]) => {
      if (err) {
        console.error("Error while read folder:", err);
        return;
      }

      contents.forEach(content => {
        const contentPath = path.join(folderPath, content);
        fs.stat(contentPath, (err: Error, stats: Stats) => {
          if (stats.isDirectory() && !contentPath.endsWith('champion')) {
            this.readFolderContent(contentPath);
          }

          if (stats.isFile()) {
            this.removeUnecessaryContent(contentPath);
          }
        });
      });
    });
  }

  private removeUnecessaryContent(contentPath: string): void {
    const isUnecessaryTftFile = contentPath.includes('tft');
    const isUnecessaryDefaultFile = this.unecessaryFilesTitles.find(title => contentPath.endsWith(title))

    if (isUnecessaryDefaultFile || isUnecessaryTftFile) {
      console.log(`File ${contentPath} has been removed`)
      fs.unlinkSync(contentPath);
    }
  }
}