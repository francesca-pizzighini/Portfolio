import "./errorComponent.scss";

function ErrorComponent() {
  return (
    <div className="errorComponent">
      <h3>An error occurred</h3>
      <p>
        Something went wrong, please use the menu at the top of the page to
        navigate to the section of the website you are intrested in. <br />
        If the error persist please contact me{" "}
        <a href="https://docs.google.com/forms/d/1bsfxKTCYddKVTGM17P0xZxRE4I43b7DWJayC8zv8iz8/edit">
          here
        </a>{" "}
        and i'll make sure to fix the issue as soon as possible.
      </p>
    </div>
  );
}

export default ErrorComponent;
