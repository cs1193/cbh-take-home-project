# 03. Report Generation using Custom ID

## Value Proposition

As a facility manager, I would want generate report with custom ids.

## Implementation

1. Each `agent_custom_id` is attached to a `agent_id`.
2. Each `agent_id` is associated with `shift_id` of `Shift` table.
3. The method `generateReport` is expected to perform a OUTER JOIN against `agent_id` in `Shift` and `FacilityAgent` table to generate report by `agent_custom_id`

## Acceptance Criteria

1. Given an facility manager should be able to generate report using `agent_custom_id`

## Definition of Done

1. The task is assumed complete contingent upon `02_create_custom_id_api`
2. Acceptance Criteria met
3. Code Reviewed

## ETD

- 1 SP
