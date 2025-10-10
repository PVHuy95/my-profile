import React, { useState } from "react";
import Card3D from "./Components/Card3D";
import ProfileCard from "./Components/ProfileCard";

function App() {
  const [showProfile, setShowProfile] = useState(false);

  const handleContactClick = () => {
    setShowProfile(true);
  };

  return showProfile ? (
    <ProfileCard />
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-red-600 via-rose-400 to-white">
      <Card3D
        avatarUrl="/imgs/1.png"
        name="Phu Vinh Huy"
        title="Developer"
        handle="HuyPV"
        status="Online"
        contactText="Contact"
        onContactClick={handleContactClick}
      />
    </div>
  );
  
}

export default App;
