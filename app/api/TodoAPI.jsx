module.exports = {
  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter((todo) => {
      return searchText.length === 0 || todo.text.toLowerCase().includes(searchText.toLowerCase());
    });

    filteredTodos.sort((a,b) => {
      return a.completed == b.completed ? 0 : (a.completed ? 1 : -1);
    });

    return filteredTodos;
  }
};
