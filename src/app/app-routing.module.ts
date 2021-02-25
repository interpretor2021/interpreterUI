import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { UploadComponent } from './pages/upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: 'upload', pathMatch: 'full' },
   // { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'upload', component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
