export interface Users {
    id?: string;
    username?: string;
    password: string;
    encrypted_password?: string;
    email: string;
    phone?: string;
    avatar?: string;
    display_name?: string;
    first_name?: string;
    last_name?: string;
    facebook?: string;
    wechat?: string;
    gmail?: string;
    permission_level?: string;
    second_factor_enabled?: string;
    is_valid?: string;
    created_by?: string;
    created_datetime?: string;
    modified_by?:string;
    modified_datetime?:string;
}

