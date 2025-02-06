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


import * as runtime from '../runtime';
import type {
  ApiErrorResponse,
  QueryEntityWithRelations,
  QueryFilterResponse,
  QueryQueryFilter,
} from '../models/index';
import {
    ApiErrorResponseFromJSON,
    ApiErrorResponseToJSON,
    QueryEntityWithRelationsFromJSON,
    QueryEntityWithRelationsToJSON,
    QueryFilterResponseFromJSON,
    QueryFilterResponseToJSON,
    QueryQueryFilterFromJSON,
    QueryQueryFilterToJSON,
} from '../models/index';

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
export class DynamicApi extends runtime.BaseAPI {

    /**
     * Filter entities using complex conditions including field expressions, logical operations, and relationship filtering
     * Filter entities
     */
    async modelFilterPostRaw(requestParameters: ModelFilterPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryFilterResponse>> {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError(
                'model',
                'Required parameter "model" was null or undefined when calling modelFilterPost().'
            );
        }

        if (requestParameters['filter'] == null) {
            throw new runtime.RequiredError(
                'filter',
                'Required parameter "filter" was null or undefined when calling modelFilterPost().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/{model}/filter`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: QueryQueryFilterToJSON(requestParameters['filter']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryFilterResponseFromJSON(jsonValue));
    }

    /**
     * Filter entities using complex conditions including field expressions, logical operations, and relationship filtering
     * Filter entities
     */
    async modelFilterPost(requestParameters: ModelFilterPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryFilterResponse> {
        const response = await this.modelFilterPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of entities. Use query parameters for simple filtering or POST to /filter for complex conditions
     * List and filter entities
     */
    async modelGetRaw(requestParameters: ModelGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryFilterResponse>> {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError(
                'model',
                'Required parameter "model" was null or undefined when calling modelGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryFilterResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of entities. Use query parameters for simple filtering or POST to /filter for complex conditions
     * List and filter entities
     */
    async modelGet(requestParameters: ModelGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryFilterResponse> {
        const response = await this.modelGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an entity by its ID
     * Delete an entity
     */
    async modelIdDeleteRaw(requestParameters: ModelIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiErrorResponse>> {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError(
                'model',
                'Required parameter "model" was null or undefined when calling modelIdDelete().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling modelIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{model}/{id}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiErrorResponseFromJSON(jsonValue));
    }

    /**
     * Delete an entity by its ID
     * Delete an entity
     */
    async modelIdDelete(requestParameters: ModelIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiErrorResponse> {
        const response = await this.modelIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a single entity by its ID
     * Get an entity by ID
     */
    async modelIdGetRaw(requestParameters: ModelIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryEntityWithRelations>> {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError(
                'model',
                'Required parameter "model" was null or undefined when calling modelIdGet().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling modelIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{model}/{id}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryEntityWithRelationsFromJSON(jsonValue));
    }

    /**
     * Retrieve a single entity by its ID
     * Get an entity by ID
     */
    async modelIdGet(requestParameters: ModelIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryEntityWithRelations> {
        const response = await this.modelIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an existing entity by its ID
     * Update an entity
     */
    async modelIdPutRaw(requestParameters: ModelIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryEntityWithRelations>> {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError(
                'model',
                'Required parameter "model" was null or undefined when calling modelIdPut().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling modelIdPut().'
            );
        }

        if (requestParameters['entity'] == null) {
            throw new runtime.RequiredError(
                'entity',
                'Required parameter "entity" was null or undefined when calling modelIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/{model}/{id}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: QueryEntityWithRelationsToJSON(requestParameters['entity']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryEntityWithRelationsFromJSON(jsonValue));
    }

    /**
     * Update an existing entity by its ID
     * Update an entity
     */
    async modelIdPut(requestParameters: ModelIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryEntityWithRelations> {
        const response = await this.modelIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new entity of the specified model type
     * Create a new entity
     */
    async modelPostRaw(requestParameters: ModelPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryEntityWithRelations>> {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError(
                'model',
                'Required parameter "model" was null or undefined when calling modelPost().'
            );
        }

        if (requestParameters['entity'] == null) {
            throw new runtime.RequiredError(
                'entity',
                'Required parameter "entity" was null or undefined when calling modelPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: QueryEntityWithRelationsToJSON(requestParameters['entity']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryEntityWithRelationsFromJSON(jsonValue));
    }

    /**
     * Create a new entity of the specified model type
     * Create a new entity
     */
    async modelPost(requestParameters: ModelPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryEntityWithRelations> {
        const response = await this.modelPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
