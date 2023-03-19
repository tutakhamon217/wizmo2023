import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent,
    // children: [{ path: 'microsoft', component: MicrosoftComponent }],
  },
  {
    path: 'microsoft',
    component: MicrosoftComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}
