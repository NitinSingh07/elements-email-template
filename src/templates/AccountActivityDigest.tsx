import type { ReactElement } from "react";
import {
  Email,
  Row,
  Column,
  Paragraph,
  Heading,
  Button,
  Divider,
  Menu,
  ColumnLayouts,
} from "@unlayer/react-elements";

/**
 * Account Activity Digest — Figma × GitHub inspired
 *
 * A weekly activity summary email with metrics dashboard,
 * team activity feed, action items, and usage insights.
 *
 * Usage:
 *   import { renderToHtml } from "@unlayer/react-elements";
 *   const html = renderToHtml(<AccountActivityDigest />, { title: "Your Weekly Digest — Jul 14–20" });
 */

const sansFont = {
  label: "Inter",
  value: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
};

export default function AccountActivityDigest(): ReactElement {
  return (
    <Email
      backgroundColor="#f1f5f9"
      textColor="#0f172a"
      contentAlign="center"
      contentWidth="560px"
      fontFamily={sansFont}
      previewText="Your weekly digest: 847 events processed, 99.97% uptime, and 3 action items for your team."
    >
      {/* ── Header ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#ffffff"
        padding="24px 40px"
      >
        <Column>
          <Paragraph
            html="ACME"
            fontSize="16px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html="Weekly Digest"
            fontSize="12px"
            fontWeight={600}
            color="#64748b"
            textAlign="right"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Jul 14 – 20, 2026"
            fontSize="11px"
            color="#94a3b8"
            textAlign="right"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Accent */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#0ea5e9"
        padding="0px"
      >
        <Column>
          <Divider
            borderTopWidth="3px"
            borderTopColor="#0ea5e9"
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── Greeting ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="32px 40px 8px 40px"
      >
        <Column>
          <Heading
            text="Good morning, Nitin"
            headingType="h1"
            fontSize="22px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Here's what happened across your workspace this week."
            fontSize="14px"
            color="#64748b"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Metric Cards (3-column) ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="16px 40px 4px 40px"
      >
        <Column>
          <Heading
            text="THIS WEEK'S NUMBERS"
            headingType="h2"
            fontSize="11px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor="#ffffff"
        padding="0px 40px 8px 40px"
      >
        <Column backgroundColor="#f0f9ff" padding="16px" borderRadius="10px">
          <Heading
            text="847"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#0284c7"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Events processed"
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b style='color:#16a34a'>+12%</b> vs last week"
            fontSize="10px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column backgroundColor="#f0fdf4" padding="16px" borderRadius="10px">
          <Heading
            text="99.97%"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#16a34a"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Uptime"
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Target: 99.9%"
            fontSize="10px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column backgroundColor="#fef2f2" padding="16px" borderRadius="10px">
          <Heading
            text="3"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#dc2626"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Action items"
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b style='color:#dc2626'>Needs attention</b>"
            fontSize="10px"
            color="#94a3b8"
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
        padding="16px 40px 0px 40px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#e2e8f0"
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── Action Items ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="24px 40px 4px 40px"
      >
        <Column>
          <Heading
            text="ACTION ITEMS"
            headingType="h2"
            fontSize="11px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="0px 40px 4px 40px"
      >
        <Column backgroundColor="#fef2f2" padding="16px" borderRadius="8px">
          <Paragraph
            html="<span style='background:#dc2626;color:#ffffff;font-size:10px;font-weight:700;padding:2px 6px;border-radius:4px;margin-right:8px;'>CRITICAL</span> <b>API key expiring</b> — Production key <code>sk_live_...8x4f</code> expires in 5 days. <a href='https://example.com/keys'>Rotate now →</a>"
            fontSize="13px"
            color="#0f172a"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="4px 40px 4px 40px"
      >
        <Column backgroundColor="#fffbeb" padding="16px" borderRadius="8px">
          <Paragraph
            html="<span style='background:#d97706;color:#ffffff;font-size:10px;font-weight:700;padding:2px 6px;border-radius:4px;margin-right:8px;'>WARNING</span> <b>Usage threshold</b> — You've used 82% of your monthly API quota. Consider upgrading or optimizing. <a href='https://example.com/usage'>View details →</a>"
            fontSize="13px"
            color="#0f172a"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="4px 40px 8px 40px"
      >
        <Column backgroundColor="#eff6ff" padding="16px" borderRadius="8px">
          <Paragraph
            html="<span style='background:#2563eb;color:#ffffff;font-size:10px;font-weight:700;padding:2px 6px;border-radius:4px;margin-right:8px;'>NOTICE</span> <b>Pending invite</b> — 2 team invitations are awaiting acceptance (sent 4 days ago). <a href='https://example.com/team'>Resend invites →</a>"
            fontSize="13px"
            color="#0f172a"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Divider */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="16px 40px 0px 40px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#e2e8f0"
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── Team Activity ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="24px 40px 4px 40px"
      >
        <Column>
          <Heading
            text="TEAM ACTIVITY"
            headingType="h2"
            fontSize="11px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="0px 40px 4px 40px"
      >
        <Column>
          <Paragraph
            html="<b>Sarah K.</b> deployed <code>auth-service</code> to production · <span style='color:#94a3b8'>2 hours ago</span>"
            fontSize="13px"
            color="#334155"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
          <Paragraph
            html={'<b>Marcus R.</b> merged PR #847 — <i>&quot;Add rate limit middleware&quot;</i> · <span style="color:#94a3b8">6 hours ago</span>'}
            fontSize="13px"
            color="#334155"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b>Julia L.</b> created a new project <code>billing-v2</code> · <span style='color:#94a3b8'>Yesterday</span>"
            fontSize="13px"
            color="#334155"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b>Alex T.</b> updated billing plan to Pro · <span style='color:#94a3b8'>3 days ago</span>"
            fontSize="13px"
            color="#334155"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Quick Stats ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#ffffff"
        padding="20px 40px 8px 40px"
      >
        <Column backgroundColor="#f8fafc" padding="16px" borderRadius="8px">
          <Heading
            text="12"
            headingType="h3"
            fontSize="24px"
            fontWeight={700}
            color="#0f172a"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Deployments"
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column backgroundColor="#f8fafc" padding="16px" borderRadius="8px">
          <Heading
            text="34"
            headingType="h3"
            fontSize="24px"
            fontWeight={700}
            color="#0f172a"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="PRs merged"
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* CTA */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="20px 40px 32px 40px"
      >
        <Column>
          <Button
            text="View Full Dashboard"
            href="https://example.com/dashboard"
            backgroundColor="#0ea5e9"
            color="#ffffff"
            hoverBackgroundColor="#0284c7"
            padding="14px 32px"
            borderRadius="8px"
            fontSize="14px"
            fontWeight={600}
            textAlign="center"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Navigation menu */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#f8fafc"
        padding="16px 40px 8px 40px"
      >
        <Column>
          <Menu
            items={[
              { text: "Dashboard", href: "https://example.com/dashboard" },
              { text: "Settings", href: "https://example.com/settings" },
              { text: "Docs", href: "https://example.com/docs" },
              { text: "Support", href: "https://example.com/support" },
            ]}
            layout="horizontal"
            separator="·"
            align="center"
          />
        </Column>
      </Row>

      {/* Footer */}
      <Row
        layout={ColumnLayouts.OneColumn}
        padding="12px 40px 40px 40px"
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
            html="<a href='https://example.com/digest-settings'>Digest frequency</a> · <a href='https://example.com/unsubscribe'>Unsubscribe</a>"
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
