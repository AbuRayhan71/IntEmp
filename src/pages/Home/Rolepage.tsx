import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VStack, Heading, Table, Tbody, Tr, Td, Button, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

type Candidate = {
  name: string;
  score: number;
};

const roleToCandidates: Record<string, Candidate[]> = {
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

  "Data Scientist": [
    { name: "Pia", score: 97 },
    { name: "Quincy", score: 94 },
    { name: "Rita", score: 91 },
    { name: "Steve", score: 89 },
    { name: "Tina", score: 85 },
  ],
  "Machine Learning Engineer": [
    { name: "Uma", score: 96 },
    { name: "Victor", score: 93 },
    { name: "Wendy", score: 89 },
    { name: "Xander", score: 88 },
    { name: "Yara", score: 83 },
  ],
  "Database Administrator": [
    { name: "Zane", score: 99 },
    { name: "Ava", score: 95 },
    { name: "Blake", score: 92 },
    { name: "Cara", score: 87 },
    { name: "Derek", score: 82 },
  ],
  "Python Developer": [
    { name: "Elton", score: 93 },
    { name: "Fiona", score: 90 },
    { name: "Gerald", score: 88 },
    { name: "Holly", score: 85 },
    { name: "Ian", score: 81 },
  ],
  "JavaScript Engineer": [
    { name: "Janet", score: 98 },
    { name: "Kyle", score: 96 },
    { name: "Lana", score: 94 },
    { name: "Marty", score: 91 },
    { name: "Nancy", score: 90 },
  ],
  "UI Designer": [
    { name: "Owen", score: 89 },
    { name: "Penny", score: 87 },
    { name: "Quinn", score: 85 },
    { name: "Ralph", score: 83 },
    { name: "Stacy", score: 80 },
  ],
  "UX Researcher": [
    { name: "Tom", score: 97 },
    { name: "Ursula", score: 95 },
    { name: "Vince", score: 93 },
    { name: "Wanda", score: 91 },
    { name: "Xavier", score: 89 },
  ],
// ... Assuming previous code above ...

"SEO Specialist": [
  { name: "Yolanda", score: 93 },
  { name: "Zeus", score: 90 },
  { name: "Ashley", score: 87 },
  { name: "Briana", score: 83 },
  { name: "Carlos", score: 81 },
],
"Content Writer": [
  { name: "Daisy", score: 98 },
  { name: "Ethan", score: 95 },
  { name: "Freya", score: 92 },
  { name: "George", score: 89 },
  { name: "Hilda", score: 85 },
],
"Video Editor": [
  { name: "Iris", score: 96 },
  { name: "James", score: 94 },
  { name: "Kara", score: 90 },
  { name: "Liam", score: 87 },
  { name: "Mandy", score: 84 },
],
"Graphic Designer": [
  { name: "Nigel", score: 91 },
  { name: "Olga", score: 88 },
  { name: "Paul", score: 86 },
  { name: "Queen", score: 82 },
  { name: "Randy", score: 80 },
],
"Cloud Architect": [
  { name: "Samantha", score: 97 },
  { name: "Tristan", score: 95 },
  { name: "Ulysses", score: 93 },
  { name: "Vera", score: 91 },
  { name: "William", score: 88 },
],
"DevOps Engineer": [
  { name: "Xenia", score: 99 },
  { name: "Yannick", score: 96 },
  { name: "Zara", score: 94 },
  { name: "Arnold", score: 90 },
  { name: "Bella", score: 88 },
],
"Network Administrator": [
  { name: "Cedric", score: 87 },
  { name: "Dana", score: 85 },
  { name: "Elvis", score: 82 },
  { name: "Faye", score: 79 },
  { name: "Gordon", score: 75 },
],
"System Analyst": [
  { name: "Haley", score: 94 },
  { name: "Isaac", score: 90 },
  { name: "Jenna", score: 87 },
  { name: "Keith", score: 84 },
  { name: "Loretta", score: 82 },
],
"Cybersecurity Expert": [
  { name: "Mitchell", score: 98 },
  { name: "Natalie", score: 96 },
  { name: "Orlando", score: 93 },
  { name: "Pamela", score: 91 },
  { name: "Quentin", score: 89 },
],
// ... Assuming previous code above ...

  // ... Assuming previous code above ...

  "Blockchain Developer": [
    { name: "Rebecca", score: 96 },
    { name: "Samuel", score: 94 },
    { name: "Tiffany", score: 92 },
    { name: "Uriah", score: 90 },
    { name: "Vicky", score: 88 },
  ],
  "VR Developer": [
    { name: "Walter", score: 97 },
    { name: "Xena", score: 95 },
    { name: "Yves", score: 94 },
    { name: "Zelda", score: 92 },
    { name: "Aaron", score: 89 },
  ],
  "AR Developer": [
    { name: "Belinda", score: 96 },
    { name: "Cyril", score: 93 },
    { name: "Daphne", score: 91 },
    { name: "Edward", score: 89 },
    { name: "Felicia", score: 87 },
  ],
  "Game Developer": [
    { name: "Geoff", score: 99 },
    { name: "Hannah", score: 96 },
    { name: "Ivan", score: 94 },
    { name: "Jill", score: 93 },
    { name: "Kevin", score: 91 },
  ],
  "3D Modeler": [
    { name: "Laura", score: 98 },
    { name: "Mike", score: 97 },
    { name: "Nancy", score: 95 },
    { name: "Ollie", score: 93 },
    { name: "Penny", score: 91 },
  ],
  "Animator": [
    { name: "Quincy", score: 99 },
    { name: "Rachel", score: 97 },
    { name: "Stefan", score: 95 },
    { name: "Tina", score: 94 },
    { name: "Ulysses", score: 92 },
  ],
  "AI Specialist": [
    { name: "Veronica", score: 100 },
    { name: "Wayne", score: 98 },
    { name: "Xavier", score: 96 },
    { name: "Yasmine", score: 95 },
    { name: "Zachary", score: 93 },
  ],
  "NLP Engineer": [
    { name: "Adele", score: 99 },
    { name: "Bryan", score: 98 },
    { name: "Celine", score: 96 },
    { name: "Drake", score: 94 },
    { name: "Elaine", score: 93 },
  ],
  // ... previous code ...

  "Robotics Engineer": [
    { name: "Frankie", score: 97 },
    { name: "George", score: 95 },
    { name: "Heidi", score: 93 },
    { name: "Iris", score: 91 },
    { name: "Jake", score: 89 },
  ],
  "IoT Developer": [
    { name: "Kelly", score: 100 },
    { name: "Lloyd", score: 98 },
    { name: "Megan", score: 97 },
    { name: "Nate", score: 95 },
    { name: "Opal", score: 93 },
  ],
  "Embedded Systems Engineer": [
    { name: "Paige", score: 99 },
    { name: "Quentin", score: 97 },
    { name: "Rosalind", score: 96 },
    { name: "Sylvester", score: 94 },
    { name: "Trina", score: 92 },
  ],
  "E-commerce Specialist": [
    { name: "Ursula", score: 98 },
    { name: "Vincent", score: 97 },
    { name: "Whitney", score: 95 },
    { name: "Xerxes", score: 94 },
    { name: "Yvonne", score: 92 },
  ],
  "Digital Marketer": [
    { name: "Zephyr", score: 100 },
    { name: "Arnold", score: 98 },
    { name: "Brianna", score: 96 },
    { name: "Clarence", score: 95 },
    { name: "Delilah", score: 93 },
  ],
  "PPC Expert": [
    { name: "Ezekiel", score: 99 },
    { name: "Frida", score: 98 },
    { name: "Greg", score: 97 },
    { name: "Helga", score: 96 },
    { name: "Ignatius", score: 94 },
  ],
  "CRM Manager": [
    { name: "Janice", score: 100 },
    { name: "Kurt", score: 99 },
    { name: "Lorena", score: 97 },
    { name: "Merrick", score: 96 },
    { name: "Nicolette", score: 95 },
  ],




};

