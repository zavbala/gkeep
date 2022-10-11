interface EmptyProps {
  icon: string;
  message: string;
}

const Empty = ({ icon, message }: EmptyProps) => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <span className='material-icons-outlined mb-5 text-9xl text-mercury dark:text-tuna'>
        {icon}
      </span>
      <h1 className='dark:text-grey-chateau text-center text-lg text-oslo-gray sm:text-lg md:text-2xl'>
        {message}
      </h1>
    </div>
  );
};

export default Empty;
