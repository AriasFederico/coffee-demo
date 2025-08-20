import './VisitCard.scss'
export const VisitCard = ({ title, icon, description1, description2 }) => {
    return (
        <div className="VisitCard">
            <ion-icon name={icon}></ion-icon>
            <h3 className='VisitCard__title'>{title}</h3>
            <div className="VisitCard__content">
                <p className="VisitCard__description">{description1}</p>
                <p className="VisitCard__description">{description2}</p>
            </div>
        </div>
    )
}