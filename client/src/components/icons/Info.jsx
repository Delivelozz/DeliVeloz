export default function Info({ width, height, color }) {
  return (
    <div className="py-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        classname="icon icon-tabler icon-tabler-info-circle"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M12 9h.01" />
        <path d="M11 12h1v4h1" />
      </svg>
    </div>
  );
}
