import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Input } from './components/Input/Input';
import { TodoList } from './components/List/List';

export type Todo = {
  id: number;
  content: string;
  checked: boolean;
};

function App() {
  const [list, setList] = useState<Todo[]>([]);

  return (
    <Grid display="flex" flexDirection="column" alignItems="center">
      <Typography
        variant="h1"
        sx={{
          fontWeight: 'bold',
          color: 'royalblue'
        }}
      >
        ToDo List
      </Typography>
      <Box
        sx={{
          marginTop: '3rem'
        }}
      >
        <Input list={list} setList={setList} />
        <TodoList list={list} setList={setList} />
      </Box>
    </Grid>
  );
}

export default App;
