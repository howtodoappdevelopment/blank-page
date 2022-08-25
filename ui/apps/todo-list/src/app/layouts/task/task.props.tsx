export interface ITask {
  id: string;
  title: string;
  description?: string;
  done?: boolean;
  dates?: number[];

  remove?: boolean;
  removalDate?: number;

  subTasks?: ITask[];
  nestingLvl?: number;
  isLeaf?: boolean;
}

export type TaskProps = {
  task: ITask;
};
