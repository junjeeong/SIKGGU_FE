import HeaderAndBottomNavLayout from "@/components/layout/HeaderAndBottomNavLayout";
import ProductDescription from "@/components/ProductDescription";
import ProudctThumbnail from "@/components/ProudctThumbnail";
import StoreInformation from "@/components/StoreInformation";

const ProductDetailPage = () => {
  return (
    <HeaderAndBottomNavLayout>
      <ProudctThumbnail imageUrl={MOCK_PRODUCT_DETAIL.imageUrl} />
      <StoreInformation info={MOCK_PRODUCT_DETAIL} />
      <ProductDescription info={MOCK_PRODUCT_DETAIL} />
    </HeaderAndBottomNavLayout>
  );
};

const MOCK_PRODUCT_DETAIL = {
  // ProductDescription용 데이터
  name: "싱싱한 브로콜리 (특)",
  category: "채소",
  createdAt: "2시간 전",
  price: "2,100원",
  description:
    "오늘 아침 농장에서 갓 들어온 싱싱한 브로콜리입니다. 마감 시간이 다가와 파격적인 가격에 내놓습니다! 살짝 데쳐서 초고추장에 찍어 드시면 맛과 영양 모두 챙기실 수 있어요. 상태 매우 좋으니 안심하고 구매하세요.",

  // ProudctThumbnail용 데이터
  imageUrl:
    "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&q=80&w=1000",

  // StoreInformation용 데이터
  storeName: "초록마을 상도점",
  storeLocation: "서울특별시 동작구 상도로 123",
  profileImage:
    "https://api.dicebear.com/7.x/bottts/svg?seed=broccoli&backgroundColor=b6e3f4",
};

export default ProductDetailPage;
