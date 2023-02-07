export const ExperienceItem = ({ title, company, date, description }) => {
    return(
        <div className="experience-item">
            <h2 className="experience-title">{title}</h2>
            <h3>{company}</h3>
            <p className="experience-period">{date}</p>
            <p className="experience-desc">
              {description}
            </p>
          </div>
    )
}