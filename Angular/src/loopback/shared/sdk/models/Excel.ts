/* tslint:disable */

declare var Object: any;
export interface ExcelInterface {
  "exceljson": string;
  "id"?: number;
}

export class Excel implements ExcelInterface {
  "exceljson": string;
  "id": number;
  constructor(data?: ExcelInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Excel`.
   */
  public static getModelName() {
    return "Excel";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Excel for dynamic purposes.
  **/
  public static factory(data: ExcelInterface): Excel{
    return new Excel(data);
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
      name: 'Excel',
      plural: 'Excels',
      path: 'Excels',
      idName: 'id',
      properties: {
        "exceljson": {
          name: 'exceljson',
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
