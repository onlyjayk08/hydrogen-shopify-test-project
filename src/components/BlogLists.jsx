import{
    flattenConnection,
    useShopQuery,
    Link
} from '@shopify/hydrogen'

import gql from 'graphql-tag';

export default function BlogList({blog}){

  const blog_title = blog.title;
  const blog_handle = blog.handle;

    const {data} = useShopQuery({
        query: QUERY,
        variables:{
          blog_title
        }
    });

    const articles = flattenConnection(data.articles);

    console.log( blog_handle);

    return(
        <>
          <h1>{blog.title}</h1>
          {articles.map((article) =>(
            <div>
              <Link 
              to={`/articles/${article.handle}?blog_handle=${blog_handle}`}
              state={{ blog_handle: `${blog_handle}`}}
              >
                {article.title}
              </Link>
            </div>
          ))}
        </>
    );
}

const QUERY = gql`
query articleInfo(
  $blog_title: String!
)
{
  articles(query: $blog_title, first: 5) {
    edges {
      node {
        handle
        title
      }
    }
  }
}
`;