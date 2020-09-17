import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
  </>
}





// import Head from 'next/head'
// import Link from 'next/link'

// import React from 'react'
// import { signIn, signOut, useSession } from 'next-auth/client'

// import styles from '../styles/Home.module.css'

// export default function Login() {
//   const [ session, loading ] = useSession()

//     return (
//         <div className={styles.container}>
//         <Head>
//           <title>Register</title>
//           <link rel="icon" href="/hyper.ico" />
//         </Head>
  
//         <main className={styles.main}>
//           <h1 className={styles.title}>
//             Register for a <Link href="/">Hypertube</Link> account
//           </h1>
//           <div className={styles.card}>Login:
//           <br></br><br></br>
//             <form>
//                 <label name='uname'><b>Username</b></label><br></br>
//                 <input type='text' placeholder='username'></input><br></br>
//                 <label><b>Password</b></label><br></br>
//                 <input type='password' ></input><br></br>

//             </form>
  
//           </div>
//           <div className={styles.card}>Or use OAuth:
//           <br></br><br></br>
//             <form> 
//                 <label name='uname'><b>Username</b></label><br></br>
//                 <input type='text' placeholder='username'></input><br></br>
//                 <label><b>Password</b></label><br></br>
//                 <input type='password' ></input><br></br>

//             </form>
  
//           </div>
//         </main>
        
//         <footer className={styles.footer}>
//           <a
//             href="https://github.com/sminnaar"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Powered by sminnaar{' '}
//             <img src="/github2.png" alt="Github logo" className={styles.logo} />
//           </a>
//         </footer>
//       </div>
//     )
//   }