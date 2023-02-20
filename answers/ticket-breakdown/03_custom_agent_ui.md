# 03. Custom Agent UI

## Value Proposition

As a facility manager, I would want UI to update a custom agent id.

## Implementation

1. Modify the existing UI to add a text input, this field is nullable.
2. The label of the text input should read - "Agent Custom ID"
3. If non-unique "Agent Custom ID" is provided, it should be thrown with error message "Custom ID already exists, please provide a unique custom id".
4. On error state, the text input should be highlighted with border red.

## Acceptance Criteria

1. Given an facility manager should be able to provide a custom id and successfully saved.
2. Given an facility manager should be able to provide a non unique custom id and error states are displayed.
3. Given an facility manager should be able to provide not provide a custom id and successfully saved.

## Definition of Done

1. The task is assumed complete contingent upon `02_create_custom_id_api`
2. Unit test is passing
3. Acceptance Criteria met
4. Code Reviewed

## ETD

- 2 SP
