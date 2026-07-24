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
  Html,
  ColumnLayouts,
} from "@unlayer/react-elements";
import type { TableValues } from "@unlayer/react-elements";

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

export default function SaaSInvoiceReceipt({
  accentColor = "#7c3aed",
  brandName = "Acme",
  buttonText = "View in Billing Portal",
  fontFamily = defaultSansFont,
}: TemplateProps): ReactElement {
  const font = typeof fontFamily === "string" ? { label: "Custom", value: fontFamily } : fontFamily;

  const invoiceTableValues: Partial<TableValues> = {
    columns: 3,
    rows: 4,
    enableHeader: true,
    table: {
      headers: [
        {
          height: 0,
          cells: [
            { text: "ITEM DESCRIPTION", width: 60, textAlign: "left" },
            { text: "QTY", width: 15, textAlign: "center" },
            { text: "AMOUNT", width: 25, textAlign: "right" },
          ],
        },
      ],
      rows: [
        {
          height: 0,
          cells: [
            { text: `${brandName} Pro Plan — Monthly`, width: 60, textAlign: "left" },
            { text: "1", width: 15, textAlign: "center" },
            { text: "$19.00", width: 25, textAlign: "right" },
          ],
        },
        {
          height: 0,
          cells: [
            { text: "Extra Team Seats (Add-on)", width: 60, textAlign: "left" },
            { text: "2", width: 15, textAlign: "center" },
            { text: "$10.00", width: 25, textAlign: "right" },
          ],
        },
        {
          height: 0,
          cells: [
            { text: "Subtotal", width: 60, textAlign: "left" },
            { text: "", width: 15, textAlign: "center" },
            { text: "$29.00", width: 25, textAlign: "right" },
          ],
        },
        {
          height: 0,
          cells: [
            { text: "Total Paid", width: 60, textAlign: "left" },
            { text: "", width: 15, textAlign: "center" },
            { text: "$29.00", width: 25, textAlign: "right" },
          ],
        },
      ],
      footers: [],
    },
  };

  return (
    <Email
      backgroundColor="#f8fafc"
      textColor="#334155"
      contentAlign="center"
      contentWidth="600px"
      fontFamily={font}
      previewText={`Your receipt from ${brandName} — $29.00 paid successfully.`}
    >
      {/* ── Brand & Invoice Number Header ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#ffffff"
        padding="32px 40px 16px 40px"
      >
        <Column>
          <Heading
            text={brandName.toUpperCase()}
            headingType="h2"
            fontSize="18px"
            fontWeight={800}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.2"
            fontFamily={font}
          />
        </Column>
        <Column>
          <Paragraph
            html="Invoice <b>#INV-2026-0894</b>"
            fontSize="13px"
            color="#64748b"
            textAlign="right"
            lineHeight="1.3"
            fontFamily={font}
          />
        </Column>
      </Row>

      {/* ── Status Stripe ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="0px 40px"
      >
        <Column>
          <Divider
            borderTopWidth="4px"
            borderTopColor={accentColor}
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── Thanks & Status Badge ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#ffffff"
        padding="28px 40px 16px 40px"
      >
        <Column>
          <Heading
            text="Payment Received"
            headingType="h1"
            fontSize="24px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={font}
          />
          <Paragraph
            html="Thank you for your business! Below are the billing details for your subscription."
            fontSize="14px"
            color="#64748b"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={font}
          />
        </Column>
        <Column>
          <Html
            html={`<div style="text-align: right; margin-top: 8px;">
              <span style="background-color: #d1fae5; color: #065f46; font-size: 11px; font-weight: 800; letter-spacing: 0.5px; padding: 6px 12px; border-radius: 9999px; text-transform: uppercase; font-family: sans-serif; border: 1px solid #a7f3d0;">
                Paid
              </span>
            </div>`}
          />
        </Column>
      </Row>

      {/* ── Metadata Summary Grid ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#f8fafc"
        padding="20px 40px"
        containerPadding="0px 40px"
      >
        <Column>
          <Paragraph
            html="<b>Billed To:</b><br/>Nitin Pratap Singh<br/>nitin@example.com"
            fontSize="12px"
            color="#475569"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={font}
          />
        </Column>
        <Column>
          <Paragraph
            html={`<b>Payment Details:</b><br/>Date: July 24, 2026<br/>Method: Card ending in 4242`}
            fontSize="12px"
            color="#475569"
            textAlign="right"
            lineHeight="1.6"
            fontFamily={font}
          />
        </Column>
      </Row>

      {/* ── Line Items Table ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="24px 40px"
      >
        <Column>
          <Table
            values={invoiceTableValues as TableValues}
            borderTopWidth="1px"
            borderTopColor="#e2e8f0"
            borderTopStyle="solid"
            borderBottomWidth="1px"
            borderBottomColor="#e2e8f0"
            borderBottomStyle="solid"
          />
        </Column>
      </Row>

      {/* ── Call To Action ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="16px 40px 32px 40px"
      >
        <Column>
          <Button
            text={buttonText}
            href="https://example.com/billing"
            backgroundColor={accentColor}
            color="#ffffff"
            hoverBackgroundColor={`${accentColor}cc`}
            padding="12px 28px"
            borderRadius="6px"
            fontSize="14px"
            fontWeight={600}
            textAlign="center"
            fontFamily={font}
          />
        </Column>
      </Row>

      {/* ── Footer ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#f8fafc"
        padding="32px 40px"
      >
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopColor="#e2e8f0"
            borderTopStyle="solid"
          />
          <Paragraph
            html={`You are receiving this invoice because you subscribed to ${brandName}. If you have any questions or did not authorize this purchase, please contact our <a href="mailto:support@example.com" style="color: ${accentColor}; text-decoration: none;">support team</a>.`}
            fontSize="12px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.6"
            fontFamily={font}
            containerPadding="16px 0px 8px 0px"
          />
          <Paragraph
            html={`© 2026 ${brandName} Inc. 123 Tech Boulevard, Suite 500, San Francisco, CA`}
            fontSize="11px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={font}
          />
        </Column>
      </Row>
    </Email>
  );
}
