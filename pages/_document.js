import Document, { Html, Head, Main, NextScript } from 'next/document'

//ACCESO A DOCUMENTOS DE HEAD PRINCIPALEMENTE-

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>Simple Portfolio</title>
                    <meta name='description' content='FranCorvalan Portfolio WebSite'></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
/* SEO -> meta */