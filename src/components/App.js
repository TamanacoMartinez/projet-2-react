import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import useGetData from "./useGetData";
import FilmService from "../films/service/filmService";
import Films from "../films/components/Films";
import Film from "../films/components/Films";
import Personnages from "../personnages/components/Personnages";
import Personnage from "../personnages/components/Personnage";
import Vaisseaux from "../vaisseaux/components/Vaisseaux";
import Vaisseau from "../vaisseaux/components/Vaisseau";
import Véhicules from "../véhicules/components/Véhicules";
import Véhicule from "../véhicules/components/Véhicule";
import { Container } from "react-bootstrap";
import User from "../auth/components/User";
import AppContainer from "./AppContainer";

const filmService = new FilmService();


function App() {
  const url = "https://swapi.dev/api/films";
  const [data, setData] = useState();
  const fetchSwapi = async () => {
    setData(await filmService.getFilms())
  }




useEffect(() =>{
  fetchSwapi();
},[] )

  return ( 
          <BrowserRouter>
            <AppContainer>
              <Container>
                <User/>
                <Routes>
                  <Route path="/" element={<Films/>}/>
                  <Route path="/:id" element={<Film/>}/>
                  <Route path="/personnages" element={<Personnages/>}/>
                  <Route path="/personnages/:id" element={<Personnage/>}/>
                  <Route path="/vaisseaux" element={<VaisseauxSpatiaux/>}/>
                  <Route path="/vaisseaux/:id" element={<VaisseauSpatial/>}/>
                  <Route path="/vehicules" element={<Véhicules/>}/>
                  <Route path="/vehicules/:id" element={<Véhicule/>}/>
                </Routes>
              </Container>
            </AppContainer>
          </BrowserRouter>

        
  );
}

export default App;
