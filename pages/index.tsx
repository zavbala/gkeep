import Card from 'components/Card';
import Empty from 'components/Empty';
import { Note } from 'lib/types';
import { fetcher } from 'lib/utils';
import type { ReactNode } from 'react';
import useSWR from 'swr';

const Home = () => {
  const { data, error } = useSWR('/api/notes', fetcher);

  if (!data) return 'Loading...';

  const pinnedNotes = data.filter(
    (note: Note) => note.pinned && note.status && !note.archived
  );

  const notes = data.filter(
    (note: Note) => !note.pinned && note.status && !note.archived
  );

  return (
    <>
      <section className='p-5'>
        {!data.length ? (
          <Empty message='Notes you add appear here' icon='lightbulb' />
        ) : !pinnedNotes.length ? (
          <Layout>
            {notes.map((note: Note, index: number) => (
              <Card key={note.id || index} note={note} />
            ))}
          </Layout>
        ) : (
          <>
            <small className='mb-5 text-xs uppercase text-shuttle-gray dark:text-gray-chateau'>
              Pinned
            </small>

            <Layout>
              {pinnedNotes.map((note: Note, index: number) => (
                <Card key={note.id || index} note={note} />
              ))}
            </Layout>

            <small className='mb-5 text-xs uppercase text-shuttle-gray dark:text-gray-chateau'>
              Others
            </small>

            <Layout>
              {notes.map((note: Note, index: number) => (
                <Card key={note.id || index} note={note} />
              ))}
            </Layout>
          </>
        )}
      </section>
    </>
  );
};

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='mb-5 grid grid-cols-1 gap-5 p-2 md:grid-cols-3 lg:grid-cols-4'>
      {children}
    </div>
  );
};

export default Home;
