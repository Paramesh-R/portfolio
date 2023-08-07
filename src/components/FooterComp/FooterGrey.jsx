import { Icon } from '@iconify/react';
import "./footer.css"

const FooterGrey = () => {
    return (
        <>
            <footer className="footer navbar-static-bottom ">
                <div className="container  pt-1">

                    {/* Back to top chevron*/}
                    <a rel="noreferrer" href="#top" className="back-to-top  p-1 ">
                        <Icon icon="uim:angle-up" width={"3rem"} />
                    </a>

                    {/* Social Link */}
                    <div className="social-links d-flex flex-row justify-content-center ">

                        {/* Github Link */}
                        <a
                            rel="noreferrer"
                            href="https://github.com/Paramesh-R"
                            target="_blank"
                            className=' d-flex flex-column justify-content-center align-items-center text-white'>
                            <Icon icon="ant-design:github-outlined" />
                        </a>

                        {/* Linkedin */}
                        <a
                            rel="noreferrer"
                            href="http://www.linkedin.com/in/paramesh-r"
                            target="_blank"
                            className='d-flex flex-column justify-content-center align-items-center text-white'>
                            <Icon icon="mdi:linkedin" />
                        </a>
                    </div>

                    <hr />{/* --------------------------------------------- */}

                    {/* Footer Text */}
                    <p className="footer__text">
                        {/* © {new Date().getFullYear()} -  */}
                        Built using React by
                        <a
                            rel="noreferrer"
                            href="/"
                            className='ps-1'
                        >
                            Parameswaran R
                        </a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default FooterGrey