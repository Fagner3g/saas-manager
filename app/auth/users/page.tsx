import { getUsers } from "@/actions/auth/users";
import UsersStats from "@/components/auth/users-stats";
import UsersTable from "@/components/auth/users-table";
import type { User } from "@/types/shared";

const Users = async () => {
  const users: User[] = await getUsers();
  return (
    <div className="m-2 flex min-h-full w-full flex-col items-center justify-start gap-4">
      <UsersStats users={users} />
      <UsersTable users={users} />
    </div>
  );
};

export default Users;
