const PARENT = '👀';
const log = (first, ...args) => {
  // eslint-disable-next-line no-console
  console.log(`${PARENT} ${first}`, ...args);
};

export default () => {
  window.addEventListener('beforeinstallprompt', () => {
    log('we can install the app now');
  //  events.emit('can-install', { prompt: ev });
  });

  window.addEventListener('appinstalled', () => {
  //  events.emit('info', '🎊 installed 🎊');
  });
};