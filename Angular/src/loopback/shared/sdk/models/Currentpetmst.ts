/* tslint:disable */

declare var Object: any;
export interface CurrentpetmstInterface {
  "currentpetid"?: string;
  "status"?: string;
  "usermstid"?: string;
  "id"?: number;
}

export class Currentpetmst implements CurrentpetmstInterface {
  "currentpetid": string;
  "status": string;
  "usermstid": string;
  "id": number;
  constructor(data?: CurrentpetmstInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Currentpetmst`.
   */
  public static getModelName() {
    return "Currentpetmst";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Currentpetmst for dynamic purposes.
  **/
  public static factory(data: CurrentpetmstInterface): Currentpetmst{
    return new Currentpetmst(data);
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
      name: 'Currentpetmst',
      plural: 'Currentpetmsts',
      path: 'Currentpetmsts',
      idName: 'id',
      properties: {
        "currentpetid": {
          name: 'currentpetid',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "usermstid": {
          name: 'usermstid',
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
