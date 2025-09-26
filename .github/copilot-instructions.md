# Copilot Instructions for chicAI

## Project Overview

- **React + TypeScript SPA** bootstrapped with Create React App.
- Main code in `src/`:
  - **Features:** Redux slices in `src/features/` (e.g., `Product/productSlice.tsx`).
  - **Pages:** Route-level components in `src/pages/` (e.g., `Home/`, `Products/`).
  - **Components:** Shared UI in `src/components/` (organized by feature, e.g., `Header/NavBar/`).
  - **Routing:** Centralized in `src/routers/AppRouter.tsx`.
- **Assets:** Images in `src/assets/img/`, SVGs in `src/assets/svg/`, public files in `public/`.

## Architecture & Data Flow

- **State Management:** Uses Redux Toolkit. Slices live in `src/features/`, store setup in `src/store/index.tsx`.
- **Routing:** All navigation handled by `AppRouter.tsx`. Use `ProtectedRoute.tsx` for auth-guarded pages.
- **Mock Data:** Page-specific mock data in `src/pages/[Page]/mockData.ts` (see `Products/mockData.ts` for carousel and featured products).
- **Styling:** Prefer styled-components (`styled.tsx` files) for custom styles. See `Carousel/styled.tsx` for responsive patterns.
- **Admin Features:** Role-based logic under `src/admin/roles/`.

## Developer Workflows

- **Start Dev Server:** `npm start` (http://localhost:3000)
- **Run Tests:** `npm test` (Jest, watch mode)
- **Build:** `npm run build` (outputs to `build/`)
- **Lint:** `npx eslint .` or use config in `eslint.config.js`
- **Type Check:** `npx tsc --noEmit` (config in `tsconfig.json`)

## Project-Specific Conventions

- **Naming:** PascalCase for components, camelCase for functions/variables.
- **Component Structure:** Use folders for logical grouping (e.g., `Home/components/HomeCarousel.tsx`).
- **Assets:** Reference images via direct import or `imagesMap` (see `mockData.ts`).
- **Feature Addition:**
  1. Create slice in `src/features/[Feature]/`
  2. Add page/component in `src/pages/[Feature]/`
  3. Update routing in `src/routers/AppRouter.tsx`
  4. Connect to store via hooks from `src/store/`

## Integration Points

- **API/Services:** Place business logic and API calls in `src/services/` (e.g., `pipelineLoginService.ts`).
- **External Libraries:** React, Redux Toolkit, Styled Components, MUI, etc. (see `package.json`).

## References & Examples

- See `README.md` for setup and scripts.
- See `src/routers/` for navigation logic.
- See `src/features/` for Redux patterns.
- See `src/pages/Products/mockData.ts` for asset and mock data usage.
- See `src/components/Carousel/styled.tsx` for responsive styled-components.

---

_If any conventions or workflows are unclear, ask the user for clarification or examples from the codebase._
