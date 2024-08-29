import { useEffect, useState } from 'react'
import { useSession } from '@clerk/clerk-react'
import { createClient } from '@supabase/supabase-js'

const UseSupabase = () => {
    const [client, setClient] = useState(null)
    const { session } = useSession()

    useEffect(() => {
        if (session && !client) {
            const newClient = createClient(
                import.meta.env.VITE_SUPABASE_URL,
                import.meta.env.VITE_SUPABASE_KEY,
                {
                    global: {
                        // Get the custom Supabase token from Clerk
                        fetch: async (url, options = {}) => {
                            const clerkToken = await session?.getToken({
                                template: 'supabase'
                            })

                            // Insert the Clerk Supabase token into the headers
                            const headers = new Headers(options?.headers)
                            headers.set('Authorization', `Bearer ${clerkToken}`)

                            // Now call the default fetch
                            return fetch(url, {
                                ...options,
                                headers
                            })
                        }
                    }
                }
            )
            setClient(newClient)
        }
    }, [session])

    return { client }
}

export default UseSupabase
