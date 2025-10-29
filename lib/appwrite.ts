import {Account, Avatars, Client, OAuthProvider} from "react-native-appwrite";
import * as Linking from 'expo-linking'
import { openAuthSessionAsync } from "expo-web-browser"


export const config = {
    platform: 'com.group11.perle',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_EMDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();

client
   .setEndpoint(config.endpoint!)
   .setProject(config.projectId!)
   .setPlatform(config.platform!)

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
    try {
        const redirecUrl = Linking.createURL('/');

        const response = await account.createOAuth2Token(
            OAuthProvider.Google, redirecUrl
            );

            if(!response) throw new Error('Failed to login');

            const browserResult = await openAuthSessionAsync(
                response.toString(),
                redirecUrl
            )

            if(browserResult.type !== 'success') throw new Error('Failed to login');


            const url = new URL(browserResult.url);

            const secret = url.searchParams.get('secret')?.toString();
            const userId = url.searchParams.get('useerId')?.toString();

            if (!secret || !userId) throw Error('Failed to login');

            const session = await account.createSession(userId, secret);

            if(!session) throw new Error('Failed to crear a session');

            return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


export async function logout() {
    try {
        await account.deleteSession('current');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function getUser() {
    try {
        const response = await account.get();

        if(response.$id) {
            const userAvatar = avatar.getInitials(response.name);

            return {
                ...response,
                avatar: userAvatar.toString(),
            }
        }
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getCurrentUser() {
    try {
      const result = await account.get();
      if (result.$id) {
        const userAvatar = avatar.getInitials(result.name);
  
        return {
          ...result,
          avatar: userAvatar.toString(),
        };
      }
  
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }