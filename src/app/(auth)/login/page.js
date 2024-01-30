import { handleGithubLogin, login } from "@/lib/action";
import styles from "./login.module.css";
/* import { auth } from "@/lib/auth"; */

const LoginPage = async () => {

/*   const session = await auth();
  console.log(session); */

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <form action={login}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login with Credentials</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
