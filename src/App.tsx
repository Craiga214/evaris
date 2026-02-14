import "./App.css";
import CharacterSheet from "./pages/CharacterSheet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpellBook from "./pages/SpellBook";
import Inventory from "./pages/Inventory";
import InitiativeTracker from "./pages/InitiativeTracker";
import CharacterEdit from "./pages/CharacterEdit";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterSheet />} />
          <Route path="/evaris/character-sheet" element={<CharacterSheet />} />
          <Route path="/evaris/spell-book" element={<SpellBook />} />
          <Route path="/evaris/inventory" element={<Inventory />} />
          <Route
            path="/evaris/initiative-tracker"
            element={<InitiativeTracker />}
          />
          <Route path="/evaris/character-edit" element={<CharacterEdit />} />
          <Route path="/evaris/settings" element={<Settings />} />
          {/* Additional routes can be added here. Add Censops at /censops. */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
