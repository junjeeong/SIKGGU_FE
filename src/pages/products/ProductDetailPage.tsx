import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderAndBottomNavLayout from "@/components/layout/HeaderAndBottomNavLayout";
import ProductDescription from "@/components/ProductDescription";
import ProudctThumbnail from "@/components/ProudctThumbnail";
import StoreInformation from "@/components/StoreInformation";
import productApi from "@/api/product";
import type { ProductResponse } from "@/types/product";

const ProductDetailPage = () => {
  const { storeId, productId } = useParams();
  const [product, setProduct] = useState<ProductResponse | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (storeId && productId) {
        try {
          const data = await productApi.getProductById(
            Number(storeId),
            Number(productId)
          );
          setProduct(data);
        } catch (error) {
          console.error("Failed to fetch product", error);
        }
      }
    };

    fetchProduct();
  }, [storeId, productId]);

  if (!product) return null;

  return (
    <HeaderAndBottomNavLayout>
      <ProudctThumbnail imageUrl={product.imageUrl} />
      <StoreInformation storeName={product.store} />
      <ProductDescription info={product} />
    </HeaderAndBottomNavLayout>
  );
};

export default ProductDetailPage;
