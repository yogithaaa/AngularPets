/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Usermaster } from '../../models/Usermaster';
import { Excel } from '../../models/Excel';
import { Petdetails } from '../../models/Petdetails';
import { Petlocation } from '../../models/Petlocation';
import { Currentpetmst } from '../../models/Currentpetmst';
import { Livelocation } from '../../models/Livelocation';
import { Email } from '../../models/Email';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Usermaster: Usermaster,
    Excel: Excel,
    Petdetails: Petdetails,
    Petlocation: Petlocation,
    Currentpetmst: Currentpetmst,
    Livelocation: Livelocation,
    Email: Email,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
