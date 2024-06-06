import {Routes,Route } from "react-router-dom"

// import pages
import RootLayout from "./layouts/RootLayout"
import Dashboard from "./Pages/Dashboard"
import Contact from "./Pages/Contact"
import GameDetails from "./Pages/GameDetails"
import About from "./Pages/About"
import Favorites from "./Pages/Favorites"
import SearchedGames from "./Pages/SearchedGames"
// platforms
import PCGames from "./Pages/Platforms/PCGames"
import PSGames from "./Pages/Platforms/PSGames"
import XboxGames from "./Pages/Platforms/XboxGames"
import NintendoGames from "./Pages/Platforms/NintendoGames"
import AndroidGames from "./Pages/Platforms/AndroidGames"
import LinuxGames from "./Pages/Platforms/LinuxGames"

// genres
import ActionGames from "./Pages/Genres/ActionGames"
import RacingGames from "./Pages/Genres/RacingGames"
import StrategyGames from "./Pages/Genres/StrategyGames"
import PuzzleGames from "./Pages/Genres/PuzzleGames"
import AdventureGames from "./Pages/Genres/AdventureGames"

// order by: games
import Created from "./Pages/OrderBy/Created"
import Released from "./Pages/OrderBy/Released"
import Name from "./Pages/OrderBy/Name"

function App() {
 
  return (
  <Routes>
      <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      {/* platforms */}
      <Route path="/pc-games" element={<PCGames/>} />
      <Route path="/ps-games" element={<PSGames/>} />
      <Route path="/xbox-games" element={<XboxGames/>} />
      <Route path="/nintendo-games" element={<NintendoGames/>} />
      <Route path="/android-games" element={<AndroidGames/>} />
      <Route path="/linux-games" element={<LinuxGames/>} />

      
      {/* genres */}
      <Route path="/action-games" element={<ActionGames/>}/>
      <Route path="/racing-games" element={<RacingGames/>}/>
      <Route path="/strategy-games" element={<StrategyGames/>}/>
      <Route path="/puzzle-games" element={<PuzzleGames/>}/>
      <Route path="/adventure-games" element={<AdventureGames/>}/>

      {/* order by */}
      <Route path="/created-games" element={<Created/>}/>
      <Route path="/released-games" element={<Released/>}/>
      <Route path="/name-games" element={<Name/>}/>

    
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About/>}/>
      <Route path="favorites" element={<Favorites/>}/>
      <Route path="searched-games" element={<SearchedGames/>}/>
    
      
      <Route path="/:id" element={<GameDetails/>}/>

      </Route>
  </Routes>
  
  )
}

export default App
