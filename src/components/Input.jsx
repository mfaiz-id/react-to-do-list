export default function Input({ type = 'text', ...props }) {
  return (
    <input
      {...props}
      type={type}
      className='inline-flex w-full transition duration-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300'
    />
  );
}
