import { NavLink } from "react-router";

const navigation = [
    { name: "ABOUT", path: "/" },
    { name: "EDUCATION", path: "/education" },
    { name: "EXPERIENCE", path: "/experience" },
    { name: "RESEARCH", path: "/research" },
    { name: "SEMINARS/PRESENTATIONS", path: "/presentations" },
    { name: "PROJECTS", path: "/projects" },
    { name: "FUN", path: "/fun" },
  ];

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between">

        <NavLink
          to="/"
          className="text-xl font-semibold tracking-tight text-gray-900"
        >
          ANEESH SRINIVAS
        </NavLink>

        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition ${
                  isActive
                    ? "text-gray-900 underline underline-offset-8"
                    : "text-gray-500 hover:text-gray-900"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}