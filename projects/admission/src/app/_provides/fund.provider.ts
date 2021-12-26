import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Common } from 'src/app/common';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class FundProvider {
  constructor(private http: HttpClient) {}

  getTransactions() {
        return this.http.get(Common.URI + '/fund/transaction');
  }
  getCurrentAccountTransactions(fundAccountId) {
    return this.http.get(Common.URI + '/fund/transaction?filter=fundAccountId eq ' + fundAccountId + '&sort=transactionDate&order=des');
  }

  getCurrentBalance(fundAccountId) {
    return this.http.get(Common.URI + '/fund/transaction/balance?filter=fundAccountId eq ' + fundAccountId);
  }

  addNewTransaction(formData) {
    return this.http.post(Common.URI + '/fund/transaction', formData);
  }

  getCategories() {
    return this.http.get(Common.URI + '/expenses/category');
  }

  createCategory(formData) {
    return this.http.post(Common.URI + '/expenses/category', formData);
  }
  updateCategory(id, formData) {
    return this.http.put(Common.URI + '/expenses/category/' + id, formData);
  }

  deleteCategory(id) {
    return this.http.delete(Common.URI + '/expenses/category/'  + id);
  }
  getAccounts() {
    return this.http.get(Common.URI + '/fund/account');
  }

  createAccount(accountInformation) {
    return this.http.post(Common.URI + '/fund/account', accountInformation);
  }

  updateAccount(id, formData) {
    return this.http.put(Common.URI + '/fund/account/' + id, formData);
  }
  deleteAccount(id) {
    return this.http.delete(Common.URI + '/fund/account/'  + id);
  }
  postFiles(fileToUpload: File) {
    // const endpoint = `https://portal.jackprodigy.com/api/s3/createInJackprodigy?token=` + Common.JACK_TEMP_TOKEN;
    const endpoint = `https://portal.jackprodigy.com/api/s3/createInJackprodigy?token=` ;
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData);
   }
}
