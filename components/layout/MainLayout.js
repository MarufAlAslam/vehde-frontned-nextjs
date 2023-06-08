import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const MainLayout = ({ children, stopHeaderSticky, hideFooter, fullWidth }) => {
    return (
        <>
            <Header stopHeaderSticky={stopHeaderSticky} fullWidth={fullWidth}></Header>
            {children}
            {
                !hideFooter && <Footer></Footer>
            }
        </>
    )
}

export default MainLayout