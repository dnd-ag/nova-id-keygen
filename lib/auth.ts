import NextAuth from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Keycloak({
    jwks_endpoint: `https://id.nova.local/realms/Nova/protocol/openid-connect/certs`,
    wellKnown: undefined,
    clientSecret: process.env.AUTH_KEYCLOAK_SECRET,
    issuer: 'https://id.nova.local/realms/Nova',
    authorization: {
      params: {
        scope: "openid email profile",
      },
      url: `https://id.nova.local/realms/Nova/protocol/openid-connect/auth`,
      token: `https://id.nova.local/realsm/Nova/protocol/openid-connect/token`,
      userinfo: `https://id.nova.local/realsm/Nova/protocol/openid-connect/userinfo`,
    },
  })],
});
