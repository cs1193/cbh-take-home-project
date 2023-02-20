# 02. Create Agent Custom ID API

## Value Proposition

As a facility manager, I would want to be able to set a custom id against a agent.

## Implementation

1. Modify a REST API endpoint to support update on [PUT] `/agent/{agentId}`
2. The request payload of the PUT API request should be -
    ```
        {
            "facilityId": "xyz",
            "customAgentId": "unique_custom_id"
        }
    ```
3. The request payload to be unmarshalled and validated against existing `agent_id` and `facility_id` if not add new or update existing.
4. If the `agent_custom_id` is not unique, return `409 Conflict`
5. If the `agent_custom_id` is accepted, return `201 Created`
6. If the `agent_id` is not found on relationship, throw `404 Not Found`

## Acceptance Criteria

1. Given an facility manager wants to provide a custom id to an agent, he/she should be able to hit the API with defined Payload.

## Definition of Done

1. The task is assumed complete contingent upon `01_support_custom_id`
2. All POSTMAN criteria is passing
3. Acceptance Criteria met
4. Code Reviewed
5. Code is deployed

## ETD

- 2 SP
