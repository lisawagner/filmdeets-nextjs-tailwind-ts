import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  enabled: boolean
}


export const PrevButton = ({ enabled, onClick }: ButtonProps) => (
  <button
    className="absolute cursor-pointer text-9xl text-cyan-400 items-center justify-center top-1/3 -right-10"
    // className="absolute cursor-pointer text-9xl text-cyan-400 items-center justify-center-right-10"
    // className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <RiArrowRightSLine />
  </button>
);

export const NextButton = ({ enabled, onClick }: ButtonProps) => (
  <button
    className="absolute cursor-pointer text-9xl text-cyan-400 items-center justify-center top-1/3 -left-10"
    onClick={onClick}
    disabled={!enabled}
  >
    <RiArrowLeftSLine />
  </button>
);
