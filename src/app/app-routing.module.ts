import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatindexComponent } from './chatindex/chatindex.component';
import { LoadchatComponent } from './loadchat/loadchat.component';

const routes: Routes = [
  {
    path: '',
    component: ChatindexComponent,
    children: [       
        {
            path: 'loadchat',
            component: LoadchatComponent
        }
    ]
   },
   {
    path: '**',
    component: ChatindexComponent,
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
