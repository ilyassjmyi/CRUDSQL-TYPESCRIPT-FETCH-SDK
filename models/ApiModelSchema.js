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
exports.instanceOfApiModelSchema = instanceOfApiModelSchema;
exports.ApiModelSchemaFromJSON = ApiModelSchemaFromJSON;
exports.ApiModelSchemaFromJSONTyped = ApiModelSchemaFromJSONTyped;
exports.ApiModelSchemaToJSON = ApiModelSchemaToJSON;
exports.ApiModelSchemaToJSONTyped = ApiModelSchemaToJSONTyped;
const ApiRelationshipSchema_1 = require("./ApiRelationshipSchema");
const ApiFieldSchema_1 = require("./ApiFieldSchema");
/**
 * Check if a given object implements the ApiModelSchema interface.
 */
function instanceOfApiModelSchema(value) {
    return true;
}
function ApiModelSchemaFromJSON(json) {
    return ApiModelSchemaFromJSONTyped(json, false);
}
function ApiModelSchemaFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fields': json['fields'] == null ? undefined : (json['fields'].map(ApiFieldSchema_1.ApiFieldSchemaFromJSON)),
        'relationships': json['relationships'] == null ? undefined : (json['relationships'].map(ApiRelationshipSchema_1.ApiRelationshipSchemaFromJSON)),
    };
}
function ApiModelSchemaToJSON(json) {
    return ApiModelSchemaToJSONTyped(json, false);
}
function ApiModelSchemaToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fields': value['fields'] == null ? undefined : (value['fields'].map(ApiFieldSchema_1.ApiFieldSchemaToJSON)),
        'relationships': value['relationships'] == null ? undefined : (value['relationships'].map(ApiRelationshipSchema_1.ApiRelationshipSchemaToJSON)),
    };
}
