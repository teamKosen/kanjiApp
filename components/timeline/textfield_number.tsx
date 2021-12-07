import TextField from '@material-ui/core/TextField';
import { InputAdornment } from "@material-ui/core";
import { FunctionComponent } from 'react';
type Props={
    Select:(e: any) => Promise<void>;
    item:number;
    id_str:string;
    unit:string;
    size_w:string;
};
export const TextField_number:FunctionComponent<Props>=(props)=>{
  const {Select,item,id_str,unit,size_w } = props;
  return (
    <TextField id={id_str} InputProps={{ inputProps: { min: 1},endAdornment:<InputAdornment position="end">{unit}</InputAdornment> }} onInput={Select} value={item} style={{width:size_w,height:"45px",marginLeft:"5px"}} size="small" variant="outlined" name={id_str} type="Number"/>
  );
}