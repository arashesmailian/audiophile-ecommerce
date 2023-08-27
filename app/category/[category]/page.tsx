import CategoriesHero from '@/components/Categories/Hero';
import ProductViews from '@/components/Categories/ProductViews';
import { getCategoryProducts } from '@/lib/data';
import styles from './category_page.module.scss';
import MenuCards from '@/components/Shared/MenuCards';
import { ctaData, menuData } from '@/lib/data';
import CtaSection from '@/components/Shared/CtaSection';

export const dynamicParams = false; //this will redirect to 404 page

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

export async function generateStaticParams() {
  return [
    { category: 'headphones' },
    { category: 'earphones' },
    { category: 'speakers' },
  ];
}

export default CategoryPage;
