"use client";

import style from "@/app/error.module.css";

const Error = () => {
  return (
    <div className={style.container}>
      <div className={style.error}>
        <h1>Error 404</h1>
      </div>
    </div>
  );
};

export default Error;
