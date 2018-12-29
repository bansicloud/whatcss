const config = {
  serverPort: 3000,
  screenshotsArchive: {
    active: true,
    numberToArchive: 6,
    width: 1280,
    height: 1024,
    deviceScaleFactor: 2,
  },
  minification: {
    level: 2,
  },
  browserBot: {
    waitUntil: 'domcontentloaded',
  },
};

module.exports = config;
