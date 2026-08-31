export default function Research() {
  const Metric = ({
    value,
    label,
    detail,
  }: {
    value: string;
    label: string;
    detail?: string;
  }) => (
    <div className="border-l-2 border-gray-900 pl-5">
      <p className="text-4xl font-semibold tracking-tight text-gray-900">{value}</p>
      <p className="mt-2 font-medium text-gray-900">{label}</p>
      {detail && <p className="mt-1 text-sm leading-relaxed text-gray-500">{detail}</p>}
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Master's Thesis · Computational Science
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-gray-900 md:text-6xl">
          Making complex geometries usable for reliable numerical simulation
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
          Traditional grid-generation methods can look smooth while quietly producing
          folded or inverted cells. My research develops a reference-grid optimization
          framework that turns several of those invalid cases into usable,
          boundary-conforming meshes.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/jbrzensk/grid-generator"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-700"
          >
            View Code
          </a>
        </div>
      </section>

      {/* Executive impact */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            What changed
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <Metric
              value="0 folded cells"
              label="Across the primary benchmark results"
              detail="C-grid, Hard-C, and Chevron remained valid across the tested resolutions."
            />
            <Metric
              value="~94%"
              label="Lower L² error under grid refinement"
              detail="From 9.73×10⁻⁴ on 21×21 to 6.20×10⁻⁵ on 81×81 in the manufactured heat-equation test."
            />
            <Metric
              value="2,300×"
              label="Fewer explicit time steps in the Swan test"
              detail="Approximately 679 million steps on the folded grid versus 292 thousand on the generated grid."
            />
          </div>
        </div>
      </section>

      {/* Narrative 1 */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              01 · The failure
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
              A smooth-looking grid can still be unusable.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              On irregular and non-convex shapes, a standard Laplace smoother can pull
              grid lines across one another. Once cells fold, the numerical mapping loses
              its orientation and the downstream simulation can become unreliable.
            </p>
          </div>

          <figure>
            <img
              src="/research/cgrid_comparison.jpg"
              alt="C-grid comparison showing the proposed grid generator, a folded vanilla Laplace grid, and an interpolation grid."
              className="w-full rounded-lg border border-gray-200"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
              C-grid benchmark. The proposed generator remains ordered, while the
              vanilla Laplace baseline folds near the inner boundary.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Narrative 2 */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_1.7fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                02 · The approach
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
                Redistribute computational space instead of moving every point directly.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-700">
                The method introduces a lower-dimensional reference grid that controls
                spacing and anisotropy. The physical boundary stays fixed while an
                elliptic solve reconstructs the interior grid.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-gray-700">
                The optimizer is validity-first: eliminate folded cells first, increase the
                minimum safety margin next, then improve cell-area balance and shape.
              </p>
            </div>

            <figure>
              <img
                src="/research/hardc_comparison.jpg"
                alt="Hard-C comparison showing the proposed method remaining valid where the vanilla Laplace baseline folds."
                className="w-full rounded-lg border border-gray-200"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
                Hard-C benchmark. The proposed method keeps the mesh ordered through a
                much tighter turning region where the baseline fails.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Narrative 3 */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          03 · Geometry-aware behavior
        </p>

        <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-gray-900">
          Different geometries fail in different ways, so the method has to adapt.
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-700">
          The Fish and Swan tests show why a single “make every cell equal” rule is not
          enough. Boundary placement and local geometry can dominate the interior grid,
          so the extended method also reparameterizes boundary-node spacing while
          preserving the physical boundary itself.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <figure>
            <img
              src="/research/fish_comparison.jpg"
              alt="Fish geometry comparing interpolation with the optimized generated grid."
              className="w-full rounded-lg border border-gray-200"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
              Fish geometry: the generated grid redistributes the severe compression near
              the narrow waist and improves worst-cell robustness.
            </figcaption>
          </figure>

          <figure>
            <img
              src="/research/swan_comparison.jpg"
              alt="Swan geometry comparing folded interpolation with the generated Swan grid."
              className="w-full rounded-lg border border-gray-200"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
              Swan geometry: interpolation folds, while the boundary-reparameterized
              generated grid remains ordered.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PDE validation */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            04 · Does the grid actually work?
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-gray-900">
            The final test was not visual quality — it was whether the mesh could support
            a real PDE solve.
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-700">
            I used the generated grid with MOLE's mimetic curvilinear Laplacian to solve a
            manufactured heat equation with a known exact solution. That let me compare
            the numerical answer directly against ground truth.
          </p>

          <figure className="mt-10">
            <img
              src="/research/heat_solution_comparison.jpg"
              alt="Heat-equation numerical solutions on interpolation and generated grids."
              className="w-full rounded-lg border border-gray-200"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
              At 41×41 resolution, both meshes reproduce the manufactured heat-solution
              structure. The generated grid's L² error was 2.430×10⁻⁴ versus
              2.515×10⁻⁴ for interpolation.
            </figcaption>
          </figure>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <Metric value="9.73×10⁻⁴" label="L² error at 21×21" />
            <Metric value="2.43×10⁻⁴" label="L² error at 41×41" />
            <Metric value="6.20×10⁻⁵" label="L² error at 81×81" />
          </div>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-700">
            The error decreases at approximately second-order rates as the grid is refined.
            The important takeaway is that the optimized geometry is not just visually
            cleaner — it remains compatible with an accurate numerical PDE workflow.
          </p>
        </div>
      </section>

      {/* Swan punchline */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              05 · Why validity matters
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
              One geometry turned mesh quality into a 2,300× computational difference.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              On the Swan geometry, the folded interpolation grid contained 47 invalid
              cells and forced the explicit solver down to a time step of 1.48×10⁻⁹.
              Reaching the final simulation time would require about 679 million steps,
              and the solution became numerically undefined.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              The generated grid removed the observed folding, increased the usable time
              step to 3.42×10⁻⁶, and completed the same manufactured-solution experiment
              in about 292 thousand steps.
            </p>

            <div className="mt-8 rounded-lg border border-gray-900 p-6">
              <p className="text-5xl font-semibold tracking-tight text-gray-900">2,300×</p>
              <p className="mt-2 font-medium text-gray-900">
                reduction in required explicit time-step count
              </p>
            </div>
          </div>

          <figure>
            <img
              src="/research/swan_heat_validation.jpg"
              alt="Exact Swan heat solution, MOLE numerical solution, and pointwise error on the generated grid."
              className="w-full rounded-lg border border-gray-200"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
              Generated Swan grid: exact solution, MOLE numerical solution, and pointwise
              error at t = 1.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Honest limitations */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Scope & next steps
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-700">
            The results are empirical for the tested 2D geometries and should not be read
            as a universal mesh-untangling guarantee. The Crazy Grid and Fish experiments
            also show that validity and accuracy are different goals: a grid can be valid
            yet still be more distorted or less accurate for a particular PDE. Future work
            includes stronger regularization, broader baseline comparisons, faster elliptic
            solvers, and extension to 3D structured grids.
          </p>
        </div>
      </section>
    </main>
  );
}
