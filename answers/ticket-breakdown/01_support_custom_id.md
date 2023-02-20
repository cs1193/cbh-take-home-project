# 01. Support Custom ID for Agent

## Value Proposition

As a facility manager, I would want to save custom id against an agent, so that I can query using my agent ids.

## Implementation

1. Add a new table `FacilityAgent` for custom id.
2. The `FacilityAgent` table should have `agent_id` FK against the `Agent` table.
3. The `FacilityAgent` table should have `facility_id` FK against the `Facility` table.
4. Add column `agent_custom_id` should not be nullable and should be unique.
5. On delete of `agent_id` from `Agent` table, the on delete will cascade on `FacilityAgent` table.

## Acceptance Criteria

1. Given an facility manager wants to provide a custom id to an agent, he/she should be able to insert a unique custom id against a valid `Facility` and a valid `Agent`
2. Given a duplicate `agent_custom_id`, the schema should not accept the duplicate. 

## Definition of Done

1. Acceptance Criteria met
2. Code Reviewed
3. Migration is complete

## ETD

- 1 SP
