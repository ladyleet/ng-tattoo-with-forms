import { TattooEdComponent } from './tattoo-ed';
import { AboutPageComponent } from './about-page';
import { RequestTattooComponent } from './request-tattoo';

export const AppRoutes = [

{ path: '', component: TattooEdComponent },
{ path: 'tattooed', component: TattooEdComponent },
{ path: 'about', component: AboutPageComponent },
{ path: 'request-tattoo', component: RequestTattooComponent },
];
