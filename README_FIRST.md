# Arcalogix / SIM Project — Machine-readable spatial intelligence update

## Install
Copy the `app/sim-project/` directory from this ZIP into the corresponding directory of your existing Next.js / VS Code project, overwriting the three listed files. Do not overwrite the rest of your project.

## Files changed
- app/sim-project/page.tsx
- app/sim-project/ProjectScrollJourney.tsx
- app/sim-project/sim-project.module.css

## Website updates
- Hero now explains the distinction between a 3D picture and structured spatial data usable by software.
- Retains the current 7-step scroll experience, but shifts its content from a test-fit transaction to a reusable data lifecycle: SOURCE, VALIDATE, STRUCTURE, APPLY, REUSE, CONNECT, SCALE.
- Reframes the existing SIM foundation and illustrative room-record example around identity, attributes, spatial relationships and business rules.
- Makes software-agnostic integrations and portfolio value easier to understand.
- Keeps test fitting as one application of the platform, not the category of the product.
- Retains current images, controls, page layout, buttons and global UI/styles; no other pages changed.

## Caveat
The room-record example and IoT overlays remain clearly illustrative; integratability and data availability are subject to project requirements and scoped implementation.

## QA
- TypeScript validation: PASS (using project-compatible dependency copy).
- CSS syntax parsing: PASS.
- Responsive targeted previews at 1440px, 1366px, 768px, and 390px: no horizontal overflow.
- Full production `next build`: not completed; Linux SWC binary download blocked by sandbox network restrictions.
