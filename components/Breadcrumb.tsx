import Link from 'next/link';

type Props = {
  title: string;
};

const Breadcrumb = ({ title }: Props) => (
  <div className='bg-zinc-800 px-4 pt-20 '>
    <div className='flex items-center max-w-7xl m-auto pb-2 px-1 text-white text-lg'>
      <Link href='/'>
        <span className='hover:opacity-80 cursor-pointer duration-300'>Home</span>
      </Link>
      <span className='block px-2'>|</span>
      <span className='font-bold truncate'>{title}</span>
    </div>
  </div>
);

export default Breadcrumb;