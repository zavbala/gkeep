import Card from 'components/Card';
import Empty from 'components/Empty';
import { Note } from 'lib/types';
import { fetcher } from 'lib/utils';
import useSWR from 'swr';
import { Layout } from './index';

const Archive = () => {
  const { data, error } = useSWR('/api/notes', fetcher);

  const cards = data
    ?.filter((item: Note) => item.archived && item.status)
    .map((item: Note) => <Card key={item.id} note={item} />);

  return (
    <div className='mt-0 p-5 lg:mt-10'>
      {!cards?.length ? (
        <Empty message='Your archived notes appear here' icon='archive' />
      ) : (
        <Layout>{cards}</Layout>
      )}
    </div>
  );
};

export default Archive;
