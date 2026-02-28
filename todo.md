# AI Collaboration Hub - TODO

## Phase 1: System Upgrade
- [x] Upgrade project to full-stack (web-db-user)
- [x] Resolve merge conflicts in Home.tsx
- [x] Run database migration (pnpm db:push)
- [x] Verify dev server is running correctly

## Phase 2: Research Library Enhancement
- [x] Scan project folder for all research papers
- [x] Copy papers to client/public/papers directory
- [x] Update Sources.tsx with complete paper list
- [x] Implement functional Download buttons
- [x] Implement functional Read/View buttons

## Phase 3: Real API Integration
- [x] Create backend proxy routes for GitHub API
- [x] Create backend proxy routes for Discord API
- [x] Update Home.tsx to use tRPC for data fetching
- [x] Add environment variable support for API tokens
- [x] Create integrationsRouter with mock data generators

## Phase 4: Mental Model Graph Persistence
- [x] Create database schema for graph nodes and edges
- [x] Create tRPC procedures for saving/loading graph state
- [x] Update MentalModelGraph component to persist changes
- [x] Add auto-save functionality
- [x] Add node creation/deletion UI

## Phase 5: User Profiles
- [x] Create database schema for user profiles
- [x] Create UserProfile page component
- [x] Aggregate user contributions and voting history
- [x] Display mental model traits per user
- [x] Add user profile navigation
- [x] Add login/logout to Layout

## Phase 6: Team Collaboration Enhancement
- [x] Update TeamCollab to use tRPC for real data
- [x] Implement voting persistence with database
- [x] Add threaded replies with database storage
- [x] Show user avatars and names from database

## Phase 7: Polish & Enhancements
- [x] Add Team Directory page
- [x] Add Settings/Integrations page
- [x] Enhance Metrics page with real data
- [x] Add more visual polish and animations
- [x] Final testing and verification

## Phase 8: Collaboration Models Enhancement
- [x] Add detailed model descriptions with use cases
- [x] Create interactive model comparison matrix
- [x] Add model selection wizard/questionnaire
- [x] Implement model effectiveness ratings
- [x] Add research-backed insights for each model
- [x] Create visual diagrams for each collaboration pattern
- [x] Add real-time model switching capability
- [x] Enhance Team Discussion integration per model

## Phase 9: About Page
- [x] Create About.tsx with clear project explanation
- [x] Add beginner-friendly analogies and examples
- [x] Include visual diagrams showing how AI collaboration works
- [x] Add FAQ section for common questions
- [x] Add About route to App.tsx
- [x] Add About link to navigation

