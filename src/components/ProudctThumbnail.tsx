const ProudctThumbnail = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <figure className="w-full h-[280px]">
      <img
        src={imageUrl}
        alt="상품 이미지"
        className="object-cover w-full h-full"
      />
    </figure>
  );
};

export default ProudctThumbnail;
