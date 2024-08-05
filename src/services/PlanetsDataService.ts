import axios from 'axios'
import PlanetsResponseData from '../types/PlanetsResponseData'

export const PlanetsDataService = async () => {
    let pageNumber: number = 1
    let nextPagesAvailable: boolean = true;
    const BASE_URL: string = 'https://swapi.dev/api/planets/?page='
    const planetsData: PlanetsResponseData[] = []

    do {
        const response = await axios.get(BASE_URL + pageNumber)
        const { data } = response;
        data.results.forEach((element: PlanetsResponseData) => {
            planetsData.push(element)
        });
        if(data.next) {
            nextPagesAvailable = true
        } else {
            nextPagesAvailable = false
        }
        pageNumber++;
    } while(nextPagesAvailable)
    
    return planetsData;
}