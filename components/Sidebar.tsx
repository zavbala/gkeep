import cn from 'classnames';
import { useRouter } from 'next/router';

export const paths = [
  { path: '/', name: 'notes', icon: 'lightbulb' },
  { path: '', name: 'reminders', icon: 'notifications' },
  { path: '', name: 'edit labels', icon: 'create' },
  { path: '/archive', name: 'archive', icon: 'archive' },
  { path: '/trash', name: 'trash', icon: 'delete' },
];

const Sidebar = () => {
  const { push, pathname } = useRouter();

  return (
    <aside className='side dark:bg-shark md:w-20'>
      {paths.map((item, index) => (
        <div
          key={index}
          onClick={() => push(item.path)}
          className={cn(
            'side-item sm:h-10 sm:w-10 md:h-14 md:w-14',
            pathname === item.path
              ? 'bg-beeswax dark:bg-black-marlin'
              : 'hover:bg-porcelain dark:hover:bg-shark-light'
          )}
        >
          <span
            className={cn(
              'material-icons-outlined',
              pathname === item.path
                ? 'text-shark dark:text-athens-gray'
                : 'text-shuttle-gray dark:text-gray-chateau'
            )}
          >
            {item.icon}
          </span>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
