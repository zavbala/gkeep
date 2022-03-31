import Empty from "components/Empty";
import useSWR from "swr";
import { fetcher } from "lib/utils";
import Card from "components/Card";
import { Note } from "lib/types";

const Trash = () => {
  const { data, error } = useSWR("/api/notes", fetcher);

  const cards = data
    ?.filter((item: Note) => !item.status && !item.archived)
    .map((item: Note) => <Card key={item.id} note={item} />);

  const removeAllItems = () => {
    //
  };

  return (
    <div className="mt-10">
      {!cards?.length ? (
        <Empty message="No notes in Trash" icon="delete" />
      ) : (
        <>
          {/* <div className="mb-5 flex items-center w-full justify-center p-5 gap-x-7">
            <h1 className="text-shark dark:text-athens-gray">
              Notes in Trash are deleted after 7 days.
            </h1>
            <button
              type="button"
              onClick={() => {}}
              className="p-3 rounded-md hover:bg-shuttle-gray hover:bg-opacity-10"
            >
              Empty Trash
            </button>
          </div> */}

          <div className="grid grid-cols-5 gap-5 p-5 sm:grid-cols-1">
            {cards}
          </div>
        </>
      )}
    </div>
  );
};

export default Trash;
