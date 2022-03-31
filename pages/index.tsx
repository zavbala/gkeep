import Card from "components/Card";
import Empty from "components/Empty";
import useSWR from "swr";
import { Note } from "lib/types";
import { fetcher } from "lib/utils";
import type { ReactNode } from "react";
import { useMemo } from "react";

const Home = () => {
  const { data, error } = useSWR("/api/notes", fetcher);

  if (!data) return "Loading...";

  const pinnedNotes = data.filter(
    (note: Note) => note.pinned && note.status && !note.archived
  );

  const notes = data.filter(
    (note: Note) => !note.pinned && note.status && !note.archived
  );

  return (
    <>
      <section className="p-5">
        {!data.length ? (
          <Empty message="Notes you add appear here" icon="lightbulb" />
        ) : !pinnedNotes.length ? (
          <Layout>
            {notes.map((note: Note, index: number) => (
              <Card key={note.id || index} note={note} />
            ))}
          </Layout>
        ) : (
          <>
            <small className="mb-5 text-shuttle-gray dark:text-gray-chateau uppercase text-xs">
              Pinned
            </small>

            <Layout>
              {pinnedNotes.map((note: Note, index: number) => (
                <Card key={note.id || index} note={note} />
              ))}
            </Layout>

            <small className="mb-5 text-shuttle-gray dark:text-gray-chateau uppercase text-xs">
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

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-5 p-2 gap-5 sm:grid-cols-1 mb-5">
      {children}
    </div>
  );
};

export default Home;
