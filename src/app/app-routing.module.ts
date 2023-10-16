import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'userslist',component:ListUsersComponent},
{path:'invoicemanagement',component:MainInvoiceComponent},
{path:'invoices',component:InvoiceListComponent},
{ path: 'invoice/:id/:active', component: InvoiceComponent },
{ path: 'main-invoice', component: MainInvoiceComponent },

{path:'',redirectTo: '/invoices', pathMatch: 'full'},
{ path: 'home', component: HeaderComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
