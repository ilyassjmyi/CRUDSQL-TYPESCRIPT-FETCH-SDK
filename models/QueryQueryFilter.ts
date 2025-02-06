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
 * Filter conditions for querying entities using complex expressions Supports logical operations (AND, OR, NOT), field comparisons, and relationship filtering Example: { "expressions": [ {"field": "age", "operator": "gte", "value": 18}, { "operator": "AND", "expressions": [ {"field": "status", "operator": "eq", "value": "active"} ] } ] }
 * @export
 * @interface QueryQueryFilter
 */
export interface QueryQueryFilter {
    /**
     * @Description Array of expressions to filter entities
     * @Description Each expression can be a FieldExpression, LogicalExpression, or RelationshipExpression
     * @type {Array<object>}
     * @memberof QueryQueryFilter
     */
    expressions?: Array<object>;
}

/**
 * Check if a given object implements the QueryQueryFilter interface.
 */
export function instanceOfQueryQueryFilter(value: object): value is QueryQueryFilter {
    return true;
}

export function QueryQueryFilterFromJSON(json: any): QueryQueryFilter {
    return QueryQueryFilterFromJSONTyped(json, false);
}

export function QueryQueryFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryQueryFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'expressions': json['expressions'] == null ? undefined : json['expressions'],
    };
}

export function QueryQueryFilterToJSON(json: any): QueryQueryFilter {
    return QueryQueryFilterToJSONTyped(json, false);
}

export function QueryQueryFilterToJSONTyped(value?: QueryQueryFilter | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'expressions': value['expressions'],
    };
}

