import { useState, useCallback, useMemo } from "react";
import { renderToHtml } from "@unlayer/react-elements";
import { templates } from "../templates";
import type { TemplateEntry } from "../templates";

type ViewTab = "preview" | "source" | "html";

export default function PreviewApp() {
  const [selectedId, setSelectedId] = useState(templates[0].id);
  const [activeTab, setActiveTab] = useState<ViewTab>("preview");
  const [copyLabel, setCopyLabel] = useState("Copy");

  const selected = useMemo(
    () => templates.find((t) => t.id === selectedId)!,
    [selectedId]
  );

  const renderedHtml = useMemo(() => {
    return renderToHtml(selected.component(), {
      title: selected.name,
    });
  }, [selected]);

  const handleCopy = useCallback(
    (text: string) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopyLabel("Copied!");
        setTimeout(() => setCopyLabel("Copy"), 2000);
      });
    },
    []
  );

  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="header">
        <div className="header-brand">
          <h1>Elements Enterprise Kit</h1>
          <span className="header-badge">5 TEMPLATES</span>
        </div>
        <div className="header-links">
          <a
            href="https://github.com/unlayer/elements"
            target="_blank"
            rel="noopener"
          >
            Elements ↗
          </a>
          <a
            href="https://unlayer.com/templates"
            target="_blank"
            rel="noopener"
          >
            Gallery ↗
          </a>
        </div>
      </header>

      <div className="main-container">
        {/* ── Sidebar ── */}
        <aside className="sidebar">
          <div className="sidebar-label">TEMPLATES</div>
          <ul className="template-list">
            {templates.map((t) => (
              <li
                key={t.id}
                className={`template-item ${t.id === selectedId ? "active" : ""}`}
                onClick={() => {
                  setSelectedId(t.id);
                  setActiveTab("preview");
                }}
              >
                <div className="template-item-name">{t.name}</div>
                <div className="template-item-desc">{t.description}</div>
                <div className="template-item-meta">
                  <span className="tag">{t.inspiration}</span>
                  <span className="tag tag-mode">{t.mode}</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* ── Content ── */}
        <main className="content">
          <div className="content-toolbar">
            <div className="tab-group">
              {(["preview", "source", "html"] as ViewTab[]).map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "preview"
                    ? "Preview"
                    : tab === "source"
                      ? "Source Code"
                      : "Raw HTML"}
                </button>
              ))}
            </div>
            <span className="content-info">
              {selected.mode === "document" ? "📄 Document mode" : "📧 Email mode"} · Inspired by {selected.inspiration}
            </span>
          </div>

          <div className="content-body">
            {activeTab === "preview" && (
              <PreviewPanel html={renderedHtml} />
            )}
            {activeTab === "source" && (
              <div className="source-panel">
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(selected.sourceCode)}
                >
                  {copyLabel}
                </button>
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
                <pre className="source-code">{renderedHtml}</pre>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function PreviewPanel({ html }: { html: string }) {
  const handleIframeRef = useCallback(
    (iframe: HTMLIFrameElement | null) => {
      if (!iframe) return;
      const doc = iframe.contentDocument;
      if (!doc) return;
      doc.open();
      doc.write(html);
      doc.close();
      // Auto-resize iframe to content
      const resize = () => {
        try {
          const height = doc.documentElement?.scrollHeight ?? 800;
          iframe.style.height = `${Math.max(height, 600)}px`;
        } catch {
          // cross-origin safety
        }
      };
      iframe.onload = resize;
      setTimeout(resize, 200);
    },
    [html]
  );

  return (
    <div className="preview-frame">
      <iframe
        key={html.length}
        ref={handleIframeRef}
        title="Template Preview"
        sandbox="allow-same-origin"
      />
    </div>
  );
}
