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
import * as runtime from '../runtime';
import type { ApiModelSchema } from '../models/index';
export interface ModelSchemaGetRequest {
    model: string;
}
/**
 *
 */
export declare class SchemaApi extends runtime.BaseAPI {
    /**
     * Returns the schema information for a specific model including fields and relationships
     * Get model schema
     */
    modelSchemaGetRaw(requestParameters: ModelSchemaGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiModelSchema>>;
    /**
     * Returns the schema information for a specific model including fields and relationships
     * Get model schema
     */
    modelSchemaGet(requestParameters: ModelSchemaGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiModelSchema>;
}
