import type { ReactElement } from "react";
import {
  Email,
  Row,
  Column,
  Paragraph,
  Heading,
  Button,
  Divider,
  Image,
  Social,
  ColumnLayouts,
} from "@unlayer/react-elements";

/**
 * Event / Webinar Invitation — Luma × Cal.com inspired
 *
 * A clean, calendar-card style invitation with date block,
 * speaker avatars, event details, and dual CTAs.
 *
 * Usage:
 *   import { renderToHtml } from "@unlayer/react-elements";
 *   const html = renderToHtml(<EventInvitation />, { title: "You're Invited: Design Systems Summit 2026" });
 */

const sansFont = {
  label: "Inter",
  value: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
};

export default function EventInvitation(): ReactElement {
  return (
    <Email
      backgroundColor="#f5f3ff"
      textColor="#1e1b4b"
      contentAlign="center"
      contentWidth="560px"
      fontFamily={sansFont}
      previewText="You're invited to Design Systems Summit — Aug 14, 2026. Reserve your spot now."
    >
      {/* ── Header ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#ffffff"
        padding="24px 40px"
      >
        <Column>
          <Paragraph
            html="ACME EVENTS"
            fontSize="13px"
            fontWeight={700}
            color="#6d28d9"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html="<a href='https://example.com/events'>View all events →</a>"
            fontSize="12px"
            color="#7c3aed"
            textAlign="right"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Accent bar */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#7c3aed"
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

      {/* ── Hero with date card ── */}
      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor="#ffffff"
        padding="40px 40px 12px 40px"
      >
        <Column backgroundColor="#f5f3ff" padding="20px" borderRadius="12px">
          <Heading
            text="AUG"
            headingType="h3"
            fontSize="12px"
            fontWeight={700}
            color="#7c3aed"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Heading
            text="14"
            headingType="h1"
            fontSize="48px"
            fontWeight={700}
            color="#1e1b4b"
            textAlign="center"
            lineHeight="1"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Thursday"
            fontSize="12px"
            color="#6b7280"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="10:00 AM PST"
            fontSize="11px"
            color="#9ca3af"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column padding="4px 0px 0px 16px">
          <Heading
            text="Design Systems Summit 2026"
            headingType="h1"
            fontSize="22px"
            fontWeight={700}
            color="#1e1b4b"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="A half-day virtual summit bringing together design engineers, system architects, and product teams to explore the future of component-driven design."
            fontSize="14px"
            color="#4b5563"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* RSVP CTA */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="12px 40px 32px 40px"
      >
        <Column>
          <Button
            text="Reserve Your Spot"
            href="https://example.com/rsvp"
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

      {/* Divider */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="0px 40px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#e5e7eb"
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── Speakers ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="28px 40px 8px 40px"
      >
        <Column>
          <Heading
            text="SPEAKERS"
            headingType="h2"
            fontSize="11px"
            fontWeight={700}
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#ffffff"
        padding="0px 40px 8px 40px"
      >
        <Column padding="8px">
          <Image
            src={{
              url: "https://placehold.co/80x80/7c3aed/ffffff?text=SK",
              width: 80,
              height: 80,
            }}
            altText="Sarah Kim"
            textAlign="center"
          />
          <Heading
            text="Sarah Kim"
            headingType="h3"
            fontSize="14px"
            fontWeight={600}
            color="#1e1b4b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Head of Design Systems, Stripe"
            fontSize="12px"
            color="#6b7280"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column padding="8px">
          <Image
            src={{
              url: "https://placehold.co/80x80/4f46e5/ffffff?text=MR",
              width: 80,
              height: 80,
            }}
            altText="Marcus Rivera"
            textAlign="center"
          />
          <Heading
            text="Marcus Rivera"
            headingType="h3"
            fontSize="14px"
            fontWeight={600}
            color="#1e1b4b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Staff Engineer, Vercel"
            fontSize="12px"
            color="#6b7280"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#ffffff"
        padding="0px 40px 12px 40px"
      >
        <Column padding="8px">
          <Image
            src={{
              url: "https://placehold.co/80x80/a78bfa/ffffff?text=JL",
              width: 80,
              height: 80,
            }}
            altText="Julia Lin"
            textAlign="center"
          />
          <Heading
            text="Julia Lin"
            headingType="h3"
            fontSize="14px"
            fontWeight={600}
            color="#1e1b4b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Design Lead, Linear"
            fontSize="12px"
            color="#6b7280"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column padding="8px">
          <Image
            src={{
              url: "https://placehold.co/80x80/6366f1/ffffff?text=AT",
              width: 80,
              height: 80,
            }}
            altText="Alex Turner"
            textAlign="center"
          />
          <Heading
            text="Alex Turner"
            headingType="h3"
            fontSize="14px"
            fontWeight={600}
            color="#1e1b4b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="VP of Product, Figma"
            fontSize="12px"
            color="#6b7280"
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
        padding="8px 40px 0px 40px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#e5e7eb"
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── Agenda ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="24px 40px 4px 40px"
      >
        <Column>
          <Heading
            text="AGENDA"
            headingType="h2"
            fontSize="11px"
            fontWeight={700}
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor="#ffffff"
        padding="4px 40px 4px 40px"
      >
        <Column>
          <Paragraph
            html="<b>10:00 AM</b>"
            fontSize="13px"
            color="#7c3aed"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html="<b>Opening Keynote</b> — The State of Design Systems in 2026"
            fontSize="13px"
            color="#374151"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor="#ffffff"
        padding="4px 40px 4px 40px"
      >
        <Column>
          <Paragraph
            html="<b>10:45 AM</b>"
            fontSize="13px"
            color="#7c3aed"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html="<b>Panel:</b> Scaling Components Across Web, Email, and Mobile"
            fontSize="13px"
            color="#374151"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor="#ffffff"
        padding="4px 40px 4px 40px"
      >
        <Column>
          <Paragraph
            html="<b>11:30 AM</b>"
            fontSize="13px"
            color="#7c3aed"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html="<b>Workshop:</b> Building Email Templates with React + Elements"
            fontSize="13px"
            color="#374151"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoNarrowWide}
        backgroundColor="#ffffff"
        padding="4px 40px 8px 40px"
      >
        <Column>
          <Paragraph
            html="<b>12:15 PM</b>"
            fontSize="13px"
            color="#7c3aed"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html="<b>Closing:</b> Q&amp;A and Community Showcase"
            fontSize="13px"
            color="#374151"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Event Details ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#f5f3ff"
        padding="24px 40px 28px 40px"
      >
        <Column>
          <Heading
            text="EVENT DETAILS"
            headingType="h2"
            fontSize="11px"
            fontWeight={700}
            color="#9ca3af"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="📍 <b>Location:</b> Virtual (Zoom link sent upon RSVP)"
            fontSize="13px"
            color="#4b5563"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
          <Paragraph
            html="🕐 <b>Duration:</b> 2.5 hours"
            fontSize="13px"
            color="#4b5563"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
          <Paragraph
            html="🎟️ <b>Price:</b> Free (limited to 500 attendees)"
            fontSize="13px"
            color="#4b5563"
            textAlign="left"
            lineHeight="1.8"
            fontFamily={sansFont}
          />
          <Button
            text="Add to Calendar"
            href="https://example.com/calendar"
            backgroundColor="#ffffff"
            color="#7c3aed"
            hoverBackgroundColor="#f5f3ff"
            padding="10px 24px"
            borderRadius="6px"
            fontSize="13px"
            fontWeight={600}
            textAlign="center"
            fontFamily={sansFont}
            border={{
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: "#7c3aed",
              borderRightWidth: "1px",
              borderRightStyle: "solid",
              borderRightColor: "#7c3aed",
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "#7c3aed",
              borderLeftWidth: "1px",
              borderLeftStyle: "solid",
              borderLeftColor: "#7c3aed",
            }}
          />
        </Column>
      </Row>

      {/* Social */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="24px 40px 8px 40px"
      >
        <Column>
          <Social
            icons={[
              { name: "Twitter", url: "https://twitter.com/acme" },
              { name: "LinkedIn", url: "https://linkedin.com/company/acme" },
              { name: "YouTube", url: "https://youtube.com/@acme" },
            ]}
            iconType="rounded"
            iconSize={28}
            spacing={12}
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
            html="Acme Events · San Francisco, CA"
            fontSize="12px"
            color="#9ca3af"
            textAlign="center"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<a href='https://example.com/unsubscribe'>Unsubscribe from event updates</a>"
            fontSize="11px"
            color="#9ca3af"
            textAlign="center"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
    </Email>
  );
}
