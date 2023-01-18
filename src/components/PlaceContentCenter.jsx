export default function PlaceContentCenter({ children }) {
  return (
    <div className='flex items-center justify-center min-h-screen antialiased tracking-tight bg-slate-300 text-slate-800'>
      <div className='w-1/4'>{children}</div>
    </div>
  );
}
