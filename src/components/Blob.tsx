interface BlobProps {
  scale: number;
  opacity: number;
  color?: string;
  rotation?: number;
}

const Blob: React.FC<BlobProps> = ({
  scale,
  opacity,
  rotation = 0,
  color = '#a8c6a5',
}) => {
  return (
    <svg
      style={{ scale, opacity, rotate: `${rotation}deg` }}
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M369.5,310Q321,380,220.5,413.5Q120,447,73.5,343.5Q27,240,94.5,172Q162,104,240.5,103.5Q319,103,368.5,171.5Q418,240,369.5,310Z"
      />
    </svg>
  );
};

export default Blob;
