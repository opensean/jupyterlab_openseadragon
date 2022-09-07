import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_openseadragon extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_openseadragon:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_openseadragon is activated!');
  }
};

export default plugin;
