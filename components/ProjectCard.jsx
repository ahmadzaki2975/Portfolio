import Image from "next/image";

export const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="card-img bg-white">
        <div className="img-box">
          <Image
            src={`/project-images/${props.src}`}
            alt={props.title}
            layout="fill"
          />
        </div>
      </div>
      <div className="card-text">
        <h2>{props.title}</h2>
        <p style={{ textAlign: "center" }}>{props.desc}</p>
        <div className="card-btn-container">
          {props.repo ? (
            <a
              href={props.repo}
              className="btn repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Repository</div>
            </a>
          ) : (
            <div className="btn repo" style={{opacity: .7, cursor: "not-allowed"}} >
              <div>Private Repository</div>
            </div>
          )}
          <a
            href={props.link}
            className="btn view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>View</div>
          </a>
        </div>
      </div>
    </div>
  );
};
