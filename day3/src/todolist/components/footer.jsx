
import { useLocation } from 'react-router-dom';

import { useCallback } from 'react';
import { REMOVE_COMPLETED } from '../constants';



export default function Footer({ todos , dispatch }) {
    const {pathname: currentPath} = useLocation();
    const activeCount = todos.filter((todo) => !todo.completed).length;
    const removeCompleted = useCallback(() => dispatch({ type: REMOVE_COMPLETED }), [dispatch]);
   
   if (activeCount === 0) {
        return null;
    }
    return (
        <footer className="footer" data-testid="footer">
            <span className="todo-count">{activeCount} items left {currentPath === '/active' ? 'active' : 'completed'}</span>
           <ul className="filters" data-testid="footer-filters">
                <li>
                    <a href="#/" className={currentPath === '/' ? 'selected' : ''}>All</a>
                </li>
                <li>
                    <a href="#/active" className={currentPath === '/active' ? 'selected' : ''}>Active</a>
                </li>
                <li>
                    <a href="#/completed" className={currentPath === '/completed' ? 'selected' : ''}>Completed</a>
                </li>
           </ul>
           
            <button className="clear-completed" onClick={removeCompleted}>
                Clear completed
            </button>
        </footer>
    );
}
