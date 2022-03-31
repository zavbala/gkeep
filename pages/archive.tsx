import Empty from "components/Empty";
import useSWR from "swr";
import { fetcher } from "lib/utils";
import Card from "components/Card";
import { Note } from "lib/types";

const Archive = () => {
  const { data, error } = useSWR("/api/notes", fetcher);

  const cards = data
    ?.filter((item: Note) => item.archived && item.status)
    .map((item: Note) => <Card key={item.id} note={item} />);

  return (
    <div className="mt-10">
      {!cards?.length ? (
        <Empty message="Your archived notes appear here" icon="archive" />
      ) : (
        <div className="grid grid-cols-5 gap-5 p-5 sm:grid-cols-1">{cards}</div>
      )}
    </div>
  );
};

export default Archive;
