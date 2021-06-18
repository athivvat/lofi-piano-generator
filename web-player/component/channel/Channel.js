import { Howl } from "howler";

const normalizeUrl = (url) => url.match(/^https?:\/\//) ? url : `./${url}`

const Channel = () => {
  const player = new Howl({
      src: normalizeUrl('#fx/rain.wav')
  });
  player.play()
  return <>Channel</>;
};

export default Channel;
