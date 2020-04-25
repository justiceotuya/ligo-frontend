import user from '../../assets/user-input.svg';
import mail from '../../assets/envelope.svg';
import phone from '../../assets/cellphone.svg';

export const strings = {
    BE_COMFORTABLE: 'Be comfortible, Pay less',
    CREATE_ACCOUNT: 'Create your Ligo account',
    DRIVE_WITH_LIGO: 'Drive with Ligo',
    EARN_ANYWHERE: 'Earn anywhere, be your own boss',
    I_AM_A_DRIVER: 'I am a Driver',
    I_AM_A_RIDER: 'I am a Rider',
    SIGNUP: 'Signup',
    TAKE_A_RIDE: 'Take a Ride with Ligo',
};

export const inputFields = [
    {
        icon: user,
        name: 'name',
        placeholder: 'name',
        type: 'text',
    },
    {
        icon: mail,
        name: 'email',
        placeholder: 'email address',
        type: 'email',
    },
    {
        icon: phone,
        name: 'phoneNumber',
        placeholder: 'phone number',
        type: 'text',
    },
];
