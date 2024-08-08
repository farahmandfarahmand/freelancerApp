import ProposalTable from "../features/proposals/ProposalTable";

function Proposals() {
  return (
    <div className="">
      <h1 className="font-black text-secondary-700 text-xl mb-8">
        پروپزال های شما
      </h1>
      <ProposalTable />
    </div>
  );
}

export default Proposals;
