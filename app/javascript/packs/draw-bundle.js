import ReactOnRails from 'react-on-rails';

import Box from '../bundles/Draw/components/Box';
import MyCanvas from '../bundles/Draw/components/MyCanvas';

// This is how react_on_rails can see the DrawCanvas in the browser.
ReactOnRails.register({
  Box,
  MyCanvas
});
