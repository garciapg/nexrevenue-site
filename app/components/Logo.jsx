export default function Logo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#2DD4D4" />
      <path d="M8 7h6l3.2 5.4L20.5 7H26l-6.2 8.6L26 25h-6l-3.4-5.6L13 25H7l6.4-9.3z" fill="#0D2B4E" />
      <path d="M17.6 4.5 12.8 16h4l-2 11.5 6.6-13h-4.2z" fill="#0D2B4E" stroke="#2DD4D4" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}
