import type { ReactElement } from "react";
import {
  Email,
  Row,
  Column,
  Paragraph,
  Heading,
  Button,
  Divider,
  Html,
  ColumnLayouts,
} from "@unlayer/react-elements";

/**
 * Changelog / Release Notes — Linear × Raycast inspired
 *
 * A fully dark-themed developer changelog email with version badge,
 * feature cards, bug-fix list, and upgrade CTAs.
 *
 * Usage:
 *   import { renderToHtml } from "@unlayer/react-elements";
 *   const html = renderToHtml(<ChangelogRelease />, { title: "Acme v3.2 — What's New" });
 */

const monoFont = {
  label: "Mono",
  value: "'SF Mono', 'Fira Code', 'Roboto Mono', monospace",
};

const sansFont = {
  label: "Inter",
  value: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
};

export default function ChangelogRelease(): ReactElement {
  return (
    <Email
      backgroundColor="#0a0a0a"
      textColor="#e5e5e5"
      contentAlign="center"
      contentWidth="560px"
      fontFamily={sansFont}
      previewText="Acme v3.2 is here — AI-powered search, real-time collaboration, and 40% faster builds."
    >
      {/* ── Logo & version badge ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#111111"
        padding="28px 40px 24px 40px"
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
        <Column>
          <Html
            html="<div style='text-align:right'><span style='background-color:#1e293b;color:#34d399;font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;font-family:monospace;'>v3.2.0</span></div>"
          />
        </Column>
      </Row>

      {/* Gradient accent — emerald → cyan */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#111111"
        padding="0px"
      >
        <Column>
          <Divider
            borderTopWidth="2px"
            borderTopColor="#34d399"
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── Hero ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#111111"
        padding="36px 40px 8px 40px"
      >
        <Column>
          <Paragraph
            html="RELEASE NOTES · JULY 23, 2026"
            fontSize="11px"
            fontWeight={700}
            color="#6b7280"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Heading
            text="What's new in v3.2"
            headingType="h1"
            fontSize="28px"
            fontWeight={700}
            color="#f9fafb"
            textAlign="left"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="This release brings AI-powered search, real-time collaboration, and major performance improvements. Here's everything that shipped."
            fontSize="15px"
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Feature 1: AI Search ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#111111"
        padding="20px 40px 0px 40px"
      >
        <Column backgroundColor="#1a1a2e" padding="24px" borderRadius="12px">
          <Paragraph
            html="FEATURE"
            fontSize="11px"
            fontWeight={700}
            color="#34d399"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={monoFont}
          />
          <Heading
            text="AI-Powered Search"
            headingType="h2"
            fontSize="18px"
            fontWeight={700}
            color="#f9fafb"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html={'Search across your entire workspace with natural language. Ask questions like <i>&quot;find all auth-related issues from last sprint&quot;</i> and get instant results powered by our new semantic search engine.'}
            fontSize="13px"
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Feature 2 & 3: Two-column ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#111111"
        padding="12px 40px 0px 40px"
      >
        <Column backgroundColor="#1a1a2e" padding="20px" borderRadius="12px">
          <Paragraph
            html="COLLABORATION"
            fontSize="11px"
            fontWeight={700}
            color="#60a5fa"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={monoFont}
          />
          <Heading
            text="Real-time Collaboration"
            headingType="h3"
            fontSize="15px"
            fontWeight={600}
            color="#f9fafb"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="See who's viewing, editing, or commenting in real time. Presence indicators and live cursors across all views."
            fontSize="12px"
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
        <Column backgroundColor="#1a1a2e" padding="20px" borderRadius="12px">
          <Paragraph
            html="PERFORMANCE"
            fontSize="11px"
            fontWeight={700}
            color="#fbbf24"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={monoFont}
          />
          <Heading
            text="40% Faster Builds"
            headingType="h3"
            fontSize="15px"
            fontWeight={600}
            color="#f9fafb"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Incremental compilation, smarter caching, and parallel processing. Average build times dropped from 12s to 7s."
            fontSize="12px"
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Divider */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#111111"
        padding="28px 40px 0px 40px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#1e293b"
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── Bug Fixes & Improvements ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#111111"
        padding="24px 40px 4px 40px"
      >
        <Column>
          <Heading
            text="BUG FIXES & IMPROVEMENTS"
            headingType="h2"
            fontSize="11px"
            fontWeight={700}
            color="#6b7280"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#111111"
        padding="0px 40px 4px 40px"
      >
        <Column>
          <Paragraph
            html="<b style='color:#34d399'>Fixed</b> — Webhook payloads now include the correct <code>created_at</code> timestamp"
            fontSize="13px"
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b style='color:#34d399'>Fixed</b> — Dashboard charts no longer flicker on Safari 18+"
            fontSize="13px"
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b style='color:#fbbf24'>Improved</b> — Keyboard shortcuts now work in all modal dialogs"
            fontSize="13px"
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b style='color:#fbbf24'>Improved</b> — CSV export supports up to 1M rows (previously 100K)"
            fontSize="13px"
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b style='color:#60a5fa'>Updated</b> — API rate limits increased to 5,000 req/min for Pro plans"
            fontSize="13px"
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Migration notes ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#111111"
        padding="16px 40px 4px 40px"
      >
        <Column backgroundColor="#1c1917" padding="20px" borderRadius="8px">
          <Paragraph
            html="MIGRATION NOTE"
            fontSize="11px"
            fontWeight={700}
            color="#fbbf24"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={monoFont}
          />
          <Paragraph
            html="The <code>search.query()</code> method signature has changed. Pass <code>{ mode: 'semantic' }</code> to enable AI search. Legacy keyword search is still the default."
            fontSize="12px"
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── CTAs ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#111111"
        padding="28px 40px 36px 40px"
      >
        <Column>
          <Button
            text="View Full Changelog"
            href="https://example.com/changelog"
            backgroundColor="#1e293b"
            color="#f9fafb"
            hoverBackgroundColor="#334155"
            padding="12px 24px"
            borderRadius="8px"
            fontSize="13px"
            fontWeight={600}
            width="100%"
            textAlign="center"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Button
            text="Update Now →"
            href="https://example.com/update"
            backgroundColor="#34d399"
            color="#0a0a0a"
            hoverBackgroundColor="#10b981"
            padding="12px 24px"
            borderRadius="8px"
            fontSize="13px"
            fontWeight={600}
            width="100%"
            textAlign="center"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Footer */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#0a0a0a"
        padding="20px 40px 40px 40px"
      >
        <Column>
          <Paragraph
            html="You're receiving this because you opted in to release notes."
            fontSize="12px"
            color="#4b5563"
            textAlign="center"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<a href='https://example.com/changelog' style='color:#6b7280'>Changelog</a> · <a href='https://example.com/docs' style='color:#6b7280'>Docs</a> · <a href='https://example.com/unsubscribe' style='color:#6b7280'>Unsubscribe</a>"
            fontSize="11px"
            color="#4b5563"
            textAlign="center"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
    </Email>
  );
}
