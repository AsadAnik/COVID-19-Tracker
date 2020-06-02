import React from 'react';
import { css } from "@emotion/core";
import Styles from './loading.module.css';
import { BarLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  display: block;
  margin: 0 auto;
  border-color: red;

`;

const Loading = () => {
    return (
      <div>
          <img 
            className={Styles.image}
            src="/virus.png"
            alt="Loading..."
          />
        <BarLoader
            css={override}
            size={100}
            color={'green'}
            loading={true}
        />

      </div>
    )
}

export default Loading;