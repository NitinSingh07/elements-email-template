import type { ReactElement } from "react";

import SaasTrialExpiring from "./SaasTrialExpiring";
import EventInvitation from "./EventInvitation";
import ChangelogRelease from "./ChangelogRelease";
import ProposalDocument from "./ProposalDocument";
import AccountActivityDigest from "./AccountActivityDigest";
import DeveloperPortfolio from "./DeveloperPortfolio";
import AIModelReport from "./AIModelReport";

// Source code via Vite ?raw imports (for the preview app)
import saasTrialSource from "./SaasTrialExpiring.tsx?raw";
import eventInvitationSource from "./EventInvitation.tsx?raw";
import changelogSource from "./ChangelogRelease.tsx?raw";
import proposalSource from "./ProposalDocument.tsx?raw";
import activityDigestSource from "./AccountActivityDigest.tsx?raw";
import portfolioSource from "./DeveloperPortfolio.tsx?raw";
import aiReportSource from "./AIModelReport.tsx?raw";

export interface TemplateEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  inspiration: string;
  colorAccent: string;
  mode: "email" | "web" | "document";
  component: () => ReactElement;
  sourceCode: string;
  elementsUsed: string[];
}

export const templates: TemplateEntry[] = [
  {
    id: "saas-trial-expiring",
    name: "SaaS Trial Expiring",
    description:
      "Dark-to-light gradient trial expiration with countdown, metric cards, and feature comparison table",
    category: "saas",
    inspiration: "Linear",
    colorAccent: "#7c3aed",
    mode: "email",
    component: SaasTrialExpiring,
    sourceCode: saasTrialSource,
    elementsUsed: ["Email", "Row", "Column", "Heading", "Paragraph", "Button", "Divider", "Table"],
  },
  {
    id: "event-invitation",
    name: "Event / Webinar Invitation",
    description:
      "Calendar-card style event invite with date block, speaker grid, agenda, and dual CTAs",
    category: "marketing",
    inspiration: "Luma / Cal.com",
    colorAccent: "#7c3aed",
    mode: "email",
    component: EventInvitation,
    sourceCode: eventInvitationSource,
    elementsUsed: ["Email", "Row", "Column", "Heading", "Paragraph", "Button", "Image", "Divider", "Social"],
  },
  {
    id: "changelog-release",
    name: "Changelog / Release Notes",
    description:
      "Dark-themed developer changelog with version badge, feature cards, bug fixes, and migration notes",
    category: "developer",
    inspiration: "Linear / Raycast",
    colorAccent: "#34d399",
    mode: "email",
    component: ChangelogRelease,
    sourceCode: changelogSource,
    elementsUsed: ["Email", "Row", "Column", "Heading", "Paragraph", "Button", "Divider", "Html"],
  },
  {
    id: "developer-portfolio",
    name: "Developer Portfolio",
    description:
      "Full personal website with project cards, tech stack grid, stats bar, and social links — Page mode",
    category: "web",
    inspiration: "Personal Site",
    colorAccent: "#a78bfa",
    mode: "web",
    component: DeveloperPortfolio,
    sourceCode: portfolioSource,
    elementsUsed: ["Page", "Row", "Column", "Heading", "Paragraph", "Button", "Image", "Divider", "Social", "Menu"],
  },
  {
    id: "ai-model-report",
    name: "AI Model Training Report",
    description:
      "Print-ready ML evaluation report with metrics, confusion matrix, hyperparameters, and approvals",
    category: "document",
    inspiration: "Research Paper",
    colorAccent: "#16a34a",
    mode: "document",
    component: AIModelReport,
    sourceCode: aiReportSource,
    elementsUsed: ["Document", "Row", "Column", "Heading", "Paragraph", "Divider", "Table", "Html", "Image"],
  },
  {
    id: "proposal-document",
    name: "Proposal / SOW",
    description:
      "Print-ready professional proposal with deliverables table, timeline, terms, and signature blocks",
    category: "document",
    inspiration: "Notion / Stripe",
    colorAccent: "#6366f1",
    mode: "document",
    component: ProposalDocument,
    sourceCode: proposalSource,
    elementsUsed: ["Document", "Row", "Column", "Heading", "Paragraph", "Divider", "Table"],
  },
  {
    id: "account-activity-digest",
    name: "Account Activity Digest",
    description:
      "Weekly team digest with metric cards, color-coded action items, activity feed, and navigation menu",
    category: "saas",
    inspiration: "Figma / GitHub",
    colorAccent: "#0ea5e9",
    mode: "email",
    component: AccountActivityDigest,
    sourceCode: activityDigestSource,
    elementsUsed: ["Email", "Row", "Column", "Heading", "Paragraph", "Button", "Divider", "Menu"],
  },
];

export const templateMap = Object.fromEntries(
  templates.map((t) => [t.id, t])
);

export {
  SaasTrialExpiring,
  EventInvitation,
  ChangelogRelease,
  ProposalDocument,
  AccountActivityDigest,
  DeveloperPortfolio,
  AIModelReport,
};
