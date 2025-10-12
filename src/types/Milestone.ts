export interface IMilestone {
  id: number;
  date: number;
  title: string;
  company: string;
  achievements?: string;
  technologies?: string[];
  icon?: React.ReactNode;
}
