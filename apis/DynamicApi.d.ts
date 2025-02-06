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
import type { ApiErrorResponse, QueryEntityWithRelations, QueryFilterResponse, QueryQueryFilter } from '../models/index';
export interface ModelFilterPostRequest {
    model: string;
    filter: QueryQueryFilter;
    page?: number;
    pageSize?: number;
    sort?: string;
}
export interface ModelGetRequest {
    model: string;
    page?: number;
    pageSize?: number;
    sort?: string;
}
export interface ModelIdDeleteRequest {
    model: string;
    id: string;
}
export interface ModelIdGetRequest {
    model: string;
    id: string;
}
export interface ModelIdPutRequest {
    model: string;
    id: string;
    entity: QueryEntityWithRelations;
}
export interface ModelPostRequest {
    model: string;
    entity: QueryEntityWithRelations;
}
/**
 *
 */
export declare class DynamicApi extends runtime.BaseAPI {
    /**
     * Filter entities using complex conditions including field expressions, logical operations, and relationship filtering
     * Filter entities
     */
    modelFilterPostRaw(requestParameters: ModelFilterPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryFilterResponse>>;
    /**
     * Filter entities using complex conditions including field expressions, logical operations, and relationship filtering
     * Filter entities
     */
    GetWhere(requestParameters: ModelFilterPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryFilterResponse>;
    /**
     * Get a list of entities. Use query parameters for simple filtering or POST to /filter for complex conditions
     * List and filter entities
     */
    modelGetRaw(requestParameters: ModelGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryFilterResponse>>;
    /**
     * Get a list of entities. Use query parameters for simple filtering or POST to /filter for complex conditions
     * List and filter entities
     */
    GetMany(requestParameters: ModelGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryFilterResponse>;
    /**
     * Delete an entity by its ID
     * Delete an entity
     */
    modelIdDeleteRaw(requestParameters: ModelIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiErrorResponse>>;
    /**
     * Delete an entity by its ID
     * Delete an entity
     */
    DeleteById(requestParameters: ModelIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiErrorResponse>;
    /**
     * Retrieve a single entity by its ID
     * Get an entity by ID
     */
    modelIdGetRaw(requestParameters: ModelIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryEntityWithRelations>>;
    /**
     * Retrieve a single entity by its ID
     * Get an entity by ID
     */
    GetById(requestParameters: ModelIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryEntityWithRelations>;
    /**
     * Update an existing entity by its ID
     * Update an entity
     */
    modelIdPutRaw(requestParameters: ModelIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryEntityWithRelations>>;
    /**
     * Update an existing entity by its ID
     * Update an entity
     */
    UpdateById(requestParameters: ModelIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryEntityWithRelations>;
    /**
     * Create a new entity of the specified model type
     * Create a new entity
     */
    modelPostRaw(requestParameters: ModelPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryEntityWithRelations>>;
    /**
     * Create a new entity of the specified model type
     * Create a new entity
     */
    Create(requestParameters: ModelPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryEntityWithRelations>;
}
