import TextField from '@material-ui/core/TextField';
import { InputAdornment } from "@material-ui/core";
import { FunctionComponent } from 'react';
type Props={
    Select:(e: any) => Promise<void>;
    item:number;
    id_str:string;
};
export const TextField_number:FunctionComponent<Props>=(props)=>{
  const {Select,item,id_str } = props;
  return (
    <TextField id={id_str} InputProps={{ inputProps: { min: 1},endAdornment:<InputAdornment position="end">円</InputAdornment> }} onInput={Select} value={item} style={{width:"220px",height:"45px",marginLeft:"5px"}} size="small" variant="outlined" name={id_str} type="Number"/>
  );
}