/* tslint:disable */

declare var Object: any;
export interface PetlocationInterface {
  "latitude"?: string;
  "longitude"?: string;
  "createddate"?: string;
  "createdtime"?: string;
  "status"?: string;
  "currentpet"?: string;
  "id"?: number;
}

export class Petlocation implements PetlocationInterface {
  "latitude": string;
  "longitude": string;
  "createddate": string;
  "createdtime": string;
  "status": string;
  "currentpet": string;
  "id": number;
  constructor(data?: PetlocationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Petlocation`.
   */
  public static getModelName() {
    return "Petlocation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Petlocation for dynamic purposes.
  **/
  public static factory(data: PetlocationInterface): Petlocation{
    return new Petlocation(data);
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
      name: 'Petlocation',
      plural: 'Petlocations',
      path: 'Petlocations',
      idName: 'id',
      properties: {
        "latitude": {
          name: 'latitude',
          type: 'string'
        },
        "longitude": {
          name: 'longitude',
          type: 'string'
        },
        "createddate": {
          name: 'createddate',
          type: 'string'
        },
        "createdtime": {
          name: 'createdtime',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "currentpet": {
          name: 'currentpet',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
