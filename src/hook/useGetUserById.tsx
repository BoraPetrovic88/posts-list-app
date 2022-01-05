import { useEffect, useState } from "react";
import { getUserById } from "api/users/getUserByIdApi";
import { UserModel } from "api/users/type";

export default function useGetUserById(userId: number) {
  const [user, setUser] = useState<UserModel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (userId) {
      getUserById(userId)
        .then((result: UserModel) => {
          if (result) {
            setUser(result);
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [userId]);

  return { user, isLoading };
}
