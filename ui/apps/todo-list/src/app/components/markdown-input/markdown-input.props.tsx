export interface IOutput {
  title: string;
  segments: string[];
  tasksNr: number;
}

export type MarkdownInputProps = {
  markdown?: string;
  onChanges?: (output: IOutput) => unknown;
};
