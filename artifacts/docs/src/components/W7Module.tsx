import { useState } from "react";

const OFFICIAL_W7_URL = "https://www.irs.gov/pub/irs-pdf/fw7.pdf";

const FIELDS: { name: string; meaning: string; example: string }[] = [
  {
    name: "Reason you are submitting Form W-7",
    meaning:
      "Why you need an ITIN. You select one box (a–h) on the official form.",
    example: "Non-resident alien filing a U.S. federal tax return",
  },
  {
    name: "Name (Line 1a)",
    meaning: "Your full legal name exactly as it appears on your passport.",
    example: "Jane Q. Sample",
  },
  {
    name: "Name at birth, if different (Line 1b)",
    meaning: "Used only if your current legal name differs from birth name.",
    example: "Jane Q. Example",
  },
  {
    name: "Applicant's mailing address (Line 2)",
    meaning: "Where the IRS will send your ITIN approval letter.",
    example: "123 Sample Street, Apt 4, Anytown, ST 00000, USA",
  },
  {
    name: "Foreign (non-U.S.) address (Line 3)",
    meaning: "Your permanent address in your country of citizenship.",
    example: "45 Example Road, Sampleville, Sampleland",
  },
  {
    name: "Date of birth (Line 4)",
    meaning: "Format MM / DD / YYYY. Must match supporting documents.",
    example: "01 / 15 / 1990",
  },
  {
    name: "Country of birth (Line 4)",
    meaning: "Country where you were born.",
    example: "Sampleland",
  },
  {
    name: "Country of citizenship (Line 6a)",
    meaning: "All countries you currently hold citizenship in.",
    example: "Sampleland",
  },
  {
    name: "Foreign tax ID number (Line 6b)",
    meaning: "Your tax identification number issued by your home country.",
    example: "SAMPLE-ID-0000000",
  },
  {
    name: "U.S. visa info (Line 6c)",
    meaning: "Visa type, number, and expiration if you are in the U.S. on a visa.",
    example: "B-2 / 0000000 / 12-31-2027",
  },
  {
    name: "Identification documents (Line 6d)",
    meaning:
      "The supporting document you are submitting. Passport is the only stand-alone document.",
    example: "Passport — No. SAMPLE000000 — issued by Sampleland",
  },
  {
    name: "Sign here",
    meaning: "Your signature and the date you sign the form.",
    example: "(your signature) — 04/01/2026",
  },
];

const REASONS = [
  "(a) Non-resident alien required to get an ITIN to claim tax treaty benefit",
  "(b) Non-resident alien filing a U.S. federal tax return",
  "(c) U.S. resident alien filing a U.S. federal tax return",
  "(d) Dependent of a U.S. citizen / resident alien",
  "(e) Spouse of a U.S. citizen / resident alien",
  "(f) Non-resident alien student, professor, or researcher",
  "(g) Dependent / spouse of a non-resident alien holder of a U.S. visa",
  "(h) Other",
];

const DOC_TYPES = [
  "Passport (stand-alone document)",
  "National identification card + birth certificate",
  "Foreign driver's license + birth certificate",
  "U.S. driver's license + birth certificate",
  "Civil birth certificate (for dependents under 18)",
  "Other (see official IRS list)",
];

type Prep = {
  fullName: string;
  dob: string;
  countryOfBirth: string;
  citizenship: string;
  reason: string;
  documentType: string;
  mailingAddress: string;
  foreignAddress: string;
};

const EMPTY_PREP: Prep = {
  fullName: "",
  dob: "",
  countryOfBirth: "",
  citizenship: "",
  reason: "",
  documentType: "",
  mailingAddress: "",
  foreignAddress: "",
};

