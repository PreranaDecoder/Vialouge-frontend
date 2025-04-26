import { FC, ReactElement } from "react";

// import { Task } from "@/components/task/task";
// import { TasksCounter } from "@/components/taskCounter/tasksCounter";
import { TaskSidebar } from "@/components/taskSidebar/taskSidebar";
import { useFetchTasks } from "@/hooks/useFetchTasks.hook";
import { ITask } from "@/types/task.interface";

function todaysDate() {
  const today = new Date();

  // The Intl namespace is part of the ECMAScript Internationalization API, which provides language-sensitive string comparison, number formatting, and date and time formatting.
  // Define options for toLocaleDateString()
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // full name of the day
    day: "numeric", // numeric day
    month: "short", // abbreviated month
    year: "numeric", // numeric year
  };

  // Format the date
  const formattedDate = today.toLocaleDateString("en-GB", options);
  return formattedDate;
}

export const Tasks: FC = (): ReactElement => {
  /* Trigger the hook  */
  const { data, isError, isSuccess, isPending, error } = useFetchTasks();
  // Custom type guard to check if the response data is an array
  console.log(data);

  return (
    <section className="flex flex-row w-full p-4 gap-8 ">
      <section className="flex basis-1/3">
        <TaskSidebar />
      </section>
    </section>
  );
};
