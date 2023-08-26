import CategoriesHero from '@/components/Categories/Hero';
import ProductViews from '@/components/Categories/ProductViews';
import { getCategoryProducts } from '@/lib/data/getCategoryProducts';
import styles from './category_page.module.scss';
import MenuCards from '@/components/Shared/MenuCards';
import { ctaData, menuData } from '@/lib/data';
import CtaSection from '@/components/Shared/CtaSection';

type CategoryPageProps = {
  params: {
    category: string;
  };
};
const CategoryPage = async ({ params: { category } }: CategoryPageProps) => {
  const products = getCategoryProducts(category);

  return (
    <main className={styles.category_main}>
      <CategoriesHero data={category} />
      <ProductViews data={products} />
      <MenuCards data={menuData} />
      <CtaSection data={ctaData} />
    </main>
  );
};

export default CategoryPage;
