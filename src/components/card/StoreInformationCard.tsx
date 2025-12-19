import type { StoreResponse } from "@/types/store";
import { CiPhone } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const StoreInformationCard = ({ info }: { info: StoreResponse }) => {
  const DEFAULT_IMAGE = "/images/logo_mini.png";

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_IMAGE;
  };

  return (
    <Link to={`/stores/${info.id}/products`} className="group">
      <article className="flex w-full h-40 gap-2 border-b-2 border-gray-50 group-hover:bg-sikggu-primary-50">
        <figure className="flex-shrink-0 h-full overflow-hidden border-gray-50 w-44">
          <img
            src={info.imageUrl || "/images/logo_mini.png"}
            alt={info.storeName}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.07]"
            onError={handleImgError}
          />
        </figure>

        <div className="flex flex-col flex-1 gap-2 p-4">
          <h2 className="text-xl font-bold">{info.storeName}</h2>
          <div className="flex items-center gap-1">
            <SlLocationPin size={16} />
            <span>{info.address}</span>
            <CiPhone size={16} className="ml-4" />
            <span>{info.storeContactNumber}</span>
          </div>
          <p>{info.description}</p>
        </div>
      </article>
    </Link>
  );
};

export default StoreInformationCard;
