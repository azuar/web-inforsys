import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';


const routes: Routes = [

  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(mod => mod.PublicModule)
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'covid-19',
    component: CovidComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/public/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
