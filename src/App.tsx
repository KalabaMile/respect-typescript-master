import Navbar from "@/scenes/navbar";
import Naslovna from "@/scenes/naslovna";
import GrupniTrening from "@/scenes/grupniTrening";
import Onama from "@/scenes/oNama";
import Kontakt from "@/scenes/kontakt";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import PersonalniTrening from "./scenes/personalniTrening";
import MaliRespektaši from "./scenes/maliRespektaši";
import AnalizaSustavaTijela from "./scenes/analizaSustavaTijela";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Naslovna
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Naslovna);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Naslovna setSelectedPage={setSelectedPage} />
      <Onama setSelectedPage={setSelectedPage} />
      <PersonalniTrening setSelectedPage={setSelectedPage}/>
      <GrupniTrening setSelectedPage={setSelectedPage} />
      <MaliRespektaši setSelectedPage={setSelectedPage}/>
      <AnalizaSustavaTijela setSelectedPage={setSelectedPage}/>
      <Kontakt setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
