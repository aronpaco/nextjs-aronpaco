import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import ButtonUsage from '../components/ButtonUsage';
// import { MainGrid } from '../components/MainGrid';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <Header />
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <ButtonUsage />
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
