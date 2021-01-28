const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying, songs, currentSong, setSongs}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) audioRef.current.play();
    // Add active state
    const newSongs = songs.map((s) => {
      if (s.id === currentSong.id) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });
    setSongs(newSongs);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
