import { useContext, useState } from "react";

import { AuthContext } from "@/providers/AuthProvider";
import { useQuery } from "./useQuery";

import { CLASS_URL } from "@/constants/urls";
import { STATUS_CODES } from "@/constants/statusCodes";

export function useClasses() {

    const { auth } = useContext(AuthContext);

    const { handleQuery } = useQuery();

    const [classes, setClasses] = useState([]);

    const getClasses = async (params?: string | undefined) => {
        const { status, data } = await handleQuery({ url: `${CLASS_URL}/${auth?.me.gym.hash}${params ? `/${params}` : ''}` })
        if (status === STATUS_CODES.OK) {
            setClasses(data[0]);
        }
    }

    return {
        classes,
        getClasses
    }
}