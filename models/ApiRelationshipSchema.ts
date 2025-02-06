/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * Schema information for a model relationship
 * @export
 * @interface ApiRelationshipSchema
 */
export interface ApiRelationshipSchema {
    /**
     * Name of the relationship
     * @type {string}
     * @memberof ApiRelationshipSchema
     */
    name?: string;
    /**
     * Name of the related model
     * @type {string}
     * @memberof ApiRelationshipSchema
     */
    relatedModel?: string;
    /**
     * Type of relationship (hasOne, hasMany)
     * @type {string}
     * @memberof ApiRelationshipSchema
     */
    type?: string;
}

/**
 * Check if a given object implements the ApiRelationshipSchema interface.
 */
export function instanceOfApiRelationshipSchema(value: object): value is ApiRelationshipSchema {
    return true;
}

export function ApiRelationshipSchemaFromJSON(json: any): ApiRelationshipSchema {
    return ApiRelationshipSchemaFromJSONTyped(json, false);
}

export function ApiRelationshipSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiRelationshipSchema {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'relatedModel': json['relatedModel'] == null ? undefined : json['relatedModel'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function ApiRelationshipSchemaToJSON(json: any): ApiRelationshipSchema {
    return ApiRelationshipSchemaToJSONTyped(json, false);
}

export function ApiRelationshipSchemaToJSONTyped(value?: ApiRelationshipSchema | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'relatedModel': value['relatedModel'],
        'type': value['type'],
    };
}

