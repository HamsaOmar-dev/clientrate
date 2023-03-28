import { useForm } from "@mantine/form";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AddClient from "../add-client";
import { LoaderWrapper } from "../../components/LoaderWrapper";
import { notifications } from "@mantine/notifications";

const Index = () => {
  // get data passed in router state
  const { id } = useRouter().query;
  console.log("QUERY", id);
  const [clientData, setClientData] = useState(null);

  const { data: session } = useSession();
  const router = useRouter();
  const fetchData = async () => {
    console.log("DATA FETCHING");
    session &&
      axios
        .get(`/api/clientrate/get-specific-client-rate?email=${session?.user?.email}&id=${id}`)
        .then((res) => {
          console.log("DATA FETCHED", res.data.data);
          let data = res.data.data;
          if (data?.length === 0) {
            data = null;
          }
          if (data) {
            setClientData([...data]);
          } else {
            notifications.show({
              title: "Invalid Client ID",
              message: `Looks like we can't find the client you are looking for. Navigate to "Dashboard" to see all your clients.`,
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
            router.replace("/dashboard");
          }
        })
        .catch((err) => {
          alert("Something went wrong. Please Try Again");
        });
  };
  useEffect(() => {
    fetchData();
  }, [session]);
  console.log("CLIENT DATA", clientData);
  return (
    <>
      <AddClient
        key={1}
        activeStep={8}
        data={clientData?.[0]}
        fetchingLoader={!clientData}
      />
    </>
  );
};

export default Index;
