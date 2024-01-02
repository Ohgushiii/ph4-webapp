'use client'
import { FC } from "react";
import { useRouter } from 'next/navigation';

export const LogoutButton: FC = () => {
  const router = useRouter();

  const handleLogoutButton = () => {
    router.push('/auth/logout');
  };

  return (
    <button className="text-blue-200" onClick={handleLogoutButton}>ログアウト</button>
  );
};
