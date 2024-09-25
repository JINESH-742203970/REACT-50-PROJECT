const todoKey = "reactTodo";

export const getLocalStorageData = () => {
  const rawTodos = localStorage.getItem(todoKey);
  console.log(rawTodos);
  if (!rawTodos) return [];
  try {
    return JSON.parse(rawTodos);
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    return [];
  }
};

export const setLocalStorageData = (task) => {
  localStorage.setItem(todoKey, JSON.stringify(task));
};
