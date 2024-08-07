import axios from 'axios';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { PlanetsDataService } from '../services/PlanetsDataService';

describe('PlanetsDataService', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    const tatooinePlanet = {
        next: 'https://swapi.dev/api/planets/?page=2',
        results: [
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
        ],
    };

    const alderaanPlanet = {
        next: null,
        results: [
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
        ],
    };

    const emptyPage = {
        next: null,
        results: [],
    };

    it('should return all planets data', async () => {
        vi.spyOn(axios, 'get')
            .mockResolvedValueOnce({ data: tatooinePlanet })
            .mockResolvedValueOnce({ data: alderaanPlanet });

        const planetsData = await PlanetsDataService();

        expect(planetsData).toEqual([
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
        ]);
    });

    it('should handle no results', async () => {
        vi.spyOn(axios, 'get').mockResolvedValueOnce({ data: emptyPage });

        const planetsData = await PlanetsDataService();

        expect(planetsData).toEqual([]);
    });

    it('should handle API error 404', async () => {
        vi.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Request failed with status code 404'));

        await expect(PlanetsDataService()).rejects.toThrow();
    });

    it('should handle API error 500', async () => {
        vi.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Request failed with status code 500'));

        await expect(PlanetsDataService()).rejects.toThrow();
    });
});
