import { Routes } from "@angular/router";
import { SearchComponent } from "./pages/search/search.component";
import { UploadComponent } from "./pages/upload/upload.component";

export const routes: Routes=[
    { path: '', redirectTo: 'search', pathMatch: 'full' },
   // { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'upload', component: UploadComponent },
]