import Layout from '../components/Layout';

export default (props) => (
    <Layout>
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
);
