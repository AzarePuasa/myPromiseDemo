import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MaterialsModule } from '../materials.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialsModule,
  ],
  declarations: [LayoutComponent, 
    HeaderComponent, 
    FooterComponent, 
    MainContentComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
