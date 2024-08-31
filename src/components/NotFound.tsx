import PageMessage from './PageMessage';

const NotFound = () => {
  return (
    <PageMessage
      title="Page Not Found"
      message="Mistakes were made..."
      image={{
        src: '/Cat_08.png',
        alt: 'An illustrated cat giving itself a bath.',
      }}
    />
  );
};

export default NotFound;
