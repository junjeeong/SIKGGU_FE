interface NoStoreItemMessageProps {
  message?: string;
  subMessage?: string;
  icon?: string;
  imageSrc?: string;
}

const NoStoreItemMessage = ({
  message = "등록된 상품이 없습니다.",
  subMessage,
  icon = "🛒",
  imageSrc,
}: NoStoreItemMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-400">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={message}
          className="object-contain w-16 h-16 mb-4"
        />
      ) : (
        <span className="mb-4 text-4xl" role="img" aria-label="알림 아이콘">
          {icon}
        </span>
      )}
      <p className="text-lg font-medium">{message}</p>
      {subMessage && <p className="text-sm">{subMessage}</p>}
    </div>
  );
};

export default NoStoreItemMessage;
