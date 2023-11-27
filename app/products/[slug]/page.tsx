import NavigateToBack from '@/components/Checkout/Navigator';
import { allProducts, ctaData, menuData } from '@/lib/data';
import { IProduct } from '@/types/mainData';

import ProductHero from '@/components/Product/ProductHero';
import ProductFeatures from '@/components/Product/ProductFeatures';
import ProductGallery from '@/components/Product/ProductGallery';
import ProductRelated from '@/components/Product/ProductRelated';
import MenuCards from '@/components/Shared/MenuCards';
import CtaSection from '@/components/Shared/CtaSection';
import styles from './product-page.module.scss';

export const dynamicParams = false; //this will redirect to 404 page

type ProductPageProps = {
  params: {
    slug: string;
  };
};

const ProductPage = async ({ params: { slug } }: ProductPageProps) => {
  const [productData] = allProducts.filter(
    (item: IProduct) => item.slug === slug,
  );

  return (
    <main>
      <NavigateToBack />
      <ProductHero productData={productData} />
      <ProductFeatures productData={productData} />
      <ProductGallery productData={productData} />
      <ProductRelated productData={productData} />
      <MenuCards data={menuData} />
      <CtaSection data={ctaData} />
    </main>
  );
};

export async function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  allProducts.map((product: IProduct) => slugs.push({ slug: product.slug }));
  return slugs;
}

export default ProductPage;
