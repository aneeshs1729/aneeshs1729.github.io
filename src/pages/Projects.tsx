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
        <section 
          id="mole"
          className="border-b border-gray-200 pb-16"
          >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Open Source</p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">MOLE — Mimetic Operators Library Enhanced</h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            Co-authored and extended an existing scientific-computing library with
            additional functional APIs, improved documentation, and cross-platform compatibility. These changes are extensive, peer-reviewed and widely used.

            All my contributions can be downloaded from the public github.com/mole open source repository. 
          </p>
        </section>

        <section 
          id="intelligent-search-agents"
          className="border-b border-gray-200 pb-16 scroll-mt-24"
          >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Artificial Intelligence</p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
              <a
                href="#intelligent-search-agents"
                className="hover:underline"
                >
                Intelligent Search & Adversarial Game Agents
              </a>
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

          <figure className="mx-auto mt-8 max-w-3xl">
            <img
              src={`${aiAssets}/connect_4_1.png`}
              alt="Connect Four game agent screenshot"
              className="mx-auto w-full rounded-lg border border-gray-200 bg-white"
            />
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              Connect-4 adversarial-search project using Minimax and alpha-beta pruning.
            </figcaption>
          </figure>
        </section>

        <section 
          id="nbody-surrogate-modeling"
          className="border-b border-gray-200 pb-16 scroll-mt-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            AI for Scientific Computing · Surrogate Modeling
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            From Simulation to Surrogate: JAX N-Body Modeling, Neural Emulation & Parameter Recovery
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            Built an end-to-end scientific machine-learning pipeline around a
            self-gravitating N-body stellar-cluster simulator. The workflow starts
            with a validated JAX-based physics simulation, samples the physical
            parameter space, trains a neural-network surrogate model, and then uses
            that surrogate as a fast forward model for parameter recovery.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-gray-600">
            The simulator takes two physical inputs—the initial virial ratio
            <strong> Q₀</strong> and Plummer scale radius <strong>a</strong>—and
            produces summary statistics such as bound fraction, velocity dispersion,
            half-mass radius, and final virial ratio. Latin hypercube sampling was used
            to generate a well-distributed training set, and a neural emulator was
            trained to approximate the mapping from physical parameters to simulation outputs.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="border-l-2 border-gray-900 pl-5">
              <p className="text-3xl font-semibold text-gray-900">−3.41×10⁻⁶</p>
              <p className="mt-2 font-medium text-gray-900">Relative energy drift</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                Validation showed stable long-term numerical behavior.
              </p>
            </div>

            <div className="border-l-2 border-gray-900 pl-5">
              <p className="text-3xl font-semibold text-gray-900">2.58×10⁻³</p>
              <p className="mt-2 font-medium text-gray-900">Held-out MSE for f_bound</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                One of the best-learned emulator outputs.
              </p>
            </div>

            <div className="border-l-2 border-gray-900 pl-5">
              <p className="text-3xl font-semibold text-gray-900">5.77×10⁻²</p>
              <p className="mt-2 font-medium text-gray-900">Held-out MSE for r_h</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                Reliable enough to support the final inference step.
              </p>
            </div>
          </div>

          <figure className="mt-10 max-w-4xl">
            <img
              src={`${base}projects/nbody-surrogate/emulator_pred_vs_true.png`}
              alt="Predicted-versus-true plots for the neural surrogate outputs."
              className="w-full rounded-lg border border-gray-200 bg-white"
            />

            <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
              <strong>Neural-surrogate accuracy:</strong> each panel compares the
              neural network's prediction with the true N-body simulation output.
              Points closer to the dashed diagonal indicate better predictions.
              The surrogate learned <strong>f_bound</strong> and <strong>r_h</strong>
              more reliably than <strong>sigma_v</strong> and <strong>Q_final</strong>,
              so the stronger outputs were used in the final inference step.
            </figcaption>
          </figure>

          <div className="mt-8 max-w-4xl rounded-lg border border-gray-200 bg-gray-50 p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              What do these outputs mean?
            </p>

            <div className="mt-5 space-y-5">
              <div>
                <p className="font-semibold text-gray-900">
                  f_bound — Bound fraction
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  The fraction of particles that remain gravitationally attached
                  to the cluster at the end of the simulation. In simple terms,
                  it tells us how much of the cluster stayed together.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  sigma_v — Velocity dispersion
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  A measure of how spread out the particle velocities are. A larger
                  value means the stars are moving at a wider range of speeds.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  r_h — Half-mass radius
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  The radius containing half of the cluster's total mass. It gives
                  a compact measure of how concentrated or spread out the cluster is.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Q_final — Final virial ratio
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  A summary of the balance between kinetic energy and gravitational
                  potential energy at the end of the simulation. It helps describe
                  the cluster's final dynamical state.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-4xl rounded-lg bg-gray-100 p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Industry Relevance
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              The astrophysics problem is a concrete example of a broader workflow:
              <strong> build a trusted simulator, generate synthetic data, train a fast
              surrogate, validate the surrogate, and use it for inference</strong>.
              That pattern appears anywhere high-fidelity simulation is too expensive
              to run repeatedly.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Engineering Digital Twins
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Surrogate models can approximate expensive CFD, structural, thermal,
                  or multiphysics simulations for rapid design-space exploration and
                  real-time prediction.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Quantitative Finance & Risk
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  The same simulation-to-surrogate strategy can accelerate scenario
                  models, calibration loops, Monte Carlo workflows, and inverse
                  parameter estimation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Scientific Machine Learning
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  The project demonstrates how neural networks can emulate expensive
                  physical models while still requiring physics-based validation and
                  careful error diagnostics.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Optimization & Inverse Problems
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Fast emulators are useful when recovering unknown system parameters
                  from observations, performing sensitivity analysis, or repeatedly
                  evaluating a model inside an optimizer.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-4xl rounded-lg border border-gray-200 bg-white p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              My Learnings
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              A surrogate is only useful when its error is understood. The emulator
              learned some outputs much better than others, so I changed the final
              inference likelihood to use only the statistics that were supported by
              held-out validation. That was an important lesson in using ML as part of
              a scientific workflow: model diagnostics should influence the downstream
              decision, not just be reported after the fact.
            </p>
          </div>
        </section>

        <section 
          id="pcb-thermal-modelling"
          className="border-b border-gray-200 pb-16 scroll-mt-24"
          >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Scientific Computing · UC Berkeley
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            Thermal Hotspot Modeling on Printed Circuit Boards
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            This was my first numerical-modeling project at UC Berkeley. I built a
            simplified thermal simulation of a printed circuit board containing
            multiple semiconductor components, copper interconnects, and a
            glass-resin substrate. The goal was to estimate how heat generated by
            active components and resistive copper traces spreads through the PCB
            over time, helping identify potential thermal hotspots before they
            become reliability or failure concerns.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-gray-600">
            The board was discretized on a <strong>100 × 100 grid</strong>. Component
            temperatures were modeled independently, conductor heating was based on
            resistive power loss using <strong>P = I²R</strong>, and heat diffusion
            through the PCB substrate was computed using a finite-difference update.
          </p>

          <div className="mt-7 max-w-4xl rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Thermal model
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              For copper traces, electrical resistance generates heat as current
              flows through the conductor:
            </p>

            <p className="mt-3 font-mono text-sm text-gray-800">
              P = I²R
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              The corresponding temperature rise is estimated from the generated
              energy, material mass, and copper's specific heat capacity.
            </p>
          </div>

          <div className="mt-7 max-w-4xl rounded-lg border border-gray-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Heat diffusion through the PCB
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Temperature propagation through the non-conductive substrate was
              simulated with a finite-difference stencil:
            </p>

            <div className="mt-3 overflow-x-auto">
              <code className="whitespace-nowrap text-sm text-gray-800">
                Tnew[i,j] = (1 - 4η)T[i,j] + η(T[i+1,j] + T[i-1,j] + T[i,j-1] + T[i,j+1])
              </code>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Here, η controls the rate of thermal diffusion based on the substrate's
              thermal properties.
            </p>
          </div>

          <a
            href="https://www.youtube.com/watch?v=InJFZSmllHM"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-md bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-700"
          >
            Watch the simulation →
          </a>

          <div className="mt-8 max-w-4xl rounded-lg bg-gray-100 p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              My Learnings
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              The biggest takeaway was that the model was modular and scaled well as
              the assumptions changed. The semiconductor-temperature function was kept
              separate from the substrate and conductor models, so different components
              could be assigned different thermal-response curves without redesigning
              the overall simulation.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              That means the same framework could be extended to model heterogeneous
              boards containing different semiconductor packages, power levels,
              materials, trace geometries, or cooling assumptions. More broadly, the
              project taught me how to translate physical assumptions into a numerical
              model, isolate interchangeable sub-models, and evaluate how local
              component behavior affects system-level thermal performance.
            </p>
          </div>
        </section>

        <section 
          id="image-processing-algorithms"
          className="border-b border-gray-200 pb-16 scroll-mt-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Computer Vision, Image Processing & Applications</p>

          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            [Project-1] Image Authenticity & Change Detection using SSIM
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            Built a proof-of-concept algorithm for detecting whether an image has been
            subtly altered by comparing it against a trusted reference image. Instead of
            relying on raw pixel-by-pixel differences, the method uses the
            <strong> Structural Similarity Index (SSIM)</strong> to compare local image
            structure through luminance, variance, and covariance.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-gray-600">
            The two images are scanned with corresponding moving windows. SSIM is
            calculated for each pair of local patches and then averaged into an
            image-level similarity score. This makes the detector more sensitive to
            meaningful structural changes while reducing sensitivity to trivial
            pixel-level variation.
          </p>

          <div className="mt-7 max-w-4xl rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Core comparison
            </p>

            <div className="mt-4 overflow-x-auto">
              <code className="whitespace-nowrap text-sm text-gray-800">
                SSIMpatch(x,y) = ((2μxμy + C1)(2σxy + C2)) /
                ((μx² + μy² + C1)(σx² + σy² + C2))
              </code>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Image-level similarity is obtained by averaging the patch scores:
              SSIMimage(A,B) = (1/N) Σ SSIMpatch(xi,yi).
            </p>
          </div>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            We then apply a custom nonlinear scoring function to the image-level SSIM
            result. The score is intentionally most sensitive near a high-similarity
            region—typically around <strong>0.99</strong>—so that images that are
            <em> almost identical</em> receive additional scrutiny. This is useful
            because subtle tampering can otherwise be hidden inside an overall image
            that still looks nearly unchanged.
          </p>

          <div className="mt-7 max-w-4xl rounded-lg border border-gray-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Final score
            </p>

            <p className="mt-3 font-mono text-sm text-gray-800">
              Scorefinal = f(SSIMimage(A,B))
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              The result converts a general-purpose similarity metric into a targeted
              score for identifying subtle modifications.
            </p>
          </div>

          <div className="mt-7 max-w-4xl rounded-lg bg-gray-100 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Real-world relevance
            </p>

            <p className="mt-3 text-lg leading-relaxed text-gray-700">
              My motivation for this project was to develop a the method for detecting fake or tampered
              images. The same idea, i.e. ,  reference-versus-candidate architecture could also be
              adapted to visual quality-assurance workflows where a manufactured image
              is compared against a known-good reference—for example, screening for
              subtle PCB trace or soldering deviations.
            </p>
          </div>

          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            [Project-2] Feature Extraction & Segmentation
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            Built a multi-stage computer-vision pipeline that progressively transforms
            an input image into useful structural features. The <strong>Smoothed
            L-Channel</strong> reduces noise while preserving broad intensity structure;
            the <strong>Sobel Gradient</strong> highlights high-frequency texture and
            object boundaries by measuring local intensity changes; and
            <strong> Chan–Vese segmentation</strong> converts those cues into coherent
            foreground/background regions without requiring explicit edge connectivity.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-gray-600">
            Together, the three stages demonstrate a complete progression from raw pixel
            data to edge detection and ultimately to object-level segmentation. This type
            of pipeline can support downstream tasks such as automated inspection, object
            isolation, scene understanding, feature extraction, and computer-vision
            preprocessing.
          </p>

          <div className="mt-10 space-y-8">
            <figure>
              <img src={`${imageAssets}/image_processing_3.png`}
                alt="Image processing pipeline with Sobel gradient and Chan-Vese segmentation"
                className="w-full rounded-lg border border-gray-200 bg-white" />
              <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">
                From pixels to regions: the smoothed L-channel preserves large-scale
                structure, the Sobel-gradient view highlights edges and texture, and
                Chan–Vese segmentation identifies coherent image regions for downstream
                object detection and analysis.
              </figcaption>
            </figure>
            <div className="grid gap-8 lg:grid-cols-2">
              <figure>
                <img
                  src={`${imageAssets}/image_processing_2.png`}
                  alt="Indoor scene compared with Chan-Vese segmentation output"
                  className="w-full rounded-lg border border-gray-200 bg-white"
                />
                <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">
                  Chan–Vese segmentation on a cluttered indoor scene, showing how
                  region-based segmentation can isolate major object boundaries even when
                  the image contains texture, shadows, and multiple overlapping shapes.
                </figcaption>
              </figure>

            </div>
          </div>
        </section>

        <section 
          id="monte-carlo-radiative-transfer"
          className="border-b border-gray-200 pb-16 scroll-mt-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Monte Carlo Simulation & Scientific Computing
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            Monte Carlo Radiative Transfer in a Dusty Star Cluster
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
            Built an absorption-only <strong>Monte Carlo radiative transfer </strong>
             simulator for a 3D dusty stellar environment containing five stars. The
            model launches randomized photon packets in the B, V, and K wavelength
            bands, chooses emitting stars according to their band luminosity, and
            probabilistically determines whether each packet is absorbed by dust or
            escapes the simulated volume.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-gray-600">
            Each packet samples a random optical depth and converts it into an
            interaction distance,
          </p>

          <div className="mt-6 max-w-4xl rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="font-mono text-sm text-gray-800">
              τ ~ Exp(1), &nbsp;&nbsp; s_int = τ / (κ ρ_dust)
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              If the sampled interaction distance is shorter than the distance to the
              nearest boundary, the photon packet is absorbed; otherwise it escapes.
              Repeating this experiment across hundreds of thousands to millions of
              packets turns many random histories into stable physical estimates.
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            <div className="border-l-2 border-gray-900 pl-5">
              <p className="text-3xl font-semibold text-gray-900">10⁶</p>
              <p className="mt-2 font-medium text-gray-900">Photon packets</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                Used in the convergence study.
              </p>
            </div>

            <div className="border-l-2 border-gray-900 pl-5">
              <p className="text-3xl font-semibold text-gray-900">&lt; 10⁻¹²</p>
              <p className="mt-2 font-medium text-gray-900">Relative energy error</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                Demonstrated tight simulation bookkeeping.
              </p>
            </div>

            <div className="border-l-2 border-gray-900 pl-5">
              <p className="text-3xl font-semibold text-gray-900">37.7%</p>
              <p className="mt-2 font-medium text-gray-900">Drop in escaped B/K ratio</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                Captured the expected reddening caused by dust.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-0 overflow-hidden rounded-lg border border-gray-200 lg:grid-cols-2">
            <figure className="border-b border-gray-200 p-6 lg:border-r">
              <img
                src={`${base}projects/monte-carlo-radiative-transfer/opacity_and_band_results.png`}
                alt="Monte Carlo radiative transfer opacity curve and final B, V, and K band results."
                className="w-full rounded-lg border border-gray-200 bg-white"
              />
              <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">
                The simulation reproduces the expected wavelength dependence:
                blue-band photons encounter much higher dust opacity than K-band
                photons, producing lower escape fractions at shorter wavelengths.
              </figcaption>
            </figure>

            <figure className="border-b border-gray-200 p-6">
              <img
                src={`${base}projects/monte-carlo-radiative-transfer/spectral_reddening.png`}
                alt="Intrinsic and escaped spectral energy distribution showing dust reddening."
                className="w-full rounded-lg border border-gray-200 bg-white"
              />
              <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">
                Intrinsic versus escaped spectral energy distribution. The shorter
                wavelengths are preferentially removed, so the observed spectrum
                becomes redder.
              </figcaption>
            </figure>

            <figure className="border-b border-gray-200 p-6 lg:border-b-0 lg:border-r">
              <img
                src={`${base}projects/monte-carlo-radiative-transfer/absorption_maps.png`}
                alt="Projected star locations and B, V, and K absorbed-luminosity maps."
                className="w-full rounded-lg border border-gray-200 bg-white"
              />
              <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">
                Spatial absorption maps show that the brightest off-center stars
                create asymmetric hotspots and that absorbed signal weakens at
                longer wavelengths.
              </figcaption>
            </figure>

            <figure className="p-6">
              <img
                src={`${base}projects/monte-carlo-radiative-transfer/monte_carlo_convergence.png`}
                alt="Validation and Monte Carlo convergence plots across increasing photon packet counts."
                className="w-full rounded-lg border border-gray-200 bg-white"
              />
              <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">
                Validation and convergence study: escape fractions stabilize as
                packet count increases, while Monte Carlo uncertainty follows the
                expected N⁻¹ᐟ² scaling.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 max-w-4xl rounded-lg bg-gray-100 p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              My Learnings
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              I am referencing this project, as this astronomy problem is one application for this broader set of skills and domain:
              <strong> Monte Carlo simulation, probabilistic modeling, uncertainty
              quantification, numerical validation, convergence analysis, and efficient
              sampling</strong>. These methods are widely transferable to industry
              problems where deterministic calculation is difficult or uncertainty is
              fundamental.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Quantitative Finance & Risk
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Monte Carlo methods are used for derivative pricing, portfolio risk,
                  scenario generation, Value-at-Risk, and estimating distributions of
                  uncertain future outcomes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Engineering & Reliability
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  The same simulation mindset applies to reliability analysis,
                  tolerance studies, uncertainty propagation, and failure-probability
                  estimation in complex systems.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Computer Graphs and scientific simulations
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Randomized ray and particle transport methods appear in computer
                  graphics, optical modeling, radiation transport, and other
                  physics-based simulation workflows.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Data Science & Uncertainty
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Sampling, convergence diagnostics, statistical error estimation, and
                  model validation transfer directly to simulation-based inference and
                  uncertainty-aware analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="kalman-filter-forecasting"
          className="scroll-mt-24"
          >
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

        <section className="border-t border-gray-200 pt-16">
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

      </div>
    </main>
  );
}
