export default function SeminarsPresentations() {
  const base = import.meta.env.BASE_URL;
  const assets2025 = `${base}presentations/acsess2025`;
  const assets2026 = `${base}presentations/acsess2026`;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
        Seminars / Presentations
      </p>

      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
        Research Talks & Technical Presentations
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
        A selection of research presentations on scientific computing,
        numerical methods, and grid generation.
      </p>

      <div className="mt-14 space-y-20">
        <section className="border-b border-gray-200 pb-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                ACSESS 2026
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
                Generating Ideal Reference Grid for Irregular Geometries
              </h2>

              <p className="mt-2 text-lg text-gray-700">
                Aneesh Srinivas · Jared Brzenski · Jose Castillo
              </p>
            </div>

            <a
              href="https://www.csrc.sdsu.edu/students-research-videos/2026-videos/"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-md bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-700"
            >
              Watch 2026 Presentation
            </a>
          </div>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-600">
            Presented a reference-grid optimization strategy for irregular geometries,
            motivated by the failure of classical smoothers on non-convex domains.
            The presentation explains the logical-grid → reference-grid → physical-grid
            workflow, a two-stage optimization process, and a validity-first approach
            that prioritizes eliminating folded cells before improving secondary mesh
            quality measures.
          </p>

          <div className="mt-10">
            <img
              src={`${assets2026}/acsess2026_poster.png`}
              alt="ACSESS 2026 poster for Generating Ideal Reference Grid for Irregular Geometries."
              className="w-full rounded-lg border border-gray-200 bg-white"
            />
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              ACSESS 2026 presentation poster.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-gray-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Problem
              </p>
              <p className="mt-3 leading-relaxed text-gray-700">
                Classical smoothers can produce visually smooth grids that still fold
                on irregular geometries.
              </p>
            </article>

            <article className="rounded-lg border border-gray-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Core idea
              </p>
              <p className="mt-3 leading-relaxed text-gray-700">
                Optimize the reference space first, then use it to guide the final
                boundary-conforming physical grid.
              </p>
            </article>

            <article className="rounded-lg border border-gray-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Contribution
              </p>
              <p className="mt-3 leading-relaxed text-gray-700">
                A boundary-preserving parameterization with spacing, anisotropy,
                scalar search, and Jacobian-driven reclustering.
              </p>
            </article>
          </div>
        </section>

        <section>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                ACSESS 2025
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
                Constructing Higher-Order Mimetic Operators Without Using Vandermonde Matrices
              </h2>

              <p className="mt-2 text-lg text-gray-700">
                Aneesh Srinivas · Dr. Jared Brzenski · Dr. Jose Castillo
              </p>
            </div>

            <a
              href="https://www.csrc.sdsu.edu/students-research-videos/2025-videos/"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-md bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-700"
            >
              Watch 2025 Presentation
            </a>
          </div>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-600">
            Presented an operator-calculus approach for constructing higher-order
            mimetic operators without relying on traditional Vandermonde-matrix
            formulations. The work focuses on deriving divergence and gradient
            operators through exponential-polynomial identities and comparing
            computational behavior against matrix-based approaches.
          </p>

          <div className="mt-10">
            <img
              src={`${assets2025}/acsess2025_poster.png`}
              alt="ACSESS 2025 poster for constructing higher-order mimetic operators without using Vandermonde matrices."
              className="w-full rounded-lg border border-gray-200 bg-white"
            />
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              ACSESS 2025 presentation poster.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-gray-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Mathematical idea
              </p>
              <p className="mt-3 leading-relaxed text-gray-700">
                Reformulate the construction of higher-order mimetic operators using
                operator calculus and exponential-polynomial identities rather than
                solving a Vandermonde system.
              </p>
            </article>

            <article className="rounded-lg border border-gray-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Evaluation
              </p>
              <p className="mt-3 leading-relaxed text-gray-700">
                Compared computational time and numerical error across increasing
                operator orders to evaluate efficiency and stability.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
