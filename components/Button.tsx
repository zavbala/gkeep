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
  icon,
  filled,
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) => {
  const kind = filled ? 'material-icons' : 'material-icons-outlined';

  return (
    <button {...props} type={type} className={'action-btn group'}>
      <span className={cn('action', sizes[size], kind)}>{icon}</span>
    </button>
  );
};

export default Button;
