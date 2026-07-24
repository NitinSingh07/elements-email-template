import type { ReactElement } from "react";
import {
  Page,
  Row,
  Column,
  Paragraph,
  Heading,
  Button,
  Divider,
  Image,
  Social,
  Menu,
  ColumnLayouts,
} from "@unlayer/react-elements";

/**
 * Developer Portfolio — Personal site built entirely in Elements Page mode
 *
 * A stunning, responsive developer portfolio/personal website
 * rendered as a web page using <Page> (div + flexbox mode).
 * This showcases Elements' web rendering capability beyond just emails.
 *
 * Usage:
 *   import { renderToHtml } from "@unlayer/react-elements";
 *   const html = renderToHtml(<DeveloperPortfolio />, { title: "Nitin Singh — Full Stack Developer" });
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

const monoFont = {
  label: "Mono",
  value: "'SF Mono', 'Fira Code', 'Roboto Mono', monospace",
};

export default function DeveloperPortfolio({
  accentColor = "#a78bfa",
  brandName = "Nitin Singh",
  buttonText = "View Resume",
  fontFamily = defaultSansFont,
}: TemplateProps = {}): ReactElement {
  const sansFont = typeof fontFamily === "string" ? { label: "Custom", value: fontFamily } : fontFamily;
  const initials = brandName.split(" ").map(n => n[0]).join("").substring(0, 3).toUpperCase() || "DEV";
  const cleanHex = accentColor.replace("#", "");
  return (
    <Page
      backgroundColor="#0a0a0f"
      textColor="#e2e8f0"
      contentAlign="center"
      contentWidth="720px"
      fontFamily={sansFont}
    >
      {/* ── Navigation ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#0a0a0f"
        padding="24px 48px"
      >
        <Column>
          <Paragraph
            html={`<b style='color:${accentColor}'>${initials}</b><span style='color:#64748b'>.dev</span>`}
            fontSize="18px"
            fontWeight={700}
            color="#ffffff"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={monoFont}
          />
        </Column>
        <Column>
          <Menu
            items={[
              { text: "About", href: "#about" },
              { text: "Projects", href: "#projects" },
              { text: "Stack", href: "#stack" },
              { text: "Contact", href: "#contact" },
            ]}
            layout="horizontal"
            separator="·"
            align="right"
          />
        </Column>
      </Row>

      {/* ── Hero Section ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#0a0a0f"
        padding="64px 48px 16px 48px"
      >
        <Column>
          <Image
            src={{
              url: `https://placehold.co/120x120/${cleanHex}/ffffff?text=${initials}`,
              width: 120,
              height: 120,
            }}
            altText={brandName}
            textAlign="center"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#0a0a0f"
        padding="16px 48px 8px 48px"
      >
        <Column>
          <Heading
            text={brandName}
            headingType="h1"
            fontSize="42px"
            fontWeight={700}
            color="#f8fafc"
            textAlign="center"
            lineHeight="1.1"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Full Stack Developer · Open Source Contributor"
            fontSize="18px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
          <Paragraph
            html="I build performant, accessible web applications with React, TypeScript, and Node.js. Currently crafting developer tools and contributing to the open-source ecosystem."
            fontSize="15px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* CTA buttons */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#0a0a0f"
        padding="8px 160px 48px 160px"
      >
        <Column>
          <Button
            text={buttonText}
            href="https://example.com/resume"
            backgroundColor={accentColor}
            color="#ffffff"
            hoverBackgroundColor={`${accentColor}cc`}
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
            text="GitHub ↗"
            href="https://github.com/NitinSingh07"
            backgroundColor="#1e293b"
            color="#e2e8f0"
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
      </Row>

      {/* ── Stats Bar ── */}
      <Row
        layout={ColumnLayouts.FourEqual}
        backgroundColor="#111118"
        padding="28px 48px"
      >
        <Column>
          <Heading
            text="3+"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color={accentColor}
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Years exp."
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Heading
            text="50+"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#34d399"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Projects"
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Heading
            text="200+"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#60a5fa"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Contributions"
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Heading
            text="1K+"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#fbbf24"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="GitHub Stars"
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Featured Projects ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#0a0a0f"
        padding="48px 48px 12px 48px"
      >
        <Column>
          <Paragraph
            html="FEATURED PROJECTS"
            fontSize="11px"
            fontWeight={700}
            color="#64748b"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Heading
            text="Things I've Built"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#f8fafc"
            textAlign="left"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Project 1 */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#0a0a0f"
        padding="8px 48px 8px 48px"
      >
        <Column backgroundColor="#111118" padding="28px" borderRadius="16px">
          <Paragraph
            html="<span style='color:#34d399;font-family:monospace;font-size:11px;font-weight:700;background:#0d1f18;padding:3px 8px;border-radius:4px;'>OPEN SOURCE</span>"
            fontSize="11px"
            color="#34d399"
            textAlign="left"
            lineHeight="2"
            fontFamily={monoFont}
          />
          <Heading
            text="NodeFlow"
            headingType="h3"
            fontSize="20px"
            fontWeight={700}
            color="#f8fafc"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="A visual workflow builder for Node.js applications. Drag-and-drop interface for creating complex data pipelines with 50+ built-in nodes for API calls, data transforms, and conditional logic."
            fontSize="14px"
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<span style='color:#64748b;font-size:12px;font-family:monospace;'>React · TypeScript · Node.js · WebSocket</span>"
            fontSize="12px"
            color="#64748b"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={monoFont}
          />
          <Button
            text="View Project →"
            href="https://github.com/NitinSingh07/nodeflow"
            backgroundColor="#1e293b"
            color="#e2e8f0"
            hoverBackgroundColor="#334155"
            padding="10px 20px"
            borderRadius="6px"
            fontSize="12px"
            fontWeight={600}
            textAlign="left"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Projects 2 & 3 — two-column */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#0a0a0f"
        padding="8px 48px 8px 48px"
      >
        <Column backgroundColor="#111118" padding="24px" borderRadius="16px">
          <Paragraph
            html="<span style='color:#60a5fa;font-family:monospace;font-size:11px;font-weight:700;background:#0c1929;padding:3px 8px;border-radius:4px;'>SaaS</span>"
            fontSize="11px"
            color="#60a5fa"
            textAlign="left"
            lineHeight="2"
            fontFamily={monoFont}
          />
          <Heading
            text="DevMetrics"
            headingType="h3"
            fontSize="17px"
            fontWeight={700}
            color="#f8fafc"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Real-time analytics dashboard for developer teams. Track deploy frequency, MTTR, change failure rate, and lead time."
            fontSize="13px"
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<span style='color:#64748b;font-size:11px;font-family:monospace;'>Next.js · Prisma · Chart.js</span>"
            fontSize="11px"
            color="#64748b"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={monoFont}
          />
        </Column>
        <Column backgroundColor="#111118" padding="24px" borderRadius="16px">
          <Paragraph
            html="<span style='color:#fbbf24;font-family:monospace;font-size:11px;font-weight:700;background:#1c1a0e;padding:3px 8px;border-radius:4px;'>CLI TOOL</span>"
            fontSize="11px"
            color="#fbbf24"
            textAlign="left"
            lineHeight="2"
            fontFamily={monoFont}
          />
          <Heading
            text="GitPulse"
            headingType="h3"
            fontSize="17px"
            fontWeight={700}
            color="#f8fafc"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="CLI tool for generating beautiful git contribution reports. Markdown output, team leaderboards, and streak tracking."
            fontSize="13px"
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<span style='color:#64748b;font-size:11px;font-family:monospace;'>Go · GitHub API · Cobra</span>"
            fontSize="11px"
            color="#64748b"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={monoFont}
          />
        </Column>
      </Row>

      {/* ── Tech Stack ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#0a0a0f"
        padding="48px 48px 12px 48px"
      >
        <Column>
          <Paragraph
            html="TECH STACK"
            fontSize="11px"
            fontWeight={700}
            color="#64748b"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Heading
            text="Tools I Work With"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#f8fafc"
            textAlign="left"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor="#0a0a0f"
        padding="8px 48px 8px 48px"
      >
        <Column backgroundColor="#111118" padding="20px" borderRadius="12px">
          <Heading
            text="Frontend"
            headingType="h3"
            fontSize="13px"
            fontWeight={700}
            color="#a78bfa"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="React · Next.js<br/>TypeScript · Vite<br/>TailwindCSS"
            fontSize="12px"
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
        </Column>
        <Column backgroundColor="#111118" padding="20px" borderRadius="12px">
          <Heading
            text="Backend"
            headingType="h3"
            fontSize="13px"
            fontWeight={700}
            color="#34d399"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Node.js · Express<br/>PostgreSQL · Redis<br/>GraphQL"
            fontSize="12px"
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
        </Column>
        <Column backgroundColor="#111118" padding="20px" borderRadius="12px">
          <Heading
            text="DevOps"
            headingType="h3"
            fontSize="13px"
            fontWeight={700}
            color="#60a5fa"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Docker · AWS<br/>GitHub Actions<br/>Vercel · Linux"
            fontSize="12px"
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Contact / CTA ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#111118"
        padding="48px 48px 20px 48px"
      >
        <Column>
          <Heading
            text="Let's Build Something Together"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#f8fafc"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="I'm currently open to freelance projects and full-time opportunities. Whether you need a web app, API, or developer tool — let's talk."
            fontSize="15px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
          <Button
            text="Get In Touch"
            href="mailto:nitin@example.com"
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
        </Column>
      </Row>

      {/* Social links */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#111118"
        padding="8px 48px 40px 48px"
      >
        <Column>
          <Social
            icons={[
              { name: "GitHub", url: "https://github.com/NitinSingh07" },
              { name: "LinkedIn", url: "https://linkedin.com/in/nitinsingh" },
              { name: "Twitter", url: "https://twitter.com/nitinsingh" },
            ]}
            iconType="rounded"
            iconSize={32}
            spacing={14}
            align="center"
          />
        </Column>
      </Row>

      {/* Footer */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#0a0a0f"
        padding="24px 48px 32px 48px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#1e293b"
            borderTopStyle="solid"
          />
          <Paragraph
            html="Built with <a href='https://github.com/unlayer/elements' style='color:#7c3aed;'>Unlayer Elements</a> · © 2026 Nitin Singh"
            fontSize="12px"
            color="#475569"
            textAlign="center"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
    </Page>
  );
}
