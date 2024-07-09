export interface Props {
  id?: string;
  className?: string;
  children?:
    | React.ReactNode
    | React.ReactElement
    | React.ReactElement[]
    | string;
}
