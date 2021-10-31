/* tslint:disable */

declare var Object: any;
export interface UsermasterInterface {
  "id"?: number;
  "name": string;
  "mobilenumber": string;
  "status": string;
  "useMe"?: string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "password"?: string;
  accessTokens?: any[];
}

export class Usermaster implements UsermasterInterface {
  "id": number;
  "name": string;
  "mobilenumber": string;
  "status": string;
  "useMe": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "password": string;
  accessTokens: any[];
  constructor(data?: UsermasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Usermaster`.
   */
  public static getModelName() {
    return "Usermaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Usermaster for dynamic purposes.
  **/
  public static factory(data: UsermasterInterface): Usermaster{
    return new Usermaster(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Usermaster',
      plural: 'Usermasters',
      path: 'Usermasters',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "mobilenumber": {
          name: 'mobilenumber',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "useMe": {
          name: 'useMe',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
