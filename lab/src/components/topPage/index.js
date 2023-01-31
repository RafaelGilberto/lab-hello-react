import style from "./style.module.css";
import Iron from "../../assets/images/ironhacklogo.png";
import Mark from "../../assets/images/landmark.png";

export function Top() {
  const altIronText = "IronHack Logo";
  const altMarkText = "Mark Logo";
  return (
    <div className={style.firstPart}>
      <div className={style.topimages}>
        <img src={Iron} alt={altIronText} className={style.logo} />
        <img src={Mark} alt={altMarkText} className={style.logo} />
      </div>
      <h1>Say hello to ReactJS</h1>
      <h2>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer
      </h2>
      <button className={style.btnawesome}>Awesome!</button>
    </div>
  );
}
