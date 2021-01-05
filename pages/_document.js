import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <footer>
            <p>
              Copyright &copy; {new Date().getFullYear()} -{" "}
              <a href="https://github.com/msaadm">
                <strong>MSM</strong>
              </a>
            </p>
          </footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
