export default function Projects() {
  const base = import.meta.env.BASE_URL;
  const aiAssets = `${base}projects/ai-search`;
  const imageAssets = `${base}projects/image-processing`;
  const kalmanAssets = `${base}projects/kalman`;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Projects</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
        Technical Projects & Open-Source Work
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
        A selection of non-thesis projects spanning artificial intelligence,
        scientific computing, numerical modeling, computer vision, and quantitative methods.
      </p>

      <div className="mt-14 space-y-20">
        <section className="border-b border-gray-200 pb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Open Source</p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">MOLE — Mimetic Operators Library Enhanced</h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            Co-authored and extended an existing scientific-computing library with
            additional functional APIs, improved documentation, and cross-platform compatibility.
          </p>
        </section>

        <section className="border-b border-gray-200 pb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Artificial Intelligence</p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            Intelligent Search & Adversarial Game Agents
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            Implemented A* and uniform-cost search for Wilson-algorithm mazes using a modified
            Manhattan metric. Also built a Connect-4 agent using Minimax and alpha-beta pruning,
            achieving approximately <strong>78% win efficiency across 300 random-user trials</strong>.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <figure>
              <img src={`${aiAssets}/search_algorithm_1.png`} alt="Maze search visualization"
                className="w-full rounded-lg border border-gray-200 bg-white" />
              <figcaption className="mt-2 text-sm text-gray-500">Search-agent path through a generated maze.</figcaption>
            </figure>
            <figure>
              <img src={`${aiAssets}/intelligent_search_2.png`} alt="Second maze search visualization"
                className="w-full rounded-lg border border-gray-200 bg-white" />
              <figcaption className="mt-2 text-sm text-gray-500">Additional maze instance showing solution-path behavior.</figcaption>
            </figure>
          </div>

          <figure className="mt-8">
            <img src={`${aiAssets}/connect_4_1.png`} alt="Connect Four game agent screenshot"
              className="w-full rounded-lg border border-gray-200 bg-white" />
            <figcaption className="mt-2 text-sm text-gray-500">
              Connect-4 adversarial-search project using Minimax and alpha-beta pruning.
            </figcaption>
          </figure>
        </section>

        <section className="border-b border-gray-200 pb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Scientific Computing</p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            Thermal Hotspot Modeling on Printed Circuit Boards
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            Developed and optimized a finite-element simulation incorporating electrical,
            physical, and thermal component properties to identify PCB thermal hotspots
            and potential failure points.
          </p>
        </section>

        <section className="border-b border-gray-200 pb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Geometry & Numerical Methods
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            Efficient 2D / 3D Mesh Generator for Arbitrary Polygons
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            Designed a mesh generator supporting arbitrary polygons, multiple boundary conditions,
            edge intersections, and internal points; reduced mesh-generation time by approximately
            <strong> 40%</strong>.
          </p>
        </section>

        <section className="border-b border-gray-200 pb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Computer Vision</p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            Image Processing & Applications
          </h2>

          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500"> PCB Manufacturing Process Improvements</p>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            Large Scale manufactured PCB's often go through quality checks to assess
            defects (trace thickness, solder overflow, solder shorts, etc). My goal was to develop a very low cost 
            SSIM (Structural Similarity Index) approach, followed by a nonlinear transformation that emphasizes subtle modifications
            to assessing manufacturing defects. 
          </p>

          <div className="mt-10 space-y-8">
            <figure>
              <img src={`${imageAssets}/image_processing_3.png`}
                alt="Image processing pipeline with Sobel gradient and Chan-Vese segmentation"
                className="w-full rounded-lg border border-gray-200 bg-white" />
              <figcaption className="mt-2 text-sm text-gray-500">
                Feature-extraction pipeline combining smoothing, Sobel-gradient cues, and Chan–Vese segmentation.
              </figcaption>
            </figure>
            <div className="grid gap-8 lg:grid-cols-2">
              <figure>
                <img src={`${imageAssets}/image_processing_2.png`} alt="Indoor-scene Chan-Vese segmentation"
                  className="w-full rounded-lg border border-gray-200 bg-white" />
              </figure>

            </div>
          </div>
        </section>

        <section>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Quantitative Modeling</p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            Time-Series Forecasting with Kalman Filters
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            Implemented a Kalman-filter model for short-term stock-price forecasting;
            identified overfitting tendencies under volatile market conditions and used
            residual analysis, parameter tuning, and regularization ideas to improve generalization.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <figure>
              <img src={`${kalmanAssets}/kalman_estimate_2.png`} alt="Basic Kalman filtering example"
                className="w-full rounded-lg border border-gray-200 bg-white" />
              <figcaption className="mt-2 text-sm text-gray-500">
                Kalman filtering smooths noisy measurements toward the underlying state.
              </figcaption>
            </figure>
            <figure>
              <img src={`${kalmanAssets}/kalman_apple_prediction_1.png`} alt="AAPL actual versus Kalman estimate"
                className="w-full rounded-lg border border-gray-200 bg-white" />
              <figcaption className="mt-2 text-sm text-gray-500">
                Long-horizon AAPL actual close versus Kalman-filtered estimate.
              </figcaption>
            </figure>
            <figure>
              <img src={`${kalmanAssets}/kalman_overfit_1.png`} alt="AAPL final 30 days versus Kalman estimate"
                className="w-full rounded-lg border border-gray-200 bg-white" />
              <figcaption className="mt-2 text-sm text-gray-500">
                Final 30-day window highlighting estimator lag during faster market moves.
              </figcaption>
            </figure>
            <figure>
              <img src={`${kalmanAssets}/kalman_residual_2.png`} alt="Kalman residual plot"
                className="w-full rounded-lg border border-gray-200 bg-white" />
              <figcaption className="mt-2 text-sm text-gray-500">
                Residual analysis used to diagnose systematic estimation error.
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </main>
  );
}
