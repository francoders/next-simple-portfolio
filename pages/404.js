import Layout from "../components/Layout";
import Link from "next/link";

const styles = {
    custom: {
        textDecoration: 'none',
    },

    centrado: {
        margin: '40% auto',
    }
}

const custom404 = () => (
    <Layout>
        <div style={styles.centrado} className="text-center">
            <h1>404 Error</h1>
            <p> This page not exist. please return to
                <Link href="/">
                    <a style={styles.custom}> Home</a>
                </Link>
            </p>
        </div>
    </Layout>
)

export default custom404;