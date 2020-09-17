import Head from 'next/head'
import Link from 'next/link'

import React from "react";
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';

import { useRouter } from 'next/router'
import useSWR from 'swr'

import styles from '../styles/Home.module.css'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }

export default function Register() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => data;

    const { query } = useRouter()
    const { data, error } = useSWR(
    () => query.id && `/api/register_submit/${data}`,
    fetcher
  )

    return (
        <div className={styles.container}>
        <Head>
        <title>Hypertube Stream</title>
        <link rel="icon" href="/hyper.ico" />
      </Head>
        <Head>
          <title>Register</title>
          <link rel="icon" href="/hyper.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Register for a <Link href="/">Hypertube</Link> account
          </h1>
          <div className={styles.card}>Please complete:
          <br></br><br></br>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label><b>Username</b></label><br/>
                <input name='uname' type='text' placeholder='username' ref={register}/><br/><br/>
                <label><b>Email</b></label><br/>
                <input name='email'type='email' placeholder='email@domain.com' ref={register}/><br/><br/>
                <label><b>Password</b></label><br/>
                <input name='pass'type='password' ref={register}/><br/><br/>
                <label><b>Retype password</b></label><br/>
                <input name='pass2'type='password' ref={register}/><br/><br/>
                <button className={styles.button} type='submit' >Submit</button><br/>

            </form>
  
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://github.com/sminnaar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by sminnaar{' '}
            <img src="/github2.png" alt="Github logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    )
  }