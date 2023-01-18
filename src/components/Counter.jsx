import { IconBrandFacebook } from '@tabler/icons';
import { useState } from 'react';
import Button from './Button';

export default function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  function handleClick() {
    setCount((x) => x + 1);
  }
  return (
    <div>
      <h1 className='text-2xl font-bold text-white'>{count}</h1>
      <div className='mt-5 flex gap-2'>
        <Button onClick={handleClick}>+1</Button>
        <Button
          onClick={() => {
            handleClick();
            handleClick();
            handleClick();
          }}
        >
          +3
        </Button>
      </div>
    </div>
  );
}
