import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Fragile", duration: "3:45" },
    { title: "I like me better", duration: "2:45" },
    { title: "I like you", duration: "3:21" },
    { title: "I love you", duration: "4:12" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
