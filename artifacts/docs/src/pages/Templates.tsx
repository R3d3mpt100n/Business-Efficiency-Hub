import { useState } from "react";
import { Link } from "wouter";
import { templates, type Template } from "@/data/templates";
import { articlesBySlugs } from "@/data/articles";

export default function Templates() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-slate-900">Templates</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Simple, ready-to-use templates and checklists. Copy them, download
          them, or use the matching tool to fill them in directly in your browser.
        </p>
      </div>

      <div className="space-y-6">
        {templates.map((t) => (
          <TemplateCard key={t.slug} template={t} />
        ))}
      </div>
    </div>
  );
}

function TemplateCard({ template }: { template: Template }) {
  const related = articlesBySlugs(template.relatedSlugs ?? []);

  return (
    <article className="rounded-lg border border-slate-200 p-6">
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900">{template.title}</h2>
        <p className="mt-1 text-slate-600">{template.description}</p>
      </header>

      {template.kind === "tool" && (
        <Link
          href={`/tools/${template.toolSlug}`}
          className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Open the {template.title.toLowerCase()}
        </Link>
      )}

      {template.kind === "text" && <TextTemplateBody template={template} />}

      {related.length > 0 && (
        <div className="mt-5 pt-4 border-t border-slate-200">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2">
            Related guides
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {related.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/docs/${a.slug}`}
                  className="text-slate-700 hover:text-slate-900 underline-offset-2 hover:underline"
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function TextTemplateBody({
  template,
}: {
  template: Extract<Template, { kind: "text" }>;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(template.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  const download = () => {
    const blob = new Blob([template.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = template.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <pre className="rounded-md border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700 whitespace-pre-wrap font-mono max-h-72 overflow-auto">
        {template.content}
      </pre>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={copy}
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          {copied ? "Copied!" : "Copy to clipboard"}
        </button>
        <button
          type="button"
          onClick={download}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          Download
        </button>
      </div>
    </div>
  );
}
