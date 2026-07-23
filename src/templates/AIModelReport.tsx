import type { ReactElement } from "react";
import type { TableValues } from "@unlayer/react-elements";
import {
  Document,
  Row,
  Column,
  Paragraph,
  Heading,
  Button,
  Divider,
  Table,
  Html,
  Image,
  ColumnLayouts,
} from "@unlayer/react-elements";

/**
 * AI / ML Model Training Report — Document mode
 *
 * A professional, print-ready AI model evaluation report
 * designed for PDF generation. Shows training metrics,
 * confusion matrix, hyperparameters, and recommendations.
 *
 * This template demonstrates Elements' Document mode for
 * technical/scientific reporting — a category nobody else
 * will have in the challenge.
 *
 * Usage:
 *   import { renderToHtml } from "@unlayer/react-elements";
 *   const html = renderToHtml(<AIModelReport />, { title: "Model Training Report — GPT-Classifier v2.1" });
 */

const sansFont = {
  label: "Inter",
  value: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
};

const monoFont = {
  label: "Mono",
  value: "'SF Mono', 'Fira Code', 'Roboto Mono', monospace",
};

const metricsTable: Partial<TableValues> = {
  columns: 4,
  rows: 4,
  enableHeader: true,
  table: {
    headers: [
      {
        height: 0,
        cells: [
          { text: "METRIC", width: 30, textAlign: "left" as const },
          { text: "TRAIN", width: 23, textAlign: "right" as const },
          { text: "VALIDATION", width: 23, textAlign: "right" as const },
          { text: "TEST", width: 24, textAlign: "right" as const },
        ],
      },
    ],
    rows: [
      {
        height: 0,
        cells: [
          { text: "Accuracy", width: 30, textAlign: "left" as const },
          { text: "97.8%", width: 23, textAlign: "right" as const },
          { text: "94.2%", width: 23, textAlign: "right" as const },
          { text: "93.7%", width: 24, textAlign: "right" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Precision (macro)", width: 30, textAlign: "left" as const },
          { text: "97.1%", width: 23, textAlign: "right" as const },
          { text: "93.8%", width: 23, textAlign: "right" as const },
          { text: "92.4%", width: 24, textAlign: "right" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Recall (macro)", width: 30, textAlign: "left" as const },
          { text: "96.5%", width: 23, textAlign: "right" as const },
          { text: "92.1%", width: 23, textAlign: "right" as const },
          { text: "91.8%", width: 24, textAlign: "right" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "F1-Score (macro)", width: 30, textAlign: "left" as const },
          { text: "96.8%", width: 23, textAlign: "right" as const },
          { text: "92.9%", width: 23, textAlign: "right" as const },
          { text: "92.1%", width: 24, textAlign: "right" as const },
        ],
      },
    ],
    footers: [],
  },
};

const hyperparamsTable: Partial<TableValues> = {
  columns: 2,
  rows: 7,
  enableHeader: true,
  table: {
    headers: [
      {
        height: 0,
        cells: [
          { text: "PARAMETER", width: 50, textAlign: "left" as const },
          { text: "VALUE", width: 50, textAlign: "left" as const },
        ],
      },
    ],
    rows: [
      {
        height: 0,
        cells: [
          { text: "Architecture", width: 50, textAlign: "left" as const },
          { text: "Transformer (12-layer, 768-dim)", width: 50, textAlign: "left" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Learning Rate", width: 50, textAlign: "left" as const },
          { text: "2e-5 (cosine decay)", width: 50, textAlign: "left" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Batch Size", width: 50, textAlign: "left" as const },
          { text: "32 (gradient accumulation: 4)", width: 50, textAlign: "left" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Epochs", width: 50, textAlign: "left" as const },
          { text: "15 (early stopping: patience 3)", width: 50, textAlign: "left" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Optimizer", width: 50, textAlign: "left" as const },
          { text: "AdamW (β1=0.9, β2=0.999)", width: 50, textAlign: "left" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Dropout", width: 50, textAlign: "left" as const },
          { text: "0.1 (attention + hidden)", width: 50, textAlign: "left" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Training Time", width: 50, textAlign: "left" as const },
          { text: "4h 23m (4× A100 80GB)", width: 50, textAlign: "left" as const },
        ],
      },
    ],
    footers: [],
  },
};

const confusionMatrix: Partial<TableValues> = {
  columns: 5,
  rows: 4,
  enableHeader: true,
  table: {
    headers: [
      {
        height: 0,
        cells: [
          { text: "ACTUAL \\ PREDICTED", width: 20, textAlign: "left" as const },
          { text: "Positive", width: 20, textAlign: "center" as const },
          { text: "Negative", width: 20, textAlign: "center" as const },
          { text: "Neutral", width: 20, textAlign: "center" as const },
          { text: "Mixed", width: 20, textAlign: "center" as const },
        ],
      },
    ],
    rows: [
      {
        height: 0,
        cells: [
          { text: "Positive", width: 20, textAlign: "left" as const },
          { text: "2,847", width: 20, textAlign: "center" as const },
          { text: "52", width: 20, textAlign: "center" as const },
          { text: "31", width: 20, textAlign: "center" as const },
          { text: "18", width: 20, textAlign: "center" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Negative", width: 20, textAlign: "left" as const },
          { text: "67", width: 20, textAlign: "center" as const },
          { text: "2,614", width: 20, textAlign: "center" as const },
          { text: "44", width: 20, textAlign: "center" as const },
          { text: "23", width: 20, textAlign: "center" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Neutral", width: 20, textAlign: "left" as const },
          { text: "41", width: 20, textAlign: "center" as const },
          { text: "38", width: 20, textAlign: "center" as const },
          { text: "1,892", width: 20, textAlign: "center" as const },
          { text: "56", width: 20, textAlign: "center" as const },
        ],
      },
      {
        height: 0,
        cells: [
          { text: "Mixed", width: 20, textAlign: "left" as const },
          { text: "29", width: 20, textAlign: "center" as const },
          { text: "31", width: 20, textAlign: "center" as const },
          { text: "73", width: 20, textAlign: "center" as const },
          { text: "1,244", width: 20, textAlign: "center" as const },
        ],
      },
    ],
    footers: [],
  },
};

export default function AIModelReport(): ReactElement {
  return (
    <Document
      backgroundColor="#ffffff"
      textColor="#0f172a"
      contentAlign="center"
      contentWidth="700px"
      fontFamily={sansFont}
    >
      {/* ── Header ── */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#ffffff"
        padding="40px 56px 16px 56px"
      >
        <Column>
          <Paragraph
            html="ACME AI LABS"
            fontSize="14px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Machine Learning Division"
            fontSize="11px"
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Html
            html="<div style='text-align:right'><span style='background-color:#dcfce7;color:#16a34a;font-size:11px;font-weight:700;padding:4px 12px;border-radius:12px;'>PASSED ✓</span></div>"
          />
          <Paragraph
            html="Report #MLR-2026-0147"
            fontSize="11px"
            color="#94a3b8"
            textAlign="right"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#16a34a"
        padding="0px"
      >
        <Column>
          <Divider
            borderTopWidth="3px"
            borderTopColor="#16a34a"
            borderTopStyle="solid"
          />
        </Column>
      </Row>

      {/* ── Title ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="32px 56px 8px 56px"
      >
        <Column>
          <Heading
            text="Model Training Report"
            headingType="h1"
            fontSize="28px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b>GPT-Classifier v2.1</b> — Sentiment Analysis Pipeline"
            fontSize="16px"
            color="#475569"
            textAlign="left"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Meta info */}
      <Row
        layout={ColumnLayouts.FourEqual}
        backgroundColor="#f8fafc"
        padding="16px 56px"
      >
        <Column>
          <Paragraph
            html="<b>Date</b>"
            fontSize="10px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="July 23, 2026"
            fontSize="12px"
            color="#0f172a"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html="<b>Author</b>"
            fontSize="10px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Dr. Sarah Chen"
            fontSize="12px"
            color="#0f172a"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html="<b>Dataset</b>"
            fontSize="10px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="SST-5 + Custom"
            fontSize="12px"
            color="#0f172a"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column>
          <Paragraph
            html="<b>Status</b>"
            fontSize="10px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Ready for prod"
            fontSize="12px"
            color="#16a34a"
            fontWeight={600}
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
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
            text="1. Executive Summary"
            headingType="h2"
            fontSize="18px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="GPT-Classifier v2.1 achieves <b>93.7% accuracy</b> on the held-out test set (10,000 samples), a <b>+2.3%</b> improvement over v2.0. The model meets the production threshold (≥92% accuracy, ≥91% F1) and is approved for deployment to the sentiment analysis pipeline."
            fontSize="14px"
            color="#475569"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* Key metrics highlight */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor="#ffffff"
        padding="16px 56px 8px 56px"
      >
        <Column backgroundColor="#f0fdf4" padding="16px" borderRadius="10px">
          <Heading
            text="93.7%"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#16a34a"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Test Accuracy"
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b style='color:#16a34a'>↑ 2.3%</b> vs v2.0"
            fontSize="10px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column backgroundColor="#eff6ff" padding="16px" borderRadius="10px">
          <Heading
            text="92.1%"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#2563eb"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="F1-Score"
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Threshold: ≥91%"
            fontSize="10px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
        <Column backgroundColor="#faf5ff" padding="16px" borderRadius="10px">
          <Heading
            text="4h 23m"
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            color="#7c3aed"
            textAlign="center"
            lineHeight="1.2"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Training Time"
            fontSize="11px"
            color="#64748b"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="4× A100 80GB"
            fontSize="10px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Detailed Metrics ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="28px 56px 0px 56px"
      >
        <Column>
          <Heading
            text="2. Performance Metrics"
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
            values={metricsTable as TableValues}
            headerBackgroundColor="#f1f5f9"
            headerColor="#64748b"
            headerFontSize="10px"
            contentColor="#0f172a"
            contentFontSize="13px"
            stripedRows={false}
          />
        </Column>
      </Row>

      {/* ── Confusion Matrix ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="28px 56px 0px 56px"
      >
        <Column>
          <Heading
            text="3. Confusion Matrix (Test Set)"
            headingType="h2"
            fontSize="18px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="Diagonal values represent correct predictions. The model shows the strongest performance on Positive sentiment (96.6% precision) with some confusion between Neutral and Mixed classes."
            fontSize="13px"
            color="#64748b"
            textAlign="left"
            lineHeight="1.6"
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
            values={confusionMatrix as TableValues}
            headerBackgroundColor="#f1f5f9"
            headerColor="#64748b"
            headerFontSize="10px"
            contentColor="#0f172a"
            contentFontSize="12px"
            stripedRows={false}
          />
        </Column>
      </Row>

      {/* ── Hyperparameters ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="28px 56px 0px 56px"
      >
        <Column>
          <Heading
            text="4. Hyperparameters"
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
            values={hyperparamsTable as TableValues}
            headerBackgroundColor="#f1f5f9"
            headerColor="#64748b"
            headerFontSize="10px"
            contentColor="#0f172a"
            contentFontSize="13px"
            stripedRows={false}
          />
        </Column>
      </Row>

      {/* ── Key Findings ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="28px 56px 0px 56px"
      >
        <Column>
          <Heading
            text="5. Key Findings"
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
        padding="4px 56px 0px 56px"
      >
        <Column backgroundColor="#f0fdf4" padding="16px" borderRadius="8px">
          <Paragraph
            html="✅ <b>Accuracy target met</b> — 93.7% exceeds the 92% production threshold"
            fontSize="13px"
            color="#0f172a"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="4px 56px 0px 56px"
      >
        <Column backgroundColor="#f0fdf4" padding="16px" borderRadius="8px">
          <Paragraph
            html="✅ <b>Latency within bounds</b> — p99 inference: 47ms (target: ≤100ms)"
            fontSize="13px"
            color="#0f172a"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="4px 56px 0px 56px"
      >
        <Column backgroundColor="#fffbeb" padding="16px" borderRadius="8px">
          <Paragraph
            html="⚠️ <b>Mixed/Neutral confusion</b> — 73 Neutral samples misclassified as Mixed. Consider additional labeled data for these boundary cases."
            fontSize="13px"
            color="#0f172a"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="4px 56px 0px 56px"
      >
        <Column backgroundColor="#eff6ff" padding="16px" borderRadius="8px">
          <Paragraph
            html="💡 <b>Training efficiency</b> — Cosine decay scheduler reduced training time by 18% vs linear warmup (v2.0)"
            fontSize="13px"
            color="#0f172a"
            textAlign="left"
            lineHeight="1.6"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Recommendations ── */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor="#ffffff"
        padding="28px 56px 0px 56px"
      >
        <Column>
          <Heading
            text="6. Recommendations"
            headingType="h2"
            fontSize="18px"
            fontWeight={700}
            color="#0f172a"
            textAlign="left"
            lineHeight="1.3"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b>1.</b> Deploy v2.1 to production with shadow mode (14 days) before full cutover."
            fontSize="13px"
            color="#475569"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b>2.</b> Collect 2,000+ Mixed/Neutral boundary samples for v2.2 training."
            fontSize="13px"
            color="#475569"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b>3.</b> Evaluate distillation to a 6-layer model for latency-sensitive endpoints."
            fontSize="13px"
            color="#475569"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
          <Paragraph
            html="<b>4.</b> Set up automated drift detection on weekly metric snapshots."
            fontSize="13px"
            color="#475569"
            textAlign="left"
            lineHeight="1.7"
            fontFamily={sansFont}
          />
        </Column>
      </Row>

      {/* ── Approvals ── */}
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
            html="ML ENGINEER"
            fontSize="10px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="&nbsp;"
            fontSize="28px"
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
            html="Dr. Sarah Chen / Date"
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
            html="ML TEAM LEAD"
            fontSize="10px"
            fontWeight={700}
            color="#94a3b8"
            textAlign="left"
            lineHeight="1.4"
            fontFamily={sansFont}
          />
          <Paragraph
            html="&nbsp;"
            fontSize="28px"
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
            html="Alex Rodriguez / Date"
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
        padding="20px 56px 28px 56px"
      >
        <Column>
          <Paragraph
            html="ACME AI Labs · Confidential · Generated with <a href='https://github.com/unlayer/elements'>Unlayer Elements</a>"
            fontSize="10px"
            color="#94a3b8"
            textAlign="center"
            lineHeight="1.5"
            fontFamily={sansFont}
          />
        </Column>
      </Row>
    </Document>
  );
}
