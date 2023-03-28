import AppshellLayout from "@/components/AppshellLayout";
import LandingPage from "@/components/LandingPage";
import { useScrollIntoView } from "@mantine/hooks";

export default function index() {
  return <Demo />;
}

export const Demo = () => {
  const { scrollIntoView: scrollIntoView1, targetRef: targetRef1 } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollIntoView2, targetRef: targetRef2 } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });

  return (
    <AppshellLayout
      scrollIntoView1={scrollIntoView1}
      scrollIntoView2={scrollIntoView2}
    >
      <LandingPage targetRef1={targetRef1} targetRef2={targetRef2} />
    </AppshellLayout>
  );
};