const Rolepage: React.FC = () => {
  const { roleName } = useParams<{ roleName: string }>();
  const decodedRoleName = decodeURIComponent(roleName || "");
  const candidates = roleToCandidates[decodedRoleName] || [];

  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

  const handleAssign = (name: string) => {
    setSelectedCandidate(name);
  };

  const handleConfirmation = (confirmed: boolean) => {
    if (confirmed) {
      // Implement your logic to assign the candidate to the role
      console.log(`Assigning ${selectedCandidate} to ${decodedRoleName}`);
    }
    setSelectedCandidate(null); // Reset selected candidate
  };

  const [displayedScores, setDisplayedScores] = useState<number[]>(candidates.map(() => 0));

  useEffect(() => {
    const maxDelay = 1000; // Animation will take 1 second
    const intervalTimes = candidates.map(candidate => maxDelay / candidate.score);

    const intervalIds: NodeJS.Timeout[] = [];

    candidates.forEach((candidate, idx) => {
      intervalIds.push(
        setInterval(() => {
          setDisplayedScores(prevScores => {
            const updatedScores = [...prevScores];
            if (updatedScores[idx] < candidate.score) {
              updatedScores[idx]++;
            }
            return updatedScores;
          });
        }, intervalTimes[idx])
      );
    });

    return () => {
      intervalIds.forEach(intervalId => clearInterval(intervalId));
    };
  }, [candidates]);

  return (
    <VStack padding="4" bg="gray.50" spacing="4" align="left" width="100%">
      <Heading size="lg">{decodedRoleName}</Heading>
      <Table variant="simple" size="sm">
        <Tbody>
          {candidates.map((candidate, idx) => (
            <Tr key={idx}>
              <Td>{candidate.name}</Td>
              <Td>
                <CircularProgress value={displayedScores[idx]} color="green.400" size="40px">
                  <CircularProgressLabel>{displayedScores[idx]}%</CircularProgressLabel>
                </CircularProgress>
              </Td>
              <Td>
                <Button
                  colorScheme="blue"
                  onClick={() => handleAssign(candidate.name)}
                  disabled={selectedCandidate !== null && selectedCandidate !== candidate.name}
                >
                  Assign
                </Button>
                {selectedCandidate === candidate.name && (
                  <div>
                    Are you sure you want {candidate.name} to work as a {decodedRoleName}?{" "}
                    <Button colorScheme="green" onClick={() => handleConfirmation(true)}>Yes</Button>{" "}
                    <Button colorScheme="red" onClick={() => handleConfirmation(false)}>No</Button>
                  </div>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

export default Rolepage;