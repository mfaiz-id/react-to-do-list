import clsx from 'clsx';
export default function Button(props) {
  const { children, className = 'bg-blue-600', text } = props;
  return (
    <button
      {...props}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 whitespace-nowrap inline-flex h-10 items-center gap-x-2 text-white px-4 py-2 rounded'
      )}
    >
      {text || children}
    </button>
  );
}
