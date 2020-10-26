import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleviewComponent } from './sampleview/sampleview.component';
import { PanelviewComponent } from './panelview/panelview.component';

const routes: Routes = [
  {path:"view",component:SampleviewComponent},
  {path:"",component:PanelviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SampleviewComponent,PanelviewComponent];
