import Card from 'components/Card';
import Empty from 'components/Empty';
import { fetcher } from 'lib/utils';
import useSWR from 'swr';
import { Layout } from './index';

import type { Note } from 'lib/types';

const Trash = () => {
  const { data, error } = useSWR('/api/notes', fetcher);

  const cards = data
    ?.filter((item: Note) => !item.status && !item.archived)
    .map((item: Note) => <Card key={item.id} note={item} />);

  return (
    <div className='mt-0 p-5 lg:mt-10'>
      {!cards?.length ? (
        <Empty message='No notes in Trash' icon='delete' />
      ) : (
        <Layout>{cards}</Layout>
      )}
    </div>
  );
};

export default Trash;
