import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_KEY!,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      lock: processLock,
    },
  })
        

  // https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native

// https://www.youtube.com/watch?v=AE7dKIKMJy4&t=3s