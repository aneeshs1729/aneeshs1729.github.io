export default function Fun() {
  const base = import.meta.env.BASE_URL;
  const funAssets = `${base}fun`;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
        Fun
      </p>

      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
        Things I Build Just Because They're Interesting
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
        Not every project needs to be research or work. This page is where I keep
        experiments that let me explore mathematics, graphics, geometry, and
        computational ideas in a more playful way.
      </p>

      <div className="mt-14 space-y-20">

        {/* Desmos project */}
        <section className="border-b border-gray-200 pb-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Mathematical Art
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
                Drawing with Equations in Desmos
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                I experimented with building images directly from mathematical
                functions and piecewise curves in Desmos. The challenge is not
                simply drawing a shape visually, but translating the geometry
                into equations, domains, transformations, and helper functions.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                This became a fun way to explore how algebra, calculus, and
                computational geometry can be used as a design tool. Curves,
                shading regions, local coordinate changes, and repeated
                structures can all be assembled into surprisingly detailed
                illustrations.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Desmos",
                  "Piecewise Functions",
                  "Parametric Curves",
                  "Coordinate Geometry",
                  "Mathematical Visualization",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <figure>
              <img
                src={`${funAssets}/okami_fanart.png`}
                alt="Desmos graphing project using equations and helper functions to construct an illustrated figure."
                className="w-full rounded-lg border border-gray-200 bg-white"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
                A Desmos illustration built from equations, helper functions,
                curve segments, and coordinate transformations.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Ray tracing */}
        <section>
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <figure className="lg:order-1">
              <img
                src={`${funAssets}/ray_tracing_utah_teapot.png`}
                alt="Utah teapot graphics experiment showing a modeled teapot over a coordinate grid."
                className="w-full rounded-lg border border-gray-200 bg-white"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
                Utah teapot graphics experiment used to explore geometric
                construction and rendering ideas.
              </figcaption>
            </figure>

            <div className="lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Computer Graphics
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
                Ray-Tracing & the Utah Teapot
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                I used the classic Utah teapot as a graphics experiment for
                understanding how complex surfaces can be represented
                mathematically and then rendered computationally.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                What makes projects like this enjoyable is that they sit between
                several areas I like: geometry, numerical computation, visual
                design, and graphics algorithms. Even a familiar object becomes
                a useful playground for thinking about curves, surfaces,
                transformations, visibility, and rendering.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Computer Graphics",
                  "Ray Tracing",
                  "Geometry",
                  "Surface Modeling",
                  "Visualization",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Complex ray tracing */}
        <section className="border-t border-gray-200 pt-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Computer Graphics
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
                Multi-Surface Ray Tracing with a Point Light Source
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                I extended my ray-tracing experiments to a more complex composite
                object: an axe-like model assembled from multiple geometric surfaces
                and illuminated by a point light source.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                The white point above the object represents the light source. This
                experiment gave me a practical way to explore how surface orientation,
                mesh density, material color, light direction, and occlusion interact
                to produce visible shading across a non-trivial 3D object.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Compared with the Utah teapot experiment, this scene uses a more
                irregular combination of surfaces and sharper geometry, making it a
                useful test case for thinking about lighting, visibility, and how
                ray-tracing behavior changes near edges and strongly curved regions.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Ray Tracing",
                  "Point Lighting",
                  "Surface Normals",
                  "Triangle Meshes",
                  "3D Geometry",
                  "Shading",
                  "Visibility",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <figure>
              <img
                src={`${funAssets}/ray_tracing_axe.png`}
                alt="Ray-traced axe-like 3D model illuminated by a white point light above the object."
                className="w-full rounded-lg border border-gray-200 bg-white"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
                Complex ray-tracing scene. The white dot above the model is the point
                light source used to illuminate the multi-surface object.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-gray-200 pt-16">
          <div className="rounded-lg bg-gray-100 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Why I keep a Fun page
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-gray-700">
              These projects are less about polished deliverables and more about
              curiosity. I like using small experiments to understand how an idea
              behaves, whether that means turning equations into artwork or
              turning geometry into rendered objects.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
