import { AuthContext } from "@/providers/AuthProvider";
import { useContext, useState } from "react";
import { useQuery } from "./useQuery";
import { MEMBERSHIP_URL } from "@/constants/urls";
import { STATUS_CODES } from "@/constants/statusCodes";

export function useMemberships() {

    const { auth } = useContext(AuthContext);

    const { handleQuery } = useQuery();

    const [memberships, setMemberships] = useState([]);

    async function getMemberships() {
        const { status, data } = await handleQuery({ url: `${MEMBERSHIP_URL}/${auth?.me.gym.hash}` })
        if (status === STATUS_CODES.OK) {
            setMemberships(data);
        }
    }

    return {
        memberships,
        getMemberships
    }
}