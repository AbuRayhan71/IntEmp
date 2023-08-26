import React from 'react';
import { VStack, Heading, Table, Tbody, Tr, Td, Tag, TagLabel } from '@chakra-ui/react';

const users = [
  { name: "Alice", role: "Data Scientist", skills: ["Machine Learning", "Python", "Data Analysis"] },
  { name: "Bob", role: "Frontend Developer", skills: ["React", "JavaScript", "HTML/CSS"] },
  { name: "Charlie", role: "Backend Developer", skills: ["Node.js", "Express", "Database Management"] },
  // ... Add more users
];

const teams = [
  {
    name: "Tech Team",
    members: users,
    colorScheme: "blue",
  },
  {
    name: "Management Team",
    members: [
      { name: "Rayhan", role: "Analyst", skills: ["Excel", "SQL"] },
      { name: "Muntasir", role: "Marketer", skills: ["React", "JavaScript", "HTML/CSS"] },
      { name: "Charlie", role: "Backend Developer", skills: ["Node.js", "Express", "Database Management"] },
      // Add more members if needed
    ],
    colorScheme: "green",
  },
  {
    name: "Engneering Team",
    members: [
      { name: "Rayhan", role: " Robotics Engineer", skills: ["Text Preprocessing", "Machine Learning Algorithms"] },
      { name: "Muntasir", role: "NLP Engineer", skills: ["NLTK (Natural Language Toolkit", "spaCy", "Transformers (Hugging Face)"] },
      { name: "Charlie", role: " Embedded Systems Engineer", skills: ["Problem Solving", "C++", "Algorithm Design"]},
      // Add more members if needed
    ],
    colorScheme: "red",
  },
  {
    name: "HR",
    members: [
      { name: "Towhid", role: "Head of HR", skills: ["Text Preprocessing", "Machine Learning Algorithms"] },
      { name: "Chirs", role: "Technical recruter", skills: ["NLTK (Natural Language Toolkit", "spaCy", "Transformers (Hugging Face)"] },
      { name: "Dan", role: "Buissness recruter", skills: ["Problem Solving", "power", "Algorithm Design"]},
      // Add more members if needed
    ],
    colorScheme: "gray",
  },
  // Add more teams here
];



const UsersPage: React.FC = () => {
  return (
    <VStack padding="4" bg="gray.50" spacing="4" align="left" width="100%">
      {teams.map((team, teamIdx) => (
        <div key={teamIdx}>
          <Heading size="lg">{team.name}</Heading>
          <Table variant="simple" size="sm">
            <Tbody>
              {team.members.map((member, memberIdx) => (
                <Tr key={memberIdx}>
                  <Td>{member.name}</Td>
                  <Td>{member.role}</Td>
                  <Td>
                    {member.skills.map((skill, skillIdx) => (
                      <Tag key={skillIdx} colorScheme={team.colorScheme} mr="1">
                        <TagLabel>{skill}</TagLabel>
                      </Tag>
                    ))}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      ))}
    </VStack>
  );
};

export default UsersPage;
