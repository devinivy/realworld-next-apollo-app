import getConfig from 'next/config';
import * as CrossFetch from 'cross-fetch';

const internals = {};

export const getArticle = ({ slug }) => internals.fetchJSON(`/articles/${slug}`);

internals.fetchJSON = async (path, options) => {

    const { publicRuntimeConfig: { apiBase } } = getConfig();

    const response = await CrossFetch.fetch(`${apiBase}/${path}`, options);

    if (response.status < 200 || response.status >= 300) {
        throw Object.assign(new Error('Non-2xx HTTP response'), { response });
    }

    return await response.json();
};
