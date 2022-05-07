export interface Jobs {
    id?: string;
    contact_person: string;
    contact_phone: string;
    contact_email: string;
    job_title: string;
    job_type: string;
    job_contents: string;
    is_approved?: string;
    is_valid?: string;
    created_by?: string;
    created_datetime?: string;
    modified_by?:string;
    modified_datetime?:string;
}
