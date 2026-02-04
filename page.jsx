import { useState } from "react";

export default function LisBeeMusicWebsite() {
  const [activePass, setActivePass] = useState(false);
  const [ownedSongs, setOwnedSongs] = useState([]);

  const songs = [
    { id: 1, title: "Midnight Vibes", duration: "3:12" },
    { id: 2, title: "Ocean Drive", duration: "2:58" },
    { id: 3, title: "No Limits", duration: "3:45" },
  ];

  const handleDailyPassPayment = () => {
    alert("Daily pass activated (connect Stripe or Crypto later)");
    setActivePass(true);
  };

  const handleBuySong = (song) => {
    alert(`You bought ${song.title}`);
    setOwnedSongs((prev) => [...prev, song.id]);
  };

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: 20 }}>
      <h1>Lis Be£ Music</h1>
      <p>lisbeemusic.io — Exclusive Access Platform</p>

      <hr />

      <h2>Daily Listening Pass - $0.50</h2>
      <button onClick={handleDailyPassPayment}>Activate Pass</button>

      <h2>Song Library</h2>

      {songs.map((song) => {
        const owned = ownedSongs.includes(song.id);

        return (
          <div key={song.id} style={{ border: "1px solid gray", padding: 10, marginTop: 10 }}>
            <h3>{song.title}</h3>
            <p>{song.duration}</p>

            {activePass ? (
              <button>Play</button>
            ) : (
              <button disabled>Locked</button>
            )}

            {owned ? (
              <button>Download</button>
            ) : (
              <button onClick={() => handleBuySong(song)}>Buy $10</button>
            )}
          </div>
        );
      })}
    </div>
  );
}
