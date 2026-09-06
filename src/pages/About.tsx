export default function About() {
  const interests = [
    "Scientific Computing",
    "AI & Machine Learning",
    "Numerical Optimization",
    "Computer Vision",
    "Quantitative Modeling",
    "Scientific Software",
    "Open Source Contributions",
  ];

  const domainExpertise = [
    "Artificial Intelligence & Machine Learning",
    "Computer Vision & Image Processing",
    "Software Development & Algorithmic Optimization",
    "Engineering Test Automation & Scripting",
    "Open Source API Development",
    "Numerical Analysis",
    "Scientific Computing",
    "Mathematical Modeling & Simulations",
    "Real Analysis",
  ];

  const skills = {
    Languages: [
      "Java",
      "Python",
      "Julia",
      "C",
      "C++",
      "SQL",
      "MATLAB",
      "Mathematica",
    ],
    "Tools & Libraries": [
      "NumPy",
      "Pandas",
      "Git",
      "Matplotlib Animation",
      "Pygame",
      "scikit-image",
      "SharePoint",
      "Power Automate",
      "Power Apps",
    ],
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Intro */}
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <section>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            About
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900">
            Hi, I'm Aneesh.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            I have a Masters degree in Applied Mathematics and am interested in all openings <strong>(full-time, part-time, consulting or internships) </strong>that apply my skills in areas involving mathematics, scientific
            computing, AI/ML modelling, and software engineering. 
          </p>  
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            I have a solid background in mathematics, alogrithmic optimization and scientific programming.
            My research and projects have focussed on application of mathematics and Computer Science — from numerical methods and scientific simulation to
          intelligent search algorithms and computer vision. I am particularly interested in modelling and developing solutions for <strong> scientific </strong> and <strong> financial </strong> applications.
          </p> 

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
          My specialization is developing solutions via data-analysis and modelling for a wide range of applications (scientific, financial and ML/AI). 
          While agentic advances, have made the art of programming easier, 
          I have kept up my programming proficiency via leet code practice problems/solutions. 
          </p>  
          
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
         Efficient prompt engineering is another skill 
          that I have developed (and continue to refine), with a 
          focus on driving development via accurate specifications and requirements. I strongly feel that as professionals,
          our value will be measured by outcomes and results and therefore, adapting to efficient usage of
          intellegent tools is a necessary skills for the future. 
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
          Outside of my core-interests, I like travelling and retro video games. 
          My other pursuit, that i am currently working on, is developing story boards, developing characters and art-work for fantasy role-play games. 
          </p>
        </section>

        {/* Interests */}
        <div className="space-y-6">
          <aside className="rounded-lg bg-gray-100 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Interests
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </aside>

          <aside className="rounded-lg bg-gray-100 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Contact
            </p>

            <div className="mt-6 space-y-4 text-gray-700">
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <a
                  href="tel:+18583820084"
                  className="mt-1 inline-block hover:text-gray-900 hover:underline"
                >
                  (858) 382-0084
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <a
                  href="mailto: srinivasaneesh@gmail.com"
                  className="mt-1 inline-block hover:text-gray-900 hover:underline"
                >
                  srinivasaneesh@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/aneesh-srinivas/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block break-all hover:text-gray-900 hover:underline"
                >
                  linkedin.com/in/aneesh-srinivas
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
        
      {/* Domain Expertise */}
      <section className="mt-20 border-t border-gray-200 pt-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Domain Expertise
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
          Areas I've studied and worked in
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
          These areas reflect the relevant skills and coursework highlighted in
          my resume.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {domainExpertise.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-20 border-t border-gray-200 pt-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
          Languages, tools & libraries
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-900">
                {category}
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
