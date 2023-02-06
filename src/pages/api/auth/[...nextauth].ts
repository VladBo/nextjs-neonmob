import NextAuth from "next-auth";
import authOptions from "../../../lib/servers/auth";

export default NextAuth(authOptions);
