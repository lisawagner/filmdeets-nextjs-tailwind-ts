import Image from 'next/image';

type Props = {
  imgUrl: string;
};

const Thumbnail = ({ imgUrl }: Props) => (
  <Image
    placeholder='blur'
    blurDataURL='/images/placeholder.jpg'
    className='rounded-md'
    layout='fill'
    objectFit='cover'
    src={imgUrl}
    alt='thumbnail'
    priority={true}
  />
);

export default Thumbnail;