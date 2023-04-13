import { Grid, Group, Paper, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconClock, IconCoin } from "@tabler/icons-react";
import ADLAssistanceForm from "../ADLAssistanceForm";
import Button from "../Button";
import CongregateMealPreparation from "../CongregateMealPreparationForm";
import FieldHeaders from "../FieldHeaders";
import HealthRelatedAssistanceForm from "../HealthRelatedAssistanceForm";
import HomeManagementForm from "../HomeManagementForm";
import MentalHealthManagementForm from "../MentalHealthManagementForm";
import NonMedicalTransportationForm from "../NonMedicalTransportaionForm";
import { totalHours, totalCost } from "../NotesAndTotal/totalHoursAndCost";
import PaperWrapper from "../Paperwrapper";
import SocializationForm from "../SocializationForm";

interface ViewClientRatesProps {
  client?: string;
  form?: any;
  switchStep: Function;
  scrollIntoView: Function;
}

const ViewClientRates = (props: ViewClientRatesProps) => {
  // use mantine media query to check if screen is small
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  const form = props.form;

  const handleSubmit = (step: number) => {
    props.switchStep(step);
    props.scrollIntoView();
  };

  return (
    <div>
      <Grid
        my="md"
        gutter={50}
      >
        <Grid.Col xs={6}>
          <Paper
            p={"xl"}
            radius="xl"
          >
            <Group noWrap>
              <IconClock color="gray" />
              <Text
                size="xl"
                color="dimmed"
              >
                Total Hours
              </Text>
            </Group>
            <Title
              mt="xs"
              order={1}
              weight="bold"
            >
              {`${totalHours(form).toFixed(2)} Hrs`}
            </Title>
          </Paper>
        </Grid.Col>
        <Grid.Col xs={6}>
          <Paper
            p={"xl"}
            radius="xl"
          >
            <Group noWrap>
              <IconCoin color="gray" />
              <Text
                size="xl"
                color="dimmed"
              >
                Total Rate
              </Text>
            </Group>
            <Title
              mt="xs"
              order={1}
              weight="bold"
              color="green"
            >
              {`$ ${totalCost(form).toFixed(2)}`}
            </Title>
          </Paper>
        </Grid.Col>
      </Grid>
      <Group
        position="apart"
        noWrap
      >
        <Title
          order={isSmallScreen ? 4 : 3}
          my="md"
        >
          Home Management
        </Title>
        <Button
          size="md"
          variant="filled"
          onClick={() => (props?.switchStep ? handleSubmit(1) : () => {})}
        >
          Edit
        </Button>
      </Group>

      <PaperWrapper>
        {!isSmallScreen && <FieldHeaders />}
        <HomeManagementForm
          form={form}
          readOnly={true}
          handleSubmit={() => {}}
          isSmallScreen={isSmallScreen}
        />
      </PaperWrapper>

      <Group
        position="apart"
        noWrap
      >
        <Title
          order={isSmallScreen ? 4 : 3}
          my="xl"
        >
          Socialization
        </Title>
        <Button
          size="md"
          variant="filled"
          onClick={() => (props?.switchStep ? handleSubmit(2) : () => {})}
        >
          Edit
        </Button>
      </Group>
      <PaperWrapper>
        {!isSmallScreen && <FieldHeaders />}
        <SocializationForm
          form={form}
          readOnly={true}
          handleSubmit={() => {}}
          isSmallScreen={isSmallScreen}
        />
      </PaperWrapper>
      <Group
        position="apart"
        noWrap
      >
        <Title
          order={isSmallScreen ? 4 : 3}
          my="xl"
        >
          Congregate Meal Preparation
        </Title>
        <Button
          variant="filled"
          size="md"
          onClick={() => (props?.switchStep ? handleSubmit(3) : () => {})}
        >
          Edit
        </Button>
      </Group>
      <PaperWrapper>
        {!isSmallScreen && <FieldHeaders title="Meals/" />}
        <CongregateMealPreparation
          form={form}
          readOnly={true}
          handleSubmit={() => {}}
          isSmallScreen={isSmallScreen}
        />
      </PaperWrapper>
      <Group
        position="apart"
        noWrap
      >
        <Title
          order={isSmallScreen ? 4 : 3}
          my="xl"
        >
          Non-Medical Transportation
        </Title>
        <Button
          variant="filled"
          size="md"
          onClick={() => (props?.switchStep ? handleSubmit(4) : () => {})}
        >
          Edit
        </Button>
      </Group>
      <PaperWrapper>
        {!isSmallScreen && <FieldHeaders title="Per " />}
        <NonMedicalTransportationForm
          form={form}
          readOnly={true}
          handleSubmit={() => {}}
          isSmallScreen={isSmallScreen}
        />
      </PaperWrapper>
      <Group
        position="apart"
        noWrap
      >
        <Title
          order={isSmallScreen ? 4 : 3}
          my="xl"
        >
          ADL Assistance
        </Title>
        <Button
          variant="filled"
          size="md"
          onClick={() => (props?.switchStep ? handleSubmit(5) : () => {})}
        >
          Edit
        </Button>
      </Group>
      <PaperWrapper>
        {!isSmallScreen && <FieldHeaders />}
        <ADLAssistanceForm
          form={form}
          readOnly={true}
          handleSubmit={() => {}}
          isSmallScreen={isSmallScreen}
        />
      </PaperWrapper>
      <Group
        position="apart"
        noWrap
      >
        <Title
          order={isSmallScreen ? 4 : 3}
          my="xl"
        >
          Health Related Assistance
        </Title>
        <Button
          variant="filled"
          size="md"
          onClick={() => (props?.switchStep ? handleSubmit(6) : () => {})}
        >
          Edit
        </Button>
      </Group>
      <PaperWrapper>
        {!isSmallScreen && <FieldHeaders />}
        <HealthRelatedAssistanceForm
          form={form}
          readOnly={true}
          handleSubmit={() => {}}
          isSmallScreen={isSmallScreen}
        />
      </PaperWrapper>
      <Group
        position="apart"
        noWrap
      >
        <Title
          order={isSmallScreen ? 4 : 3}
          my="xl"
        >
          Mental Health Management
        </Title>
        <Button
          variant="filled"
          size="md"
          onClick={() => (props?.switchStep ? handleSubmit(7) : () => {})}
        >
          Edit
        </Button>
      </Group>
      <PaperWrapper>
        {!isSmallScreen && <FieldHeaders />}
        <MentalHealthManagementForm
          form={form}
          readOnly={true}
          handleSubmit={() => {}}
          isSmallScreen={isSmallScreen}
        />
      </PaperWrapper>
    </div>
  );
};

export default ViewClientRates;
