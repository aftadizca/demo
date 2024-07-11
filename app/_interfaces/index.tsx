export interface IProps {
  id?: string;
  key?: string;
  className?: string;
  children?:
    | React.ReactNode
    | React.ReactElement
    | React.ReactElement[]
    | string;
}
