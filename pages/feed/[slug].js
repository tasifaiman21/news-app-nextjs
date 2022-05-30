import { useRouter } from "next/router";
import styles from "../../styles/Feed.module.css";
import { Nav } from "../../components/nav";
export const Feed = ({ pageNumber, articles }) => {
  /* console.log(articles, pageNumber); */

  const router = useRouter();
  return (
    <div className="page-container">
      <Nav />
      <div className={styles.main}>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            {!!article.urlToImage && (
              <img
                src={article.urlToImage}
                onClick={() => (window.location.href = article.url)}
                alt="newsImage"
              />
            )}
          </div>
        ))}
      </div>

      <div className={styles.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`/feed/${pageNumber - 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 1 ? styles.disabled : styles.active}
        >
          Previous page
        </div>

        <div>#{pageNumber}</div>

        <div
          onClick={() => {
            if (pageNumber < 5) {
              router
                .push(`/feed/${pageNumber + 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 5 ? styles.disabled : styles.active}
        >
          Next page
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const apiJson = await apiResponse.json();

  const { articles } = apiJson;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
