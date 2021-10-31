/* tslint:disable */

declare var Object: any;
export interface PetdetailsInterface {
  "id"?: number;
  "petname": string;
  "breed": string;
  "dob": string;
  "weight": string;
  "height": string;
  "chipid": string;
  "status": string;
  "loginid": string;
  "alarmstatus"?: string;
}

export class Petdetails implements PetdetailsInterface {
  "id": number;
  "petname": string;
  "breed": string;
  "dob": string;
  "weight": string;
  "height": string;
  "chipid": string;
  "status": string;
  "loginid": string;
  "alarmstatus": string;
  constructor(data?: PetdetailsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Petdetails`.
   */
  public static getModelName() {
    return "Petdetails";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Petdetails for dynamic purposes.
  **/
  public static factory(data: PetdetailsInterface): Petdetails{
    return new Petdetails(data);
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
      name: 'Petdetails',
      plural: 'Petdetails',
      path: 'Petdetails',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "petname": {
          name: 'petname',
          type: 'string',
          default: '100'
        },
        "breed": {
          name: 'breed',
          type: 'string',
          default: '100'
        },
        "dob": {
          name: 'dob',
          type: 'string'
        },
        "weight": {
          name: 'weight',
          type: 'string',
          default: '10'
        },
        "height": {
          name: 'height',
          type: 'string',
          default: '10'
        },
        "chipid": {
          name: 'chipid',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string',
          default: '2'
        },
        "loginid": {
          name: 'loginid',
          type: 'string',
          default: '100'
        },
        "alarmstatus": {
          name: 'alarmstatus',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
