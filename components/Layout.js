import Navbar from './Navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

const Layout = ({ children, footer = true }) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouterChange = url => {
            console.log(url)
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRouterChange)

        router.events.on('routeChangeComplete', () => NProgress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouterChange)
        }
    }, [])

    return (
        <>
            <Navbar />

            <main className='container py-4'>
                {children}
            </main>

            {
                footer && (
                    <footer className='bg-info text-light text-center'>
                        <div className='container p-4'>
                            <h4>&copy;francorvalan</h4>
                            <p>2000 - {new Date().getFullYear()}</p>
                            <p>All rights Reserverd</p>
                        </div>
                    </footer>
                )
            }

        </>
    )
}

export default Layout;