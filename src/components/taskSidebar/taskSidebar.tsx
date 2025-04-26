import { FC, ReactElement } from "react";
import { Card } from "@/components/ui/card";
import styles from "./style.module.css";
import { UserProfile } from "../userProfile/userProfile";
import { CreateTaskForm } from "../createTaskForm/createTaskForm";

export const TaskSidebar: FC = (): ReactElement => {
  return (
    <section className={`fixed right-4 top-4 ${styles.sidebarHeight}`}>
      <Card className="flex flex-col w-full h-full p-6 justify-between">
        <UserProfile firstName="Mark" />
        <CreateTaskForm />
      </Card>
    </section>
  );
};
