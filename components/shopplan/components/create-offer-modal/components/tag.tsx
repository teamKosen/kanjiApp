import { useState } from "react";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Password } from "@material-ui/icons";

const filter = createFilterOptions();

export default function Tagyarn(props) {
  const { size, style, variant, className, setValue, tag } = props;

  return (
    <div>
      <Autocomplete
        id="tag"
        size={size}
        style={style}
        options={[]}
        getOptionLabel={(option) => {
          console.log(option);
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
        // defaultValue={tag[0]}
        onChange={(e,v) => setValue(v.map(tag=>tag.title ? tag.title : tag))}
        defaultValue={tag}
        renderInput={(params) => (
          <TextField
            {...params}
            className={className}
            label="タグ"
            variant={variant}
          />
        )}
      />
    </div>
  );
}