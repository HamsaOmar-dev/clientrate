import AppshellLayout2 from "@/components/AppshellLayout2";
import Button from "@/components/Button";
import ContainerWrapper from "@/components/ContainerWrapper";
import { LoaderWrapper } from "@/components/LoaderWrapper";
import TableComponent from "@/components/Table";
import { Group, Paper, Title } from "@mantine/core";
import { LoadingOverlay } from "@mantine/core/lib/LoadingOverlay";
import { IconPlus } from "@tabler/icons-react";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";

const Index = () => {
  const [clientData, setClientData] = useState([]);
  const [showPayNow, { toggle, close, open: show }] = useDisclosure(false);
  const { data: session } = useSession();

  const [loading, setloading] = useState(true);
  useEffect(() => {
    session &&
      axios
        .get(`/api/clientrate/get-client-rate?email=${session?.user?.email}`)
        .then((res) => {
          setClientData(res.data.data);
          if (res.data.stripePaid === false) {
            show();
          }
          console.log("T-DEBUG", res.data);
          setloading(false);
        })
        .catch((err) => {
          console.log("T-DEBUG", err);
          alert("Something went wrong. Please Try Again");
          setloading(false);
        });
  }, [session]);

  const router = useRouter();
  const data = clientData?.map((item: any, index) => {
    return {
      id: item.id,
      name: item.client_name,
      total: item.total_price,
      action: item.id,
    };
  });

  return (
    <AppshellLayout2>
      <Paper>
        <ContainerWrapper>
          <Group
            position="apart"
            py="xl"
            mb="xl"
          >
            <Title
              order={2}
              weight="bold"
            >
              Dashboard
            </Title>
            <Button
              variant={"filled"}
              rightIcon={<IconPlus color="black" />}
              onClick={() => {
                router.push("/add-client");
              }}
            >
              Add
            </Button>
          </Group>
        </ContainerWrapper>
      </Paper>
      <ContainerWrapper>
        <TableComponent
          data={data}
          loading={loading}
          setData={setClientData}
        />
        {loading && (
          <LoaderWrapper loading={loading}>
            <div style={{ height: "50vh" }}></div>
          </LoaderWrapper>
        )}
      </ContainerWrapper>
    </AppshellLayout2>
  );
};

// Check if user is authenticated
export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/sign-in",
        permanent: false,
      },
    };
  }
  return {
    props: {
      ...session,
    },
  };
}

export default Index;
