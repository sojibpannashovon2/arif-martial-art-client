import { useQuery } from "@tanstack/react-query";
import { useContext } from "react"
import { authContext } from "../providers/AuthProvider";


const useCart = () => {
    const { user } = useContext(authContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:11000/carts?email=${user?.email}`)
            return response.json();
        },
    })
    return [cart, refetch];
}
export default useCart;