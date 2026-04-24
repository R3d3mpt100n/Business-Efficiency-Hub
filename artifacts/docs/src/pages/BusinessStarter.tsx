import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { PRO_SYSTEMS_URL } from "@/data/checkout";
import { downloadPdf, BUSINESS_STARTER_FILES } from "@/data/downloads";
import { W7Module } from "@/components/W7Module";
import { KEY_BENEFITS } from "@/data/proSystems";

const WHATS_INCLUDED = [
  "Decision gate: 3 questions that pick the right business structure for your situation",
  "Ordered 5-step setup path: structure → name → tax ID → registration → banking",
  "Branching EIN vs. ITIN preparation checklists (only the one you need)",
  "Form W-7 preparation module for ITIN applicants",
  "Common-mistakes list so you avoid the traps that force a redo later",
  "Downloadable startup checklist, prep checklists, and compliance calendar (.txt)",
  "A live 'Your Completed Setup Plan' summary you can save and reference",
];

type YesNo = "yes" | "no" | "";
type People = "alone" | "others" | "";
type TaxIdPath = "ein" | "itin" | "";

type Answers = {
  earning: YesNo;
  people: People;
  risk: YesNo;
  taxPath: TaxIdPath;
};

const STORAGE_KEY = "pro:business-starter:answers";

const DEFAULT_ANSWERS: Answers = {
  earning: "",
  people: "",
  risk: "",
  taxPath: "",
};

function recommendStructure(a: Answers):
  | { name: string; why: string }
  | null {
  if (!a.earning || !a.people || !a.risk) return null;
  if (a.people === "others") {
    return {
      name: "Partnership (or Multi-Member LLC)",
      why: "You're operating with others, so you need a structure that defines ownership, responsibilities, and how profits are split. A Multi-Member LLC is usually the safer modern choice.",
    };
  }
  if (a.risk === "yes" || a.earning === "yes") {
    return {
      name: "LLC (Single-Member)",
      why: "You're either earning income or expecting real legal/financial risk. An LLC separates personal assets from business liability and is the standard starting point.",
    };
  }
  return {
    name: "Sole Proprietor",
    why: "You're starting alone, with no current income and low risk exposure. A Sole Proprietorship is the simplest legal starting point — you can upgrade to an LLC later as the business grows.",
  };
}

function loadAnswers(): Answers {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_ANSWERS;
    return { ...DEFAULT_ANSWERS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_ANSWERS;
  }
}

