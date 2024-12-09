export function PlaceholderImage({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill="#F5F5F5" />
      <path
        d="M${width/2} ${height/3} C${width/2+20} ${height/3} ${width/2+20} ${height*2/3} ${width/2} ${height*2/3} C${width/2-20} ${height*2/3} ${width/2-20} ${height/3} ${width/2} ${height/3}Z"
        fill="#E0E0E0"
      />
    </svg>
  );
} 