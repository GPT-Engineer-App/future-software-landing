import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarkerAlt, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8} centerContent>
      <VStack spacing={10} align="center" justify="center">
        <Image src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2l0eXxlbnwwfHx8fDE3MTUyNjU2NDR8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxSize="400px" objectFit="cover" alt="Futuristic City" />
        <VStack spacing={3}>
          <Heading as="h1" size="2xl" textAlign="center" color="teal.300">
            The Future of Software
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Explore the next generation of software innovations!
          </Text>
        </VStack>
        <VStack spacing={2}>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid" size="lg">
            Register Now
          </Button>
          <Text fontSize="md" color="gray.400">
            Join us on October 10, 2023
          </Text>
          <Button leftIcon={<FaMapMarkerAlt />} colorScheme="gray" variant="outline" size="md">
            Virtual Event
          </Button>
        </VStack>
        <Button rightIcon={<FaRocket />} colorScheme="purple" size="lg" variant="ghost">
          Learn More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
