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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicApi = void 0;
const runtime = __importStar(require("../runtime"));
const ws_1 = __importDefault(require("ws"));
const index_1 = require("../models/index");
/**
 *
 */
class DynamicApi extends runtime.BaseAPI {
    constructor() {
        super(...arguments);
        this.wsConnections = {};
    }
    connectWebSocket(model, event, callback) {
        console.log(this.configuration);
        const wsUrl = `${this.configuration.basePath.replace('http', 'ws')}/ws/${model}/${event}`;
        const ws = new ws_1.default(wsUrl, [], {
            headers: {
                "Authorization": "Bearer " + this.configuration.apiKey,
            }
        });
        ws.on('open', () => {
            console.log(`Connected to WebSocket for ${model} ${event} events`);
        });
        ws.on('message', (message) => {
            const parsedMessage = JSON.parse(message.toString());
            callback(parsedMessage.event, parsedMessage.model, parsedMessage.data);
        });
        ws.on('close', () => {
            console.log(`WebSocket connection for ${model} ${event} events closed`);
        });
        ws.on('error', (error) => {
            console.error(`WebSocket error for ${model} ${event} events:`, error);
        });
        this.wsConnections[`${model}-${event}`] = ws;
    }
    listen(model, event, callback) {
        this.connectWebSocket(model, event, callback);
    }
    closeWebSocketConnections() {
        Object.values(this.wsConnections).forEach(ws => ws.close());
        this.wsConnections = {};
    }
    /**
       * Update multiple entities that match the provided query expression
       * Update multiple entities
       */
    async modelFilterPutRaw(requestParameters, initOverrides) {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError('model', 'Required parameter "model" was null or undefined when calling modelFilterPut().');
        }
        if (requestParameters['entity'] == null) {
            throw new runtime.RequiredError('entity', 'Required parameter "entity" was null or undefined when calling modelFilterPut().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/{model}/filter`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: {
                "MainEntity": (0, index_1.QueryEntityWithRelationsToJSON)(requestParameters['entity']).mainEntity,
                "Relations": (0, index_1.QueryEntityWithRelationsToJSON)(requestParameters['entity']).relations,
                ...(0, index_1.QueryQueryFilterToJSON)(requestParameters['filter'])
            },
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * Update multiple entities that match the provided query expression
     * Update multiple entities
     */
    async UpdateWhere(requestParameters, initOverrides) {
        const response = await this.modelFilterPutRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
      * Delete multiple entities that match the provided query expression
      * Delete multiple entities
      */
    async modelFilterDeleteRaw(requestParameters, initOverrides) {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError('model', 'Required parameter "model" was null or undefined when calling modelFilterDelete().');
        }
        if (requestParameters['filter'] == null) {
            throw new runtime.RequiredError('filter', 'Required parameter "filter" was null or undefined when calling modelFilterDelete().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/{model}/filter`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.QueryQueryFilterToJSON)(requestParameters['filter']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * Delete multiple entities that match the provided query expression
     * Delete multiple entities
     */
    async DeleteWhere(requestParameters, initOverrides) {
        const response = await this.modelFilterDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Filter entities using complex conditions including field expressions, logical operations, and relationship filtering
     * Filter entities
     */
    async modelFilterPostRaw(requestParameters, initOverrides) {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError('model', 'Required parameter "model" was null or undefined when calling modelFilterPost().');
        }
        if (requestParameters['filter'] == null) {
            throw new runtime.RequiredError('filter', 'Required parameter "filter" was null or undefined when calling modelFilterPost().');
        }
        const queryParameters = {};
        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }
        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }
        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/{model}/filter`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.QueryQueryFilterToJSON)(requestParameters['filter']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.QueryFilterResponseFromJSON)(jsonValue));
    }
    /**
     * Filter entities using complex conditions including field expressions, logical operations, and relationship filtering
     * Filter entities
     */
    async GetWhere(requestParameters, initOverrides) {
        const response = await this.modelFilterPostRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get a list of entities. Use query parameters for simple filtering or POST to /filter for complex conditions
     * List and filter entities
     */
    async modelGetRaw(requestParameters, initOverrides) {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError('model', 'Required parameter "model" was null or undefined when calling modelGet().');
        }
        const queryParameters = {};
        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }
        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }
        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.QueryFilterResponseFromJSON)(jsonValue));
    }
    /**
     * Get a list of entities. Use query parameters for simple filtering or POST to /filter for complex conditions
     * List and filter entities
     */
    async GetAll(requestParameters, initOverrides) {
        const response = await this.modelGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Delete an entity by its ID
     * Delete an entity
     */
    async modelIdDeleteRaw(requestParameters, initOverrides) {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError('model', 'Required parameter "model" was null or undefined when calling modelIdDelete().');
        }
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling modelIdDelete().');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/{model}/{id}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ApiErrorResponseFromJSON)(jsonValue));
    }
    /**
     * Delete an entity by its ID
     * Delete an entity
     */
    async DeleteById(requestParameters, initOverrides) {
        const response = await this.modelIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Retrieve a single entity by its ID
     * Get an entity by ID
     */
    async modelIdGetRaw(requestParameters, initOverrides) {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError('model', 'Required parameter "model" was null or undefined when calling modelIdGet().');
        }
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling modelIdGet().');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/{model}/{id}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.QueryFilterResponseFromJSON)(jsonValue));
    }
    /**
     * Retrieve a single entity by its ID
     * Get an entity by ID
     */
    async GetById(requestParameters, initOverrides) {
        const response = await this.modelIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Update an existing entity by its ID
     * Update an entity
     */
    async modelIdPutRaw(requestParameters, initOverrides) {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError('model', 'Required parameter "model" was null or undefined when calling modelIdPut().');
        }
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling modelIdPut().');
        }
        if (requestParameters['entity'] == null) {
            throw new runtime.RequiredError('entity', 'Required parameter "entity" was null or undefined when calling modelIdPut().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/{model}/{id}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.QueryEntityWithRelationsToJSON)(requestParameters['entity']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.QueryEntityWithRelationsFromJSON)(jsonValue));
    }
    /**
     * Update an existing entity by its ID
     * Update an entity
     */
    async UpdateById(requestParameters, initOverrides) {
        const response = await this.modelIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Create a new entity of the specified model type
     * Create a new entity
     */
    async modelPostRaw(requestParameters, initOverrides) {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError('model', 'Required parameter "model" was null or undefined when calling modelPost().');
        }
        if (requestParameters['entity'] == null) {
            throw new runtime.RequiredError('entity', 'Required parameter "entity" was null or undefined when calling modelPost().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.QueryEntityWithRelationsToJSON)(requestParameters['entity']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.QueryEntityWithRelationsFromJSON)(jsonValue));
    }
    /**
     * Create a new entity of the specified model type
     * Create a new entity
     */
    async Create(requestParameters, initOverrides) {
        const response = await this.modelPostRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.DynamicApi = DynamicApi;
