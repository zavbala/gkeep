import { useRouter } from "next/router";
import Button from "./Button";
import { useTheme } from "next-themes";
import { APP_NAME } from "lib/constant";
import Image from "next/image";

interface NavbarProps {}

const classes = "text-xl capitalize text-shuttle-gray dark:text-mercury";

const Navbar = () => {
  const { pathname } = useRouter();
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark" ? true : false;

  return (
    <nav className="flex items-center justify-between px-5 sticky top-0 bg-white dark:bg-shark border-b dark:border-shuttle-gray border-iron h-[10vh] z-10">
      <div className="flex items-center w-1/6">
        {pathname === "/" ? (
          <Logo />
        ) : (
          <h2 className={classes}> {pathname.split("/").join("")} </h2>
        )}
      </div>

      <div className="sm:hidden flex items-center w-7/12 p-1 rounded-lg bg-porcelain dark:bg-abbey focus-within:bg-white focus-within:shadow transition-all duration-200">
        <Button icon="search" />
        <input type="search" className="w-full h-full" placeholder="Search" />
      </div>

      <div className="flex items-center gap-x-2">
        <Button
          title={`${isDarkMode ? "Disable" : "Enable"} Dark Mode`}
          icon={isDarkMode ? "dark_mode" : "light_mode"}
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
        />
        <a
          href="https://github.com/zavbala/kepp"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        alt="Vector"
        src="https://cdn.svgporn.com/logos/google-keep.svg"
        width={35}
        height={35}
      />
      <h2 className={classes}> {APP_NAME} </h2>
    </div>
  );
};

export default Navbar;
