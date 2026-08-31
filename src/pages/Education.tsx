export default function Education() {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
  
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Education
        </p>
  
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
          Academic Background
        </h1>
  
  
        <div className="mt-12 space-y-12">
  
          <section className="border-b border-gray-200 pb-10">
  
            <div className="flex flex-col justify-between gap-3 md:flex-row">
  
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  San Diego State University
                </h2>
  
                <p className="mt-2 text-lg text-gray-700">
                  M.S. Computational Science
                </p>
              </div>
  
              <p className="text-gray-500">
                2024 – 2026
              </p>
  
            </div>
  
            <p className="mt-5 max-w-3xl leading-relaxed text-gray-600">
              Graduate work focused on numerical methods, scientific computing,
              mathematical modeling, grid generation, and PDE-based simulation.
            </p>
  
          </section>
  
  
          <section>
  
            <div className="flex flex-col justify-between gap-3 md:flex-row">
  
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  University of California, Berkeley
                </h2>
  
                <p className="mt-2 text-lg text-gray-700">
                  B.A. Applied Mathematics & Computer Science
                </p>
              </div>
  
              <p className="text-gray-500">
                2020 – 2024
              </p>
  
            </div>
  
            <p className="mt-5 max-w-3xl leading-relaxed text-gray-600">
              Coursework included numerical analysis, artificial intelligence,
              machine learning, data structures, real analysis, scientific
              computing, and databases.
            </p>
  
          </section>
  
        </div>
  
      </main>
    );
  }