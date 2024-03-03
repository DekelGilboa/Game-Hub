import {
  Card,
  CardBody,
  HStack,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const LoadingCardsGrid = () => {
  const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      {list.map((_, i) => (
        <Card key={i} overflow={"hidden"}>
          <Skeleton>
            <Image
              src="../../assets/img-600-400.svg"
              fallbackSrc="https://placehold.co/600x400/EEE/31343C"
            />
          </Skeleton>
          <CardBody>
            <Stack gap={"1em"}>
              <SkeletonText noOfLines={1} skeletonHeight="3"/>
              <HStack justifyContent={"space-between"}>
                <SkeletonCircle />
                <SkeletonCircle />
              </HStack>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default LoadingCardsGrid;
