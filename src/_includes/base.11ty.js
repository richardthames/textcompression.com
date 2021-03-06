exports.render = function ({
  title,
  description,
  pkg,
  content,
  page: { url },
}) {
  const pageTitle = (url === '/' ? '' : `${title} | `) + 'Text Compression'
  const pageDescription = description ? description : pkg.description

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${pageTitle}</title>
        <meta name="description" content="${pageDescription}" />
        <meta property="og:title" content="${pageTitle}" />
        <meta property="og:description" content="${pageDescription}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="${pkg.url}" />
        <meta property="og:image" content="/512.png" />
        <meta property="og:image:secure_url" content="/512.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <style>
          * {
            border: 0;
            margin: 0;
            padding: 0;
          }
          html {
            height: 100%;
          }
          body {
            background: #14191e;
            color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            font-family: ui-sans-serif, system-ui, -apple-system,
              BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
              'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
              'Segoe UI Symbol', 'Noto Color Emoji';
            text-align: center;
          }
          p {
            font-size: 1em;
            font-weight: lighter;
          }
          h1 {
            font-size: 2em;
            font-weight: normal;
            padding: 12px;
          }
          @media (min-width: 640px) {
            p {
              font-size: 2em;
            }
            h1 {
              font-size: 4em;
            }
          }
        </style>
      </head>
      <body>
        <div>${content}</div>
      </body>
    </html>`
}
