import { type NextPage } from "next";
import Head from "next/head";
import { SignContent } from "../components/sign-components/sign-content";

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>Noteset - Sign Up</title>
        <meta
          name="description"
          content="Personalized workout tracker - sign up"
        />
      </Head>

      <SignContent page="sign up" />
    </>
  );
};

export default SignUpPage;
