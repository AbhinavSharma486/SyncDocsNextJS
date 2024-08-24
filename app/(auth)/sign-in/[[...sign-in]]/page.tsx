import { SignIn } from '@clerk/nextjs';

const SingInPage = () => {
  return (
    <main className='auth-page'>
      <SignIn />
    </main>
  );
};

export default SingInPage;