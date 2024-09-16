import InvitationTemplate from "@/components/invitation-template";

const InvitationPage = ({ params }) => {
  return <InvitationTemplate name={params.name} />;
};

export default InvitationPage;
