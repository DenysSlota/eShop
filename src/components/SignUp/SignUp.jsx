import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../redux/users/reducer';

const SignUp = () => {
    const users = useSelector(state => state.users.usersTotal);
    const dispatch = useDispatch();

    const { 
        register, 
        formState: { errors, isValid }, 
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => { 
        const exist = users.find((x)=> x.login === data.login); 
        if (exist) {
            alert ('this login is already in use')
        } else {
            dispatch(setUsers(data))
        }        
        reset();
      };
      
    return (
        <div className='max-w-lg m-auto mt-24 mb-4 p-2 bg-[#0e101c] rounded-md'>
            <h1 className='text-2xl text-white font-bold text-center py-2'>Registration</h1>
            <form className='flex flex-col max-w-md m-auto' onSubmit={handleSubmit(onSubmit)}>
                <label className='text-sm text-white font-light my-4'>First name</label>
                <input
                    className='text-sm mb-2 py-2 px-4 rounded-[4px]'
                    placeholder='First name'
                    type="text"
                    {...register("firstName", 
                        { required: "this is required", 
                        minLength: {
                            value: 3,
                            message: "min 3 symbol"
                        } 
                    })}
                />
                <div>
                    {errors?.firstName && <p className='text-[#bf1650] before:content-["⚠"]'>{errors?.firstName?.message || "Error"}</p>}
                </div>
                <label className='text-sm text-white font-light my-4'>Last name</label>
                <input
                    className='text-sm mb-2 py-2 px-4 rounded-[4px]'
                    placeholder='Last name'
                    type="text"
                    {...register("lastName", { 
                        required: "this is required", 
                        minLength: {
                            value: 3,
                            message: "min 3 symbol"
                        } 
                    })}
                />
                <div>
                    {errors?.lastName && <p className='text-[#bf1650] before:content-["⚠"]'>{errors?.lastName?.message || "Error"}</p>}
                </div>
                <label className='text-sm text-white font-light my-4'>Login</label>
                <input
                    className='text-sm mb-2 py-2 px-4 rounded-[4px]'
                    placeholder='Login'
                    type="text"
                    {...register("login", 
                        { required: "this is required", 
                        minLength: {
                            value: 3,
                            message: "min 3 symbol"
                        },
                        maxLength: {
                            value: 10,
                            message: "max 10 symbol"
                        } 
                    })}
                />
                <div>
                    {errors?.login && <p className='text-[#bf1650] before:content-["⚠"]'>{errors?.login?.message || "Error"}</p>}
                </div>
                <label className='text-sm text-white font-light my-4'>Password</label>
                <input
                    className='text-sm mb-2 py-2 px-4 rounded-[4px]'
                    placeholder='Password'
                    type="text"
                    {...register("password", 
                        { required: "this is required", 
                        minLength: {
                            value: 4,
                            message: "min 4 symbol"
                        },
                        maxLength: {
                            value: 10,
                            message: "max 10 symbol"
                        } 
                    })}
                />
                <div>
                    {errors?.password && <p className='text-[#bf1650] before:content-["⚠"]'>{errors?.password?.message || "Error"}</p>}
                </div>
                <label className='text-sm text-white font-light my-4'>Email</label>
                <input
                    className='text-sm mb-2 py-2 px-4 rounded-[4px]'
                    placeholder='Email'
                    type="text"
                    {...register("email", {
                        required: "this is required",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Invalid email address"
                        }
                    })}
                />
                <div>
                    {errors?.email && <p className='text-[#bf1650] before:content-["⚠"]'>{errors?.email?.message || "Error"}</p>}
                </div>
                <label className='text-sm text-white font-light my-4'>Mobile number</label>
                <input
                    className='text-sm mb-2 py-2 px-4 rounded-[4px]'
                    placeholder='tel'    
                    type="tel"
                    {...register("mobileNumber", {
                        required: "this is required",
                        maxLength: {
                            value: 11,
                            message: "max 11 symbol"
                        },
                        minLength: {
                            value: 8,
                            message: "min 8 symbol"
                        }
                    })}
                />
                <div>
                    {errors?.mobileNumber && <p className='text-[#bf1650] before:content-["⚠"]'>{errors?.mobileNumber?.message || "Error"}</p>}
                </div>                
                <input className='bg-[#61dafb] text-white uppercase tracking-[10px] mt-10 p-5 hover:bg-[#bf1650] rounded-[4px] disabled:opacity-40 active:opacity-80' type="submit" disabled={!isValid} />
            </form>
        </div>
    );       
       
}
    

export default SignUp;