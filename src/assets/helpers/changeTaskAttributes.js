export const changeTaskAttributes = (container, transferedTask) => {
  const task = transferedTask;
  const isContainerImportant = container.dataset.important === 'true' ? true : false;
  const isContainerUrgent = container.dataset.urgent === 'true' ? true : false;
  task.isImportant = isContainerImportant;
  task.isUrgent = isContainerUrgent;
  return task;
};
