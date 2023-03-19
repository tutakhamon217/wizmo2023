import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FinanceComponent],
  imports: [CommonModule, FinanceRoutingModule, TranslateModule],
})
export class FinanceModule {}
