export function GET(request: Request) {
    let url = new URL(request.url);
    let title = url.searchParams.get('title') || 'Next.js Portfolio Starter';

    // Create the HTML content
    const html = `
    <html lang="en">
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h2 {
            font-size: 2em;
            font-weight: bold;
          }
        </style><title></title>
      </head>
      <body>
        <h2>${title}</h2>
      </body>
    </html>
  `;

    // Return the HTML content as a Response
    return new Response(html, {
        headers: {
            'Content-Type': 'text/html',
        },
    });
}