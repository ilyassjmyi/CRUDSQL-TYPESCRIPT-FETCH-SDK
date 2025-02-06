"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFieldSchemaToJSONTyped = exports.ApiFieldSchemaToJSON = exports.ApiFieldSchemaFromJSONTyped = exports.ApiFieldSchemaFromJSON = exports.instanceOfApiFieldSchema = void 0;
/**
 * Check if a given object implements the ApiFieldSchema interface.
 */
function instanceOfApiFieldSchema(value) {
    return true;
}
exports.instanceOfApiFieldSchema = instanceOfApiFieldSchema;
function ApiFieldSchemaFromJSON(json) {
    return ApiFieldSchemaFromJSONTyped(json, false);
}
exports.ApiFieldSchemaFromJSON = ApiFieldSchemaFromJSON;
function ApiFieldSchemaFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'operators': json['operators'] == null ? undefined : json['operators'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}
exports.ApiFieldSchemaFromJSONTyped = ApiFieldSchemaFromJSONTyped;
function ApiFieldSchemaToJSON(json) {
    return ApiFieldSchemaToJSONTyped(json, false);
}
exports.ApiFieldSchemaToJSON = ApiFieldSchemaToJSON;
function ApiFieldSchemaToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'operators': value['operators'],
        'type': value['type'],
    };
}
exports.ApiFieldSchemaToJSONTyped = ApiFieldSchemaToJSONTyped;
