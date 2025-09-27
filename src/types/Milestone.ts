export interface IMilestone {
  id: number;
  date: number;
  title: string;
  company: string;
  description?: string;
  technologies?: string[];
  icon?: React.ReactNode;
}
