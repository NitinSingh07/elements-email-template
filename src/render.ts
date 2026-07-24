/**
 * render.ts — Generate all templates as standalone HTML files
 *
 * Usage:
 *   npx tsx src/render.ts
 */

import { renderToHtml } from "@unlayer/react-elements";
import { createElement } from "react";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import SaasTrialExpiring from "./templates/SaasTrialExpiring";
import EventInvitation from "./templates/EventInvitation";
import ChangelogRelease from "./templates/ChangelogRelease";
import ProposalDocument from "./templates/ProposalDocument";
import AccountActivityDigest from "./templates/AccountActivityDigest";
import DeveloperPortfolio from "./templates/DeveloperPortfolio";
import AIModelReport from "./templates/AIModelReport";
import SaaSInvoiceReceipt from "./templates/SaaSInvoiceReceipt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outputDir = join(__dirname, "..", "output");

const templates = [
  { id: "saas-trial-expiring", name: "SaaS Trial Expiring", component: SaasTrialExpiring },
  { id: "saas-invoice-receipt", name: "SaaS Invoice & Receipt", component: SaaSInvoiceReceipt },
  { id: "event-invitation", name: "Event / Webinar Invitation", component: EventInvitation },
  { id: "changelog-release", name: "Changelog / Release Notes", component: ChangelogRelease },
  { id: "developer-portfolio", name: "Developer Portfolio", component: DeveloperPortfolio },
  { id: "ai-model-report", name: "AI Model Training Report", component: AIModelReport },
  { id: "proposal-document", name: "Proposal / SOW Document", component: ProposalDocument },
  { id: "account-activity-digest", name: "Account Activity Digest", component: AccountActivityDigest },
];

mkdirSync(outputDir, { recursive: true });

console.log("Rendering templates...\n");

for (const tmpl of templates) {
  const element = createElement(tmpl.component);
  const html = renderToHtml(element, { title: tmpl.name });
  const outputPath = join(outputDir, `${tmpl.id}.html`);
  writeFileSync(outputPath, html, "utf-8");
  const sizeKb = (Buffer.byteLength(html, "utf-8") / 1024).toFixed(1);
  console.log(`  [OK] ${tmpl.name}`);
  console.log(`       -> output/${tmpl.id}.html (${sizeKb} KB)\n`);
}

console.log(`Done! ${templates.length} templates rendered to ./output/`);
