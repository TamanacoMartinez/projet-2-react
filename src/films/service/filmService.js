class FilmService {
    constructor() {}
        url = "https://swapi.dev/api/films";

        async getFilms() {
            try {
            const response = await fetch(this.url);
            if (!response.ok) throw new Error(response.statusText);
            const json = await response.json();
            
            console.log(json);
            console.log(response);
           

            return json.results;
            } catch(e) {
            console.error(e.message);
            return []
              
            ;
            }
            }
        
}

export default FilmService;