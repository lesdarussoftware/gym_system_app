/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react"

import { AuthContext } from "@/providers/AuthProvider";
import { useQuery } from "./useQuery";

import { NOTIFICATION_URL } from "@/constants/urls";
import { STATUS_CODES } from "@/constants/statusCodes";

export type Notification = {
    id: number;
    is_read: boolean;
    message: string;
    created_at: string | Date;
}

export function useNotifications() {

    const { auth } = useContext(AuthContext);

    const { handleQuery } = useQuery();

    const [notifications, setNotifications] = useState<Notification[]>([]);

    const getNotifications = async () => {
        const { status, data } = await handleQuery({ url: `${NOTIFICATION_URL}/${auth?.me.gym.hash}` })
        if (status === STATUS_CODES.OK) {
            setNotifications(data[0]);
        }
    }

    const handleRead = async (id: number) => {
        const { status, data } = await handleQuery({
            url: `${NOTIFICATION_URL}/${auth?.me.gym.hash}/${id}`,
            method: 'PUT'
        });
        if (status === STATUS_CODES.OK) {
            setNotifications([
                data,
                ...notifications.filter(n => n.id !== data.id)
            ]);
        }
    }

    return { getNotifications, notifications, handleRead }
}