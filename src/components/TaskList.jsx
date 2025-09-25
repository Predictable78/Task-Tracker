import TaskItem from './TaskItem'

function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        No tasks yet. Add one above to get started!
      </div>
    )
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
          onEdit={onEditTask}
        />
      ))}
    </ul>
  )
}

export default TaskList
