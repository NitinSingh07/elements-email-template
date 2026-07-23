/**
 * render.ts — Generate all templates as standalone HTML files
 *
 * Usage:
 *   npx tsx src/render.ts
 *
 * Output:
 *   output/saas-trial-expiring.html
 *   output/event-invitation.html
 *   output/changelog-release.html
 *   output/proposal-document.html
 *   output/account-activity-digest.html
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outputDir = join(__dirname, "..", "output");

const templates = [
  { id: "saas-trial-expiring", name: "SaaS Trial Expiring", component: SaasTrialExpiring },
  { id: "event-invitation", name: "Event / Webinar Invitation", component: EventInvitation },
  { id: "changelog-release", name: "Changelog / Release Notes", component: ChangelogRelease },
  { id: "proposal-document", name: "Proposal / SOW Document", component: ProposalDocument },
  { id: "account-activity-digest", name: "Account Activity Digest", component: AccountActivityDigest },
];

mkdirSync(outputDir, { recursive: true });

console.log("🚀 Rendering templates...\n");

for (const tmpl of templates) {
  const element = createElement(tmpl.component);
  const html = renderToHtml(element, { title: tmpl.name });
  const outputPath = join(outputDir, `${tmpl.id}.html`);
  writeFileSync(outputPath, html, "utf-8");
  const sizeKb = (Buffer.byteLength(html, "utf-8") / 1024).toFixed(1);
  console.log(`  ✅ ${tmpl.name}`);
  console.log(`     → output/${tmpl.id}.html (${sizeKb} KB)\n`);
}

console.log(`✨ Done! ${templates.length} templates rendered to ./output/`);
