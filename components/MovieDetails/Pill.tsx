type Props = {
  text: string;
  className?: string;
};

const Pill = ({ className, text }: Props) => (
  <div className={`bg-cyan-600 text-gray-100 text-xs sm:text-sm font-bold px-2 py-1 sm:px-4 sm:py-2 rounded inline-block ${className}`}>
    {text}
  </div>
);

export default Pill;