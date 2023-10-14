export interface Column {
  columnDef: string;
  header: string;
  cell: Function;
  isLink?: boolean;
  url?: string;
  image?: string;
  isAction?: boolean;
  actions?: string[];
  isImage?: boolean;
  isNumberAndImage?: boolean;
  isThumbnailImage?: boolean;
}
