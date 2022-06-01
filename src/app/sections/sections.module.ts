import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from './about/about.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { MenuComponent } from './menu/menu.component';
import { SpecialsComponent } from './specials/specials.component';
import { EventsComponent } from './events/events.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    WhyUsComponent,
    MenuComponent,
    SpecialsComponent,
    EventsComponent,
    GetQuoteComponent,
    TestimonialsComponent,
    GalleryComponent,
    TeamComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SectionsModule { }
