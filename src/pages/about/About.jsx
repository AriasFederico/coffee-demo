import './About.scss';
import { global } from '../../data/global';
import { SocialLinks } from './components/social/SocialLinks';
import { VisitCard } from './components/visitCards/VisitCard';
const { footer } = global;
const { socialMedia } = footer;
const { about, businessInfo } = global;
const { storeDetails } = businessInfo;
const { mission } = about;

export const About = () => {
    return <section className='About'>
        <div className="About__container">
            <div className='About__intro' data-aos='fade-right' data-aos-duration='1000'>
                <h2 className='About__title'>{about.title}</h2>
                {about.description?.map((text, index) => (
                    <p key={index} className="About__description">{text}</p>
                ))}
                <div className="About__socials">
                    {socialMedia?.map(({ icon, plataform, url, target }) => (
                        <SocialLinks url={url} plataform={plataform} icon={icon} key={`id - ${plataform}`} target={target} />
                    ))}
                    {/* componente social */}
                </div>
            </div>

            <div className="About__mission" data-aos='fade-left' data-aos-duration='1000'>
                <img src={mission.image} alt={mission.title} className='About__mission-image' />
                <div className='About__mission-intro'>
                    <h3 className='About__mission-title'>{mission.title}</h3>
                    <p className='About__mission-description'>{mission.description}</p>
                </div>
            </div>

            <div className='About__visit' data-aos='fade-up' data-aos-duration='1000'>
                <h3 className='About__visit-title'>{businessInfo.title}</h3>
                <div className="About__visit-cards">
                    {storeDetails?.map(({ icon, title, description1, description2 }) => (
                        <VisitCard title={title} icon={icon} description1={description1} description2={description2} key={title} />
                    ))}
                </div>
            </div>
        </div>

    </section>;
};
