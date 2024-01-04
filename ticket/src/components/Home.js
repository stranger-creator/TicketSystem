// Home.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Select,
  Stack,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  HStack,
} from '@chakra-ui/react';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', field: '', amount: '' });
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setTasks((prevTasks) => [...prevTasks, formData]);
    setFormData({ name: '', field: '', amount: '' });
    setShowForm(false);
  };

  const handleUpdate = (index) => {
    // Implement the update logic here
    // You can open a similar form and pre-fill it with the existing data for editing
    console.log('Update task at index', index);
  };

  const handleDelete = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <VStack spacing={4} align="stretch">
      <Button onClick={() => setShowForm(true)}>+</Button>

      {showForm && (
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Stack spacing={3}>
            <Heading size="md">Add Task</Heading>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Field</FormLabel>
              <Select
                placeholder="Select a field"
                name="field"
                value={formData.field}
                onChange={handleInputChange}
              >
                <option value="food">Food</option>
                <option value="hospital">Hospital</option>
                <option value="electricity">Electricity</option>
                <option value="fees">Fees</option>
                {/* Add other options as needed */}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Amount (in rupees)</FormLabel>
              <Input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Box>
      )}

      {tasks.map((task, index) => (
        <Box key={index} p={4} borderWidth="1px" borderRadius="md">
          <Heading size="md">{task.name}</Heading>
          <Box>Field: {task.field}</Box>
          <Box>Amount: {task.amount} rupees</Box>
          <HStack spacing={4} mt={2}>
            <Button colorScheme="blue" onClick={() => handleUpdate(index)}>
              Update
            </Button>
            <Button colorScheme="red" onClick={() => handleDelete(index)}>
              Delete
            </Button>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default Home;
