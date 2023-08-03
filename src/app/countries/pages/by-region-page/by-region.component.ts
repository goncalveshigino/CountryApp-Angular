import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Region } from '../../interfaces/region.type';
import { Country } from '../../interfaces/country.interface';



@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent implements OnInit{

  public countries: Country[] = [];
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania']
  public initialValue: string = '';
  public selectedRegion?: Region;

  public isLoading: boolean = false;

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ):void {

    this.isLoading = true;
    this.selectedRegion = region;

    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries
        this.isLoading = false;
      })
  }

}

