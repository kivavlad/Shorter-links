import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createShortLink, selectLoading } from "../../store/slice/linkSlice"
import "./form.css";


export const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm( {mode: "onSubmit"} );
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();

    
    const onSubmit = ({url}) => {
        dispatch(createShortLink(url));
        reset();
    }

    const errorFormStyle = {
        fontSize: '14px',
        color: 'var(--secondary-300)',
        textAlign: 'center',
        marginTop: '6px'
    };

    const errorFormStyleMobile = {
        fontSize: '12px',
        color: 'var(--secondary-300)',
        textAlign: 'center',
    };

    return(
        <div className="form_container">

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className="form_input"
                    type="url"
                    autoComplete="off"
                    placeholder="  Shorten a link here..."
                    {...register('url', {
                        required: 'Please add a link', 
                        pattern: {
                            value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g,
                            message: 'Please enter a valid url',
                        },
                    })}
                    style={{
                        outlineColor: errors.url ? 'var(--secondary-300)': 'currentcolor',
                        outlineWidth: errors.url ? '3px' : '1px',
                    }}
                    disabled={loading === 'loading'}
                />

                <div className="errors_wrapper_mobile">
                    {errors.url && (<div style={errorFormStyleMobile}>{errors.url.message}</div>)}
                </div>
                <button disabled={loading === 'loading'} type="submit" className="form_button">Shorten It!</button>
            </form>

            <div className="errors_wrapper">
                {errors.url && (<div style={errorFormStyle}>{errors.url.message}</div>)}
            </div>

        </div>
    )
}