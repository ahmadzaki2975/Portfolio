import Image from "next/image";

export const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="card-img bg-white">
        <div className="img-box">
          <img
            src={`/project-images/${props.src}`}
            alt={props.title}
          />
        </div>
      </div>
      <div className="card-text">
        <h2>{props.title}</h2>
        <p style={{textAlign: "center"}}>{props.desc}</p>
        <div className="card-btn-container">
          <a href={props.repo} className="btn repo" target="_blank">
            <div>Repository</div>
          </a>
          <a href={props.link} className="btn view" target="_blank">
            <div>View</div>
          </a>
        </div>
      </div>
    </div>
  );
};
