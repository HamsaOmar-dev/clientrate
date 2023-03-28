import { Avatar, Grid, Group, Rating, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { StaticImageData } from "next/image";

interface Testimoniols {
  testimonials: {
    avatar: StaticImageData;
    name: string;
    rating: number;
    description: string;
  };
}

const RatingReviewCards = ({ testimonials }: Testimoniols) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Grid
      align="start"
      justify="center"
    >
      <Grid.Col
        xs={6}
        px={"md"}
      >
        <Group noWrap>
          <Avatar
            radius={50}
            size={isMobile ? "lg" : "xl"}
            src={testimonials.avatar.src}
          />
          <Stack>
            <Text
              tt="uppercase"
              size={isMobile ? 18 : 20}
              weight={500}
            >
              {testimonials.name}
            </Text>
            <Rating
              defaultValue={testimonials.rating}
              size={isMobile ? "sm" : "md"}
              readOnly
            />
          </Stack>
        </Group>
      </Grid.Col>
      <Grid.Col xs={6}>
        <Text
          // align="justify"
          size={isMobile ? 14 : 18}
          weight={500}
        >
          {testimonials.description}
        </Text>
      </Grid.Col>
    </Grid>
  );
};

export default RatingReviewCards;
