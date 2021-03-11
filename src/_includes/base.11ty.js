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
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body
        class="bg-white text-black dark:bg-black dark:text-white px-2 font-serif text-lg min-h-screen flex flex-col justify-center"
      >
        <main class="max-w-prose mx-auto">${content}</main>
      </body>
    </html>`
}
