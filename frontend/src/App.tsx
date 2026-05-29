import { useState } from 'react';
import { Calendar, CalendarTask } from './Calendar';

const now = Date.now();
const demoTasks: CalendarTask[] = [
  {
      id: 'demo-1',
      title: 'Demo task',
      start: new Date(now + 60 * 60 * 1000).toISOString(),
      end: new Date(now + 2 * 60 * 60 * 1000).toISOString(),
  },
];

export const App = () => {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<CalendarTask[]>(demoTasks);

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Helix</h1>
      </header>
      <section className="mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What do you need to do?"
          className="w-full bg-slate-800 px-3 py-2 rounded"
        />
      </section>
      <Calendar tasks={tasks} />
    </div>
  );
};
