import {configureStore as prodStore} from './configureStore.prod';
import {configureStore as devStore} from './configureStore.dev';

const configureStore: Function = process.env.NODE_ENV === 'production' ? prodStore : devStore;

export default configureStore;
