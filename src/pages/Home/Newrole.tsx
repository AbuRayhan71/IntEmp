import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Text, Textarea, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

type LocationState = {
  roleName?: string;
};

const Newrole: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const roleNameFromSearch = (location.state as LocationState)?.roleName || "";
  
  const [description, setDescription] = useState<string>("");
  const [years, setYears] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);

  // State and effect for typing simulation
  const placeholderText = "Add a description of the new project or role...";
  const [typedText, setTypedText] = useState("");
  
  useEffect(() => {
    if (description !== "") return;

    const timer = setTimeout(() => {
      if (typedText === placeholderText) {
        setTypedText("");
      } else {
        setTypedText(prev => placeholderText.substr(0, prev.length + 1));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [typedText, description]);

  const handleAnalyzeClick = () => {
    const jobAnalysis = {
      role: roleNameFromSearch,
      description: description,
      duration: `${years} years and ${months} months`
    };

    console.log(jobAnalysis);

    // Navigate to AnalyzedPage after analyzing
    navigate(`/analyzedpage/${roleNameFromSearch}`);
  }

  return (
    <Box padding="4" bg="gray.100" position="relative">
      <Text fontSize="2xl" marginBottom="4">New Role: {roleNameFromSearch}</Text>
      
      <Box position="relative">
        <Textarea 
          placeholder=""
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={500}
          mb={4}
        />

        {description === "" && (
          <Text color="gray.400" position="absolute" marginLeft={4} top="0">{typedText}</Text>
        )}
      </Box>

      <Text fontSize="md" marginBottom="2">Duration:</Text>
      <Box display="flex" alignItems="center">
        <NumberInput value={years} onChange={(valueString) => setYears(Number(valueString))} min={0}>
          <NumberInputField placeholder="Years" maxW="100px"/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text mx={4}>Years</Text>

        <NumberInput value={months} onChange={(valueString) => setMonths(Number(valueString))} min={0} max={11}>
          <NumberInputField placeholder="Months" maxW="100px"/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text mx={4}>Months</Text>
      </Box>

      <Button onClick={handleAnalyzeClick} position="absolute" bottom="4" right="4">
        Analyze Job
      </Button>
    </Box>
  );
}

export default Newrole;