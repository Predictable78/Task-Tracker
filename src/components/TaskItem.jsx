import { useState } from 'react'

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)

  const handleEdit = () => {
    onEdit(task.id, editText)
    setIsEditing(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit()
    } else if (e.key === 'Escape') {
      setEditText(task.text)
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return (
      <li className="task-item editing">
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyPress}
          autoFocus
        />
        <button
          className="save-btn"
          onClick={handleEdit}
        >
          Save
        </button>
        <button
          className="cancel-btn"
          onClick={() => {
            setEditText(task.text)
            setIsEditing(false)
          }}
        >
          Cancel
        </button>
      </li>
    )
  }

  return (
    <li className="task-item">
      <span
        className="task-text"
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          opacity: task.completed ? 0.6 : 1,
          cursor: 'pointer'
        }}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <div className="task-actions">
        <button
          className="edit-btn"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem
