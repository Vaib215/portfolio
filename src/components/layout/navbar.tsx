import ThemeToggle from "./toggle-theme";

export default function Navbar() {
  return (
    <>
      <div className="h-16" />
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 z-40 transition-colors duration-300">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 py-3">
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#"
                className="text-2xl font-bold text-blue-600 dark:text-blue-400"
              >
                Vaib
              </a>
            </div>
            <div className="grid grid-cols-3 sm:flex items-center">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Projects",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 border-b border-transparent hover:border-white hover:rotate-6 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 px-3 duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