export function W7Module() {
  const [prep, setPrep] = useState<Prep>(EMPTY_PREP);

  const update = (k: keyof Prep, v: string) =>
    setPrep((p) => ({ ...p, [k]: v }));

  const summaryReady =
    prep.fullName.trim() !== "" &&
    prep.dob.trim() !== "" &&
    prep.countryOfBirth.trim() !== "" &&
    prep.reason.trim() !== "";

  const downloadSummary = () => {
    const text = `LEDGELY — INFORMATION TO TRANSFER INTO OFFICIAL IRS FORM W-7

This is preparation only. Transfer these values into the official blank Form W-7
downloaded directly from the IRS. Do NOT use this document as a tax filing.

Full legal name: ${prep.fullName || "(not entered)"}
Date of birth: ${prep.dob || "(not entered)"}
Country of birth: ${prep.countryOfBirth || "(not entered)"}
Country of citizenship: ${prep.citizenship || "(not entered)"}
Reason for ITIN: ${prep.reason || "(not selected)"}
Identification document: ${prep.documentType || "(not selected)"}

Mailing address: ${prep.mailingAddress || "(not entered)"}
Foreign address: ${prep.foreignAddress || "(not entered)"}
`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ledgely-w7-prepared-information.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="mb-10 rounded-lg border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-slate-200 px-2 py-0.5 rounded">
          ITIN
        </span>
        <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
          W-7 Guide
        </span>
      </div>
      <h2 className="text-xl font-semibold text-slate-900">
        ITIN Application Support System (W-7 Guide)
      </h2>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        A guided preparation system for the official IRS Form W-7. You'll
        understand each field, prepare your information, and confidently
        complete the official form yourself.
      </p>

      {/* A. BLANK FORM DOWNLOAD */}
      <div className="mt-6 rounded-md border border-slate-300 bg-slate-50 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1">
          Step A &middot; Official document
        </p>
        <h3 className="text-base font-semibold text-slate-900">
          Download Official IRS Form W-7 (Blank)
        </h3>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
          The blank form is hosted directly by the IRS. Always use the
          official, unmodified version for your application.
        </p>
        <a
          href={OFFICIAL_W7_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Open Form W-7 on IRS.gov &rarr;
        </a>
      </div>

      {/* B. EDUCATIONAL WALKTHROUGH */}
      <div className="mt-6 rounded-md border border-amber-300 bg-amber-50 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-900 mb-1">
          Step B &middot; Educational Example
        </p>
        <h3 className="text-base font-semibold text-amber-900">
          Educational Example — How to Fill W-7
        </h3>
        <p className="mt-1 text-sm text-amber-900 leading-relaxed">
          This is a learning guide only. It is <strong>not</strong> the
          official form and cannot be submitted. All example values are
          fictional.
        </p>
      </div>

      <div className="mt-4 overflow-hidden rounded-md border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-4 py-2 font-semibold text-slate-900 w-1/4">
                Field
              </th>
              <th className="px-4 py-2 font-semibold text-slate-900">
                What it means
              </th>
              <th className="px-4 py-2 font-semibold text-slate-900 w-1/3">
                Example (fictional)
              </th>
            </tr>
          </thead>
          <tbody>
            {FIELDS.map((f, i) => (
              <tr
                key={f.name}
                className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
              >
                <td className="px-4 py-3 align-top font-medium text-slate-900">
                  {f.name}
                </td>
                <td className="px-4 py-3 align-top text-slate-700 leading-relaxed">
                  {f.meaning}
                </td>
                <td className="px-4 py-3 align-top text-slate-600 italic">
                  {f.example}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* C. PREPARATION TOOL */}
      <div className="mt-8 rounded-md border border-slate-300 bg-slate-50 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1">
          Step C &middot; Preparation tool
        </p>
        <h3 className="text-base font-semibold text-slate-900">
          Prepare Your Information
        </h3>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
          Enter your real details below. Your prepared summary stays on this
          page — nothing is submitted, stored on a server, or sent to the IRS.
        </p>

        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          <Field
            label="Full legal name"
            value={prep.fullName}
            onChange={(v) => update("fullName", v)}
            placeholder="As it appears on your passport"
          />
          <Field
            label="Date of birth"
            value={prep.dob}
            onChange={(v) => update("dob", v)}
            placeholder="MM / DD / YYYY"
          />
          <Field
            label="Country of birth"
            value={prep.countryOfBirth}
            onChange={(v) => update("countryOfBirth", v)}
            placeholder="Country name"
          />
          <Field
            label="Country of citizenship"
            value={prep.citizenship}
            onChange={(v) => update("citizenship", v)}
            placeholder="Country name"
          />
          <Select
            label="Reason for applying"
            value={prep.reason}
            onChange={(v) => update("reason", v)}
            options={REASONS}
            placeholder="Select a reason"
            full
          />
          <Select
            label="Identification document"
            value={prep.documentType}
            onChange={(v) => update("documentType", v)}
            options={DOC_TYPES}
            placeholder="Select a document"
            full
          />
          <Field
            label="Mailing address"
            value={prep.mailingAddress}
            onChange={(v) => update("mailingAddress", v)}
            placeholder="Where the IRS sends your letter"
            full
          />
          <Field
            label="Foreign address"
            value={prep.foreignAddress}
            onChange={(v) => update("foreignAddress", v)}
            placeholder="Permanent address in your home country"
            full
          />
        </div>

        <button
          type="button"
          onClick={() => setPrep(EMPTY_PREP)}
          className="mt-4 text-xs font-medium text-slate-500 hover:text-slate-900 underline-offset-2 hover:underline"
        >
          Clear all fields
        </button>
      </div>

      {/* PREPARED SUMMARY */}
      <div className="mt-6 rounded-md border-2 border-slate-900 bg-white p-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 mb-1">
          Prepared Information Summary
        </p>
        <h3 className="text-base font-semibold text-slate-900">
          Information to transfer into official IRS Form W-7
        </h3>
        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
          This is preparation only. Use these values as a reference while you
          fill in the official blank Form W-7.
        </p>

        {!summaryReady ? (
          <p className="mt-4 text-sm text-slate-500">
            Fill in at least your name, date of birth, country of birth, and
            reason to see your prepared summary.
          </p>
        ) : (
          <dl className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <Row label="Full legal name" value={prep.fullName} />
            <Row label="Date of birth" value={prep.dob} />
            <Row label="Country of birth" value={prep.countryOfBirth} />
            <Row label="Country of citizenship" value={prep.citizenship} />
            <Row label="Reason for ITIN" value={prep.reason} full />
            <Row label="Identification document" value={prep.documentType} full />
            <Row label="Mailing address" value={prep.mailingAddress} full />
            <Row label="Foreign address" value={prep.foreignAddress} full />
          </dl>
        )}

        {summaryReady && (
          <button
            type="button"
            onClick={downloadSummary}
            className="mt-5 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Download summary as .txt
          </button>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  full,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  full?: boolean;
}) {
  return (
    <label className={"block " + (full ? "sm:col-span-2" : "")}>
      <span className="block text-xs font-medium text-slate-700 mb-1">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 bg-white"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
  full,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  full?: boolean;
}) {
  return (
    <label className={"block " + (full ? "sm:col-span-2" : "")}>
      <span className="block text-xs font-medium text-slate-700 mb-1">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-slate-900 bg-white"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Row({
  label,
  value,
  full,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </dt>
      <dd className="text-sm text-slate-900">
        {value || <span className="text-slate-400">—</span>}
      </dd>
    </div>
  );
}
