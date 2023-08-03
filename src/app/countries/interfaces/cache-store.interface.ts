import { Country } from "./country.interface";
import { Region } from "./region.type";


export interface CacheStore {
  byCapital:   TermCountries;
  byCountries: TermCountries;
  byRegion:    RegionCounties;
}

export interface TermCountries {
  term:      string;
  countries: Country[];
}

export interface RegionCounties {
  region:   Region;
  countries: Country[];
}
