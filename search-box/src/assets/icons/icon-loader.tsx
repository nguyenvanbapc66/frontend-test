export const LoaderIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='75'
      height='75'
      viewBox='-9.375 -9.375 93.75 93.75'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      style={{ transform: 'rotate(-90deg)' }}
      {...props}
    >
      <circle r='27.5' cx='37.5' cy='37.5' fill='transparent' stroke='#F2F4F8' strokeWidth='14'></circle>
      <circle
        r='27.5'
        cx='37.5'
        cy='37.5'
        stroke='#6833FF'
        strokeWidth='14'
        strokeLinecap='round'
        strokeDashoffset='116px'
        fill='transparent'
        strokeDasharray='172.70000000000002px'
      ></circle>
    </svg>
  );
};
