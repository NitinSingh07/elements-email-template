import type { ReactElement } from "react";
import type { TableValues } from "@unlayer/react-elements";
import {
  Document,
  Row,
  Column,
  Paragraph,
  Heading,
  Divider,
  Table,
  ColumnLayouts,
} from "@unlayer/react-elements";

/**
 * Proposal / Statement of Work — Notion × Stripe inspired
 *
 * A print-ready professional proposal using Document mode.
 * Designed for PDF generation with clean typography,
 * deliverables table, timeline, and terms.
 *
 * Usage:
 *   import { renderToHtml } from "@unlayer/react-elements";
 *   const html = renderToHtml(<ProposalDocument />, { title: "Proposal — Design System Build" });
 *
 * For PDF export:
 *   const design = renderToJson(<ProposalDocument />);
 *   // Use Unlayer's PDF API or any HTML-to-PDF library
 */

export interface TemplateProps {
  accentColor?: string;
  brandName?: string;
  buttonText?: string;
  fontFamily?: { label: string; value: string } | string;
}

const defaultSansFont = {
  label: "Inter",
  value: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
};

const deliverables: Partial<TableValues> = {
  columns: 4,
  rows: 5,
  enableHeader: true,
  table: {
    headers: [
      {
        height: 0,
        cells: [
          { text: "DELIVERABLE", width: 40, textAlign: "left" as const },
          { text: "HOURS", width: 15, textAlign: "right" as const },
          { text: "RATE", width: 20, textAlign: "right" as const },
          { text: "TOTAL", width: 25, textAlign: "right" as const },
        ],
      },
    ],
    rows: [
      {
        height: 0,
        cells: [
          { text: "Design system audit & strategy", width: 40, textAlign: "left" as const },
          { text: "16", width: 15, textAlign: "right" as const },
          { text: "$175/hr", width: 20, textAlign: "right" as const },
          { text: "$2,800", width: 25, textAlign: "right" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Core component library (React)", width: 40, textAlign: "left" as const },
          { text: "80", width: 15, textAlign: "right" as const },
          { text: "$175/hr", width: 20, textAlign: "right" as const },
          { text: "$14,000", width: 25, textAlign: "right" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Figma ↔ code integration", width: 40, textAlign: "left" as const },
          { text: "24", width: 15, textAlign: "right" as const },
          { text: "$175/hr", width: 20, textAlign: "right" as const },
          { text: "$4,200", width: 25, textAlign: "right" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Documentation & guidelines", width: 40, textAlign: "left" as const },
          { text: "20", width: 15, textAlign: "right" as const },
          { text: "$175/hr", width: 20, textAlign: "right" as const },
          { text: "$3,500", width: 25, textAlign: "right" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Accessibility audit (WCAG 2.1 AA)", width: 40, textAlign: "left" as const },
          { text: "12", width: 15, textAlign: "right" as const },
          { text: "$175/hr", width: 20, textAlign: "right" as const },
          { text: "$2,100", width: 25, textAlign: "right" as const },
        ],
      },
    ],
    footers: [],
  },
};

const timeline: Partial<TableValues> = {
  columns: 3,
  rows: 4,
  enableHeader: true,
  table: {
    headers: [
      {
        height: 0,
        cells: [
          { text: "PHASE", width: 40, textAlign: "left" as const },
          { text: "TIMELINE", width: 30, textAlign: "left" as const },
          { text: "MILESTONE", width: 30, textAlign: "left" as const },
        ],
      },
    ],
    rows: [
      {
        height: 0,
        cells: [
          { text: "Discovery & Audit", width: 40, textAlign: "left" as const },
          { text: "Weeks 1–2", width: 30, textAlign: "left" as const },
          { text: "Audit report", width: 30, textAlign: "left" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Foundation & Tokens", width: 40, textAlign: "left" as const },
          { text: "Weeks 3–4", width: 30, textAlign: "left" as const },
          { text: "Design tokens shipped", width: 30, textAlign: "left" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Component Build", width: 40, textAlign: "left" as const },
          { text: "Weeks 5–10", width: 30, textAlign: "left" as const },
          { text: "v1.0 library release", width: 30, textAlign: "left" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Docs & Handoff", width: 40, textAlign: "left" as const },
          { text: "Weeks 11–12", width: 30, textAlign: "left" as const },
          { text: "Final delivery", width: 30, textAlign: "left" as const },
        ],
      },
    ],
    footers: [],
  },
};

export default function ProposalDocument({
  accentColor = "#6366f1",
  brandName = "Acme",
  buttonText = "Accept Proposal",
  fontFamily = defaultSansFont,
}: TemplateProps = {}): ReactElement {
  const sansFont = typeof fontFamily === "string" ? { label: "Custom", value: fontFamily } : fontFamily;
  const domain = brandName.toLowerCase().replace(/\s+/g, "");
  return (
    <Document
      backgroundColor="#ffffff"
      textColor="#0f172a"
      contentAlign="center"
      contentWidth="700px"
      fontFamily={sansFont}
    >
      {/* ── Cover / Header ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#ffffff"
        padding="48px 56px 20px 56px"
      >
        <Column>
          <Paragraph
            html={`${brandName.toUpperCase()} STUDIO`}
            fontSize="14px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Design & Engineering Consultancy"
            fontSize="12px"
            color="#64748b"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html="PROPOSAL"
            fontSize="12px"
            fontWeight={700}
            color={accentColor}
            textAlign="right"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="July 23, 2026"
            fontSize="12px"
            color="#94a3b8"
            textAlign="right"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={accentColor}
        padding="0px"
      >
        <Column>
          <Divider
            borderTopWidth="3px"
            borderTopColor={accentColor}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* Title */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="40px 56px 8px 56px"
      >
        <Column>
          <Heading
            text="Design System Build"
            headingType="h1"
            fontSize="32px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Prepared for <b>Maple Studio LLC</b>"
            fontSize="16px"
            color="#475569"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Client & Vendor info */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#ffffff"
        padding="24px 56px 0px 56px"
      >
        <Column>
          <Heading
            text="PREPARED FOR"
            headingType="h2"
            fontSize="10px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Maple Studio LLC"
            fontSize="14px"
            fontWeight={600}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
          <Paragraph
            html="510 Townsend Street<br />San Francisco, CA 94103<br />alex@maplestudio.com"
            fontSize="13px"
            color="#64748b"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Heading
            text="PREPARED BY"
            headingType="h2"
            fontSize="10px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Acme Studio"
            fontSize="14px"
            fontWeight={600}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
          <Paragraph
            html="1 Infinite Loop<br />Cupertino, CA 95014<br />proposals@acme.studio"
            fontSize="13px"
            color="#64748b"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Divider */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="32px 56px 0px 56px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#e2e8f0"
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── Executive Summary ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="28px 56px 0px 56px"
      >
        <Column>
          <Heading
            text="Executive Summary"
            headingType="h2"
            fontSize="18px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Maple Studio is building a next-generation SaaS platform and needs a unified design system to ensure consistency across web, mobile, and email touchpoints. This proposal covers the complete lifecycle: audit, token architecture, component development, Figma integration, documentation, and accessibility compliance."
            fontSize="14px"
            color="#475569"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
          <Paragraph
            html="The engagement spans <b>12 weeks</b> with a total investment of <b>$26,600</b>. All deliverables are production-ready and include source code, Figma components, and comprehensive documentation."
            fontSize="14px"
            color="#475569"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Scope & Deliverables ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="32px 56px 0px 56px"
      >
        <Column>
          <Heading
            text="Scope & Deliverables"
            headingType="h2"
            fontSize="18px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="12px 56px 0px 56px"
      >
        <Column>
          <Table
            values={deliverables as TableValues}
            headerBackgroundColor="#f1f5f9"
            headerColor="#64748b"
            headerFontSize="11px"
            contentColor="#0f172a"
            contentFontSize="13px"
            stripedRows={false}
          />
        </Column>
      </Row>

      {/* Total */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#f8fafc"
        padding="16px 56px 20px 56px"
      >
        <Column>
          <Paragraph
            html="Total Hours: 152"
            fontSize="13px"
            color="#64748b"
            textAlign="right"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
          <Divider
            borderTopWidth="1px"
            borderTopColor="#0f172a"
            borderTopStyle="solid"
          />
          <Heading
            text="$26,600"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#0f172a"
            textAlign="right"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Project total (USD)"
            fontSize="12px"
            color="#94a3b8"
            textAlign="right"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Timeline ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="32px 56px 0px 56px"
      >
        <Column>
          <Heading
            text="Project Timeline"
            headingType="h2"
            fontSize="18px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="12px 56px 0px 56px"
      >
        <Column>
          <Table
            values={timeline as TableValues}
            headerBackgroundColor="#f1f5f9"
            headerColor="#64748b"
            headerFontSize="11px"
            contentColor="#0f172a"
            contentFontSize="13px"
            stripedRows={false}
          />
        </Column>
      </Row>

      {/* ── Terms ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="32px 56px 0px 56px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#e2e8f0"
            borderTopStyle="solid"
          />
          <Heading
            text="Terms & Conditions"
            headingType="h2"
            fontSize="18px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b>Payment:</b> 50% upon signing, 25% at mid-project milestone, 25% upon final delivery."
            fontSize="13px"
            color="#475569"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b>IP Ownership:</b> All deliverables transfer to client upon final payment."
            fontSize="13px"
            color="#475569"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b>Revisions:</b> Two rounds of revision included per phase. Additional revisions billed at the hourly rate."
            fontSize="13px"
            color="#475569"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b>Validity:</b> This proposal is valid for 30 days from the date of issue."
            fontSize="13px"
            color="#475569"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Acceptance ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#ffffff"
        padding="32px 56px 48px 56px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#e2e8f0"
            borderTopStyle="solid"
          />
          <Paragraph
            html="CLIENT SIGNATURE"
            fontSize="10px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="&nbsp;"
            fontSize="32px"
            color="#ffffff"
            textAlign="left"
            lineHeight="1"
            fontFamily={sansFont}
          />
          <Divider
            borderTopWidth="1px"
            borderTopColor="#cbd5e1"
            borderTopStyle="solid"
          />
          <Paragraph
            html="Name / Date"
            fontSize="11px"
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#e2e8f0"
            borderTopStyle="solid"
          />
          <Paragraph
            html="PROVIDER SIGNATURE"
            fontSize="10px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="&nbsp;"
            fontSize="32px"
            color="#ffffff"
            textAlign="left"
            lineHeight="1"
            fontFamily={sansFont}
          />
          <Divider
            borderTopWidth="1px"
            borderTopColor="#cbd5e1"
            borderTopStyle="solid"
          />
          <Paragraph
            html="Name / Date"
            fontSize="11px"
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Footer */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#f8fafc"
        padding="24px 56px 32px 56px"
      >
        <Column>
          <Paragraph
            html={`${brandName} Studio · 1 Infinite Loop, Cupertino, CA 95014 · proposals@${domain}.studio`}
            fontSize="11px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
          <Paragraph
            html="This document is confidential and intended only for the named recipient."
            fontSize="10px"
            color="#cbd5e1"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
    </Document>
  );
}
