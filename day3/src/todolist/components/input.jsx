import { useCallback } from "react";

export default function Input({ todo, onToggle, onEdit, onDelete }) {
  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [todo.id, onToggle]);

  const handleEdit = useCallback((text) => {
    onEdit(todo.id, text);
  }, [todo.id, onEdit]);

  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [todo.id, onDelete]);

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <label onDoubleClick={() => handleEdit(todo.text)}>
        {todo.text}
      </label>
      <button className="destroy" onClick={handleDelete} />
    </div>
  );
}