import { IMenu } from "../interfaces/imenu";

export const menuItems: IMenu[] = [
    {
        index: 0,
        title: 'Appointments',
        url: '/appointments',
        icon: 'calendar_month',
        description: 'View and manage all appointments.'
    },
    {
        index: 1,
        title: 'Patients',
        url: '/patients',
        icon: 'assignment_ind',
        description: 'Access patient records and details.'
    },
    {
        index: 2,
        title: 'Doctors',
        url: '/doctors',
        icon: 'stethoscope',
        description: 'View the list of doctors and their profiles.'
    },
    {
        index: 3,
        title: 'Create Appointment',
        url: '/appointments/create',
        icon: 'ecg',
        description: 'Schedule a new appointment.'
    },
    {
        index: 4,
        title: 'Add Patient',
        url: '/patients/create',
        icon: 'clinical_notes',
        description: 'Register a new patient.'
    },
    {
        index: 5,
        title: 'Add Doctor',
        url: '/doctors/create',
        icon: 'stethoscope_check',
        description: 'Add a new doctor to the system.'
    },
    {
        index: 6,
        title: 'About',
        url: '/about',
        icon: 'info',
        description: 'Learn more about the application.'
    },
    {
        index: 7,
        title: 'Sign Out',
        url: '/sign-in',
        icon: 'power_settings_new',
        description: 'Log out of your account.'
    }
];
