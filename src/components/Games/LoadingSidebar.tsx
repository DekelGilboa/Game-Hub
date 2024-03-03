import { List, ListItem, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const LoadingSidebar = () => {
    const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <List display={"flex"} flexDirection={"column"} gap={3}>
        {
            list.map((_, i) => (
                <ListItem key={i} display={"flex"} gap={3} alignItems={"center"}>
                    <SkeletonCircle size='10' />
                    <SkeletonText width={"5em"} noOfLines={1} spacing='2' skeletonHeight='3' />
                </ListItem>
            ))
        }
    </List>
  )
}

export default LoadingSidebar