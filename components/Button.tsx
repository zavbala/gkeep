import cn from 'classnames';

interface ButtonProps {
  icon?: string;
  filled?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  type?: 'submit' | 'button';
  [x: string]: any;
}

const sizes = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-xl',
};

const Button = ({
  filled,
  icon,
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={
        'group z-20 flex h-10 w-10 items-center justify-center rounded-full hover:bg-shuttle-gray hover:bg-opacity-10'
      }
    >
      <span
        className={cn(
          sizes[size],
          filled ? 'material-icons' : 'material-icons-outlined',
          'text-bunker group-hover:bg-opacity-60 group-hover:text-black dark:text-loblolly dark:group-hover:text-white'
        )}
      >
        {icon}
      </span>
    </button>
  );
};

export default Button;
