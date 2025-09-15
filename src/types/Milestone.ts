export interface IMilestone {
  id: number;
  date: string;
  title: string;
  company: string;
  description?: string;
  technologies?: string[];
  icon?: React.ReactNode;
}
