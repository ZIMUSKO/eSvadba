export default (requestInfo) => {
  const result = [];
  const { selections } = requestInfo.fieldNodes[0].selectionSet;
  (selections || []).forEach((selection) => {
    result.push(selection.name.value);
  });

  return result;
};
