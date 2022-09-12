import FilmService from "../../films/service/filmService";
import VehiculesService from "../service/vehiculesService";
import useGetData from "../../components/useGetData";

const filmService = new FilmService();
const vehiculesService = new VehiculesService();


const Véhicules = () => {
    const vehicles = useGetData(
        vehiculesService.getById.bind(vehiculesService),
        data?.vehicles
        );



  return (
    <div>
      {vehicles}
    </div>
  )
}

export default Véhicules
