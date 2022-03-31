interface EmptyProps {
  icon: string;
  message: string;
}

const Empty = ({ icon, message }: EmptyProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <span className="text-9xl material-icons-outlined text-mercury dark:text-tuna mb-5">
        {icon}
      </span>
      <h1 className="text-2xl text-oslo-gray dark:text-grey-chateau sm:text-lg text-center">
        {message}
      </h1>
    </div>
  );
};

export default Empty;
