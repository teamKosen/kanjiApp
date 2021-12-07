import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { FunctionComponent } from 'react';

type Props={
  Select(event: any, value: any):void;
  item:string;
  id_str:string;
  list:string[];
};

export const Autocomplete_text:FunctionComponent<Props>=(props)=>{
  const { Select,item,id_str,list } = props;

  return (
    <Autocomplete disablePortal id={id_str}  onInputChange={Select} value={item} size="small" style={{width:"220px",height:"45px",marginLeft:"5px"}} options={list} renderInput={(params) => <TextField {...params} variant="outlined"/>}/>
  );
}