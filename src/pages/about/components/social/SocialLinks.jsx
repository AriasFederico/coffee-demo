import './SocialLinks.scss'
export const SocialLinks = ({ url, plataform, icon, target }) => {
    return (
        <a href={url} target={target} className='SocialLinks'>
            <ion-icon name={icon}></ion-icon>
            {plataform}
        </a>
    )
}