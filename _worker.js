export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname.length > 256) {
            return new Responce("URL Too Long", { status: 414 });
        }

        if (url.pathname.startsWith("/2014")) {
            return Response.redirect(
                `https://web.archive.org/web/20150915024420/http://www.seisei51st.com/${url.pathname.substring(6)}`,
                301,
            );
        }
        if (url.pathname.startsWith("/2009")) {
            return Response.redirect(
                "https://web.archive.org/web/20090909062151/http://www.seisei45.org/home.html",
                301,
            );
        }
        if (url.pathname.startsWith("/2008")) {
            return Response.redirect(
                `https://web.archive.org/web/20080918072948/http://seiseisai44.net/${url.pathname.substring(6)}`,
                301,
            );
        }
        if (url.pathname.startsWith("/2003")) {
            return Response.redirect(
                "https://web.archive.org/web/20030810195250/http://www.tdj.ac.jp/seito/seisei/",
                301,
            );
        }
        if (url.pathname.startsWith("/2002")) {
            return Response.redirect(
                `https://web.archive.org/web/20020808060607/http://seisei.info/${["/2002", "/2002/"].includes(url.pathname) ? "tdj/" : url.pathname.substring(6)}`,
                301,
            );
        }

        async function assetsFetch(path) {
            let responce = await env.ASSETS.fetch(
                new Request(`${url.origin}${path}`, request),
            );

            if (
                path === "/2025/404" ||
                path === "/2024/404/404" ||
                path === "/2023/404/404" ||
                path === "/2021/error/404"
            ) {
                // Return 404 status for custom 404 pages
                return new Response(responce.body, {
                    status: 404,
                    headers: responce.headers,
                });
            }

            if (responce.status === 404) {
                const filename = path.split("/").at(-1);
                if (!filename.includes(".")) {
                    responce = await env.ASSETS.fetch(
                        new Request(
                            `${url.origin}${path}/${filename}`,
                            request,
                        ),
                    );
                }
            }

            if (responce.status === 404) {
                // Custom 404 handling
                if (path.startsWith("/2025/")) {
                    return assetsFetch("/2025/404");
                }
                if (path.startsWith("/2024/") || path.startsWith("/2023/")) {
                    return assetsFetch(`${path.substring(0, 5)}/404/404`);
                }
                if (path.startsWith("/2021/")) {
                    return assetsFetch("/2021/error/404");
                }

                return new Response("Not Found", { status: 404 });
            }

            return responce;
        }

        // Rewrite /YYYY to /YYYY/
        if (/^\/\d{4}$/.test(url.pathname)) {
            return assetsFetch(`${url.pathname}/`);
        }
        // Only allow /YYYY/* paths
        if (!/^\/\d{4}\/.*$/.test(url.pathname)) {
            return new Response("Not Found", { status: 404 });
        }
        // Redirect /YYYY/ to /YYYY
        if (/^\/\d{4}\/$/.test(url.pathname)) {
            return Response.redirect(
                `${url.origin}${url.pathname.slice(0, -1)}`,
                301,
            );
        }
        // Redirect /YYYY/index.html or /YYYY/index to /YYYY
        if (/^\/\d{4}\/index(\.html)?$/.test(url.pathname)) {
            return Response.redirect(
                `${url.origin}${url.pathname.replace(/\/index(\.html)?$/, "")}`,
                301,
            );
        }
        // Redirect /YYYY/something/something.html to /YYYY/something
        if (
            /^\/\d{4}\/(?:[^/]+\/)*([^/]+)\/\1(?:\.html)?$/.test(url.pathname)
        ) {
            return Response.redirect(
                `${url.origin}${url.pathname.replace(/\/([^/]+)(?:\/\1(?:\.html)?)$/, "/$1")}`,
                301,
            );
        }
        // Redirect /YYYY/something.html to /YYYY/something
        if (/^\/\d{4}\/.+\.html$/.test(url.pathname)) {
            return Response.redirect(
                `${url.origin}${url.pathname.replace(/\.html$/, "")}`,
                301,
            );
        }
        // Rewrite /2016/sp to /2016/sp/
        if (url.pathname === "/2016/sp") {
            return assetsFetch("/2016/sp/");
        }
        // Redirect /2016/sp/ to /2016/sp
        if (url.pathname === "/2016/sp/") {
            return Response.redirect(`${url.origin}/2016/sp`, 301);
        }

        return assetsFetch(url.pathname);
    },
};
