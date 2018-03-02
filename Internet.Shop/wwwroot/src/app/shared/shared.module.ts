import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
]

@NgModule({
  imports: [
    CommonModule,
    ...materialModules  
  ],
  exports: [
    ...materialModules    
  ],
  declarations: []
})
export class SharedModule { }
