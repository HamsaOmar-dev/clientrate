import ADLAssistanceForm from "@/components/ADLAssistanceForm";
import AppshellLayout2 from "@/components/AppshellLayout2";
import Button from "@/components/Button";
import CongregateMealPreparation from "@/components/CongregateMealPreparationForm";
import ContainerWrapper from "@/components/ContainerWrapper";
import FieldHeaders from "@/components/FieldHeaders";
import HealthRelatedAssistanceForm from "@/components/HealthRelatedAssistanceForm";
import ClientDetailsForm from "../../components/ClientDetailsForm";
import HomeManagementForm from "@/components/HomeManagementForm";
import MentalHealthManagementForm from "@/components/MentalHealthManagementForm";
import NonMedicalTransportationForm from "@/components/NonMedicalTransportaionForm";
import { totalHours, totalCost } from "@/components/NotesAndTotal/totalHoursAndCost";
import PaperWrapper from "@/components/Paperwrapper";
import SocializationForm from "@/components/SocializationForm";
import ViewClientRates from "@/components/ViewClientRates";
import { Grid, Group, Modal, Paper, Space, Stack, Stepper, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure, useMediaQuery, useScrollIntoView } from "@mantine/hooks";
import { IconChevronLeft } from "@tabler/icons-react";
import axios from "axios";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoaderWrapper } from "@/components/LoaderWrapper";
import { notifications } from "@mantine/notifications";
import BackToDashboard from "@/components/BackToDashboard";

interface AddClientProps {
  activeStep: number;
  data: any;
  fetchingLoader?: boolean;
}

