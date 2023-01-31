import style from "./style.module.css";
import Computer from "../../assets/images/computer.png";
import Screen from "../../assets/images/computerscreen.png";
import Warning from "../../assets/images/computerwarning.png";
import Fenda from "../../assets/images/chavedefenda.png";

export function Bottom() {
  const altComputerText = "Computer Logo";
  const altScreenText = "Screen Logo";
  const altWarningText = "Computer Warning Logo";
  const altFendaText = "Screwdriver Logo";
  return (
    <div className={style.features}>
      <div>
        <img src={Fenda} alt={altFendaText} className={style.image} />
        <h1 className={style.featureTitle}>Declarative</h1>
        <p className={style.featureText}>
          React makes it painless to create interactive UIs.
        </p>
      </div>
      <div>
        <img src={Computer} alt={altComputerText} className={style.image} />
        <h1 className={style.featureTitle}>Components</h1>
        <p className={style.featureText}>
          Build encapsulated components that manage their state.
        </p>
      </div>
      <div>
        <img src={Screen} alt={altScreenText} className={style.image} />
        <h1 className={style.featureTitle}>Single-Way</h1>
        <p className={style.featureText}>
          A set of immutable values are passed to the component's.
        </p>
      </div>
      <div>
        <img src={Warning} alt={altWarningText} className={style.image} />
        <h1 className={style.featureTitle}>JSX</h1>
        <p className={style.featureText}>
          Statically-typed, designed to run on modern browsers.
        </p>
      </div>
    </div>
  );
}
