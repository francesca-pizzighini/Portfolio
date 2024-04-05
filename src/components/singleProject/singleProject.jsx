import "./singleProject.scss";

function SingleProject({ websiteName, description, url }) {
  return (
    <div className="project">
      <h3>
        <a target="_blank" href={url}>
          {websiteName}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default SingleProject;
