import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { load, save } from './storage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

setCurrentTime();
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  save(STORAGE_KEY, seconds);
}

function setCurrentTime() {
  if (!load(STORAGE_KEY)) {
    return;
  }

  player.setCurrentTime(load(STORAGE_KEY));
}