## Phase 10: Rebrand & New Features
- [x] Rename website to "Codex cogitat, ergo sum?"
- [x] Update Layout.tsx with new branding
- [x] Update index.html title
- [x] Add philosophical context to About page (Descartes' cogito)
- [x] Explain the conceptual inversion (machine thinking → human existence)
- [x] Create Getting Started guide page
- [x] Add step-by-step onboarding flow
- [x] Add video tutorial section with placeholders

## Phase 11: Next Iteration
- [x] Move About section to top of navigation
- [x] Create Prompt Library page with ready-to-use prompts
- [x] Add prompts for each collaboration model
- [x] Implement Session Feedback system
- [x] Add post-session feedback form
- [x] Store feedback in database
- [x] Additional polish and enhancements
- [x] All 67 tests passing

## Phase 12: Custom Prompts Feature
- [x] Add customPrompts table to database schema
- [x] Create promptsRouter for CRUD operations
- [x] Add create prompt modal/form
- [x] Add edit prompt functionality
- [x] Add delete prompt functionality
- [x] Implement prompt sharing (public/private toggle)
- [x] Display user's custom prompts in Prompt Library
- [x] Add "My Prompts" filter tab
- [x] Add community prompts tab with likes
- [x] Add usage tracking for prompts
- [x] Write tests for custom prompts feature (21 tests)
- [x] All 88 tests passing

## Phase 13: Research Library Update
- [x] Verify all 15 papers are in public/papers folder
- [x] Update Sources.tsx to list all 15 papers with accurate metadata
- [x] Ensure all Download and Read buttons work correctly
- [x] Add sorting by citations, year, or title
- [x] Add stats overview (total papers, citations, categories)
- [x] Improve paper cards with expand/collapse functionality

## Phase 14: Google Drive Paper Sync
- [x] Download new papers from Google Drive Manus/KI folder
- [x] Identify papers not already in local collection (found 6 new papers)
- [x] Copy new papers to client/public/papers
- [x] Update Sources.tsx with new paper metadata (now 21 papers total)

## Phase 15: Citation Graph
- [x] Design citation relationships between papers (25 connections)
- [x] Create CitationGraph component using ReactFlow
- [x] Add paper nodes with category-based coloring (7 categories)
- [x] Add citation edges with directional arrows (cites, extends, related)
- [x] Implement node click to view paper details
- [x] Add legend for categories and connection types
- [x] Add timeline legend (2023-2025)
- [x] Integrate into Research Library page with view toggle

## Phase 16: Meta/Manus Design Redesign
- [x] Analyze Meta and Manus design styles from reference pages
- [x] Update color scheme to clean, professional palette (white/light backgrounds, blue accents)
- [x] Update typography to modern sans-serif (Inter)
- [x] Redesign Layout with horizontal top navigation
- [x] Add hero sections with gradient backgrounds
- [x] Update card styles with soft shadows and rounded corners
- [x] Add smooth animations and micro-interactions
- [x] Update Home page with new design language
- [x] Update About page with new design language
- [x] Update remaining pages with new design language
- [x] All 131 tests passing

## Phase 17: Design Consistency & Search
- [x] Update Collaboration page with new design
- [x] Update Mental Models page with new design
- [x] Update Metrics page with new design
- [x] Update Ethics page with new design
- [x] Update Getting Started page with new design
- [x] Update Prompt Library page with new design
- [x] Update Sources page with new design
- [x] Update Feedback page with new design
- [x] Update Team page with new design
- [x] Update Settings page with new design
- [x] Update Profile page with new design
- [ ] Implement global search functionality
- [ ] Add search to navigation bar

## Phase 18: Hero Image Generation
- [x] Generate hero image for About page (philosophical theme: human thought meets AI)
- [x] Generate hero image for Collaboration page (human-AI partnership)
- [x] Generate hero image for Getting Started page (journey/onboarding theme)
- [x] Copy images to client/public/images folder
- [x] Integrate images into About.tsx
- [x] Integrate images into Collaboration.tsx
- [x] Integrate images into GettingStarted.tsx
- [x] All 140 tests passing

## Phase 19: Future Enhancements
- [ ] Implement global search functionality (Ctrl+K)
- [ ] Add keyboard shortcuts for power users
- [ ] Add graph filtering by category/year in citation graph
- [ ] Create prompt templates for "Start from Template" feature
- [ ] Implement paper annotations and reading lists
- [ ] Add BibTeX/APA/MLA citation export

## Phase 20: Philosophical Framework Integration (Current Rebuild)
- [x] Create About/Philosophy page with Cartesian cogito analysis
- [x] Add "I think, therefore I am" → radical doubt → cogito resists doubt sections
- [x] Add "AI and Thinking" section (Cartesian sense)
- [x] Add "Codex cogitat, ergo sum?" conceptual inversion section
- [x] Add "Conceptual Shift" and "Takeaway" sections
- [x] Update navigation to include About/Philosophy page
- [x] Update Home hero to reference philosophical framing
- [x] Write tests for About/Philosophy page (27 tests)
- [x] Verify all tests pass (243 total: 216 existing + 27 new)
- [ ] Push updates to GitHub (Dropgunner/Cogito-Website)
- [ ] Save checkpoint
