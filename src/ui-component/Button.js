export default function Button({
  children,
  style,
  className,
  onClick,
  disabled,
  isLink = false
}) {
  const btnClass = isLink ? `btn-link ${className}` : className;
  return (
    <button
      disabled={disabled}
      className={btnClass}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
