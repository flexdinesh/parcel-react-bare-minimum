/** @jsxImportSource @emotion/react */
import { GlobalStyles } from './components/global-styles';
import { PageLayout } from './components/page-layout';
import { Fragment } from 'react';

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
        <PageLayout>
          <div css={{ fontSize: 36, color: '#363945' }}>Parcel React App</div>
        </PageLayout>
    </Fragment>
  );
};
