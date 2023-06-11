import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useCheckRole = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxios();
  // use axios secure with react query
  const { data: role, isLoading: isRoleLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
    //   console.log(res.data.role);
      return res.data.role;
    },
  });
  return [role, isRoleLoading];
};
export default useCheckRole;
