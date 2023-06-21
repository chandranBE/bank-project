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
import { UserService } from './services/user.service'
import { ApiService } from './services/api.service';
import { JwtService } from './services/jwt.service';
import { OnlynumberDirective } from './create-account/onlynumber.directive';
import { ProfileComponent } from '../app/profile/profile.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { AccountsSummaryComponent } from './my-accounts/accounts-summary/accounts-summary.component';
import { MiniStatementComponent } from './my-accounts/mini-statement/mini-statement.component';
import { MPassbookComponent } from './my-accounts/m-passbook/m-passbook.component';
import { ViewDownloadComponent } from './my-accounts/view-download/view-download.component';
import { EStatementComponent } from './my-accounts/e-statement/e-statement.component';
import { SelfAccountsComponent } from './fund-transfer/self-accounts/self-accounts.component';
import { OtherSbiAccountsComponent } from './fund-transfer/other-sbi-accounts/other-sbi-accounts.component';
import { OtherBankAccountsComponent } from './fund-transfer/other-bank-accounts/other-bank-accounts.component';
import { ImpsMmidComponent } from './fund-transfer/imps-mmid/imps-mmid.component';
import { QuickTransferComponent } from './fund-transfer/quick-transfer/quick-transfer.component';
import { SendMcashComponent } from './fund-transfer/send-mcash/send-mcash.component';
import { ScheduledTransactionsComponent } from './fund-transfer/scheduled-transactions/scheduled-transactions.component';
import { AddManageBeneficiaryComponent } from './fund-transfer/add-manage-beneficiary/add-manage-beneficiary.component';
import { FixedDepositsComponent } from './e-deposits/fixed-deposits/fixed-deposits.component';
import { RecurringDepositsComponent } from './e-deposits/recurring-deposits/recurring-deposits.component';
import { MultiOptionalDepositsComponent } from './e-deposits/multi-optional-deposits/multi-optional-deposits.component';
import { PrematureClosureComponent } from './e-deposits/premature-closure/premature-closure.component';
import { EDepositEnquiryComponent } from './e-deposits/e-deposit-enquiry/e-deposit-enquiry.component';
import { ChangeMaturityInstructionComponent } from './e-deposits/change-maturity-instruction/change-maturity-instruction.component';
// import { NgxPaginationModule } from 'ngx-pagination/NgxPaginationModule';

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
    OnlynumberDirective,
    ProfileComponent,
    AccountsSummaryComponent,
    MiniStatementComponent,
    MPassbookComponent,
    ViewDownloadComponent,
    EStatementComponent,
    SelfAccountsComponent,
    OtherSbiAccountsComponent,
    OtherBankAccountsComponent,
    ImpsMmidComponent,
    QuickTransferComponent,
    SendMcashComponent,
    ScheduledTransactionsComponent,
    AddManageBeneficiaryComponent,
    FixedDepositsComponent,
    RecurringDepositsComponent,
    MultiOptionalDepositsComponent,
    PrematureClosureComponent,
    EDepositEnquiryComponent,
    ChangeMaturityInstructionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    TabsModule,
    ModalModule,
    TooltipModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    BrowserAnimationsModule
    // NgxPaginationModule,



  ],
  providers: [DatePipe, UserService, ApiService, JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
