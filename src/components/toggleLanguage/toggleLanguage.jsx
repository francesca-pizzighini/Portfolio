import "./togglelanguage.scss";

function ToggleLanguage({ toggleLanguage }) {
  return (
    <div className="toggler">
      <div className="toggler-slider" onClick={toggleLanguage}>
        <div className="toggler-slider-circle"></div>
      </div>
    </div>
  );
}

export default ToggleLanguage;
