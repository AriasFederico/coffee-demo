import { global } from '../../../data/global';
import './Footer.scss';
import { SocialLinks } from '../../about/components/social/SocialLinks';
const { logo, footer } = global;
const { socialMedia, credit } = footer;
export const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__container">
                <div className="Footer__intro">
                    <a href={logo.url} className="Footer__intro-logo">
                        {logo.altText}
                    </a>
                    <p className="Footer__intro-phrase">
                        {footer.description}
                    </p>
                    <div className="Footer__socials">
                        {socialMedia?.map(({ plataform, url, target }) => (
                            <SocialLinks plataform={plataform} url={url} target={target} key={plataform} variant={'variant'} />
                        ))}
                    </div>
                </div>

                <a href={credit.url} className='Footer__credit'> {credit.altText}</a>
            </div>
        </footer>
    )
}