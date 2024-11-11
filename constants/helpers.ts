import { Membership } from "./types";

export function getExpirationDate(membership: Membership): Date {
    const expirationDate = new Date(membership.start);
    expirationDate.setDate(expirationDate.getDate() + membership.duration);
    return expirationDate;
}