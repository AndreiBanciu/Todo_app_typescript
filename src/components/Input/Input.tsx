import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Todo } from '../../App';

type Props = {
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const Input = (props: Props) => {
  const [todo, setTodo] = useState<string>('');

  const { list, setList } = props;

  const addTodo = () => {
    if (!todo) {
      return;
    }
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 100000),
      content: todo,
      checked: false
    };
    setList([newTodo, ...list]);
    setTodo('');
  };

  return (
    <Grid
      display="flex"
      flexDirection="column"
      sx={{
        width: '400px'
      }}
    >
      <TextField
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo..."
        variant="filled"
      />
      <Button
        variant="contained"
        sx={{
          bgcolor: 'royalblue'
        }}
        onClick={() => {
          addTodo();
        }}
      >
        Add
      </Button>
    </Grid>
  );
};
