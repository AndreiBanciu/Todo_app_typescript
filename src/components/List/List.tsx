import { Delete } from '@mui/icons-material';
import { Box, Button, Checkbox, Grid } from '@mui/material';
import { Todo } from '../../App';

type Props = {
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoList = (props: Props) => {
  const { list, setList } = props;

  const delTodo = (todoId: number) => {
    setList(list.filter((e) => e.id !== todoId));
  };

  const setIsChecked = (id: number) => {
    setList(
      list.map((el) => {
        if (el.id === id) {
          el.checked = !el.checked;
        }
        return el;
      })
    );
  };

  return (
    <Grid
      sx={{
        marginTop: '2rem'
      }}
    >
      {list &&
        list.map((el, i) => {
          return (
            <Box key={i}>
              <Box
                sx={{
                  marginTop: '1rem',
                  bgcolor: 'lemonchiffon',
                  borderRadius: '5%',
                  height: '60px'
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    paddingLeft: '15px',
                    fontStyle: 'italic',
                    fontWeight: 'bolder',
                    fontSize: '1.3rem',
                    width: '100%',
                    height: '50px',
                    textDecoration: el.checked ? 'line-through' : ''
                  }}
                >
                  {el.content}
                  <Box
                    sx={{
                      paddingRight: '10px'
                    }}
                  >
                    <Checkbox
                      checked={el.checked}
                      onClick={() => setIsChecked(el.id)}
                    />
                    <Button
                      title="Delete"
                      sx={{
                        color: 'red'
                      }}
                      endIcon={<Delete />}
                      onClick={() => delTodo(el.id)}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
    </Grid>
  );
};
