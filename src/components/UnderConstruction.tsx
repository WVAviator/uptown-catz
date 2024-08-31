import PageMessage from './PageMessage';

const UnderConstruction = () => {
  return (
    <PageMessage
      title="Under Construction"
      message="This part of our website is still being built. Thank you for your patience!"
      image={{
        src: '/construction_cat.png',
        alt: 'A cartoonish overweight tabby cat wearing a construction hat and holding a large hammer.',
      }}
    />
  );
};

export default UnderConstruction;
