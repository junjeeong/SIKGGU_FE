import { Link } from "react-router-dom";

const ProductInformationCard = ({ info }: { info: any }) => {
  return (
    <Link to={`/stores/1/products/${info.id}`} className="group">
      <article className="flex w-full h-32 gap-2 border-b-2 border-gray-50 group-hover:bg-sikggu-primary-50 ">
        <figure className="flex-shrink-0 w-40 h-full overflow-hidden border-gray-50">
          <img
            src={info.image}
            alt={info.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.07]"
          />
        </figure>

        <div className="flex flex-col justify-between flex-1 p-3">
          <div>
            {/* 상품명 */}
            <h2 className="text-xl font-bold text-gray-800 line-clamp-1 ">
              {info.name}
            </h2>

            {/* 가격 영역 */}
            <div className="flex flex-col mt-1">
              <span className="text-sm text-gray-400 line-through decoration-1">
                {info.originalPrice.toLocaleString()}
              </span>
              <span className="text-xl font-extrabold text-red-500">
                {info.saledPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* 하단 정보 (매장명 & 마감시간) */}
          <div className="flex justify-between text-xs text-gray-500 gap-0.5">
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-600">
                {info.storeName}
              </span>
            </div>
            <div className="flex items-center pr-4 font-semibold text-orange-600">
              <span className="bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100">
                {info.expiredAt}까지
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductInformationCard;
