import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DatePipe } from '@angular/common';
import { FullComponent } from './full/full.component';
import { HeaderComponent } from './full/header/header.component';
import { FooterComponent } from './full/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { EDepositsComponent } from './e-deposits/e-deposits.component';
import { BillPaymentsComponent } from './bill-payments/bill-payments.component';
import { TopupRechargeComponent } from './topup-recharge/topup-recharge.component';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';
import { BankServicesComponent } from './bank-services/bank-services.component';
import { RequestsComponent } from './requests/requests.component';
import { UserService} from './services/user.service'
import { ApiService } from './services/api.service';
import { JwtService } from './services/jwt.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent, 
    ForgotPasswordComponent,
     FullComponent,
      HeaderComponent,
       FooterComponent, 
       MyAccountsComponent,
        FundTransferComponent, 
        EDepositsComponent,
         BillPaymentsComponent, 
         TopupRechargeComponent,
          ManageCardsComponent,
          BankServicesComponent,
          RequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  
 
   
  ],
  providers: [DatePipe,UserService,ApiService,JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
