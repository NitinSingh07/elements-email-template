import type { ReactElement } from "react";
import {
  Email,
  Row,
  Column,
  Paragraph,
  Heading,
  Button,
  Divider,
  Table,
  ColumnLayouts,
} from "@unlayer/react-elements";
import type { TableValues } from "@unlayer/react-elements";

/**
 * SaaS Trial Expiring — Linear-inspired urgency email
 *
 * A dark-to-light gradient design with a bold countdown,
 * feature comparison table, and urgency-driven CTAs.
 *
 * Usage:
 *   import { renderToHtml } from "@unlayer/react-elements";
 *   const html = renderToHtml(<SaasTrialExpiring />, { title: "Your trial ends in 3 days" });
 */

const sansFont = {
  label: "Inter",
  value: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
};

const comparisonTable: Partial<TableValues> = {
  columns: 3,
  rows: 5,
  enableHeader: true,
  table: {
    headers: [
      {
        height: 0,
        cells: [
          { text: "FEATURE", width: 50, textAlign: "left" as const },
          { text: "FREE", width: 25, textAlign: "center" as const },
          { text: "PRO", width: 25, textAlign: "center" as const },
        ],
      },
    ],
    rows: [
      {
        height: 0,
        cells: [
          { text: "Projects", width: 50, textAlign: "left" as const },
          { text: "3", width: 25, textAlign: "center" as const },
          { text: "Unlimited", width: 25, textAlign: "center" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Team members", width: 50, textAlign: "left" as const },
          { text: "1", width: 25, textAlign: "center" as const },
          { text: "Unlimited", width: 25, textAlign: "center" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "API requests / mo", width: 50, textAlign: "left" as const },
          { text: "10K", width: 25, textAlign: "center" as const },
          { text: "5M", width: 25, textAlign: "center" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Priority support", width: 50, textAlign: "left" as const },
          { text: "—", width: 25, textAlign: "center" as const },
          { text: "✓", width: 25, textAlign: "center" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "SSO & audit logs", width: 50, textAlign: "left" as const },
          { text: "—", width: 25, textAlign: "center" as const },
          { text: "✓", width: 25, textAlign: "center" as const },
        ],
      },
    ],
    footers: [],
  },
};

export default function SaasTrialExpiring(): ReactElement {
  return (
    <Email
      backgroundColor="#f0f0f3"
      textColor="#1a1a2e"
      contentAlign="center"
      contentWidth="560px"
      fontFamily={sansFont}
      previewText="Your Pro trial ends in 3 days — don't lose access to unlimited projects, team seats, and priority support."
    >
      {/* ── Dark hero section ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#0f0f1a"
        padding="48px 44px 36px 44px"
      >
        <Column>
          <Paragraph
            html="ACME"
            fontSize="16px"
            fontWeight={700}
            color="#ffffff"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Gradient accent */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#0f0f1a"
        padding="0px"
      >
        <Column>
          <Divider
            borderTopWidth="3px"
            borderTopColor="#7c3aed"
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* Countdown block */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#13132b"
        padding="40px 44px 12px 44px"
      >
        <Column>
          <Heading
            text="3"
            headingType="h1"
            fontSize="72px"
            fontWeight={700}
            color="#a78bfa"
            textAlign="center"
            lineHeight="1"
            fontFamily={sansFont}
          />
          <Paragraph
            html="days left on your Pro trial"
            fontSize="16px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Main message on dark bg */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#13132b"
        padding="8px 44px 40px 44px"
      >
        <Column>
          <Heading
            text="Your trial is almost over"
            headingType="h1"
            fontSize="24px"
            fontWeight={700}
            color="#f1f5f9"
            textAlign="center"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="You've been using <b>Acme Pro</b> for 11 days. When your trial ends on <b>July 26</b>, you'll lose access to unlimited projects, team collaboration, and priority support."
            fontSize="14px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
          <Button
            text="Upgrade to Pro — $19/mo"
            href="https://example.com/upgrade"
            backgroundColor="#7c3aed"
            color="#ffffff"
            hoverBackgroundColor="#6d28d9"
            padding="14px 32px"
            borderRadius="8px"
            fontSize="14px"
            fontWeight={600}
            textAlign="center"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Light section: usage stats ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="36px 44px 8px 44px"
      >
        <Column>
          <Heading
            text="What you've built so far"
            headingType="h2"
            fontSize="18px"
            fontWeight={700}
            color="#1a1a2e"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Here's what's at stake if you downgrade:"
            fontSize="14px"
            color="#64748b"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Metric cards */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor="#ffffff"
        padding="0px 44px 8px 44px"
      >
        <Column backgroundColor="#f8fafc" padding="16px" borderRadius="8px">
          <Heading
            text="7"
            headingType="h2"
            fontSize="32px"
            fontWeight={700}
            color="#7c3aed"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Projects"
            fontSize="12px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column backgroundColor="#f8fafc" padding="16px" borderRadius="8px">
          <Heading
            text="4"
            headingType="h2"
            fontSize="32px"
            fontWeight={700}
            color="#7c3aed"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Team members"
            fontSize="12px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column backgroundColor="#f8fafc" padding="16px" borderRadius="8px">
          <Heading
            text="23K"
            headingType="h2"
            fontSize="32px"
            fontWeight={700}
            color="#7c3aed"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="API calls"
            fontSize="12px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Divider */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="20px 44px 0px 44px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#e2e8f0"
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* Comparison table */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="20px 44px 24px 44px"
      >
        <Column>
          <Heading
            text="Free vs Pro"
            headingType="h2"
            fontSize="16px"
            fontWeight={700}
            color="#1a1a2e"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Table
            values={comparisonTable as TableValues}
            headerBackgroundColor="#f1f5f9"
            headerColor="#64748b"
            headerFontSize="11px"
            contentColor="#334155"
            contentFontSize="13px"
            stripedRows={false}
          />
        </Column>
      </Row>

      {/* Final CTA */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#faf5ff"
        padding="28px 44px 32px 44px"
      >
        <Column>
          <Heading
            text="Keep everything you've built"
            headingType="h2"
            fontSize="20px"
            fontWeight={700}
            color="#1a1a2e"
            textAlign="center"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Upgrade before July 26 and get <b>20% off</b> your first 3 months."
            fontSize="14px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
          <Button
            text="Upgrade Now →"
            href="https://example.com/upgrade"
            backgroundColor="#7c3aed"
            color="#ffffff"
            hoverBackgroundColor="#6d28d9"
            padding="14px 36px"
            borderRadius="8px"
            fontSize="15px"
            fontWeight={600}
            textAlign="center"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<a href='https://example.com/pricing'>Compare all plans</a> · Cancel anytime"
            fontSize="12px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Footer */}
      <Row
        layout={ColumnLayouts.OneColumn}
        padding="20px 44px 40px 44px"
      >
        <Column>
          <Paragraph
            html="Acme Inc · San Francisco, CA"
            fontSize="12px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<a href='https://example.com/unsubscribe'>Unsubscribe</a> · <a href='https://example.com/preferences'>Email preferences</a>"
            fontSize="11px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
    </Email>
  );
}
