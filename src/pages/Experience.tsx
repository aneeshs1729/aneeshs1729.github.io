export default function Experience() {
  const emoryAssets = `${import.meta.env.BASE_URL}experience/emory`;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
        Experience
      </p>

      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
        Research, Engineering & Teaching Experience
      </h1>

      <div className="mt-14 space-y-14">
        {/* NRIEP */}
        <section className="border-b border-gray-200 pb-12">
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                NRIEP Fall Intern
              </h2>
              <p className="mt-1 text-lg text-gray-700">
                Naval Research Enterprise Internship Program, NSWC Corona Division
              </p>
            </div>

            <p className="text-gray-500">Oct 2025 – Dec 2025</p>
          </div>

          <div className="mt-6 max-w-4xl space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              Worked with a multidisciplinary team of five students in the Readiness
              Assessment Division to design a secure workflow that centralized signature
              approvals into a single web-based tool.
            </p>

            <p>
              The goal was to improve the user experience and reduce dependence on
              fragmented email-based approval processes. The project scope was limited
              to workflow design and definition because of the 2025 U.S. Government
              shutdown.
            </p>
          </div>
        </section>

        {/* SDSU */}
        <section className="border-b border-gray-200 pb-12">
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Graduate Research & Teaching Assistant
              </h2>
              <p className="mt-1 text-lg text-gray-700">
                San Diego State University, Mathematics & Statistics Department
              </p>
            </div>

            <p className="text-gray-500">Aug 2024 – May 2026</p>
          </div>

          <div className="mt-6 max-w-4xl space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              Researched computational techniques for reducing grid folding in irregular
              geometries, with applications in numerical simulation, computer vision,
              edge detection, deblurring, and machine learning.
            </p>

            <p>
              Also supported grading, exam proctoring, tutoring, and student office hours.
            </p>
          </div>
        </section>

        {/* Emory */}
        <section>
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Summer Research Intern
              </h2>
              <p className="mt-1 text-lg text-gray-700">Emory University</p>
            </div>

            <p className="text-gray-500">May 2023 – Aug 2023</p>
          </div>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-600">
            Investigated how mathematical modeling, machine learning, and geospatial
            analysis could be combined to understand and forecast NO₂ pollution across
            the contiguous United States using EPA Air Quality System data from
            2000–2016.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="http://www.math.emory.edu/site/cmds-reuret/projects/2023-no2/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-700"
            >
              View Project
            </a>

            <a
              href="https://www.math.emory.edu/site/cmds-reuret/projects/2023-no2/content/2023-NO2-Poster.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-gray-300 px-5 py-3 font-medium text-gray-800 hover:bg-gray-100"
            >
              View Research Poster
            </a>
          </div>

          {/* Story 1 */}
          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.35fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Model-driven forecasting
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                Capturing the long-term decline and seasonal behavior of NO₂
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                Built a mathematical model combining exponential decay with seasonal
                oscillation and fit its parameters using nonlinear least squares. A
                weighted objective improved the fit by accounting for variation in the
                observations.
              </p>
            </div>

            <figure>
              <img
                src={`${emoryAssets}/model_fit.png`}
                alt="Model fit of average NO2 concentration from 2000 to 2016, showing the original observations, best-fit model, initial guess, and data variability."
                className="w-full rounded-lg border border-gray-200 bg-white"
              />
              <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">
                Average U.S. NO₂ concentration from 2000–2016 with the model fit and
                observed variability.
              </figcaption>
            </figure>
          </div>

          {/* Story 2 */}
          <div className="mt-14 grid gap-10 md:grid-cols-[1.35fr_1fr] md:items-center">
            <figure className="md:order-1">
              <img
                src={`${emoryAssets}/lstm_hybrid.png`}
                alt="Hybrid LSTM residual model showing observed NO2 concentration, predicted residuals, model prediction, and MCMC model."
                className="w-full rounded-lg border border-gray-200 bg-white"
              />
              <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">
                Hybrid LSTM experiment: the network captures oscillatory residual
                structure, but large deviations remain.
              </figcaption>
            </figure>

            <div className="md:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Machine learning
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                Testing whether an LSTM could improve the physics-inspired model
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                Trained an LSTM on the residuals of the model-driven forecast, using
                60 previous time points to predict the next observation. The hybrid
                approach captured oscillatory trends, but the experiment also showed
                that the available dataset was too small for the LSTM to consistently
                outperform the simpler model-driven approach.
              </p>
            </div>
          </div>

          {/* Story 3 */}
          <div className="mt-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Geospatial & socioeconomic analysis
            </p>

            <h3 className="mt-2 max-w-4xl text-2xl font-semibold text-gray-900">
              Connecting air pollution patterns with social vulnerability
            </h3>

            <p className="mt-4 max-w-4xl leading-relaxed text-gray-600">
              Aggregated NO₂ concentration by census tract for 2000, 2010, 2014, and
              2016 and combined those values with Social Vulnerability Index data.
              The clearest relationship between SVI and NO₂ appeared in the 2010
              analysis.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <figure>
                <img
                  src={`${emoryAssets}/no2_map_2010.png`}
                  alt="Map of average NO2 concentration by census tract across the contiguous United States in 2010."
                  className="w-full rounded-lg border border-gray-200 bg-white"
                />
                <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">
                  Average NO₂ concentration by census tract in 2010.
                </figcaption>
              </figure>

              <figure>
                <img
                  src={`${emoryAssets}/svi_no2_scatter.png`}
                  alt="Scatter plot of Social Vulnerability Index versus average nitrogen dioxide pollution by census tract in 2010."
                  className="w-full rounded-lg border border-gray-200 bg-white"
                />
                <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">
                  Social Vulnerability Index versus average NO₂ pollution by census
                  tract in 2010.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Research takeaway */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Research takeaway
            </p>

            <p className="mt-3 max-w-4xl text-lg leading-relaxed text-gray-700">
              The project showed the value of combining interpretable mathematical
              models with statistical uncertainty analysis, machine learning, and
              geospatial data. The model-driven approach produced strong average-daily
              NO₂ predictions, posterior samples showed relatively little prediction
              uncertainty, and the LSTM experiment highlighted an important practical
              lesson: more complex ML models are not automatically better when the
              available training data are limited.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
