type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Grid = ({ title, children, className }: Props) => (
  <div className={`px-4 pb-8 pt-24 max-w-7xl m-auto ${className}`}>
    <h2 className='text-xl font-bold pb-4 text-cyan-400'>{title}</h2>
    <div className='grid grid-cols-auto-fill gap-6'>{children}</div>
  </div>
);

export default Grid;