import React from 'react';
import Head from 'react-helmet';
import Link from 'gatsby-link';

const postContentClass = ``;
const postMetaClass = ``;

const PostPage = props => {
  const { data } = props;
  const { markdownRemark: post } = data;

  const date = new Date(post.fields.date);

  return (
    <div>
      <Head>
        <title>{post.frontmatter.title}</title>
        <meta
          name="description"
          content={post.frontmatter.description || post.excerpt}
        />
      </Head>
      <article>
        <header className={postMetaClass}>
          <div>
            <h1 className="c-purple">{post.frontmatter.title}</h1>
            <time className="o-50p" dateTime={date.toISOString()}>
              {date.toString()}
            </time>
          </div>
          <div className="d-none d-block-m mt-5">
            <Link to="/">Back</Link>
          </div>
        </header>
        <div className={postContentClass}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <div className="d-block d-none-m mv-6">
          <Link to="/">Back</Link>
        </div>
      </article>
    </div>
  );
};

export default PostPage;

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        date
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
