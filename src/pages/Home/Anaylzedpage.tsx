import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box, Grid, Text, CircularProgress, CircularProgressLabel, List, ListItem, VStack, Button } from "@chakra-ui/react";

type DeveloperInfo = {
  name: string;
  score: number;
};

type DeveloperData = {
  [key: string]: DeveloperInfo[];
};

const data: DeveloperData = {
    "Frontend Developer": [
        { name: "Alice", score: 95 },
        { name: "Bob", score: 88 },
        { name: "Charlie", score: 82 },
        { name: "David", score: 78 },
        { name: "Ella", score: 73 },
      ],
      "Backend Developer": [
        { name: "Frank", score: 92 },
        { name: "Grace", score: 85 },
        { name: "Henry", score: 80 },
        { name: "Ivy", score: 78 },
        { name: "Jack", score: 70 },
      ],
      "UI Designer": [
        { name: "Owen", score: 89 },
        { name: "Penny", score: 87 },
        { name: "Quinn", score: 85 },
        { name: "Ralph", score: 83 },
        { name: "Stacy", score: 80 },
      ],
    };

function Analyzedpage() {
  const { roleName } = useParams<{ roleName: string }>();
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [assignedDevelopers, setAssignedDevelopers] = useState<{ [key: string]: string | undefined }>({});
  const [diversityScore, setDiversityScore] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (roleName === "fullstack developer") {
      setTimeout(() => {
        setAnimate(true);
        setLoading(false);
      }, 1000);
    }
  }, [roleName]);

  useEffect(() => {
    // Calculate diversity score when 3 candidates are chosen
    if (Object.values(assignedDevelopers).filter(Boolean).length === 3) {
      const randomDiversityScore = Math.floor(Math.random() * 61) + 20; // Random between 20 to 80
      setDiversityScore(randomDiversityScore);
    } else {
      setDiversityScore(undefined);
    }
  }, [assignedDevelopers]);

  return (
    <Box p={6}>
      <Text fontSize="4xl" mb={6}> {roleName}</Text>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="200px">
          <CircularProgress isIndeterminate color="blue.300" />
        </Box>
      ) : (
        animate && (
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {Object.keys(data).map((role, idx) => (
              <VStack key={idx} spacing={4} align="start">
                <Text fontSize="xl">{role}</Text>
                <List spacing={3} width="100%">
                  {data[role].map((entry: DeveloperInfo) => (
                    <ListItem key={entry.name}>
                      <Grid templateColumns="1fr 0.5fr 1fr" gap={4}>
                        <Text fontWeight="bold">{entry.name}</Text>
                        <Box position="relative">
                          <CircularProgress value={entry.score} color="blue.300">
                            <CircularProgressLabel>{entry.score}%</CircularProgressLabel>
                          </CircularProgress>
                        </Box>
                        <Button
                          size="sm"
                          onClick={() => {
                            if (assignedDevelopers[role] === entry.name) {
                              setAssignedDevelopers(prevState => ({
                                ...prevState,
                                [role]: undefined
                              }));
                              console.log(`Unassigned: Name: ${entry.name}`);
                            } else {
                              setAssignedDevelopers(prevState => ({
                                ...prevState,
                                [role]: entry.name
                              }));
                              console.log(`Assigned: Name: ${entry.name}, Score: ${entry.score}%`);
                            }
                          }}
                          isDisabled={assignedDevelopers[role] !== undefined && assignedDevelopers[role] !== entry.name}
                        >
                          {assignedDevelopers[role] === entry.name ? 'Unassign' : 'Assign'}
                        </Button>
                      </Grid>
                    </ListItem>
                  ))}
                </List>
              </VStack>
            ))}
          </Grid>
        )
      )}
      {diversityScore !== undefined && (
        <Box mt={6} p={4} bg="blue.100" borderRadius="md">
          <Text fontSize="lg">Diversity Score</Text>
          <Text fontSize="3xl" fontWeight="bold">{diversityScore}%</Text>
          <Text mt={2} color="gray.600">A diverse team is key to innovation!</Text>
        </Box>
      )}
    </Box>
  );
}

export default Analyzedpage;