import Card from 'components/Card';
import Empty from 'components/Empty';
import { Note } from 'lib/types';
import { fetcher } from 'lib/utils';
import useSWR from 'swr';

import type { ReactNode } from 'react';

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
      <section>
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
            <small className='tagline'>Pinned</small>
            <Layout>
              {pinnedNotes.map((note: Note, index: number) => (
                <Card key={note.id || index} note={note} />
              ))}
            </Layout>

            <small className='tagline'>Others</small>
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
    <div className='grid grid-cols-1 gap-3 p-2 md:grid-cols-3 lg:grid-cols-4'>
      {children}
    </div>
  );
};

export default Home;
