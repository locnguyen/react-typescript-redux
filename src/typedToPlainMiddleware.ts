export default (store: any) => (next: any) => (action: any) => next(Object.assign({}, action));
