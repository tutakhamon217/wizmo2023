import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsgLearningRoutingModule } from './esg-learning-routing.module';
import { EsgLearningComponent } from './esg-learning.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [EsgLearningComponent],
  imports: [CommonModule, EsgLearningRoutingModule, TranslateModule],
})
export class EsgLearningModule {}
