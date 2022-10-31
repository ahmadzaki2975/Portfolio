export const ExperienceItem = ({ title, company, date, description }) => {
    return(
        <div className="experience-item">
            <h2>{title}</h2>
            <h3>{company}</h3>
            <p>{date}</p>
            <p className="experience-desc">
              {description}
            </p>
          </div>
    )
}