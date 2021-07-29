export enum IDialogBusType{
  'default',
  'qyhk',
  'jzyx',
  'yygl',
  'product'
}
export interface IDialogInfo{
  isShow: boolean,
  busType: IDialogBusType,
  setShow(show:boolean, busType:IDialogBusType):void
}