const AddClient = ({ activeStep = 0, data = null, fetchingLoader = false }: AddClientProps) => {
  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const confirmBackToDashboard = () => {
    if ((data && active === 8 && !form.isTouched()) || !form.values.client_name) {
      router.replace("/dashboard");
    } else {
      open();
    }
  };

  const form = useForm({
    initialValues: {
      client_name: "",
      client_email: "",
      client_phone: "",
      // HOME MANAGEMENT
      homemaking_day: null,
      homemaking_week: null,
      homemaking_month: null,
      shopping_day: null,
      shopping_week: null,
      shopping_month: null,
      individualmealprepinown_day: null,
      individualmealprepinown_week: null,
      individualmealprepinown_month: null,
      moneymanagement_day: null,
      moneymanagement_week: null,
      moneymanagement_month: null,
      assistancemakingappointments_day: null,
      assistancemakingappointments_week: null,
      assistancemakingappointments_month: null,
      arrangenonmedical_day: null,
      arrangenonmedical_week: null,
      arrangenonmedical_month: null,
      home_management_notes: "",

      // SOCIALIZATION
      individualstaffratio1_day: null, //Individual Staff Ratio 1:1
      individualstaffratio1_week: null,
      individualstaffratio1_month: null,
      individualstaffratio2_day: null, //Individual Staff Ratio 1:2-5
      individualstaffratio2_week: null,
      individualstaffratio2_month: null,
      individualstaffratio3_day: null, //Individual Staff Ratio 1:6-12
      individualstaffratio3_week: null,
      individualstaffratio3_month: null,
      individualstaffratio4_day: null, //Individual Staff Ratio 1:13-20
      individualstaffratio4_week: null,
      individualstaffratio4_month: null,
      individualstaffratio5_day: null, //Individual Staff Ratio 1:Over 20
      individualstaffratio5_week: null,
      individualstaffratio5_month: null,
      socialization_notes: "",

      // CONGREGATE MEAL PREPARATION
      breakfast_day: null,
      breakfast_week: null,
      breakfast_month: null,
      lunch_day: null,
      lunch_week: null,
      lunch_month: null,
      supper_day: null,
      supper_week: null,
      supper_month: null,
      snack_day: null,
      snack_week: null,
      snack_month: null,
      congregate_meal_preparation_notes: "",

      // NON-MEDICAL TRANSPORTATION
      nonmedicaltransportation1_day: null, //Driver 1:1
      nonmedicaltransportation1_week: null,
      nonmedicaltransportation1_month: null,
      nonmedicaltransportation2_day: null, //Mileage 1:1
      nonmedicaltransportation2_week: null,
      nonmedicaltransportation2_month: null,
      nonmedicaltransportation3_day: null, //Driver Number of Riders 2
      nonmedicaltransportation3_week: null,
      nonmedicaltransportation3_month: null,
      nonmedicaltransportation4_day: null, //Mileage Number of Riders 2
      nonmedicaltransportation4_week: null,
      nonmedicaltransportation4_month: null,
      nonmedicaltransportation5_day: null, //Driver Number of Riders 3-5
      nonmedicaltransportation5_week: null,
      nonmedicaltransportation5_month: null,
      nonmedicaltransportation6_day: null, //Mileage Number of Riders 3-5
      nonmedicaltransportation6_week: null,
      nonmedicaltransportation6_month: null,
      nonmedicaltransportation7_day: null, //Driver Number of Riders 6-10
      nonmedicaltransportation7_week: null,
      nonmedicaltransportation7_month: null,
      nonmedicaltransportation8_day: null, //Mileage Number of Riders 6-10
      nonmedicaltransportation8_week: null,
      nonmedicaltransportation8_month: null,
      nonmedicaltransportation9_day: null, //Driver Number of Riders More than 10
      nonmedicaltransportation9_week: null,
      nonmedicaltransportation9_month: null,
      nonmedicaltransportation10_day: null, //Mileage Number of Riders More than 10
      nonmedicaltransportation10_week: null,
      nonmedicaltransportation10_month: null,
      non_medical_transportation_notes: "",

      // ADL Assistance
      assistancewithdressing_day: null,
      assistancewithdressing_week: null,
      assistancewithdressing_month: null,
      assistancewithgrooming_day: null,
      assistancewithgrooming_week: null,
      assistancewithgrooming_month: null,
      assistancewithbathing_day: null,
      assistancewithbathing_week: null,
      assistancewithbathing_month: null,
      continencecare_day: null,
      continencecare_week: null,
      continencecare_month: null,
      assistancepositioning_day: null,
      assistancepositioning_week: null,
      assistancepositioning_month: null,
      assistanceeating_day: null,
      assistanceeating_week: null,
      assistanceeating_month: null,
      assistancewalking_day: null,
      assistancewalking_week: null,
      assistancewalking_month: null,
      assistancewheeling_day: null,
      assistancewheeling_week: null,
      assistancewheeling_month: null,
      assistancetransferring_day: null,
      assistancetransferring_week: null,
      assistancetransferring_month: null,
      ADL_assistance_notes: "",

      // Health Related Assistance
      assistancewithselfadministration_day: null,
      assistancewithselfadministration_week: null,
      assistancewithselfadministration_month: null,
      verbalorvisualmedicalreminders_day: null,
      verbalorvisualmedicalreminders_week: null,
      verbalorvisualmedicalreminders_month: null,
      insulininjection_day: null,
      insulininjection_week: null,
      insulininjection_month: null,
      therapeuticexercises_day: null,
      therapeuticexercises_week: null,
      therapeuticexercises_month: null,
      delegatedclinicalmonitoring_day: null,
      delegatedclinicalmonitoring_week: null,
      delegatedclinicalmonitoring_month: null,
      otherdelegatedtasks_day: null,
      otherdelegatedtasks_week: null,
      otherdelegatedtasks_month: null,
      medsetupsandmonitoring_day: null,
      medsetupsandmonitoring_week: null,
      medsetupsandmonitoring_month: null,
      insulindraws_day: null,
      insulindraws_week: null,
      insulindraws_month: null,
      health_related_assistance_notes: "",

      //Mental Health Management
      managewandering_day: null,
      managewandering_week: null,
      managewandering_month: null,
      manageorientationissues_day: null,
      manageorientationissues_week: null,
      manageorientationissues_month: null,
      manageanxiety_day: null,
      manageanxiety_week: null,
      manageanxiety_month: null,
      managerepetitivebehavior_day: null,
      managerepetitivebehavior_week: null,
      managerepetitivebehavior_month: null,
      manageagitation_day: null,
      manageagitation_week: null,
      manageagitation_month: null,
      manageselfinjuriousbehavior_day: null,
      manageselfinjuriousbehavior_week: null,
      manageselfinjuriousbehavior_month: null,
      manageverbalaggression_day: null,
      manageverbalaggression_week: null,
      manageverbalaggression_month: null,
      managephysicalaggression_day: null,
      managephysicalaggression_week: null,
      managephysicalaggression_month: null,
      managepropertydestruction_day: null,
      managepropertydestruction_week: null,
      managepropertydestruction_month: null,
      meetothercognitivementalhealthneed1_day: null,
      meetothercognitivementalhealthneed1_week: null,
      meetothercognitivementalhealthneed1_month: null,
      meetothercognitivementalhealthneed2_day: null,
      meetothercognitivementalhealthneed2_week: null,
      meetothercognitivementalhealthneed2_month: null,
      meetothercognitivementalhealthneed3_day: null,
      meetothercognitivementalhealthneed3_week: null,
      meetothercognitivementalhealthneed3_month: null,
      mental_health_management_notes: "",
    },
    validate: {
      client_name: (value: string) => {
        if (!value) {
          return "Client Name is required";
        } else if (value.length < 2) {
          return "Client Name Must Be Atleast 2 Characters";
        }
      },
    },
    validateInputOnBlur: true,
  });

  useEffect(() => {
    if (data) {
      form.setValues(data);
    }
  }, [data]);
  const { data: session } = useSession();

  console.log("session", session);
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const [active, setActive] = useState(activeStep);
  const nextStep = () => setActive((current) => (current < 8 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const addClient = () => {
    setLoading(true);
    console.log("add client");

    let values = {
      ...form.values,
      total_hours: totalHours(form),
      total_price: totalCost(form),
      userEmail: session?.user?.email,
    };

    if (!values.client_name || !form.isTouched()) {
      return router.push("/dashboard");
    }
    // loop through values and remove null or "" values
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        if ((values as any)[key] === null || (values as any)[key] === "") {
          delete (values as any)[key];
        }
      }
    }

    console.log("values", values);
    let url = "/api/clientrate/add-update-client-rate";
    if (data) {
      url += `?id=${data.id}`;
    }
    axios
      .post(url, values)
      .then((res: any) => {
        console.log("res", res);
        if (res.data?.message === "Client rate created successfully") {
          router.push("/dashboard");
          let title, message;
          if (data) {
            title = "Client Updated Successfully";
            message = `Your Client "${values.client_name}" Has Been Updated`;
          }
          notifications.show({
            title: title || "Client Added Successfully",
            message: message || `Your Client "${values.client_name}" Has Been Added To Your Dashboard`,
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.yellow[7],
                borderColor: theme.colors.yellow[7],

                "&::before": { backgroundColor: theme.colors.dark },
              },

              title: { color: theme.colors.dark, fontWeight: 700 },
              description: { color: theme.colors.dark },
              closeButton: {
                color: theme.colors.dark,
                "&:hover": { backgroundColor: theme.colors.blue[7] },
              },
            }),
          });
        } else if (res.data?.message === "Proceed To Payment To Add This ClientRate" || res.data?.data?.stripePaid === false) {
          router.push("https://buy.stripe.com/test_00g3fv66YfmA0mY003");
        } else {
          alert(res.data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        alert("Something went wrong");
        setLoading(false);
      });
  };

  const switchStep = (step: number) => {
    console.log("step", step);
    setActive(step);
  };
  const [loading, setLoading] = useState(false);
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { scrollIntoView: lastStepScrollIntoView, targetRef: lastStepTargetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  return (
    <>
      <Modal
        opened={opened}
        transitionProps={{ transition: "fade", duration: 500 }}
        onClose={close}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <PaperWrapper
          withBorder
          p="xl"
        >
          <Stack p="xl">
            <Title
              order={3}
              align="center"
            >
              {`Proceed Back To Dashboard?
              Your data will be saved`}
            </Title>
            <Space h="xl" />
            <Group
              position="apart"
              px="xl"
            >
              <Button
                variant="outline"
                onClick={() => {
                  close();
                }}
              >
                No
              </Button>
              <Button
                variant="filled"
                onClick={() => {
                  close();
                  addClient();
                }}
              >
                Yes
              </Button>
            </Group>
          </Stack>
        </PaperWrapper>
      </Modal>

      <div ref={lastStepTargetRef}></div>
      <AppshellLayout2>
        <BackToDashboard open={confirmBackToDashboard} />
        <LoaderWrapper loading={fetchingLoader || loading}>
          <ContainerWrapper mb="xl">
            <div ref={targetRef}></div>
            {active !== 8 ? (
              <Stepper
                // iconPosition="top"
                size={isSmallScreen ? "sm" : "sm"}
                active={active}
                onStepClick={setActive}
                breakpoint="md"
                allowNextStepsSelect={form.values.client_name && form.values.client_name.length > 1 ? true : false}
                my={isSmallScreen ? 0 : "xl"}
                py={isSmallScreen ? 0 : "xl"}
                styles={{
                  separator: {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Stepper.Step label="Client Details">
                  <Title
                    order={3}
                    my="md"
                  >
                    Client Details
                  </Title>
                  <PaperWrapper>
                    <ClientDetailsForm
                      form={form}
                      handleSubmit={() => {}}
                      isSmallScreen={isSmallScreen}
                    />
                  </PaperWrapper>
                </Stepper.Step>

                <Stepper.Step label="Home Management">
                  <Title
                    order={3}
                    my="md"
                  >
                    Add Unit Home Management
                  </Title>
                  <PaperWrapper>
                    {!isSmallScreen && <FieldHeaders />}
                    <HomeManagementForm
                      form={form}
                      handleSubmit={() => {}}
                      isSmallScreen={isSmallScreen}
                    />
                  </PaperWrapper>
                </Stepper.Step>
                <Stepper.Step label="Socialization">
                  <Title
                    order={3}
                    my="md"
                  >
                    Add Unit Socialization
                  </Title>
                  <PaperWrapper>
                    {!isSmallScreen && <FieldHeaders />}
                    <SocializationForm
                      form={form}
                      handleSubmit={() => {}}
                      isSmallScreen={isSmallScreen}
                    />
                  </PaperWrapper>
                </Stepper.Step>
                <Stepper.Step label="Congregate Meal Preparation">
                  <Title
                    order={3}
                    my="md"
                  >
                    Add Unit For Congregate Meal Preparation
                  </Title>
                  <PaperWrapper>
                    {!isSmallScreen && <FieldHeaders title="Meals/" />}
                    <CongregateMealPreparation
                      form={form}
                      handleSubmit={() => {}}
                      isSmallScreen={isSmallScreen}
                    />
                  </PaperWrapper>
                </Stepper.Step>
                <Stepper.Step label="Non-Medical Transportation">
                  <Title
                    order={3}
                    my="md"
                  >
                    Add Unit For Non-Medical Transportation
                  </Title>
                  <PaperWrapper>
                    {!isSmallScreen && <FieldHeaders title="Per " />}
                    <NonMedicalTransportationForm
                      form={form}
                      handleSubmit={() => {}}
                      isSmallScreen={isSmallScreen}
                    />
                  </PaperWrapper>
                </Stepper.Step>
                <Stepper.Step label="ADL Assistance">
                  <Title
                    order={3}
                    my="md"
                  >
                    Add Unit For ADL Assistance
                  </Title>
                  <PaperWrapper>
                    {!isSmallScreen && <FieldHeaders />}
                    <ADLAssistanceForm
                      form={form}
                      handleSubmit={() => {}}
                      isSmallScreen={isSmallScreen}
                    />
                  </PaperWrapper>
                </Stepper.Step>
                <Stepper.Step label="Health Related Assistance">
                  <Title
                    order={3}
                    my="md"
                  >
                    Add Unit For Health Related Assistance
                  </Title>
                  <PaperWrapper>
                    {!isSmallScreen && <FieldHeaders />}
                    <HealthRelatedAssistanceForm
                      form={form}
                      handleSubmit={() => {}}
                      isSmallScreen={isSmallScreen}
                    />
                  </PaperWrapper>
                </Stepper.Step>
                <Stepper.Step label="Mental Health Management">
                  <Title
                    order={3}
                    my="md"
                  >
                    Add Unit For Mental Health Management
                  </Title>
                  <PaperWrapper>
                    {!isSmallScreen && <FieldHeaders />}
                    <MentalHealthManagementForm
                      form={form}
                      handleSubmit={() => {}}
                      isSmallScreen={isSmallScreen}
                    />
                  </PaperWrapper>
                </Stepper.Step>
                {/* <Stepper.Completed> */}
                {/* <PaperWrapper> */}
                {/* </PaperWrapper> */}
                {/* </Stepper.Completed> */}
              </Stepper>
            ) : (
              <ViewClientRates
                form={form}
                scrollIntoView={scrollIntoView}
                switchStep={switchStep}
              />
            )}
            <Group
              noWrap
              mt="md"
            >
              <Button
                hidden={active === 0 || active === 8}
                variant="default"
                onClick={prevStep}
                fullWidth
                disabled={active === 0}
              >
                <Text>Prev</Text>
              </Button>
              <Button
                hidden={data && active === 8 && !form.isTouched()}
                onClick={
                  active === 8
                    ? addClient
                    : () => {
                        if (active === 0) {
                          const fieldError = form.validateField("client_name");
                          console.log("fieldError", fieldError);
                          if (fieldError.hasError) {
                            return;
                          } else {
                            nextStep();
                            scrollIntoView();
                          }
                        } else {
                          nextStep();
                          if (active === 7) {
                            lastStepScrollIntoView();
                          } else {
                            scrollIntoView();
                          }
                        }
                      }
                }
                fullWidth
                variant="filled"
              >{`${active === 8 ? "Save" : "Next"}`}</Button>
            </Group>
          </ContainerWrapper>
        </LoaderWrapper>
      </AppshellLayout2>
    </>
  );
};

export default AddClient;
