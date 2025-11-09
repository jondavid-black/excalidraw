# Tasks: Upgrade jsdom to latest version

## Phase 1: Setup
- [ ] T001 Ensure working on branch `001-upgrade-jsdom`
- [ ] T002 Ensure all dependencies and lockfiles are up to date (run `yarn install` in repo root)

## Phase 2: Foundational
- [ ] T003 Identify all packages and apps that depend on jsdom (search for jsdom in all package.json files)

## Phase 3: User Story 1 - Secure Dependency Tree (P1)
- [ ] T004 [US1] Upgrade jsdom to the latest version in all relevant package.json files
- [ ] T005 [US1] Run `yarn install` to update lockfiles after jsdom upgrade
- [ ] T006 [US1] Run `yarn secure` and ensure no high vulnerabilities are present
- [ ] T007 [US1] Document the jsdom upgrade and security motivation in CHANGELOG.md

## Phase 4: User Story 2 - Maintain Project Stability (P2)
- [ ] T008 [US2] Run the full test suite (`yarn test:app` and any other relevant test scripts) and ensure all tests pass
- [ ] T009 [US2] Investigate and resolve any test failures or regressions caused by the jsdom upgrade

## Phase 5: Non-Functional Requirements (Performance, Packaging, Deployability)
- [ ] T010 Verify no performance regressions (test/build times, memory usage) after jsdom upgrade; document results in `specs/001-upgrade-jsdom/perf-results.md`
- [ ] T011 Verify project remains compatible with single-container builds (Dockerfile, build process)
- [ ] T012 Verify all health/readiness endpoints and configs remain unaffected; document in `specs/001-upgrade-jsdom/deploy-check.md`

## Final Phase: Polish & Cross-Cutting Concerns
- [ ] T013 Review and clean up any upgrade-related code or documentation changes in affected files
- [ ] T014 Ensure all CI checks (typecheck, lint, test, security) pass on the feature branch
- [ ] T015 Prepare a summary of the upgrade for PR/review in `specs/001-upgrade-jsdom/upgrade-summary.md` (include security and stability outcomes)

## Dependencies
- Phase 3 (User Story 1) must be completed before Phase 4 (User Story 2)
- Setup and Foundational phases must be completed before User Story phases
- Phase 5 (Non-Functional) can be done in parallel with Final Phase

## Parallel Execution Examples
- T004 (upgrade jsdom in all packages) and T007 (document changelog) can be done in parallel after foundational tasks
- T008 (run tests) can be started as soon as the upgrade and install are complete
- T010, T011, and T012 (non-functional checks) can be done in parallel after upgrade

## Implementation Strategy
- MVP: Complete all tasks for User Story 1 (T004-T007) to deliver a secure, vulnerability-free dependency tree
- Incremental: Proceed to User Story 2, non-functional, and polish phases for stability and completeness
