import{
    flattenConnection,
    useShopQuery
} from '@shopify/hydrogen'

import Layout from "../components/Layout.server";
import NotFound from '../components/NotFound.server';
import BlogList from '../components/BlogLists';
import gql from 'graphql-tag';

export default function blogs(){

    const {data} = useShopQuery({
        query: QUERY,
        variables:{
        }
    });

    const blogs = flattenConnection(data.blogs);

    console.log(blogs);

    return(
        <Layout>
            <h1>Blogs Page</h1>
            {blogs.map((blog) =>(
                <BlogList blog={blog}/>
            ))}
        </Layout>
    );
}

const QUERY = gql`
{
  blogs(first: 10) {
    edges {
      node {
        handle
        title
      }
    }
  }
}
`;