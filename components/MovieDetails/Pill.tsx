type Props = {
  text: string;
  className?: string;
};

const Pill = ({ className, text }: Props) => (
  <div className={`bg-cyan-600 text-gray-100 text-sm font-bold px-4 py-2 m-2 rounded inline-block ${className}`}>
    {text}
  </div>
);

export default Pill;