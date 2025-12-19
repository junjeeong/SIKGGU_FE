const ProudctThumbnail = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <figure className="w-full h-[440px] p-4">
      <img
        src={imageUrl}
        alt="상품 이미지"
        className="object-cover w-full h-full rounded-xl"
      />
    </figure>
  );
};

export default ProudctThumbnail;
