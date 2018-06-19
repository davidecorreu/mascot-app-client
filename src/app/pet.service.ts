import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import btoa from "btoa";

import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import { Pet } from "./models/pet.model";
import { User } from "./models/user.model";
import { Org } from "./models/org.model";

declare const Buffer;

@Injectable()
export class PetService {
  private authToken: string;
  public currentOrg: string;
  public currentUser: string;

  private petUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  private handleAngularJsonBug(error: HttpErrorResponse) {
    const JsonParseError = "Http failure during parsing for";
    const matches = error.message.match(new RegExp(JsonParseError, "ig"));

    if (error.status === 200 && matches.length === 1) {
      // return obs that completes;
      return Observable.empty();
    } else {
      return Observable.throw(error); // re-throw
    }
  }

  addPet(Pet: {}): Observable<Pet> {
    return this.http
      .post<Pet>(`${this.petUrl}/pets`, Pet)
      .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

  getPets(): Observable<Pet[]> {
    return this.http
      .get<Pet[]>(`${this.petUrl}/pets`)
      .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

  getPet(id: String): Observable<Pet> {
    const url = `${this.petUrl}/pets/${id}`;
    return this.http
      .get<Pet>(url)
      .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

  getOrgs(): Observable<Org[]> {
    console.log("Inside getOrgs Service");
    return this.http
      .get<Org[]>(`${this.petUrl}/orgs`)
      .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

  getOrg(id: String): Observable<Org> {
    const url = `${this.petUrl}/orgs/${id}`;
    return this.http
      .get<Org>(url)
      .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

  addOrg(org: Org): Observable<any> {
    const url = `${this.petUrl}/orgs`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return (
      this.http
        .post<any>(url, org, httpOptions)
        .map(res => {
          this.authToken = res.jwt_token;
          this.currentOrg = res.name;
          return res;
        })
        // .catch(error => error)
        .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error))
    );
  }

  loginOrg(orgInfo): any {
    const url = `${this.petUrl}/orgs/sign-in`;
    // console.log(
    //   "btoa:",
    //   Buffer.from(orgInfo.name + ":" + orgInfo.password).toString("base64")
    // );
    const httpOptions = {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(orgInfo.name + ":" + orgInfo.password).toString("base64")
      }
    };
    return this.http.get<any>(url, httpOptions).map(res => {
      if (res.hasOwnProperty("jwt_token")) {
        this.authToken = res.jwt_token;
        this.currentOrg = res.name;
        return res;
      }
    });
  }

  addUser(user: object): Observable<any> {
    const url = `${this.petUrl}/users`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http
      .post<any>(url, user, httpOptions)
      .map(res => {
        this.authToken = res.jwt_token;
        this.currentUser = res.name;
        return res;
      })
      .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

  getUser(id: String): Observable<User> {
    console.log("getUser() from PetService");
    const url = `${this.petUrl}/users/${id}`;
    return this.http
      .get<User>(url)
      .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

  adoptionRequest(org: String, pet: String, user: String): Observable<Org> {
    const url = `${this.petUrl}/orgs/${org}`;
    const adoptionReq = { org, pet, user };
    return this.http
      .put<Org>(url, adoptionReq)
      .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

  acceptAdoption(
    query: String,
    org: String,
    pet: String,
    user: String
  ): Observable<User> {
    const url = `${this.petUrl}/users/${user}/accepted`;
    const approvalRes = { org, pet, query };
    return this.http
      .put<User>(url, approvalRes)
      .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

  rejectAdoption(
    query: String,
    org: String,
    pet: String,
    user: String
  ): Observable<User> {
    const url = `${this.petUrl}/users/${user}/rejected`;
    const rejectionRes = { org, pet, query };
    return this.http
      .put<User>(url, rejectionRes)
      .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

  markAsRead(_id, user): Observable<User> {
    const url = `${this.petUrl}/users/${user}/markAsRead`;
    const message = { _id, read: true };
    return this.http
      .put<User>(url, message)
      .catch((error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

  isLoggedIn(): boolean {
    return this.authToken !== undefined;
  }
}
