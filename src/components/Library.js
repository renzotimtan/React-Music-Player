import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  libraryStatus,
  audioRef,
  isPlaying,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            songs={songs}
            currentSong={currentSong}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
