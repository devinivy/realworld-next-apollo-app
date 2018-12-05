'use strict';

const Http = require('http');
const Querystring = require('querystring');
const Next = require('next');
const Routes = require('./routes');

(async () => {

    const app = Next({
        dev: (process.env.NODE_ENV !== 'production')
    });

    const handle = app.getRequestHandler();

    await app.prepare();

    const server = Http.createServer((req, res) => {

        const url = new URL(req.url, 'https://ignore');
        const route = Routes.Route.matchOr(() => null, url.pathname);

        if (route === null) {
            return handle(req, res);
        }

        const base = Routes.baseOf(route);

        Object.entries(route.value).forEach(([key, value]) => {

            url.searchParams.set(key, value);
        });

        return app.render(req, res, base, Querystring.parse(url.search.slice(1)));
    });

    const port = process.env.PORT || 3000;

    server.listen({ host: 'localhost', port });

    await Promise.race([
        new Promise((resolve) => server.once('listening', resolve)),
        new Promise((resolve, reject) => server.once('error', reject))
    ]);

    console.log(`> Ready on http://localhost:${port}`);
})();
