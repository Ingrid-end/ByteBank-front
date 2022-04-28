import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './novaTransferencia/novaTranferencia.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'oh', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTransferenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
