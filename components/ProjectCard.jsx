import Image from "next/image";

export const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="card-img">
        <Image
          src={`/project-images/${props.src}`}
          alt={props.title}
          width={1360}
          height={768}
          layout="responsive"
        />
      </div>
      <div className="card-text">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div className="card-btn-container">
          <a href={props.repo} className="btn repo">
            <div>Repository</div>
          </a>
          <a href={props.link} className="btn view">
            <div>View</div>
          </a>
        </div>
      </div>
    </div>
  );
};
