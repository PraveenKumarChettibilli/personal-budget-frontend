import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard  {
  constructor(private _dataservice:DataService,private router:Router){

  }

  canActivate():boolean{
    if(this._dataservice.verifyTokenPresence()){      
      return true
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
