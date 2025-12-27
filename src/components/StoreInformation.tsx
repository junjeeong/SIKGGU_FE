interface StoreInformationProps {
  storeName: string;
  storeLocation?: string;
  profileImage?: string;
}

const StoreInformation = ({
  storeName,
  storeLocation = "위치 정보 없음",
  profileImage,
}: StoreInformationProps) => {
  return (
    <div className="flex items-center w-full p-4 h-14 ">
      {profileImage ? (
        <figure className="flex items-center justify-center bg-gray-300 rounded-full size-12">
          <img
            src={profileImage}
            alt="사장님 프로필"
            width={34}
            height={34}
            className="rounded-full"
          />
        </figure>
      ) : (
        <img src="/images/profile.png" alt="profile" width={48} height={48} />
      )}
      <div className="flex flex-col flex-1 pl-4">
        <h3 className="text-lg font-bold">{storeName}</h3>
        <p className="text-sm">{storeLocation}</p>
      </div>
    </div>
  );
};

export default StoreInformation;
