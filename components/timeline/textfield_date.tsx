import TextField from '@material-ui/core/TextField';
import { FunctionComponent } from 'react';
type Props={
    Select:(e: any) => Promise<void>;
    item:string;
};
export const TextField_date:FunctionComponent<Props>=(props)=>{
  const {Select,item } = props;
  return (
    <TextField id="opendate" name="opendate" style={{width:"220px",height:"45px",paddingTop:"10px",marginLeft:"5px"}} type="date" value={item} onInput={Select} size="small" variant="outlined" InputLabelProps={{shrink: true}}/>
    );
}