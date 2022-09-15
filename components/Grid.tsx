type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Grid = ({ title, children, className }: Props) => (
  <div className={`relative bg-brand-900 px-5 md:px-14 pb-8 pt-8 ${className}`}>
    <h2 className='text-xl font-bold pb-4 text-cyan-400'>{title}</h2>
    <div className='grid grid-cols-auto-fill gap-6'>{children}</div>
  </div>
);

export default Grid;