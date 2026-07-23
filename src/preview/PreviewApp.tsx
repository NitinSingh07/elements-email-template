import { useState, useCallback, useMemo } from "react";
import { renderToHtml, renderToJson } from "@unlayer/react-elements";
import { templates } from "../templates";
import type { TemplateEntry } from "../templates";

type ViewTab = "preview" | "source" | "html" | "json";

export default function PreviewApp() {
  const [selectedId, setSelectedId] = useState(templates[0].id);
  const [activeTab, setActiveTab] = useState<ViewTab>("preview");
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [mobileView, setMobileView] = useState(false);

  const selected = useMemo(
    () => templates.find((t) => t.id === selectedId)!,
    [selectedId]
  );

  const renderedHtml = useMemo(() => {
    return renderToHtml(selected.component(), {
      title: selected.name,
    });
  }, [selected]);

  const renderedJson = useMemo(() => {
    try {
      const json = renderToJson(selected.component());
      return JSON.stringify(json, null, 2);
    } catch {
      return "// renderToJson() output — design JSON for Unlayer visual editor";
    }
  }, [selected]);

  const htmlStats = useMemo(() => {
    const bytes = new Blob([renderedHtml]).size;
    const kb = (bytes / 1024).toFixed(1);
    const tables = (renderedHtml.match(/<table/gi) || []).length;
    const images = (renderedHtml.match(/<img/gi) || []).length;
    return { kb, tables, images, lines: renderedHtml.split("\n").length };
  }, [renderedHtml]);

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyLabel("Copied");
      setTimeout(() => setCopyLabel("Copy"), 2000);
    });
  }, []);

  const modeLabel = selected.mode === "email" ? "Email" : selected.mode === "web" ? "Web" : "Document";

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
            <h1>Elements Enterprise Kit</h1>
            <span className="header-sub">Built with Unlayer Elements</span>
          </div>
          {/* <span className="header-badge">{templates.length} TEMPLATES</span> */}
        </div>
        <div className="header-links">
          <a
            href="https://github.com/NitinSingh07/elements-email-template"
            target="_blank"
            rel="noopener"
            className="header-github"
          >
            GitHub ↗
          </a>
          <a
            href="https://github.com/unlayer/elements"
            target="_blank"
            rel="noopener"
          >
            Elements ↗
          </a>
        </div>
      </header>

      <div className="main-container">
        {/* ── Sidebar ── */}
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

          {/* ── Components Used Panel ── */}
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

        {/* ── Content ── */}
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
                      ? "Preview"
                      : tab === "source"
                        ? "Source"
                        : tab === "html"
                          ? "HTML"
                          : "JSON"}
                  </button>
                )
              )}
            </div>

            <div className="toolbar-right">
              {activeTab === "preview" && (
                <button
                  className={`mobile-toggle ${mobileView ? "active" : ""}`}
                  onClick={() => setMobileView(!mobileView)}
                  title="Toggle mobile view"
                >
                  {mobileView ? "Mobile View" : "Desktop View"}
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
                    {selected.sourceCode.split("\n").length} lines
                  </span>
                </div>
                <pre className="source-code">{selected.sourceCode}</pre>
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
                  <span className="source-filename">output.html</span>
                  <span className="source-lines">
                    {htmlStats.lines} lines · {htmlStats.kb} KB
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
                  <span className="source-filename">design.json</span>
                  <span className="source-lines">
                    Unlayer Design JSON — compatible with the visual editor
                  </span>
                </div>
                <pre className="source-code source-json">{renderedJson}</pre>
              </div>
            )}
          </div>
        </main>
      </div>
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
        sandbox="allow-same-origin"
      />
    </div>
  );
}
