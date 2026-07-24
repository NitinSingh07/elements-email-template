# Elements Enterprise Kit ⚡

A high-performance collection of 7 original, production-grade email, web, and document templates built with **[@unlayer/react-elements](https://github.com/unlayer/elements)**.

Designed for SaaS platforms, developer tools, and modern web applications needing responsive emails, web archives, and print-ready PDFs from a single React codebase.

---

## 🌟 Submission Highlights

| Metric / Feature | Detail |
| :--- | :--- |
| **Core Dependency** | `@unlayer/react-elements` (MIT) |
| **Output Modes Covered** | **Email** (table-based), **Web** (flexbox/div), **Document** (print/PDF) |
| **Templates Included** | **7 original templates** (Linear, Luma, Raycast, Stripe, Notion inspired) |
| **Interactive Showcase** | Embedded Vite Live Preview App + Source Code Viewer + Raw HTML + JSON Exporter |
| **Visual Editor Parity** | Integrated `renderToJson()` for round-tripping with Unlayer Visual Builder |
| **Build & Render Script** | Automated SSR renderer producing standalone HTML files (`npm run render`) |

---

## 📦 Templates Included

### 1. 📧 SaaS Trial Expiring (Email Mode)
- **Inspiration:** Linear / Stripe
- **Features:** Dark-to-light gradient layout, bold countdown timer block, 3-column metric cards, and a side-by-side Free vs. Pro comparison table.
- **Elements Used:** `<Email>`, `<Row>`, `<Column>`, `<Heading>`, `<Paragraph>`, `<Button>`, `<Divider>`, `<Table>`, `ColumnLayouts.ThreeEqual`, `ColumnLayouts.TwoEqual`

### 2. 📧 Event / Webinar Invitation (Email Mode)
- **Inspiration:** Luma / Cal.com
- **Features:** Calendar date card block, 2x2 speaker avatar grid, structured agenda timeline, location/duration details, and custom dual action buttons.
- **Elements Used:** `<Email>`, `<Row>`, `<Column>`, `<Heading>`, `<Paragraph>`, `<Button>`, `<Image>`, `<Divider>`, `<Social>`, `ColumnLayouts.TwoNarrowWide`

### 3. 📧 Changelog & Release Notes (Email Mode)
- **Inspiration:** Linear / Raycast
- **Features:** Dark theme engineering update, version badge, feature highlight cards, categorized bug fix / improvement list, and migration notes.
- **Elements Used:** `<Email>`, `<Row>`, `<Column>`, `<Heading>`, `<Paragraph>`, `<Button>`, `<Divider>`, `<Html>`, `ColumnLayouts.TwoEqual`

### 4. 🌐 Developer Portfolio (Page / Web Mode)
- **Inspiration:** Personal Site / Vercel
- **Features:** Full personal website rendered in `<Page>` mode (div + flexbox). Features bio section, key statistics bar, project cards grid, tech stack breakdown, contact modal CTA, and social footer.
- **Elements Used:** `<Page>`, `<Row>`, `<Column>`, `<Heading>`, `<Paragraph>`, `<Button>`, `<Image>`, `<Divider>`, `<Social>`, `<Menu>`, `ColumnLayouts.FourEqual`, `ColumnLayouts.ThreeEqual`

### 5. 📄 AI Model Evaluation Report (Document / PDF Mode)
- **Inspiration:** Technical / Scientific Paper
- **Features:** Print-optimized ML model evaluation document. Includes accuracy & loss metrics, multi-class confusion matrix, hyperparameter specs table, key findings status badges, and executive sign-off blocks.
- **Elements Used:** `<Document>`, `<Row>`, `<Column>`, `<Heading>`, `<Paragraph>`, `<Divider>`, `<Table>`, `<Html>`, `ColumnLayouts.FourEqual`, `ColumnLayouts.ThreeEqual`

### 6. 📄 Proposal & Statement of Work (Document / PDF Mode)
- **Inspiration:** Notion / Stripe Invoicing
- **Features:** Print-ready contract proposal with client/vendor headers, executive summary, itemized deliverables & pricing table, project timeline, terms, and signature blocks.
- **Elements Used:** `<Document>`, `<Row>`, `<Column>`, `<Heading>`, `<Paragraph>`, `<Divider>`, `<Table>`, `ColumnLayouts.TwoEqual`

### 7. 📧 Account Activity Digest (Email Mode)
- **Inspiration:** Figma / GitHub
- **Features:** Weekly workspace digest featuring 3-column metric cards, status-coded action items, team activity timeline, and navigation bar.
- **Elements Used:** `<Email>`, `<Row>`, `<Column>`, `<Heading>`, `<Paragraph>`, `<Button>`, `<Divider>`, `<Menu>`, `ColumnLayouts.ThreeEqual`

---

## 🛠️ Tech Stack & Architecture

- **React 19** & **TypeScript 5.8**
- **Vite 6** for fast dev server and static preview bundling
- **@unlayer/react-elements** for template component rendering
- **tsx** for server-side HTML build generation

```
elements-enterprise-kit/
├── src/
│   ├── templates/
│   │   ├── SaasTrialExpiring.tsx      # Trial expiration email
│   │   ├── EventInvitation.tsx        # Event invitation email
│   │   ├── ChangelogRelease.tsx       # Release notes email
│   │   ├── DeveloperPortfolio.tsx     # Portfolio web page
│   │   ├── AIModelReport.tsx          # ML report document
│   │   ├── ProposalDocument.tsx       # Proposal SOW document
│   │   ├── AccountActivityDigest.tsx  # Weekly activity digest
│   │   └── index.ts                   # Template catalog & barrel export
│   ├── preview/
│   │   ├── PreviewApp.tsx             # Interactive preview dashboard
│   │   └── styles.css                 # Dark theme dashboard styling
│   ├── render.ts                      # SSR HTML build script
│   ├── main.tsx
│   └── index.ts
├── output/                            # Generated HTML files
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm / pnpm / yarn

### Installation
```bash
git clone https://github.com/NitinSingh07/elements-email-template.git
cd elements-email-template
npm install
```

### Launch Interactive Preview App
Starts the Vite dev server with live template switcher, desktop/mobile preview, source viewer, and raw HTML / JSON export:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Render Standalone HTML Output Files
Runs the SSR rendering script to generate clean, framework-free HTML documents for all 7 templates in `./output/`:
```bash
npm run render
```

---

## 💡 How to Use Templates in Your Project

### 1. Render to HTML string (Server-Side / ESP)
```tsx
import { renderToHtml } from "@unlayer/react-elements";
import { SaasTrialExpiring } from "./src/templates";

// Generate clean, email-safe HTML document string
const html = renderToHtml(<SaasTrialExpiring />, {
  title: "Your trial ends in 3 days",
});
```

### 2. Export to Unlayer Design JSON (Visual Editor)
```tsx
import { renderToJson } from "@unlayer/react-elements";
import { ProposalDocument } from "./src/templates";

// Convert component tree to Unlayer JSON schema for visual drag-and-drop editing
const designJson = renderToJson(<ProposalDocument />);
```

---

## 📄 License

[MIT](LICENSE) © Nitin Pratap Singh
