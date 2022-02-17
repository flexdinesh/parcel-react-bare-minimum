/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';

const styles = {
  app: css`
    height: 100vh;
    text-align: center;
  `,
  main: css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export const PageLayout: React.FC = ({ children }) => {
  return (
    <div css={styles.app}>
      <main css={styles.main}>{children}</main>
    </div>
  );
};
