import { Heading } from "@chakra-ui/react";
import { QueryDetails } from "../App";

interface Props {
  queryDetails: QueryDetails;
}

const ResultHeading = ({ queryDetails }: Props) => {
  return (
    <Heading as={"h1"} fontSize={{ base: 16, sm: 26 }}>
      {`Result: ${queryDetails.platform?.name || ""} ${
        queryDetails.genre?.name || ""
      } games`}
    </Heading>
  );
};

export default ResultHeading;
