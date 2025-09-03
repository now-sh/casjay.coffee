# Casjay.coffee Portfolio Project - Development Specification

## Project Overview
Vue 3 TypeScript portfolio application with API integrations, dark theme, and mobile-first responsive design.

## Recent Session Work Completed

### 1. Merge Conflict Resolution ✅

- **Issue**: Git merge conflicts in all Vue components with `<<<<<<<` markers
- **Solution**: Resolved all merge conflicts, keeping improved async/await + retry logic version
- **Files Fixed**:
  - `src/components/Projects.vue`
  - `src/components/myContact.vue`
  - `src/components/Welcome.vue`
  - `src/components/myOrgs.vue`

### 2. Coffee Spinner Enhancements ✅

- **Component Name Fix**: Changed from `spinner` to `CoffeeSpinner` for ESLint compliance
- **Dark Theme Optimization**:
  - Loading text: `#f8f9fa` (light color for dark backgrounds)
  - Coffee cup: `#D2691E` to `#A0522D` gradient (lighter browns)
  - Coffee liquid: `#8B4513` to `#654321` gradient
  - Handle: `#A0522D` border color
- **Size Enhancement**: Doubled all dimensions for better visibility
- **Positioning**: Added `7.5rem` margin-top for better placement

### 3. API Call Improvements ✅

- **Delay Added**: 500ms delay before each API call to showcase spinner
- **ESLint Compliance**: Fixed arrow function and promise executor issues
- **Pattern**: All components use `await new Promise((resolve) => { setTimeout(resolve, 500); });`
- **Configuration**: 5-second timeout, 1 retry on failure (maintained from previous work)

### 4. CSS Localization & Mobile-First Design ✅

- **Remote CSS Downloaded**:
  - Bootswatch Darkly theme saved to `public/css/bootstrap-darkly.min.css`
  - Updated `main.ts` import from CDN to local file
- **Mobile-First Enhancements**: Created `public/css/mobile-enhancements.css`
  - Progressive breakpoints: 320px → 576px → 768px → 992px → 1200px+
  - Touch-friendly navigation (44px minimum touch targets)
  - Responsive spinner sizing
  - Accessibility improvements (reduced motion, high contrast)
  - Print styles optimization

### 5. Node.js 20+ Support ✅

- **Legacy Provider Removed**: Eliminated `--openssl-legacy-provider` flags from all npm scripts
- **Engine Requirements**: Added engines specification requiring Node >=20.0.0, npm >=10.0.0
- **Script Cleanup**: Fixed deploy script syntax with proper `&&` chaining
- **Build Verified**: Successfully builds without legacy provider on Node v20.19.2

## Current Architecture

### Technology Stack

- **Frontend**: Vue 3.3.13 + TypeScript 4.9.5 + Vue Class Components
- **Styling**: Bootswatch Darkly theme + custom mobile-first enhancements
- **HTTP Client**: Axios 1.6.8 with timeout/retry logic
- **Build Tools**: Vue CLI 5.0.8 + Webpack
- **Linting**: ESLint with Airbnb config + Vue/TypeScript rules

### API Integration Pattern
All components use consistent pattern:

```typescript
async mounted() {
  await new Promise((resolve) => { setTimeout(resolve, 500); }); // Spinner showcase
  try {
    const response = await axios.get(API_URL, { timeout: 5000 });
    this.data = response.data;
  } catch (error) {
    console.log('First attempt failed, retrying...');
    try {
      const response = await axios.get(API_URL, { timeout: 5000 });
      this.data = response.data;
    } catch (retryError) {
      console.error('Failed after retry:', retryError);
    }
  }
  this.isLoading = false;
}
```

### API Endpoints

- **Organizations**: `https://api.casjay.coffee/api/v1/social/github/orgs/casjay`
- **Repositories**: `https://api.casjay.coffee/api/v1/social/github/repos/{orgName}`
- **Profile Data**: `https://api.casjay.coffee/api/v1/me/info/profile`
- **Domains Data**: `https://api.casjay.coffee/api/v1/me/info/domains`
- **Resume Data**: `https://api.casjay.coffee/api/v1/me/info/resume`

### File Structure

```
src/
├── components/
│   ├── Projects.vue (repo listings)
│   ├── myContact.vue (contact information)
│   ├── Welcome.vue (profile/bio)
│   └── myOrgs.vue (organization cards)
├── loaders/
│   └── spinner.vue (CoffeeSpinner component)
├── views/ (route components)
├── App.vue (navigation + footer)
└── main.ts (app entry + CSS imports)

public/
└── css/
    ├── bootstrap-darkly.min.css (Bootswatch theme)
    └── mobile-enhancements.css (responsive improvements)
```

## Known Issues & Warnings

1. **Console Statements**: ESLint warnings for console.log/error in retry logic (acceptable for debugging)
2. **Bundle Size**: Large vendor bundle (1.82 MiB) - consider code splitting for production
3. **Asset Size**: Bootstrap CSS causing size warnings (acceptable for design consistency)

## Development Commands

```bash
npm run serve    # Development server
npm run build    # Production build
npm run lint     # Code linting
npm run deploy   # Build + Vercel deployment
```

## Next Steps / Future Enhancements

1. Implement code splitting to reduce bundle size
2. Add error boundaries for better UX
3. Consider progressive web app features
4. Add unit tests for components
5. Implement caching strategies for API calls

## Git Status

- All merge conflicts resolved
- Ready for commit with current improvements
- Node 20+ compatibility confirmed
- Mobile-first responsive design implemented

## Deployment Notes

- Uses Vercel for hosting
- Environment requires Node >=20.0.0
- All CSS dependencies now local (no external CDN dependencies)
- Mobile-optimized with proper touch targets and responsive breakpoints

---
*Generated: 2025-08-28 - Session work completed and documented for handoff*
