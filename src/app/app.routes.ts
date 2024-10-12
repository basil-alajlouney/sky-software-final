import { Routes } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component"
import { HomeComponent } from './home/home.component';
import { VacationRequestsComponent } from './vacation-requests/vacation-requests.component';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "Home", component : HomeComponent},
    {path : "Profiles", component : ProfileComponent},
    {path : "VacationRequest", component : VacationRequestsComponent}
];
