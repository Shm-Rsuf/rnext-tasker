/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);

  /* handleAddTask */
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
    setShowAddModal(false);
    console.log(task);
  };

  return (
    <section className='mb-20' id='tasks'>
      {showAddModal && <AddTaskModal onSave={handleAddTask} />}
      <div className='container'>
        <div className='p-2 flex justify-end'>
          <SearchTask />
        </div>

        <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
          <TaskActions onAddClick={() => setShowAddModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
