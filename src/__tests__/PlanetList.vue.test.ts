// @ts-ignore
import { DateTime } from 'luxon';
import { render, screen, waitFor } from '@testing-library/vue';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import PlanetList from '../views/PlanetList.vue';
import { PlanetsDataService } from '../services/PlanetsDataService';
import PlanetsResponseData from '../types/PlanetsResponseData';

const mockPlanetsData: PlanetsResponseData[] = [
    { 
        climate: "temperate",
        created: "2014-12-09T13:50:49.641000Z",
        diameter: 10465,
        edited: "2014-12-20T20:58:18.411000Z",
        films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/3/",
        ],
        gravity: "1 standard",
        name: "Tatooine",
        orbital_period: 304,
        population: 200000,
        residents: [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
        ],
        rotation_period: 23,
        surface_water: 1,
        terrain: "desert",
        url: "https://swapi.dev/api/planets/1/",
    },
    { 
        climate: "temperate",
        created: "2014-12-10T11:35:48.479000Z",
        diameter: 12500,
        edited: "2014-12-20T20:58:18.420000Z",
        films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/6/",
        ],
        gravity: "1 standard",
        name: "Alderaan",
        orbital_period: 364,
        population: 2000000000,
        residents: [
            "https://swapi.dev/api/people/5/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/81/"
        ],
        rotation_period: 24,
        surface_water: 40,
        terrain: "grasslands, mountains",
        url: "https://swapi.dev/api/planets/2/",
    },
];

vi.mock('../services/PlanetsDataService', () => ({
    PlanetsDataService: vi.fn(() => Promise.resolve(mockPlanetsData)),
}));

describe('PlanetList.vue', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render the component correctly', async () => {
        render(PlanetList);

        expect(screen.getByText('Planet List')).toBeDefined();
    });

    it('should call PlanetsDataService and populate planetsData', async () => {
        render(PlanetList);
        await waitFor(() => {
            expect(PlanetsDataService).toHaveBeenCalled();
        });

        const planetList = await screen.findByTestId('planet-list');
        expect(planetList).toBeDefined();
        expect(screen.getByText('Tatooine')).toBeDefined();
        expect(screen.getByText('Alderaan')).toBeDefined();
    });

    it('should format created date correctly', () => {
        const formattedDate = DateTime.fromISO('2023-01-01T00:00:00Z', { zone: 'utc' }).toFormat('HH:mm dd-MM-yyyy');
        expect(formattedDate).toBe('00:00 01-01-2023');
    });

});
