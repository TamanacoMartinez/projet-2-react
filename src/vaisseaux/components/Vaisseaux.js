import FilmService from '../../films/service/filmService';
import VaisseauxService from '../service/vaisseauxService';
import useGetData from '../../components/useGetData';
import React from 'react';

const filmService = new FilmService();
const vaisseauxService = new VaisseauxService()


const Vaisseaux = () => {
        const starships = useGetData(
        vaisseauxService.getById.bind(vaisseauxService),
        data?.starships
        );

  return (
    <div>
        {starships}
    </div>
  )
}

export default Vaisseaux