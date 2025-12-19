const PrimaryButton = ({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="h-[100px] w-full text-center py-3 mt-1 text-white font-bold rounded-lg transition-colors duration-200 bg-sikggu-primary hover:bg-sikggu-primary/80"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
