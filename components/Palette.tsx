import cn from 'classnames';
import { PALETTE } from 'lib/constant';
import type { Note } from 'lib/types';
import { useTheme } from 'next-themes';

interface PaletteProps {
  state: Omit<Note, 'id'>;
  setState: (values: any) => void;
}

const Palette = ({ state, setState }: PaletteProps) => {
  const { theme } = useTheme();

  return (
    <div className='flex w-full items-center gap-x-1 overflow-hidden p-2 hover:overflow-x-auto lg:w-11/12'>
      {Object.entries(PALETTE?.[theme as 'light' | 'dark']).map(
        ([key, color]) => (
          <button
            key={key}
            type='button'
            onClick={() => setState({ ...state, color: key })}
            className={cn(
              color,
              state.color === color && 'border-0',
              'h-3 w-3 cursor-pointer rounded-full border-2 border-black p-3 dark:border-white'
            )}
          />
        )
      )}
    </div>
  );
};

export default Palette;
