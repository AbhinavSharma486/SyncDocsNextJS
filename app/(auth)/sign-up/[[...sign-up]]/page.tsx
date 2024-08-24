import { SignUp } from '@clerk/nextjs';

const SingUpPage = () => {
  return (
    <main className='auth-page'>
      <SignUp />
    </main>
  );
};

export default SingUpPage;