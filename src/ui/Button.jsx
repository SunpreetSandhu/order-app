function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="inline-block rounded-full bg-teal-500 px-4 py-3 
             font-semibold uppercase tracking-wide 
            text-stone-800 transition-colors duration-300 hover:bg-teal-300 
            focus:bg-teal-300 focus:outline-none focus:ring focus:ring-teal-300 
            focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
}

export default Button;
