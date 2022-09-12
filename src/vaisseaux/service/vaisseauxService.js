class VaisseauxService {
    constructor() {}
        url = "https://swapi.dev/api/starships";

        async getFilms() {
            try {
            const response = await fetch(this.url);
            if (!response.ok) throw new Error(response.statusText);
            const json = await response.json();
            
            console.log(json);
            console.log(response);
           

            return json.results.starships;
            } catch(e) {
            console.error(e.message);
            return []
              
            ;
            }
            }
        
}

export default VaisseauxService;