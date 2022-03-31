import { PALETTE } from "lib/constant";
import { useTheme } from "next-themes";
import cn from "classnames";
import type { Note } from "lib/types";

interface PaletteProps {
  state: Note;
  setState: (values: any) => void;
}

const Palette = ({ state, setState }: PaletteProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center gap-x-4 w-10/12 overflow-x-auto">
      {Object.entries(PALETTE?.[theme as "light" | "dark"]).map(
        ([key, color]) => (
          <button
            key={key}
            type="button"
            onClick={() => setState({ ...state, color: key })}
            className={cn(
              color,
              state.color === color && "border-0",
              "rounded-full w-6 h-6 cursor-pointer border-2 border-black dark:border-white"
            )}
          />
        )
      )}
    </div>
  );
};

export default Palette;
