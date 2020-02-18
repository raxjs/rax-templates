let getItem = (item) => {
  let {
    data,
    data_id,
    childIndex,
  } = item;

  let rowId = `${data_id}-${childIndex}`;
  const isFirstCell = `${data_id}-0` === rowId;
  let itemData = {
    ...item,
    id: rowId,
    rowIndex: childIndex,
    cellLength: data.length,
    isFirstCell,
    isLastCell: (rowId === rowId + '-' + (data.length - 1)),
  };
  
  return itemData
};

export default getItem;