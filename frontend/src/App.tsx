import { useState } from "react";

export const App = () => {
  const [text, setText] = useState('');

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Helix</h1>
        <p className="text-slate-400 text-sm">Local-first AI productivity.</p>
        <p className="text-slate-300 text-xs">Milestone 1: Technical Proof of Concept.</p>
      </header>

      <section className="mb-4">
        <label className="block text-sm mb-2" htmlFor="task-input">
          What do you need to do?
        </label>
        <div className="flex gap-2">
          <input
            id="task-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="CS2040S problem set by Thursday 3pm, probably 2 hours"
            className="flex-1 bg-slate-800 px-3 py-2 rounded border border-slate-700 focus:outline-none focus:border-sky-500"
          />
          <button
            type="button"
            className="bg-sky-500 hover:bg-sky-400 px-4 py-2 rounded font-semibold disabled:opacity-50"
            disabled={text.trim().length === 0}
          >
            Add
          </button>
        </div>
      </section>

      <section className="border border-slate-800 rounded p-4 min-h-[300px] text-slate-500 text-sm">
        Calendar will go here tomorrow.
      </section>
    </div>
  )
}