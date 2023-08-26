







import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import {
  Box, Input, Text, List, ListItem, InputGroup, InputLeftElement, Button, Divider,
  SlideFade
} from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Data Scientist",
  "Machine Learning Engineer",
  "Database Administrator",
  "Python Developer",
  "JavaScript Engineer",
  "UI Designer",
  "UX Researcher",
  "SEO Specialist",
  "Content Writer",
  "Video Editor",
  "Graphic Designer",
  "Cloud Architect",
  "DevOps Engineer",
  "Network Administrator",
  "System Analyst",
  "Cybersecurity Expert",
  "Blockchain Developer",
  "VR Developer",
  "AR Developer",
  "Game Developer",
  "3D Modeler",
  "Animator",
  "AI Specialist",
  "NLP Engineer",
  "Robotics Engineer",
  "IoT Developer",
  "Embedded Systems Engineer",
  "E-commerce Specialist",
  "Digital Marketer",
  "PPC Expert",
  "CRM Manager",
  "Email Marketing Manager",
  "Affiliate Manager",
  "Copywriter",
  "Technical Writer",
  "Mobile App Developer",
  "iOS Developer",
  "Android Developer",
  "Flutter Developer",
  "React Native Developer",
  "Sales Specialist",
  "HR Manager",
  "Recruiter",
  "Customer Support",
  "Community Manager",
  "Product Manager",
  "QA Tester",
  "Manual Tester",
  "Automation Tester",
  "Performance Tester",
  "BI Developer",
  "Data Engineer",
  "Data Analyst",
  "Big Data Specialist",
  "Elasticsearch Developer",
  "Social Media Manager",
  "Brand Strategist",
  "PR Specialist",
  "Event Manager",
  "Interpreter",
  "Translator",
  "Podcast Producer",
  "Voice Over Artist",
  "Photographer",
  "Cinematographer",
  "Sound Engineer",
  "Music Producer",
  "Jingle Composer",
  "Rust Developer",
  "Go Developer",
  "Kotlin Developer",
  "Swift Developer",
  "Scala Developer",
  "R Developer",
  "MATLAB Specialist",
  "Statistics Expert",
  "Actuary",
  "Environmental Scientist",
  "Geologist",
  "Meteorologist",
  "Astronomer",
  "Quantum Computing Researcher",
  "Chemistry Analyst",
  "Biology Researcher",
  "Physicist",
  "Historian",
  "Geography Analyst",
  "Sociologist",
  "Psychologist",
  "Anthropologist",
  "Political Scientist",
  "Economist",
  "Philosopher",
  "Theologian",
  "Linguist",
  "Literature Specialist",
  "Art Historian",
  "Musicologist",
  "Theater Specialist",
  "Dance Specialist",
  "Documentary Maker"
];

const departmentData = [
  { name: 'Engineering', value: 400 },
  { name: 'HR', value: 300 },
  { name: 'Marketing', value: 200 },
  { name: 'Design', value: 100 },
];

const COLORS = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

type Employer = {
  id: number;
  name: string;
  department: string;
};

function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recentEmployers, setRecentEmployers] = useState<Employer[]>([
    { id: 1, name: 'John Doe', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', department: 'HR' },
    { id: 3, name: 'Emily Johnson', department: 'Marketing' },
    { id: 4, name: 'William Brown', department: 'Sales' },
    { id: 5, name: 'Olivia Davis', department: 'Finance' },
    { id: 6, name: 'James Wilson', department: 'IT' },
    { id: 7, name: 'Sophia Martinez', department: 'Legal' },
    { id: 8, name: 'Michael Jones', department: 'Operations' },
    { id: 9, name: 'Charlotte Garcia', department: 'Product' },
    { id: 10, name: 'Benjamin White', department: 'Support' }
]);


  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      const filtered = roles.filter(role =>
        role.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleCreateRoleClick = () => {
    navigate(`/newrole/${inputValue}`, { state: { roleName: inputValue } });
  }

  const handleRemoveEmployer = (id: number) => {
    setRecentEmployers(prev => prev.filter(emp => emp.id !== id));
  }

  return (
    <Box padding="4" bg="gray.100" display="flex">
      <Box flex="1" paddingRight="4">
        <Box marginBottom="6">
          <Text fontSize="xl" marginBottom="4">Internal Hiring Portal</Text>
          <InputGroup size="lg" marginBottom="4">
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input placeholder="Search for new role or existing role" value={inputValue} onChange={handleChange} />
          </InputGroup>
          {suggestions.length > 0 ? (
            <List border="1px" borderColor="gray.200" borderRadius="md" bg="white" maxHeight="150px" overflowY="auto">
              {suggestions.map((suggestion, idx) => (
                <ListItem key={idx} padding="2">
                  <Link to={`/rolepage/${suggestion}`}>
                    {suggestion}
                  </Link>
                </ListItem>
              ))}
            </List>
          ) : inputValue ? (
            <Button onClick={handleCreateRoleClick} colorScheme="blue" mt={4}>
              Create Role
            </Button>
          ) : null}
        </Box>

        <Divider marginY="6" />

        <Box>
          <Text fontSize="xl" marginBottom="4">Department Distribution</Text>
          <PieChart width={400} height={400}>
            <Pie data={departmentData} cx={200} cy={200} labelLine={false} outerRadius={150} fill="#8884d8" dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
              {departmentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Box>
      </Box>

      <Box width="250px" bg="white" borderLeft="1px solid #E2E8F0" padding="4" height="100vh" overflowY="auto">
        <Text fontSize="lg" fontWeight="medium" mb="4">Recent Employers</Text>
        {recentEmployers.map((employer) => (
          <SlideFade in={true} offsetY="20px" key={employer.id}>
            <Box borderRadius="md" p="3" m="2" bg="gray.100" position="relative">
              <Text fontWeight="bold">{employer.name}</Text>
              <Text fontSize="sm" color="gray.600">{employer.department}</Text>
              <Box position="absolute" right="4" top="4" cursor="pointer" onClick={() => handleRemoveEmployer(employer.id)} _hover={{ bg: "gray.300", borderRadius: "50%" }}>
                <CloseIcon />
              </Box>
            </Box>
          </SlideFade>
        ))}
      </Box>
    </Box>
  );
}

export default Home;
