import cn from 'classnames';
import Palette from 'components/Palette';
import { PALETTE, URI } from 'lib/constant';
import Notes from 'lib/database';
import type { Colors } from 'lib/types';
import { Note } from 'lib/types';
import type { GetServerSideProps } from 'next';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { mutate } from 'swr';

interface NoteProps {
  item: Note;
}

Modal.setAppElement('#__next');

const NOTE = ({ item }: NoteProps) => {
  const [data, setData] = useState(item);
  const { push } = useRouter();
  const { theme = 'light' } = useTheme();

  const { color, title, content } = data;

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setData({ ...data, [name]: value });
  };

  const save = async () => {
    try {
      await Notes.update(item.id, data);
      mutate('/api/notes');
      push('/');
    } catch (error) {
      //
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={save}
      style={{
        content: {
          margin: 0,
          border: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0)',
        },
        overlay: {
          zIndex: 100,
          backgroundColor: 'rgba(0,0,0,0.7)',
        },
      }}
    >
      <div
        className={cn(
          'flex w-full flex-col justify-between rounded-lg p-4 lg:h-[60vh] lg:w-[70vw]',
          color !== 'default' &&
            PALETTE[theme as 'light' | 'dark'][color as Colors],
          color === 'default' &&
            'border bg-white dark:border-shuttle-gray dark:bg-shark'
        )}
      >
        <input
          name='title'
          type='text'
          value={title}
          onChange={handleChange}
          className='w-full break-words p-2 text-xl font-medium text-shark placeholder-oslo-gray dark:text-athens-gray'
        />

        <textarea
          name='content'
          value={content}
          className='h-[90%] w-full break-words p-2 text-xl text-shark dark:text-athens-gray'
          onChange={handleChange}
        />

        <div className='flex flex-col items-center justify-between gap-2 lg:flex-row'>
          <Palette state={data} setState={setData} />

          <button
            type='button'
            onClick={save}
            className='w-full rounded bg-gray-chateau/10 p-2 text-xl font-medium dark:text-iron lg:w-1/12 lg:bg-transparent lg:hover:bg-alabaster lg:dark:hover:bg-gray-chateau/10'
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  const response = await fetch(URI + '/api/notes/' + id);
  const item = await response.json();

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  return { props: { item } };
};

export default NOTE;
