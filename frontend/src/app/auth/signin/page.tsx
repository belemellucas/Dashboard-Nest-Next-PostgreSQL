'use client';

import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SignInForm: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value; 
    const password = form.password.value;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if(result?.ok) {
      router.push('/'); 
    } else { 
      console.error('Failed to sign in');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex w-1/2 items-center justify-center relative">
        <div className="absolute inset-0">
          <Image
            src={"/images/background/globallinebackground.jpg"}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-10">
          <Image
            src={"/images/logo/globalline.png"}
            alt="Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 sm:p-12.5 lg:p-17.5">
        <div className="w-full max-w-md">
          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            Entrar
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5.5">
              <label className="mb-2.5 block font-medium text-sm text-black dark:text-white" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Entre com seu email"
                required
                className="w-full rounded border border-stroke py-2.5 px-4 dark:border-strokedark"
              />
            </div>
            <div className="mb-5.5">
              <label className="mb-2.5 block font-medium text-sm text-black dark:text-white" htmlFor="password">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Entre com sua senha"
                required
                className="w-full rounded border border-stroke py-2.5 px-4 dark:border-strokedark"
              />
            </div>
            <div className="flex justify-between">
              <div className="mb-5.5">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary py-2.5 px-4 text-center text-white"
                >
                  Entrar
                </button>
              </div>
            </div>
            <p className="text-sm text-black dark:text-white">
              Não tem uma conta?{' '}
              <Link href="/auth/signup" className="text-primary hover:underline">
                Inscrever-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;