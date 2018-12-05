import Link from 'next/link';
import Routes from '../routes';

export default ({ href, as, ...props }) => {

    if (as) {
        return <Link href={href} as={as} {...props} />;
    }

    const url = new URL(href, 'https://ignore');
    const route = Routes.Route.matchOr(() => null, url.pathname);

    if (route === null) {
        return <Link href={href} as={as} {...props} />;
    }

    const base = Routes.baseOf(route);

    Object.entries(route.value).forEach(([key, value]) => {

        url.searchParams.set(key, value);
    });

    return <Link href={`${base}${url.search}`} as={href} {...props} />;
};
