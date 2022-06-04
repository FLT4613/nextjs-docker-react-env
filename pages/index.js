import Head from 'next/head'
import styles from '../styles/Home.module.css'
import env from "@beam-australia/react-env";

const Component = () =>
{
    return (<>
        <Head>
            <title>React Env</title>
            <script src="/__ENV.js" />
        </Head>
        <div className={styles.container} style={{ whiteSpace: 'pre' }}>
            env = {JSON.stringify(env(), null, 4)}
        </div >
    </>)
}


export async function getServerSideProps ()
{
    return {
        props: {}
    }
}

export default Component