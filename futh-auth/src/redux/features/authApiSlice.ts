import { apiSlice } from "../services/apiSlice";

interface User{
    first_name: string;
    last_name: string;
    email: string;
}
interface Users{
    email: string;
    password: string;
}
interface SocialAuth{
    provider:string;
    state:string;
    code:string;
}
interface createUserResponse{
    success: boolean;
    user:User;
}

const authApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        retriveUser:builder.query<User,void>({
            query:()=>'/users/me/'
        }),
        socialAuthentication:builder.mutation<createUserResponse,SocialAuth>({
            query:({provider, state,code})=>({
                url:`/o/${provider}/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`,
                method:'post',
                headers:{
                    Accept: 'application/json',
                    'content-type': 'application/x-www-form-urlencoded'
                }
            })
        
        }),
        login:builder.mutation({
            query:({email,password}:Users)=>({
                url:'/jwt/create/',
                method:'POST',
                body:{email,password}
            })
        }),
        register:builder.mutation({
            query:({ first_name, last_name, email, password, re_password })=>({
                url:'/users/',
                method:'POST',
                body:{ first_name, last_name, email, password, re_password }
            })
        }),
        verify: builder.mutation({
			query: () => ({
				url: '/jwt/verify/',
				method: 'POST',
			}),
		}),
        logout:builder.mutation({
            query:()=>({
                url:'/logout/',
                method:'POST',
            })
        }),
        activation: builder.mutation({
			query: ({ uid, token }) => ({
				url: '/users/activation/',
				method: 'POST',
				body: { uid, token },
			}),
		}),
        resetpassword:builder.mutation({
            query:(email: any)=>({
                url:'/users/reset_password/',
                method:'POST',
                body:{email}
            })
        }),
        resetpasswordconform:builder.mutation({
            query:({uid,token,re_new_password,new_password})=>({
                url:'/users/reset_password_confirm/',
                method:'POST',
                body:{uid,token,re_new_password,new_password}
            })
        })
    })
})

export const {useRetriveUserQuery,
                useSocialAuthenticationMutation,
                useLoginMutation,
                useRegisterMutation,
                useVerifyMutation,
                useLogoutMutation,
                useActivationMutation,
                useResetpasswordMutation,
                useResetpasswordconformMutation
           } =authApiSlice;