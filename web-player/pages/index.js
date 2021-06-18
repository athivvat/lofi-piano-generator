import { Channel } from "../component";
import MidiPlayer from "midi-player-js";
import axios from "axios";

const loadMidi = async (url) => {
  const { data } = await axios.get(url, {
    responseType: "arraybuffer",
  });

  return data;
};

const HomePage = ({ midi }) => {
  const player = new MidiPlayer.Player((event) => {
    console.log(event)
  });
  
  const midi_arraybuffer = JSON.parse(midi) 
  player.loadArrayBuffer(midi_arraybuffer);

  const onPlay = () => {
    player.play();
  };

  const onPause = () => {
    player.pause();
  };

  return (
    <div>
      <button onClick={onPlay}>Play</button>
      <button onClick={onPause}>Pause</button>
      <br /><br />
      <Channel />
    </div>
  );
};

export async function getServerSideProps(context) {
  const midi = await loadMidi(
    `https://upload.wikimedia.org/wikipedia/commons/5/55/MIDI_sample.mid`
  );
  return {
    props: {
      midi: JSON.stringify(Array.from(midi))
    },
  };
}

export default HomePage;