function Q({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-slate-900 mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              className={
                "rounded-md px-3 py-1.5 text-sm border transition-colors " +
                (active
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-500")
              }
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepCard({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6">
      <div className="flex items-start gap-4">
        <span className="flex-none inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white text-sm font-semibold">
          {n}
        </span>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <div className="mt-3 text-slate-700 leading-relaxed text-sm space-y-3">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BusinessStarter() {
  const [answers, setAnswers] = useState<Answers>(DEFAULT_ANSWERS);

  useEffect(() => {
    setAnswers(loadAnswers());
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      // ignore
    }
  }, [answers]);

  const recommendation = useMemo(() => recommendStructure(answers), [answers]);
  const taxPath = answers.taxPath;

  const nextActions = useMemo(() => {
    const steps: string[] = [];
    if (!recommendation) {
      steps.push("Answer the 3 questions in 'Before You Do Anything Else' to get your structure recommendation.");
    } else {
      steps.push(`File formation documents to register as a ${recommendation.name}.`);
    }
    if (!taxPath) {
      steps.push("Choose your tax ID path in Step 3 (EIN or ITIN).");
    } else if (taxPath === "ein") {
      steps.push("Complete the EIN preparation checklist and apply through the IRS.");
    } else {
      steps.push("Complete the ITIN preparation checklist and submit Form W-7.");
    }
    steps.push("Open a dedicated business bank account using your formation documents and tax ID.");
    return steps.slice(0, 3);
  }, [recommendation, taxPath]);

  const reset = () => setAnswers(DEFAULT_ANSWERS);

  const benefits = KEY_BENEFITS["business-starter"] ?? [];

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/pro" className="text-sm text-slate-500 hover:text-slate-900">
        &larr; Back to Pro Systems
      </Link>

      <header className="mt-6 mb-8 pb-8 border-b border-slate-200">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-slate-200 px-2 py-0.5 rounded">
            Pro
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
            Guided execution system
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
          Business Starter System
        </h1>
        <p className="mt-3 text-lg text-slate-600 leading-relaxed">
          A clear, ordered path from idea → decision → legal setup → banking →
          completion. Make each decision once, then move directly to the next
          step.
        </p>
      </header>

      {/* OVERVIEW: KEY BENEFITS + WHAT'S INCLUDED */}
      <section className="mb-10 grid gap-5 md:grid-cols-2">
        <details
          open
          className="group rounded-lg border border-slate-200 bg-white p-5 open:bg-white"
        >
          <summary className="cursor-pointer list-none flex items-center justify-between text-sm font-semibold text-slate-900 select-none">
            <span>Key Benefits</span>
            <span className="text-slate-500 text-xs transition-transform duration-200 group-open:rotate-180">
              &#9662;
            </span>
          </summary>
          <ul className="mt-3 space-y-2">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex gap-3 text-sm text-slate-700 leading-relaxed"
              >
                <span className="text-slate-400">&bull;</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </details>

        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold text-slate-900">What you get</p>
          <ul className="mt-3 space-y-2">
            {WHATS_INCLUDED.map((b) => (
              <li
                key={b}
                className="flex gap-3 text-sm text-slate-700 leading-relaxed"
              >
                <span className="text-slate-400">&bull;</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 1. DECISION GATE */}
      <section className="mb-10 rounded-lg border border-slate-900 bg-slate-50 p-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 mb-2">
          Start here &middot; Decision gate
        </p>
        <h2 className="text-xl font-semibold text-slate-900">
          Before You Do Anything Else
        </h2>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
          Most people pick the wrong business structure or start in the wrong
          order. Answer 3 questions and we'll point you to the right starting
          structure before you spend a dollar.
        </p>

        <div className="mt-6 space-y-5">
          <Q
            label="1. Are you already earning income from this business?"
            value={answers.earning}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "Not yet" },
            ]}
            onChange={(v) => setAnswers({ ...answers, earning: v as YesNo })}
          />
          <Q
            label="2. Are you operating alone or with others?"
            value={answers.people}
            options={[
              { value: "alone", label: "Alone" },
              { value: "others", label: "With others" },
            ]}
            onChange={(v) => setAnswers({ ...answers, people: v as People })}
          />
          <Q
            label="3. Do you expect meaningful legal or financial risk?"
            value={answers.risk}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No / minimal" },
            ]}
            onChange={(v) => setAnswers({ ...answers, risk: v as YesNo })}
          />
        </div>

        <div className="mt-6 rounded-md border border-slate-300 bg-white p-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1">
            Recommendation
          </p>
          {recommendation ? (
            <>
              <p className="text-lg font-semibold text-slate-900">
                {recommendation.name}
              </p>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                {recommendation.why}
              </p>
            </>
          ) : (
            <p className="text-sm text-slate-500">
              Answer all 3 questions above to see your recommended starting
              structure.
            </p>
          )}
        </div>
      </section>

      {/* 2. SETUP PATH */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Setup Path
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          A strict, ordered execution flow. Finish each step, then move to the
          next.
        </p>

        <div className="space-y-4">
          <StepCard n={1} title="Business Structure">
            <p>
              Use the recommendation from the Decision Gate above. Don't
              overthink this — a structure is a starting point, not a permanent
              decision.
            </p>
            {recommendation ? (
              <p className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2">
                <span className="font-semibold text-slate-900">
                  Your path:
                </span>{" "}
                {recommendation.name}.
              </p>
            ) : (
              <p className="text-slate-500">
                Complete the Decision Gate to lock in your structure.
              </p>
            )}
            <p className="text-slate-500">
              Once locked in, move directly to Step 2.
            </p>
          </StepCard>

          <StepCard n={2} title="Name + Business Identity">
            <p>
              <span className="font-semibold text-slate-900">
                What matters when choosing a name:
              </span>{" "}
              clear, easy to spell, easy to say out loud, and not already in
              use in your industry or state.
            </p>
            <div>
              <p className="font-semibold text-slate-900">
                How to check availability:
              </p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Search your state's business name database.</li>
                <li>Search the USPTO trademark database for conflicts.</li>
                <li>Check that the matching domain name is available.</li>
                <li>Search the name on Google and major social platforms.</li>
              </ul>
            </div>
            <div className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2">
              <p className="font-semibold text-amber-900">Common mistake</p>
              <p className="text-amber-900">
                Picking a name that's already trademarked in your industry, or
                that's nearly identical to another registered business in your
                state. Both can force a rebrand later.
              </p>
            </div>
          </StepCard>

          <StepCard n={3} title="EIN / ITIN Decision Layer">
            <p>
              Pick the path that matches your situation. Only the matching
              checklist will appear.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() =>
                  setAnswers({ ...answers, taxPath: "ein" })
                }
                className={
                  "rounded-md px-3 py-1.5 text-sm border " +
                  (taxPath === "ein"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-300 hover:border-slate-500")
                }
              >
                US person (EIN path)
              </button>
              <button
                type="button"
                onClick={() =>
                  setAnswers({ ...answers, taxPath: "itin" })
                }
                className={
                  "rounded-md px-3 py-1.5 text-sm border " +
                  (taxPath === "itin"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-300 hover:border-slate-500")
                }
              >
                Non-resident / no SSN (ITIN path)
              </button>
            </div>

            {taxPath === "ein" && (
              <div className="mt-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="font-semibold text-slate-900 mb-2">
                  EIN preparation checklist
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Legal entity name (matches formation docs)</li>
                  <li>Responsible party name + SSN or ITIN</li>
                  <li>US mailing address</li>
                  <li>Entity type and reason for applying</li>
                  <li>Date business started + accounting year close month</li>
                  <li>Principal activity description</li>
                </ul>
              </div>
            )}

            {taxPath === "itin" && (
              <div className="mt-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="font-semibold text-slate-900 mb-2">
                  ITIN preparation checklist
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Reason for applying (Form W-7 category)</li>
                  <li>
                    Valid passport <span className="text-slate-500">or</span>{" "}
                    two acceptable supporting documents
                  </li>
                  <li>Foreign and US addresses</li>
                  <li>Date and country of birth, country of citizenship</li>
                  <li>Federal tax return (unless exception applies)</li>
                  <li>Submission plan: CAA, IRS office, or mail</li>
                </ul>
              </div>
            )}

            {!taxPath && (
              <p className="text-slate-500">
                Pick a path above to reveal the matching checklist.
              </p>
            )}
          </StepCard>

          <StepCard n={4} title="Business Registration">
            <p>Complete in this exact sequence:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-semibold text-slate-900">
                  File formation documents
                </span>{" "}
                with your state (Articles of Organization for an LLC, etc.).
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Confirm legal entity approval
                </span>{" "}
                — wait for the official certificate or filing receipt.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Store official documents safely
                </span>{" "}
                — keep digital copies in a single labeled folder.
              </li>
            </ol>
            <p className="text-slate-500">
              Do not skip ahead to banking until you have approved formation
              documents in hand.
            </p>
          </StepCard>

          <StepCard n={5} title="Banking Setup">
            <div>
              <p className="font-semibold text-slate-900">What banks require:</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Approved formation documents from your state</li>
                <li>Your EIN confirmation letter (or ITIN, if applicable)</li>
                <li>Government-issued ID</li>
                <li>Operating Agreement (for LLCs / multi-member entities)</li>
                <li>Initial deposit (varies by bank)</li>
              </ul>
            </div>
            <div className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2">
              <p className="font-semibold text-amber-900">Mistakes to avoid</p>
              <ul className="mt-1 list-disc pl-5 space-y-1 text-amber-900">
                <li>Mixing personal and business funds in one account.</li>
                <li>Using a personal debit card for recurring business charges.</li>
                <li>
                  Choosing a bank with no online business tools — you'll fight
                  it every month.
                </li>
              </ul>
            </div>
          </StepCard>
        </div>
      </section>

      {/* ITIN W-7 MODULE */}
      {taxPath === "itin" && <W7Module />}

      {/* 3. COMMON MISTAKES */}
      <section className="mb-10 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          Where Most People Get Stuck
        </h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {[
            "Choosing the wrong structure too early — locking in an LLC before knowing if you'll actually earn income.",
            "Applying for an EIN at the wrong stage — before the entity is formed, or under the wrong responsible party.",
            "Mixing personal and business finances from day one — making bookkeeping and taxes painful later.",
            "Skipping compliance requirements — annual reports, local licenses, sales tax registration.",
          ].map((m) => (
            <li key={m} className="flex gap-3">
              <span className="text-slate-400">&bull;</span>
              <span className="leading-relaxed">{m}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. OUTPUT — COMPLETED PLAN */}
      <section className="mb-10 rounded-lg border-2 border-slate-900 bg-white p-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 mb-2">
          Your output
        </p>
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Your Completed Setup Plan
        </h2>
        <dl className="space-y-3 text-sm">
          <div className="grid grid-cols-3 gap-3">
            <dt className="text-slate-500 font-medium">Business structure</dt>
            <dd className="col-span-2 text-slate-900 font-semibold">
              {recommendation?.name ?? "— pending decision gate"}
            </dd>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <dt className="text-slate-500 font-medium">Tax ID path</dt>
            <dd className="col-span-2 text-slate-900 font-semibold">
              {taxPath === "ein"
                ? "EIN (US person)"
                : taxPath === "itin"
                  ? "ITIN (non-resident / no SSN)"
                  : "— pending Step 3"}
            </dd>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <dt className="text-slate-500 font-medium">Next 3 actions</dt>
            <dd className="col-span-2">
              <ol className="list-decimal pl-5 space-y-1 text-slate-900">
                {nextActions.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </dd>
          </div>
        </dl>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() =>
              downloadPdf(
                "ledgely-setup-plan.pdf",
                `LEDGELY — YOUR COMPLETED SETUP PLAN

Business structure: ${recommendation?.name ?? "(not yet chosen)"}
${recommendation ? "Why: " + recommendation.why : ""}

Tax ID path: ${
                  taxPath === "ein"
                    ? "EIN (US person)"
                    : taxPath === "itin"
                      ? "ITIN (non-resident / no SSN)"
                      : "(not yet chosen)"
                }

Next 3 actions:
${nextActions.map((s, i) => `${i + 1}. ${s}`).join("\n")}
`,
              )
            }
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Download my plan
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Reset answers
          </button>
        </div>
      </section>

      {/* 5. DOWNLOAD PACK — locked preview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-1">
          Downloadable Setup Pack
        </h2>
        <p className="text-sm text-slate-600 mb-4">
          These files come with purchase. Each one is ready to fill in and save
          alongside the system above.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {BUSINESS_STARTER_FILES.map((f) => (
            <div
              key={f.name}
              className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-slate-900 text-sm leading-snug">
                  {f.label}
                </h3>
                <span className="flex-none text-[10px] font-medium uppercase tracking-wide text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                  {f.tag}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed flex-1 mb-3">
                {f.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Available after purchase
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FULL ACCESS INCLUDES */}
      <section className="mb-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
          Full access includes
        </p>
        <ul className="space-y-2">
          {[
            "5 downloadable files: checklists, templates, questionnaires, and a filled example",
            "Startup Checklist — master ordered list from idea to open bank account",
            "EIN + ITIN Preparation Questionnaires — pre-built, just fill in your details",
            "Compliance Calendar — yearly deadlines template, pre-structured",
            "Filled Setup Plan Example — completed sample so you know what yours should look like",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
              <span className="text-slate-400 mt-0.5">&bull;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-slate-500">
          After purchase you'll land on a page where every file is ready to
          download immediately — no email required.
        </p>
      </section>

      {/* CTA */}
      <section className="mb-10 rounded-lg border border-slate-900 bg-slate-900 text-slate-100 p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-2">
          Get full access
        </p>
        <h2 className="text-lg font-semibold text-white mb-2">
          Ready to start your business setup?
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Purchase the Business Starter System to unlock all 5 downloadable
          files and the complete guided workflow.
        </p>
        <a
          href={PRO_SYSTEMS_URL}
          className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
        >
          Unlock full system &rarr;
        </a>
      </section>
    </article>
  );
}
