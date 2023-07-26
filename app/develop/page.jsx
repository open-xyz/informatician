import construct from '@/public/assets/error/construct.webp';
import Image from 'next/image';

const Develop = (props) => {
  return (
    <div className="container shadow-md p-8 mt-20 rounded-lg text-center">
      <h1 className="text-2xl md:text-3xl font-bold">Under Development</h1>
      <div className="flex justify-center mb-4">
        <Image loading='lazy' src={construct} alt="a computer under construction with crane" className="development-image" width={300} height={200} />
      </div>
      <p className="text-lg">This page is currently under development. Please check back later.</p>
    </div>
  );
};

export default Develop;
