import { useState } from "react";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const filter = createFilterOptions();

export default function TaskCreateForm(props) {
  const [tags, setTags] = useState([]);

  return (
    <div>
      <br/><br/><br/><br/>
      <form noValidate autoComplete="off">
        <div>
          <Autocomplete
            id="tags"
            size="small"
            options={[]}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === 'string') {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue;
              }
              // Regular option
              return option.title;
            }}
            multiple // 複数可
            freeSolo // 自由入力可
            clearOnBlur // 新規選択肢を追加可
            filterOptions={(options, params) => {
              const filtered = filter(options, params);
              // Suggest the creation of a new value
              if (params.inputValue !== '') {
                filtered.push({
                  inputValue: params.inputValue,
                  title: params.inputValue,
                });
              }
              return filtered;
            }}
            onChange={(e,v) => setTags(v.map(tag=>tag.title ? tag.title : tag))}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{width:"50em"}}
                label="tag"
                variant="standard"
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}