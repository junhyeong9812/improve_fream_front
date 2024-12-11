export interface SupportItem {
  id: string;
  title: string;
  content: string;
}
export interface Notice {
  id: number;
  category: string;
  title: string;
  content: string;
}

export interface DummyData {
  totalElements: number;
  totalPages: number;
  size: number;
  content: Notice[];
}
