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
exports.ApiErrorResponseToJSONTyped = exports.ApiErrorResponseToJSON = exports.ApiErrorResponseFromJSONTyped = exports.ApiErrorResponseFromJSON = exports.instanceOfApiErrorResponse = void 0;
/**
 * Check if a given object implements the ApiErrorResponse interface.
 */
function instanceOfApiErrorResponse(value) {
    return true;
}
exports.instanceOfApiErrorResponse = instanceOfApiErrorResponse;
function ApiErrorResponseFromJSON(json) {
    return ApiErrorResponseFromJSONTyped(json, false);
}
exports.ApiErrorResponseFromJSON = ApiErrorResponseFromJSON;
function ApiErrorResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'message': json['message'] == null ? undefined : json['message'],
    };
}
exports.ApiErrorResponseFromJSONTyped = ApiErrorResponseFromJSONTyped;
function ApiErrorResponseToJSON(json) {
    return ApiErrorResponseToJSONTyped(json, false);
}
exports.ApiErrorResponseToJSON = ApiErrorResponseToJSON;
function ApiErrorResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'message': value['message'],
    };
}
exports.ApiErrorResponseToJSONTyped = ApiErrorResponseToJSONTyped;
