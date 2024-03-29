import cn from 'classnames';
import Palette from 'components/Palette';
import { PALETTE } from 'lib/constant';
import Notes from 'lib/database';
import { Colors } from 'lib/types';
import { useTheme } from 'next-themes';
import { useEffect, useState, type FormEvent } from 'react';
import { useSWRConfig } from 'swr';
import Button from './Button';

const initialValues = {
  title: '',
  content: '',
  status: true,
  pinned: false,
  archived: false,
  color: 'default',
};

const Command = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(initialValues);
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();
  const { mutate } = useSWRConfig();

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (data.title || data.content) {
      try {
        await Notes.create(data);
        setToggle(false);
        setData(initialValues);
        mutate('/api/notes');
      } catch (error) {
        //
      }
    }

    setToggle(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        'mx-auto my-10 w-3/4 rounded-lg shadow-md lg:w-1/2',
        data.color
          ? PALETTE[theme as 'light' | 'dark'][data.color as Colors]
          : 'bg-white dark:bg-shark',
        (data.color === 'default' || !data.color) &&
          'dark:border dark:border-shuttle-gray'
      )}
    >
      <form
        noValidate
        className='p-2'
        autoComplete='off'
        onSubmit={handleSubmit}
        onFocus={() => setToggle(true)}
      >
        {toggle && (
          <div className='flex items-center'>
            <input
              type='text'
              name='title'
              value={data.title}
              placeholder='Title'
              onChange={handleChange}
              className='command-title'
            />
            <Button
              icon='push_pin'
              filled={data.pinned}
              onClick={() => setData({ ...data, pinned: !data.pinned })}
            />
          </div>
        )}

        <textarea
          name='content'
          value={data.content}
          onChange={handleChange}
          className='command-text'
          placeholder='Take a note...'
        />

        {toggle && (
          <div className='flex flex-col items-center justify-between gap-2 lg:flex-row'>
            <Palette state={data} setState={setData} />

            <button
              type='submit'
              className='command-btn lg:w-auto lg:bg-transparent lg:hover:bg-alabaster lg:dark:hover:bg-gray-chateau/10'
            >
              Close
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Command;
