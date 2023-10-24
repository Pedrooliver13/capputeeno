// Packages
import { ReactElement } from 'react';

// Components
import { DefaultLayout } from 'components/layout';

// Templates
import { Home } from 'templates';

const App = (): ReactElement => {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
};

export default App;
