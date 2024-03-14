export default function Button({ children, variant = 'primary', onClick, disabled }) {
  const variants = {
    primary: 'bg-orange-500 border-orange-600 border ',
    secondary: 'bg-transparent border-orange-500 border hover:bg-orange-500',
  };

  const disabledStyle = `bg-gray-400 text-opacity-70`;

  return (
    <button onClick={onClick} disabled={disabled} className={`py-2 px-6 w-full rounded-md text-sm block hover:opacity-90 active:scale-[0.98] ${variants[variant]} ${disabled && disabledStyle}`}>
      {children}
    </button>
  );
}
