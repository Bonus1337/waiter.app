const createActionName = (actionName) => `app/tables/${actionName}`;

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
export default tablesReducer;
