const ProductDescription = ({ info }: { info: any }) => {
  const handleClick = () => {
    alert("🛠️ 서비스 개발중...");
  };

  return (
    <section className="h-[500px] flex flex-col gap-4 p-4 pb-[80px]">
      <h3 className="text-3xl">{info.name}</h3>
      <div className="flex gap-1">
        <span className="underline">{info.category}</span>•
        <span>{info.createdAt}</span>
      </div>
      <span className="text-lg font-bold text-red-500">{info.price}</span>
      <div className="pb-8">{info.description}</div>
      <button
        className="w-full py-3 mt-1 font-bold text-center text-white transition-colors duration-200 rounded-lg bg-sikggu-primary hover:bg-sikggu-primary/80"
        onClick={handleClick}
      >
        예약하기
      </button>
    </section>
  );
};

export default ProductDescription;
