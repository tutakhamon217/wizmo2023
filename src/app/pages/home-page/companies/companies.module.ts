import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { TranslateModule } from '@ngx-translate/core';
import { MicrosoftComponent } from './microsoft/microsoft.component';

@NgModule({
  declarations: [CompaniesComponent, MicrosoftComponent],
  imports: [CommonModule, CompaniesRoutingModule, TranslateModule],
})
export class CompaniesModule {}
