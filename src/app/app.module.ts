/*Módulos*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap'
/* LocalStorage  */
import { LocalStorageModule } from 'angular-2-local-storage'
/*Componentes*/
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

import { DespesaService } from './despesa.service'
import { Despesa } from 'src/app/despesa';
import { DecimalBrPipe } from './decimal-br.pipe';
import { MomentModule } from 'angular2-moment';
import 'moment/locale/pt-br';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    DecimalBrPipe
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    LocalStorageModule.withConfig({prefix: 'despesaApp', storageType: 'localStorage',}),
    MomentModule
  ],
  providers: [DespesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
