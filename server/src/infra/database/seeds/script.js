const fs = require("fs");
const path = require("path");

const startDirectoryCleaning = () => {
  console.log("Script starting...")
  const rootFolderPath = "./populate-champion/data";
  readFolderContent(rootFolderPath)
}

const readFolderContent = folderPath => {
  fs.readdir(folderPath, (err, contents) => {
    if (err) {
      console.error("Error while read folder:", err);
      return;
    }

    contents.forEach(content => {
      const contentPath = path.join(folderPath, content);
      fs.stat(contentPath, (err, stats) => {
        if (stats.isDirectory() && !contentPath.endsWith('champion')) {
          readFolderContent(contentPath);
        }

        if (stats.isFile()) {
          removeUnecessaryContent(contentPath);
        }
      });
    });
  });
}

const removeUnecessaryContent = contentPath => {
  const unecessaryFilesTitles = [
    'challenges.json',
    'map.json',
    'mission-assets.json',
    'sticker.json'
  ]
  const isUnecessaryTftFile = contentPath.includes('tft');
  const isUnecessaryDefaultFile = unecessaryFilesTitles.find(title => contentPath.endsWith(title))

  if (isUnecessaryDefaultFile || isUnecessaryTftFile) {
    console.log(`File ${contentPath} has been removed`)
    fs.unlinkSync(contentPath);
  }
}

startDirectoryCleaning();