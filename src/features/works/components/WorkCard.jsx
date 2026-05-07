import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

/* ================== Shared Theme Tokens ================== */

const chipBase =
  "text-[11px] px-2 py-1 rounded-lg border border-slate-200 bg-white/70 text-slate-700";

const sectionTitle =
  "text-xs font-semibold uppercase tracking-wide text-slate-500";

/* ✅ ONE shared Show More button (use everywhere) */
const showMoreButton = `
  absolute bottom-3 right-3
  text-xs font-semibold
  px-3 py-1.5 rounded-full
  bg-blue-500
  border border-blue-400
  ring-1 ring-blue-400
  shadow-[0_8px_20px_rgba(0,0,0,0.12)]
  text-white
  hover:bg-blue-600
  transition
`;

const WorkCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!project) return null;

  const {
    title,
    type,
    overview,
    modulesWorkedOn = [],
    techStack = [],
    highlights = [],
  } = project;

  /* ================== Compact Preview ================== */
  const previewHighlights = useMemo(
    () => highlights.slice(0, 1),
    [highlights]
  );

  const previewTech = useMemo(
    () => techStack.slice(0, 5),
    [techStack]
  );

  /* ================== ESC + body lock ================== */
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ================== Modal ================== */
  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      />

      {/* Glass Panel */}
      <div
        className="
          relative z-10
          w-[92vw] md:w-[75vw]
          h-[85vh] md:h-[75vh]
          rounded-3xl
          bg-white
          border border-slate-200
          shadow-2xl shadow-black/25
          p-6
          overflow-y-auto
        "
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            {type && (
              <p className="mt-1 text-sm text-slate-600">
                {type}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="
              h-10 w-10
              rounded-full
              border border-slate-200
              bg-white/70
              text-slate-700
              flex items-center justify-center
            "
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Overview */}
        {overview && (
          <p className="mt-4 text-sm text-slate-700 leading-relaxed">
            {overview}
          </p>
        )}

        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="mt-5">
            <div className={sectionTitle}>Highlights</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc list-inside">
              {highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Modules */}
        {modulesWorkedOn.length > 0 && (
          <div className="mt-5">
            <div className={sectionTitle}>Modules</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {modulesWorkedOn.map((m) => (
                <span key={m} className={chipBase}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="mt-5">
            <div className={sectionTitle}>Tech Stack</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="
                    text-[11px]
                    px-2 py-1
                    rounded-lg
                    border border-slate-200
                    bg-slate-100
                    text-slate-700
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  /* ================== Card ================== */
  return (
    <>
      <div
        className="
          relative
          h-[150px]
          w-[300px] sm:w-[320px]
          rounded-2xl
          border border-slate-200
          bg-white
          shadow-lg shadow-black/10
          p-4
          overflow-hidden
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold leading-snug">
            {title}
          </h3>

          {type && (
            <span
              className="
                shrink-0
                text-[11px]
                font-semibold
                px-2 py-1
                rounded-full
                bg-slate-100
                text-slate-700
                border border-slate-200
              "
            >
              {type}
            </span>
          )}
        </div>

        {/* Overview */}
        {overview && (
          <p className="mt-2 text-xs text-slate-700 leading-relaxed max-h-[36px] overflow-hidden">
            {overview}
          </p>
        )}

        {/* Highlights preview */}
        {previewHighlights.length > 0 && (
          <div className="mt-2">
            <div className={sectionTitle}>Highlights</div>
            <ul className="mt-1 text-xs text-slate-700 list-disc list-inside">
              {previewHighlights.map((h, idx) => (
                <li key={idx} className="truncate">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech preview */}
        {previewTech.length > 0 && (
          <div className="mt-2">
            <div className={sectionTitle}>Tech</div>
            <div className="mt-1 flex flex-wrap gap-2">
              {previewTech.map((t) => (
                <span key={t} className={chipBase}>
                  {t}
                </span>
              ))}

              {techStack.length > previewTech.length && (
                <span
                  className="
                    text-[11px]
                    px-2 py-1
                    rounded-lg
                    border border-slate-200
                    bg-slate-50
                    text-slate-500
                  "
                >
                  +{techStack.length - previewTech.length}
                </span>
              )}
            </div>
          </div>
        )}

        {/* ✅ Shared Show More Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={showMoreButton}
        >
          Show more ↓
        </button>
      </div>

      {/* ✅ Portal Modal */}
      {isOpen && createPortal(modal, document.body)}
    </>
  );
};

export default WorkCard;