import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Main from '../components/Main';
import CustomLink from '../components/CustomLink';
import { Button } from '@mui/joy';
// import { MainGrid } from '../components/MainGrid';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <Header />
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Main />
      <Button color="success" variant="soft">
        <Link href="/test">Test</Link>
      </Button>
      <hr />
      <Button color="success" variant="soft">
        <Link href="/test">Test</Link>
      </Button>
      <Button color="success" variant="soft">
        <Link href="/test">Test</Link>
      </Button>

      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
