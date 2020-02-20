import ReactOnRails from 'react-on-rails';

import Cloud from '../bundles/Draw/components/Cloud';
import MyCanvas from '../bundles/Draw/components/MyCanvas';
import FullScreenVisualizer from '../bundles/Draw/components/FullScreenVisualizer';
import WaveInput from '../bundles/Draw/components/WaveInput';

// This is how react_on_rails can see the DrawCanvas in the browser.
ReactOnRails.register({
  Cloud,
  FullScreenVisualizer,
  MyCanvas,
  WaveInput
});
