import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { InnerLayoutComponent } from './inner-layout/inner-layout.component';
import { TopbarComponent } from './partial/topbar/topbar.component';
import { HeaderComponent } from './partial/header/header.component';
import { HeroComponent } from './partial/hero/hero.component';
import { FooterComponent } from './partial/footer/footer.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    InnerLayoutComponent,
    TopbarComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    MainLayoutComponent,
    InnerLayoutComponent
  ],
})
export class LayoutModule { }
