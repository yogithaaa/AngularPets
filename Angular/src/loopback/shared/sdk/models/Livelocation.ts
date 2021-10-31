/* tslint:disable */

declare var Object: any;
export interface LivelocationInterface {
  "livelat": string;
  "livelng": string;
  "status"?: string;
  "createddate"?: string;
  "id"?: number;
}

export class Livelocation implements LivelocationInterface {
  "livelat": string;
  "livelng": string;
  "status": string;
  "createddate": string;
  "id": number;
  constructor(data?: LivelocationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Livelocation`.
   */
  public static getModelName() {
    return "Livelocation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Livelocation for dynamic purposes.
  **/
  public static factory(data: LivelocationInterface): Livelocation{
    return new Livelocation(data);
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
      name: 'Livelocation',
      plural: 'Livelocations',
      path: 'Livelocations',
      idName: 'id',
      properties: {
        "livelat": {
          name: 'livelat',
          type: 'string'
        },
        "livelng": {
          name: 'livelng',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "createddate": {
          name: 'createddate',
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
