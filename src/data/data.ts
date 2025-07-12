export type JobDataType = {
    
    jobRequest: string;
    submittedDate: string;
    status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
    submitter: string;
    url: string;
    assigned: string;
    priority: 'High' | 'Medium' | 'Low';
    dueDate: string;
    estimatedValue: string;
};


export const jobdata: JobDataType[] = [
    {
        
        jobRequest: 'Launch social media campaign for product XYZ',
        submittedDate: '15-11-2024',
        status: 'In-process',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        dueDate: '20-11-2024',
        estimatedValue: '6,200,000',
    },

    {
       
        jobRequest: 'Update press kit for company redesign',
        submittedDate: '28-10-2024',
        status: 'Need to start',
        submitter: 'Irfan Khan',
        url: 'www.irfankhanportfolio.com',
        assigned: 'Tejas Pandey',
        priority: 'High',
        dueDate: '30-10-2024',
        estimatedValue: '3,500,000',
    },

    {
       
        jobRequest: 'Finalize user testing feedback for app update',
        submittedDate: '05-12-2024',
        status: 'In-process',
        submitter: 'Mark Johnson',
        url: 'www.markjohnsondesigns.com',
        assigned: 'Rachel Lee',
        priority: 'Medium',
        dueDate: '10-12-2024',
        estimatedValue: '4,750,000',
    },

    {
        
        jobRequest: 'Design new features for the website',
        submittedDate: '10-01-2025',
        status: 'Complete',
        submitter: 'Emily Green',
        url: 'www.emilygreenart.com',
        assigned: 'Tom Wright',
        priority: 'Low',
        dueDate: '15-01-2025',
        estimatedValue: '5,900,000',
    },

    {
       
        jobRequest: 'Prepare financial report for Q4',
        submittedDate: '25-01-2025',
        status: 'Blocked',
        submitter: 'Jessica Brown',
        url: 'www.jessicabrowncreative.com',
        assigned: 'Kevin Smith',
        priority: 'Low',
        dueDate: '30-01-2025',
        estimatedValue: '2,800,000',
    },

]