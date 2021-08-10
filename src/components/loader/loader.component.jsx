import s from "./loader.module.scss";
import loading from "../../asset/image/loading.png";
import React from "react";

const Loader = () => {
  return (
    <div className={s.loading}>
      <img src={loading} className={s.tada} />
    </div>
  );
};

export default Loader;
