import axios from 'axios';
import PlanetsResponseData from '../types/PlanetsResponseData';

export const PlanetsDataService = async (): Promise<PlanetsResponseData[]> => {
    const BASE_URL = 'https://swapi.dev/api/planets/?page=';
    let pageNumber = 1;
    const planetsData: PlanetsResponseData[] = [];

    try {
        while (true) {
            const response = await axios.get(`${BASE_URL}${pageNumber}`);
            const { data } = response;
            planetsData.push(...data.results);

            if (!data.next) break;
            pageNumber++;
        }
    } catch (error) {
        console.error('Error fetching planets data:', error);
        throw new Error('Failed to fetch planets data');
    }

    return planetsData;
};
