import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { renderToHtml, renderToJson } from "@unlayer/react-elements";
import { createElement } from "react";
import { templates } from "../templates";
import type { TemplateEntry } from "../templates";

type ViewTab = "preview" | "source" | "html" | "json";

const presetColors = [
  { name: "Violet", hex: "#7c3aed" },
  { name: "Emerald", hex: "#10b981" },
  { name: "Sky", hex: "#0ea5e9" },
  { name: "Rose", hex: "#f43f5e" },
  { name: "Amber", hex: "#f59e0b" },
  { name: "Indigo", hex: "#6366f1" },
];

const fontFamilies = [
  { name: "Inter (Sans)", value: "'Inter', system-ui, -apple-system, sans-serif" },
  { name: "Fira Code (Mono)", value: "'SF Mono', 'Fira Code', 'Roboto Mono', monospace" },
  { name: "Georgia (Serif)", value: "Georgia, 'Times New Roman', serif" },
];

export default function PreviewApp() {
  const [selectedId, setSelectedId] = useState(templates[0].id);
  const [activeTab, setActiveTab] = useState<ViewTab>("preview");
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [mobileView, setMobileView] = useState(false);

  // Customizer States
  const [brandName, setBrandName] = useState("Acme");
  const [accentColor, setAccentColor] = useState("#7c3aed");
  const [buttonText, setButtonText] = useState("Upgrade to Pro");
  const [selectedFont, setSelectedFont] = useState(fontFamilies[0]);

  // Modal States
  const [showSendModal, setShowSendModal] = useState(false);
  const [testEmail, setTestEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const selected = useMemo(
    () => templates.find((t) => t.id === selectedId)!,
    [selectedId]
  );

  // Update default customizer values when switching templates
  useEffect(() => {
    setAccentColor(selected.colorAccent);
    const btnDefaults: Record<string, string> = {
      "saas-trial-expiring": "Upgrade to Pro — $19/mo",
      "saas-invoice-receipt": "View in Billing Portal",
      "event-invitation": "Reserve Your Spot",
      "changelog-release": "Update Now →",
      "developer-portfolio": "View Resume",
      "ai-model-report": "View Full Report",
      "proposal-document": "Accept Proposal",
      "account-activity-digest": "View Full Dashboard",
    };
    setButtonText(btnDefaults[selected.id] || "Submit");
  }, [selectedId, selected]);

  // Instantiate component with dynamic customizer props
  const componentElement = useMemo(() => {
    return createElement(selected.component, {
      brandName,
      accentColor,
      buttonText,
      fontFamily: selectedFont.value,
    });
  }, [selected.component, brandName, accentColor, buttonText, selectedFont]);

  const renderedHtml = useMemo(() => {
    return renderToHtml(componentElement, {
      title: selected.name,
    });
  }, [componentElement, selected.name]);

  const renderedJson = useMemo(() => {
    try {
      const json = renderToJson(componentElement);
      return JSON.stringify(json, null, 2);
    } catch {
      return "// renderToJson() output — design JSON for Unlayer visual editor";
    }
  }, [componentElement]);

  const htmlStats = useMemo(() => {
    const bytes = new Blob([renderedHtml]).size;
    const kb = (bytes / 1024).toFixed(1);
    const tables = (renderedHtml.match(/<table/gi) || []).length;
    const images = (renderedHtml.match(/<img/gi) || []).length;
    const loadTime3g = (bytes / 1024 / 50).toFixed(2); // estimated 50 KB/s on slow 3G
    return { kb, tables, images, lines: renderedHtml.split("\n").length, loadTime3g };
  }, [renderedHtml]);

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyLabel("Copied");
      setTimeout(() => setCopyLabel("Copy"), 2000);
    });
  }, []);

  // Client-side file exports
  const handleDownloadHtml = useCallback(() => {
    const blob = new Blob([renderedHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selected.id}-customized.html`;
    a.click();
    URL.revokeObjectURL(url);
  }, [renderedHtml, selected.id]);

  const handleDownloadJson = useCallback(() => {
    const blob = new Blob([renderedJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selected.id}-customized.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [renderedJson, selected.id]);

  // Print PDF for document mode
  const handlePrintPdf = useCallback(() => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(renderedHtml);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    }
  }, [renderedHtml]);

  // Simulated Test Email Sender
  const handleSendTestEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testEmail) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
    }, 1500);
  };

  const resetSendModal = () => {
    setShowSendModal(false);
    setSendSuccess(false);
    setIsSending(false);
    setTestEmail("");
  };

  const modeLabel = selected.mode === "email" ? "Email" : selected.mode === "web" ? "Web" : "Document";

  // Dynamic code snippet for the react integration tab
  const reactSnippet = useMemo(() => {
    const capitalizedName = selected.id
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("");
    return `import { renderToHtml } from "@unlayer/react-elements";
import { ${capitalizedName} } from "./templates";

// Render customized template to standalone HTML
const html = renderToHtml(
  <${capitalizedName}
    brandName="${brandName}"
    accentColor="${accentColor}"
    buttonText="${buttonText}"
    fontFamily="${selectedFont.name.split(" ")[0]}"
  />,
  { title: "${selected.name}" }
);`;
  }, [selected, brandName, accentColor, buttonText, selectedFont]);

  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="header">
        <div className="header-brand">
          <div className="header-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <div>
            <h1>Elements Enterprise Kit <span className="logo-spark">⚡</span></h1>
            <span className="header-sub">Built with Unlayer Elements</span>
          </div>
        </div>
        <div className="header-links">
          <button className="send-test-btn" onClick={() => setShowSendModal(true)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Send Test
          </button>
          <a
            href="https://github.com/unlayer/elements"
            target="_blank"
            rel="noopener"
            className="elements-link"
          >
            Elements Docs ↗
          </a>
        </div>
      </header>

      <div className="main-container">
        {/* ── Left Sidebar (Template Picker) ── */}
        <aside className="sidebar">
          <div className="sidebar-label">TEMPLATES</div>
          <ul className="template-list">
            {templates.map((t) => (
              <TemplateItem
                key={t.id}
                template={t}
                isActive={t.id === selectedId}
                onClick={() => {
                  setSelectedId(t.id);
                  setActiveTab("preview");
                }}
              />
            ))}
          </ul>

          <div className="sidebar-section">
            <div className="sidebar-label">ELEMENTS USED</div>
            <div className="elements-chips">
              {selected.elementsUsed.map((el) => (
                <span key={el} className="element-chip">
                  {"<"}{el}{" />"}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Middle Panel (Iframe Preview & Code Viewer) ── */}
        <main className="content">
          <div className="content-toolbar">
            <div className="tab-group">
              {(["preview", "source", "html", "json"] as ViewTab[]).map(
                (tab) => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === "preview"
                      ? "Live Preview"
                      : tab === "source"
                        ? "React Usage"
                        : tab === "html"
                          ? "Raw HTML"
                          : "Design JSON"}
                  </button>
                )
              )}
            </div>

            <div className="toolbar-right">
              {activeTab === "preview" && (
                <>
                  <button
                    className={`mobile-toggle ${mobileView ? "active" : ""}`}
                    onClick={() => setMobileView(!mobileView)}
                    title="Toggle mobile view"
                  >
                    {mobileView ? "Mobile View" : "Desktop View"}
                  </button>

                  {selected.mode === "document" && (
                    <button className="action-btn pdf-btn" onClick={handlePrintPdf}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                        <path d="M6 14h12v8H6z" />
                      </svg>
                      Print PDF
                    </button>
                  )}
                </>
              )}

              {activeTab === "html" && (
                <button className="action-btn" onClick={handleDownloadHtml}>
                  Download HTML
                </button>
              )}

              {activeTab === "json" && (
                <button className="action-btn" onClick={handleDownloadJson}>
                  Download JSON
                </button>
              )}

              <span className="content-info">
                <span className="mode-badge" data-mode={selected.mode}>
                  {modeLabel}
                </span>
                <span className="separator">·</span>
                <span>{htmlStats.kb} KB</span>
                <span className="separator">·</span>
                <span>{htmlStats.tables} tables</span>
              </span>
            </div>
          </div>

          <div className="content-body">
            {activeTab === "preview" && (
              <div className={`preview-wrapper ${mobileView ? "mobile" : ""}`}>
                <PreviewPanel html={renderedHtml} mobileView={mobileView} />
              </div>
            )}
            {activeTab === "source" && (
              <div className="source-panel-container">
                {/* Integration snippet */}
                <div className="source-panel" style={{ marginBottom: "20px" }}>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(reactSnippet)}
                  >
                    {copyLabel}
                  </button>
                  <div className="source-header">
                    <span className="source-filename">React Integration Code</span>
                    <span className="source-lines">Usage code snippet</span>
                  </div>
                  <pre className="source-code source-react">{reactSnippet}</pre>
                </div>

                {/* Full implementation reference */}
                <div className="source-panel">
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(selected.sourceCode)}
                  >
                    {copyLabel}
                  </button>
                  <div className="source-header">
                    <span className="source-filename">
                      {selected.id
                        .split("-")
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join("")}
                      .tsx
                    </span>
                    <span className="source-lines">
                      {selected.sourceCode.split("\n").length} lines (Template Component Library Source)
                    </span>
                  </div>
                  <pre className="source-code">{selected.sourceCode}</pre>
                </div>
              </div>
            )}
            {activeTab === "html" && (
              <div className="source-panel">
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(renderedHtml)}
                >
                  {copyLabel}
                </button>
                <div className="source-header">
                  <span className="source-filename">{selected.id}-customized.html</span>
                  <span className="source-lines">
                    {htmlStats.lines} lines · {htmlStats.kb} KB · Uptime on 3G: ~{htmlStats.loadTime3g}s
                  </span>
                </div>
                <pre className="source-code source-html">{renderedHtml}</pre>
              </div>
            )}
            {activeTab === "json" && (
              <div className="source-panel">
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(renderedJson)}
                >
                  {copyLabel}
                </button>
                <div className="source-header">
                  <span className="source-filename">{selected.id}-customized.json</span>
                  <span className="source-lines">
                    Unlayer Design JSON — compatible with visual drag-and-drop builder
                  </span>
                </div>
                <pre className="source-code source-json">{renderedJson}</pre>
              </div>
            )}
          </div>
        </main>

        {/* ── Right Sidebar (Customizer) ── */}
        <aside className="customizer">
          <div className="customizer-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Template Customizer
          </div>

          {/* Brand Name Input */}
          <div className="customizer-section">
            <label className="customizer-label">Brand / Company Name</label>
            <input
              type="text"
              className="customizer-input"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="e.g. Acme Corp"
            />
          </div>

          {/* Accent Color Palette & Picker */}
          <div className="customizer-section">
            <label className="customizer-label">Accent Color</label>
            <div className="color-presets">
              {presetColors.map((color) => (
                <button
                  key={color.hex}
                  className={`color-preset-btn ${accentColor === color.hex ? "active" : ""}`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setAccentColor(color.hex)}
                  title={color.name}
                />
              ))}
              <div className="color-picker-wrapper">
                <input
                  type="color"
                  className="color-picker-input"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  title="Choose custom color"
                />
                <span className="color-picker-label">Custom</span>
              </div>
            </div>
            <div className="color-hex-text">{accentColor}</div>
          </div>

          {/* CTA Text Input */}
          <div className="customizer-section">
            <label className="customizer-label">Primary Button CTA</label>
            <input
              type="text"
              className="customizer-input"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              placeholder="Button CTA"
            />
          </div>

          {/* Font Family Selector */}
          <div className="customizer-section">
            <label className="customizer-label">Font Typography</label>
            <div className="font-options">
              {fontFamilies.map((font) => (
                <button
                  key={font.name}
                  className={`font-option-btn ${selectedFont.name === font.name ? "active" : ""}`}
                  onClick={() => setSelectedFont(font)}
                >
                  {font.name}
                </button>
              ))}
            </div>
          </div>

          {/* Usage Stat Panel */}
          <div className="customizer-stats-panel">
            <div className="stats-header">Performance Metrics</div>
            <div className="stat-row">
              <span className="stat-label">File Weight:</span>
              <span className="stat-val">{htmlStats.kb} KB</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Layout Tables:</span>
              <span className="stat-val">{htmlStats.tables}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Images Loaded:</span>
              <span className="stat-val">{htmlStats.images}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Load Time (3G):</span>
              <span className="stat-val">{htmlStats.loadTime3g}s</span>
            </div>
          </div>
        </aside>
      </div>

      {/* ── Mock Email Sender Modal ── */}
      {showSendModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={resetSendModal}>×</button>
            
            {!sendSuccess ? (
              <>
                <h2>Send Test Email</h2>
                <p>Simulate sending the rendered email template to check its cross-client rendering.</p>
                
                <form onSubmit={handleSendTestEmail}>
                  <div className="form-group">
                    <label>Recipient Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. you@example.com"
                      value={testEmail}
                      onChange={(e) => setTestEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Mock ESP Provider</label>
                    <select defaultValue="resend">
                      <option value="resend">Resend (Recommended)</option>
                      <option value="sendgrid">SendGrid</option>
                      <option value="postmark">Postmark</option>
                      <option value="mailgun">Mailgun</option>
                    </select>
                  </div>

                  <button type="submit" className="submit-send-btn" disabled={isSending}>
                    {isSending ? "Sending..." : "Send Free Test Email"}
                  </button>
                </form>
              </>
            ) : (
              <div className="modal-success">
                <div className="success-icon">✓</div>
                <h2>Email Dispatched!</h2>
                <p>A mock test email has been simulated and successfully sent to <strong>{testEmail}</strong>.</p>
                <div className="snippet-title">Production Node.js Code Snippet:</div>
                <pre className="modal-snippet">
{`import { Resend } from 'resend';
const resend = new Resend('re_12345');

resend.emails.send({
  from: 'updates@yourservice.com',
  to: '${testEmail}',
  subject: '${selected.name}',
  html: \`<!-- Customized Unlayer Elements Output -->\`
});`}
                </pre>
                <button className="submit-send-btn success-close" onClick={resetSendModal}>
                  Return to Playground
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Template Item Component ── */
function TemplateItem({
  template,
  isActive,
  onClick,
}: {
  template: TemplateEntry;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <li
      className={`template-item ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{ "--accent": template.colorAccent } as React.CSSProperties}
    >
      <div className="template-item-header">
        <span className="template-item-name">{template.name}</span>
      </div>
      <div className="template-item-desc">{template.description}</div>
      <div className="template-item-meta">
        <span className="tag">{template.inspiration}</span>
        <span className={`tag tag-mode tag-${template.mode}`}>
          {template.mode}
        </span>
        <span className="tag tag-category">{template.category}</span>
      </div>
    </li>
  );
}

/* ── Preview Panel ── */
function PreviewPanel({
  html,
  mobileView,
}: {
  html: string;
  mobileView: boolean;
}) {
  const handleIframeRef = useCallback(
    (iframe: HTMLIFrameElement | null) => {
      if (!iframe) return;
      const doc = iframe.contentDocument;
      if (!doc) return;
      doc.open();
      doc.write(html);
      doc.close();
      const resize = () => {
        try {
          const height = doc.documentElement?.scrollHeight ?? 800;
          iframe.style.height = `${Math.max(height, 600)}px`;
        } catch {
          // cross-origin safety
        }
      };
      iframe.onload = resize;
      setTimeout(resize, 300);
    },
    [html]
  );

  return (
    <div className={`preview-frame ${mobileView ? "preview-mobile" : ""}`}>
      <iframe
        key={`${html.length}-${mobileView}`}
        ref={handleIframeRef}
        title="Template Preview"
        sandbox="allow-same-origin allow-modals"
      />
    </div>
  );
}
