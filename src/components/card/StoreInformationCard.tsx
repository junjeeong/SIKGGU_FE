import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const StoreInformationCard = ({ info }: { info: any }) => {
  return (
    <Link to={`/stores/${info.id}/products`} className="group">
      <article className="flex w-full h-40 gap-2 border-b-2 border-gray-50 group-hover:bg-sikggu-primary-50">
        <figure className="flex-shrink-0 h-full overflow-hidden border-gray-50 w-44">
          <img
            src={info.image}
            alt={info.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.07]"
          />
        </figure>

        <div className="flex flex-col flex-1 gap-2 p-4">
          <h2 className="text-xl font-bold">{info.title}</h2>
          <div className="flex items-center gap-1">
            <SlLocationPin size={16} />
            <span>{info.location}</span>•<span>{info.createdAt}</span>
          </div>
          <p>{info.description}</p>
        </div>
      </article>
    </Link>
  );
};

export default StoreInformationCard;
