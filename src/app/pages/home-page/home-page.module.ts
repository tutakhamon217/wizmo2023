import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { CompaniesComponent } from './companies/companies.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, TranslateModule],
  exports: [TranslateModule],
})
export class HomePageModule {}
