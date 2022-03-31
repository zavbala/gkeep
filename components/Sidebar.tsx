import { useRouter } from "next/router";
import cn from "classnames";

export const paths = [
  { path: "/", name: "notes", icon: "lightbulb" },
  // { path: "", name: "reminders", icon: "notifications" },
  // { path: "", name: "edit labels", icon: "create" },
  { path: "/archive", name: "archive", icon: "archive" },
  { path: "/trash", name: "trash", icon: "delete" },
];

const Sidebar = () => {
  const { push, pathname } = useRouter();

  return (
    <aside className="h-[90vh] w-20 sm:w-10 flex items-center flex-col fixed top-[10vh] bg-white dark:bg-shark m-auto">
      {paths.map((item, index) => (
        <div
          key={index}
          onClick={() => push(item.path)}
          className={cn(
            "flex items-center justify-center p-3 w-14 h-14 sm:w-10 sm:h-10 text-sm font-medium rounded-full cursor-pointer mt-5",
            pathname === item.path
              ? "bg-beeswax dark:bg-black-marlin"
              : "hover:bg-porcelain dark:hover:bg-shark-light"
          )}
        >
          <span
            className={cn(
              "material-icons-outlined",
              pathname === item.path
                ? "text-shark dark:text-athens-gray"
                : "text-shuttle-gray dark:text-gray-chateau"
            )}
          >
            {item.icon}
          </span>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
