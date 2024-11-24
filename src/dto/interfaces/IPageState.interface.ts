export interface Page {
  title: string;
  bodyText: string;
}

export interface PagesState {
  pages: Page[];
  isEditing: boolean;
}
