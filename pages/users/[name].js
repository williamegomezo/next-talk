import { useRouter } from 'next/router';

const User = () => {
  const router = useRouter();
  const { name } = router.query;

  return <p>User: {name}</p>;
};

export default User;