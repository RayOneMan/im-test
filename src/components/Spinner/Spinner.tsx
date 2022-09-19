import { GlobalSvgSelector } from "../../icons/global/globalSvgSelector";
import s from "./Spinner.module.scss";

function Spinner() {
  return (
    <div>
      <svg className={s.spinner}>
        <circle cx="70" cy="70" r="70">
        </circle>
            <GlobalSvgSelector id="procesetSpinner" />
      </svg>
    </div>
  );
}

export default Spinner;
