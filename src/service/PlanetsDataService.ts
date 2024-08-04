import axios from 'axios'

export async function PlanetsDataService() {
    const response = await axios.get('https://swapi.dev/api/planets') 
    return response.data.results
}