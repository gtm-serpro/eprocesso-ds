import { Link, useLocation } from "react-router";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="relative w-fit mb-8">
      {/* Background layer with blend mode */}
      <div className="absolute inset-0 bg-gray-100 mix-blend-multiply rounded px-2 py-1"></div>
      
      {/* Foreground layer with text */}
      <ul className="relative flex space-x-2 text-[var(--text-color)] px-2 py-1">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join("/")}`;
          return (
            <li key={to} className="flex items-center">
              <span className="mx-1">/</span>
              <Link to={to} className="hover:underline capitalize">
                {path.replace("-", " ")}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
