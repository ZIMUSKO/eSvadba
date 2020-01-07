export default (requestInfo) => {
  if (requestInfo.path.key === 'me') {
    const result = [];
    const { selections } = requestInfo.fieldNodes[0].selectionSet;
    (selections || []).forEach((selection) => {
      result.push(selection.name.value);
    });

    return result;
  }

  return ['id', 'roleName'];
};
