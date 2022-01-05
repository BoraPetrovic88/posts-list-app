import { useEffect, useState } from "react";
import { UserModel } from "api/users/type";
import { getUsers } from "api/users/getUsersApi";

export default function useUsers() {
  const [users, setUsers] = useState<UserModel[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getUsers()
      .then((result: UserModel[]) => {
        setUsers(result);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { users, isLoading };
}
