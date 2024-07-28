const apiUrl = 'http://localhost:5000/todos';

async function fetchTodos() {
    const response = await fetch(apiUrl);
    const todos = await response.json();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        todoList.appendChild(li);
    });
}

document.getElementById('todo-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const text = document.getElementById('todo-text').value;
    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });
    document.getElementById('todo-text').value = '';
    fetchTodos();
});

fetchTodos();
