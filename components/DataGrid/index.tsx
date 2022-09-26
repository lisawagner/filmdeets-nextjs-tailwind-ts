type Props = {
  title: string;
  children: React.ReactNode;
  // className?: string;
};

const GridContainer = ({ title, children }: Props) => {
  // --maxWidth: 1280px;
  return (
    <div className="w-full md:w-11/12 my-0 mx-auto px-4">
      <h1 className="text-cyan-400 my-6 text-2xl">{title}</h1>
      <div className="grid gap-4 grid-cols-auto-fill">{children}</div>
    </div>
  )
}
export default GridContainer