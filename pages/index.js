import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <div class="row">
      <div class='column'>
        <h3 className={utilStyles.headingLg}>Blog</h3>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            </li>
          ))}
          
        </ul>
        </div>
        
     <div class='column2'>
          <Link href='posts/Game'>Tic Tac Toe Game</Link>
          </div>
          </div>
          </section>
          
          <div className='footer'>
            <Footer />

          </div>
    </Layout>
  );
}