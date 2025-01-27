import Blob from './Blob';

const BlobBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-x-hidden pointer-events-none">
      <div className="absolute left-0 top-0 lg:left-32 lg:-top-[256px] origin-center w-[50vw] sm:w-[40vw] lg:w-[30vw]">
        <Blob scale={3.5} opacity={0.35} color="#a8c6a5" />
      </div>
      <div className="absolute -right-32 top-[100vh] origin-center w-[50vw] sm:w-[40vw] lg:w-[30vw]">
        <Blob scale={2.5} opacity={0.35} rotation={85} color="#DC7454" />
      </div>
      <div className="absolute -left-32 top-[175vh] origin-center w-[50vw] sm:w-[40vw] lg:w-[30vw]">
        <Blob scale={2.5} opacity={0.35} rotation={185} color="#8EC5C1" />
      </div>
    </div>
  );
};

export default BlobBackground;
