interface Props {
  params: {
    id: string | number;
  };
}

const Page = async ({ params: { id } }: Props) => {
  return <div>View User {id} </div>;
};

export default Page;
