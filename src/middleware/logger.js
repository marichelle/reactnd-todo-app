const logger = store => next => action => {
  const result = next(action);
  console.group(action.type);
  console.log('The action: ', action);
  console.log('The new state: ', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
