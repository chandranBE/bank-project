import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FullComponent } from './full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/authguard.service'
// bank main components
import { MyAccountsComponent} from './my-accounts/my-accounts.component'
import {FundTransferComponent} from './fund-transfer/fund-transfer.component'
import { EDepositsComponent } from './e-deposits/e-deposits.component';
import { BillPaymentsComponent } from './bill-payments/bill-payments.component';
import { TopupRechargeComponent } from './topup-recharge/topup-recharge.component';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';
import { BankServicesComponent } from './bank-services/bank-services.component';
import { RequestsComponent } from './requests/requests.component';
import { ProfileComponent } from '../app/profile/profile.component';


const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},  

  { path:'login',component:LoginComponent,},
  { path:'forgotPwd',component:ForgotPasswordComponent,},
  { path:'createAct',component:CreateAccountComponent,},
  { path:'profile',component:ProfileComponent,},
  { path:'user',component:FullComponent,
     children:[     
      { path:'',component:MyAccountsComponent },   
      { path:'myAct',component:MyAccountsComponent,
        children:[{ path:'createAct',component:CreateAccountComponent,}] },
      { path:'fundTrs',component:FundTransferComponent,},
      { path:'edeposits',component:EDepositsComponent},
      { path:'billpymts',component:BillPaymentsComponent},
      { path:'topup&rcharge',component:TopupRechargeComponent},
      { path:'manageCards',component:ManageCardsComponent},
      { path:'services',component:BankServicesComponent},
      { path:'requests',component:RequestsComponent}
     ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
