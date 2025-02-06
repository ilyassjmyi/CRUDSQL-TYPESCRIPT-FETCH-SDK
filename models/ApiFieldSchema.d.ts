/**
 * CrudSQL API
 * A powerful dynamic CRUD API engine that automatically generates RESTful endpoints for your data models CrudSQL provides automatic CRUD operations, filtering, pagination, and sorting capabilities for any data model. Features: - Automatic REST API generation - Dynamic model support - Complex filtering and querying - Pagination and sorting - Swagger documentation - Multiple database support (SQL & NoSQL)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: taqi@mobix.biz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Schema information for a model field
 * @export
 * @interface ApiFieldSchema
 */
export interface ApiFieldSchema {
    /**
     * Name of the field
     * @type {string}
     * @memberof ApiFieldSchema
     */
    name?: string;
    /**
     * List of supported operators for this field
     * @type {Array<string>}
     * @memberof ApiFieldSchema
     */
    operators?: Array<string>;
    /**
     * Type of the field (e.g., string, int)
     * @type {string}
     * @memberof ApiFieldSchema
     */
    type?: string;
}
/**
 * Check if a given object implements the ApiFieldSchema interface.
 */
export declare function instanceOfApiFieldSchema(value: object): value is ApiFieldSchema;
export declare function ApiFieldSchemaFromJSON(json: any): ApiFieldSchema;
export declare function ApiFieldSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiFieldSchema;
export declare function ApiFieldSchemaToJSON(json: any): ApiFieldSchema;
export declare function ApiFieldSchemaToJSONTyped(value?: ApiFieldSchema | null, ignoreDiscriminator?: boolean): any;
