import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import TaskList from '../components/TaskList';
import {TaskItems} from '../types/types';

const Task = () => {
  const [taskInput, setTaskInput] = useState<string>('');
  const [tasks, setTasks] = useState<TaskItems[]>([]);

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const newTask: TaskItems = {
        id: Date.now(),
        text: taskInput,
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    } else {
      alert('Remove unwanted things to add the task');
    }
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a task..."
        value={taskInput}
        onChangeText={text => setTaskInput(text)}
      />

      {taskInput && <Button title="Add Task" onPress={handleAddTask} />}

      {tasks && tasks?.length > 0 && (
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 15,
  },
});

export default Task;
