import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [workouts, setWorkouts] = useState([
    { day: "Monday", workout: "Push Day", done: false },
    { day: "Tuesday", workout: "Pull Day", done: false },
    { day: "Wednesday", workout: "Rest", done: true },
    { day: "Thursday", workout: "Legs + Glute", done: false },
    { day: "Friday", workout: "Upper + Core", done: false },
  ]);

  const [studyPlan, setStudyPlan] = useState([
    { task: "DSA Practice", time: "1.5 hrs", done: false },
    { task: "Dev Learning", time: "2 hrs", done: false },
    { task: "Project Work", time: "1 hr", done: false },
  ]);

  const toggleDone = (listSetter, index) => {
    listSetter((prev) => {
      const updated = [...prev];
      updated[index].done = !updated[index].done;
      return updated;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">🏋️ Weekly Workout Plan</h2>
          {workouts.map((w, i) => (
            <div
              key={i}
              className={`flex justify-between items-center mb-2 ${
                w.done ? "text-green-600" : ""
              }`}
            >
              <span>
                {w.day}: {w.workout}
              </span>
              <Button size="sm" onClick={() => toggleDone(setWorkouts, i)}>
                {w.done ? "✓ Done" : "Mark Done"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">📚 Daily Study Plan</h2>
          {studyPlan.map((task, i) => (
            <div
              key={i}
              className={`flex justify-between items-center mb-2 ${
                task.done ? "text-blue-600" : ""
              }`}
            >
              <span>
                {task.task} – {task.time}
              </span>
              <Button size="sm" onClick={() => toggleDone(setStudyPlan, i)}>
                {task.done ? "✓ Done" : "Mark Done"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
