export default {
    async fetch(request, env) {
        /** @type {import("@cloudflare/workers-types").Fetcher} */
        const assets = env.ASSETS;

        const url = new URL(request.url);
        if (!/\/\d{4}/.test(url.pathname)) {
            return new Response("Not Found", { status: 404 });
        }

        return assets.fetch(request);
    },
};
