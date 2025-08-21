import './SocialLinks.scss'
export const SocialLinks = ({ url, plataform, icon, target, variant }) => {
    return (
        <a href={url} target={target} className={`${variant ? 'SocialLinks__theme' : 'SocialLinks'}`}>
            {icon && <ion-icon name={icon}></ion-icon>}
            {plataform}
        </a>
    )
}