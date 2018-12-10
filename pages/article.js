import Layout from '../components/Layout';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'next/router'

const GET_ARTICLE = gql`
    query getArticle($slug: ID!) {
        article(slug: $slug) {
            slug
            author { username }
        }
    }
`;

export default withRouter(({ router }) => (
    <Layout>
        <Query query={GET_ARTICLE} variables={{ slug: router.query.slug }}>
            {({ loading, data, error }) => <pre>{JSON.stringify({ loading, data, error }, null, 2)}</pre>}
        </Query>
        <div className='article-page'>
            <div className='banner'>
                <div className='container'>
                    <h1>How to build webapps that scale</h1>
                    <div className='article-meta'>
                        <a href=''><img src='http://i.imgur.com/Qr71crq.jpg' /></a>
                        <div className='info'>
                            <a href='' className='author'>Eric Simons</a>
                            <span className='date'>January 20th</span>
                        </div>
                        <button className='btn btn-sm btn-outline-secondary'>
                            <i className='ion-plus-round'></i> Follow Eric Simons <span className='counter'>(10)</span>
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
                <div className='col-md-12'>
                    <p>
                        Web development technologies have evolved at an incredible clip over the past few years.
                    </p>
                    <h2 id='introducing-ionic'>Introducing RealWorld.</h2>
                    <p>It{'\''}s a great solution for learning how other frameworks work.</p>
                </div>
            </div>
        </div>
    </Layout>
));
