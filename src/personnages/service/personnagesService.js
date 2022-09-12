class PersonnagesService {
    constructor() {}
        url = "https://swapi.dev/api/people";

        async getFilms() {
            try {
            const response = await fetch(this.url);
            if (!response.ok) throw new Error(response.statusText);
            const json = await response.json();
            
            console.log(json);
            console.log(response);
           

            return json.results.people;
            } catch(e) {
            console.error(e.message);
            return []
              
            ;
            }
            }
        
}

export default PersonnagesService;