import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppMainComponent} from './app.main.component';
import { AppCrudComponent } from './pages/app.crud.component';

@NgModule({
  imports: [
      RouterModule.forRoot([
          {
              path: '', component: AppMainComponent,
              children: [
                  {path: 'pages/crud', component: AppCrudComponent},,
              ]
          },
          {path: '**', redirectTo: '/notfound'},
      ], {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
