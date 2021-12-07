import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const filter = createFilterOptions();



export default function Tagyarn(props) {
  const { setValue } = props;
  const taglist=['中華','和食','イタリアン','エスニック','打ち上げ','会食','合コン','同窓会'];
  return (
    <div>
      <form noValidate autoComplete="off">
        <div>
          <Autocomplete
            id="tag"
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
            onChange={(e,v) => setValue(v.map(tag=>tag.title ? tag.title : tag))}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{width:"220px",marginLeft:"5px"}}
                //label="tag"
                variant="outlined"
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}