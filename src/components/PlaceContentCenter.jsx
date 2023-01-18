export default function PlaceContentCenter({ children }) {
  return (
    <div className='bg-black'>
      <div className='bg-violet-900/20 tracking-tight text-slate-800 antialiased flex items-center justify-center min-h-screen'>
        <div className='w-1/4'>{children}</div>
      </div>
    </div>
  );
}
