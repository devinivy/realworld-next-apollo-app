import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';
import marked from 'marked';
import Layout from '../components/Layout';

const GET_ARTICLE = gql`
    query ($slug: ID!) {
        article(slug: $slug) {
            slug
            title
            body
            author {
                username
                image
            }
        }
    }
`;

export default withRouter(({ router }) => (
    <Layout>
        <Query query={GET_ARTICLE} variables={{ slug: router.query.slug }}>
            {({ data: { article } = {}, loading, error }) => (<>
                {!loading && !error && <>
                    <div className='article-page'>
                        <div className='banner'>
                            <div className='container'>
                                <h1>{article.title}</h1>
                                <div className='article-meta'>
                                    <a href=''><img src={article.author.image} /></a>
                                    <div className='info'>
                                        <a href='' className='author'>{article.author.username}</a>
                                        <span className='date'>January 20th</span>
                                    </div>
                                    <button className='btn btn-sm btn-outline-secondary'>
                                        <i className='ion-plus-round'></i> Follow {article.author.username} <span className='counter'>(10)</span>
                                    </button>
                                    {'  '}
                                    <button className='btn btn-sm btn-outline-primary'>
                                        <i className='ion-heart'></i> Favorite Post <span className='counter'>(29)</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container page'>
                        <div className='row article-content'>
                            <div
                                className='col-md-12'
                                dangerouslySetInnerHTML={{
                                    __html: marked(article.body, { santize: true })
                                }}
                            />
                        </div>
                    </div>
                </>}
            </>)}
        </Query>
    </Layout>
));
