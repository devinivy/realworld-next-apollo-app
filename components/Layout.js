import Head from 'next/head';
import { withRouter } from 'next/router'
import Link from './Link';

export default withRouter(({ children, router: { pathname } }) => {

    const homeActive = pathname === '/' ? 'active' : '';
    const newPostActive = pathname === '/editor' ? 'active' : '';
    const settingsActive = pathname === '/settings' ? 'active' : '';
    const signupActive = pathname === '/register' ? 'active' : '';

    return <>
        <Head>
            <meta charSet='utf-8' />
            <title>Conduit</title>
            <link href='//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' rel='stylesheet' type='text/css' />
            <link href='//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic' rel='stylesheet' type='text/css' />
            <link rel='stylesheet' href='//demo.productionready.io/main.css' />
        </Head>
        <nav className='navbar navbar-light'>
            <div className='container'>
            <a className='navbar-brand' href='/'>conduit</a>
            <ul className='nav navbar-nav pull-xs-right'>
                <li className='nav-item'>
                    <Link href='/'>
                        <a className={`nav-link ${homeActive}`}>
                            Home
                        </a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href='/editor'>
                        <a className={`nav-link ${newPostActive}`}>
                            <i className='ion-compose'></i> New Post
                        </a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href='/settings'>
                        <a className={`nav-link ${settingsActive}`}>
                            <i className='ion-gear-a'></i> Settings
                        </a>
                    </Link>
                </li>
                <li className={`nav-item ${signupActive}`}>
                    <Link href='/signup'>
                        <a className='nav-link'>
                            Sign up
                        </a>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
        {children}
        <footer>
            <div className='container'>
                <a href='/' className='logo-font'>conduit</a>
                <span className='attribution'>
                    An interactive learning project from <a href='https://thinkster.io'>Thinkster</a>.
                    Code &amp; design licensed under MIT.
                </span>
            </div>
        </footer>
    </>;
});
