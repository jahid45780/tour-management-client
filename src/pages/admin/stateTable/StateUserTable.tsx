/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Eye,
  Shield,
  Trash2,
  UserCog,
} from "lucide-react";
import { useChangeUserRoleMutation, useGetAllUserQuery, useUserRemoveMutation } from "@/redux/features/stats/allUser/allUser.api";
import { DeleteConfirmation } from "@/components/deleteConfirmation";
import { toast } from "sonner";
import Loading from "@/components/shared/Loading";


const UserTable = () => {
  const { data: allUserData, isLoading } = useGetAllUserQuery(undefined);

  const [ removeUser ] = useUserRemoveMutation()
  const [changeUserRole] = useChangeUserRoleMutation()

  const users = allUserData || [];


  if (isLoading) {
    return <Loading/>
  }

  const handleRemoveUser = async ( userId:string )=>{
        const toastId = toast.loading("Deleting")
          try {
      const res = await removeUser(userId).unwrap();
  
      if (res.success) {
        toast.success("User Deleted Successfully", {id:toastId});
      }
    } catch (error) {
      toast.error("Failed to delete User");
      console.log(error);
    }
  
      }


  const handleChangeRole = async (
  id: string,
  currentRole: string
) => {
  const toastId = toast.loading("Updating role...");

  try {
    const newRole =
      currentRole === "ADMIN" ? "USER" : "ADMIN";

    const res = await changeUserRole({
      id,
      role: newRole,
    }).unwrap();

    if (res.success) {
      toast.success("Role Updated", {
        id: toastId,
      });
    }
  } catch (err) {
    toast.error("Failed to update role", {
      id: toastId,
    });
    console.log(err);
  }
};

  return (
    <div className="rounded-xl border  shadow-sm p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold">Users</h2>
          <p className="text-sm text-gray-500">
            Total Users : {users.length}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border ">
        <Table>
          <TableHeader className="bg-gary-100">
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Verified</TableHead>
              <TableHead className="text-center">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
    
            {users.map((user:any) => (
              <TableRow key={user._id}>
                {/* User */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {user.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <h3 className="font-semibold">
                        {user.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {user.address}
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell>{user.email}</TableCell>

                {/* Phone */}
                <TableCell>{user.phone}</TableCell>

                {/* Role */}
                <TableCell>
                  <Badge
                    variant={
                      user.role === "ADMIN"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {user.role}
                  </Badge>
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Badge
                    className={
                      user.IsActive === "ACTIVE"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }
                  >
                    {user.IsActive}
                  </Badge>
                </TableCell>

                {/* Verified */}
                <TableCell>
                  {user.IsVerified ? (
                    <Badge className="bg-emerald-600">
                      Verified
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      Unverified
                    </Badge>
                  )}
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <div className="flex justify-center gap-2">
                    {/* View */}
                    <Button
                      size="icon"
                      variant="outline"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>

                    {/* Change Role */}
                   <DeleteConfirmation
            title="Change User Role?"
            description={`Make this user ${
    user.role === "ADMIN" ? "USER" : "ADMIN"
  }?`}
  onConfirm={() =>
    handleChangeRole(user._id, user.role)
  }
>
  <Button size="icon">
    {user.role === "ADMIN" ? (
      <UserCog className="w-4 h-4" />
    ) : (
      <Shield className="w-4 h-4" />
    )}
  </Button>
</DeleteConfirmation>

                    {/* Delete */}
                       <DeleteConfirmation
                                onConfirm={()=> handleRemoveUser(user._id)}
                               >
                                       <Button>
                                  <Trash2 size={18} />
                               </Button>
                               </DeleteConfirmation>
                  </div>
                </TableCell>
              </TableRow>
            ))}

            {users.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-10"
                >
                  No Users Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserTable;