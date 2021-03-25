import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SofiComponent } from './sofi/sofi.component';
import { PisiComponent } from './pisi/pisi.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { CareerComponent } from './career/career.component';
import { FormsModule } from '@angular/forms';
import { MaterialDesign } from '../material-desain/material';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'sofi',
        component: SofiComponent
      },
      {
        path: 'pisi',
        component: PisiComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'career',
        component: CareerComponent
      }
    ]
  }
];

@NgModule({
  declarations: [HomeComponent, SofiComponent, PisiComponent, ContactUsComponent, PublicComponent, CareerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class PublicModule { }
