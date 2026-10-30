export const initialData = {
  customers: [
    { id: 'c-101', name: 'Olivia Chen', initials: 'OC', email: 'olivia.chen@email.com', phone: '0412 345 678', address: '14 Albert Street, Brunswick VIC 3056', type: 'Residential', spent: 4820, since: 'Mar 2024' },
    { id: 'c-102', name: 'Marcus Williams', initials: 'MW', email: 'marcus@northside.com.au', phone: '0403 782 190', address: '82 Sydney Road, Coburg VIC 3058', type: 'Residential', spent: 2150, since: 'Jun 2024' },
    { id: 'c-103', name: 'Harbour & Co.', initials: 'HC', email: 'facilities@harbourco.com.au', phone: '03 9123 4400', address: '220 Lygon Street, Carlton VIC 3053', type: 'Commercial', spent: 12840, since: 'Jan 2023' },
    { id: 'c-104', name: 'Sophie Martin', initials: 'SM', email: 'sophie.martin@email.com', phone: '0431 029 554', address: '6 Park Avenue, Fitzroy North VIC 3068', type: 'Residential', spent: 860, since: 'Aug 2025' },
    { id: 'c-105', name: 'Daniel Thompson', initials: 'DT', email: 'dan.thompson@email.com', phone: '0418 660 219', address: '19 Bell Street, Preston VIC 3072', type: 'Residential', spent: 3270, since: 'Oct 2024' },
  ],
  enquiries: [
    { id: 'ENQ-2408', customer: 'Sophie Martin', initials: 'SM', summary: 'Hot water system stopped working', source: 'AI Receptionist', priority: 'Urgent', time: '8 min ago', status: 'New', colour: 'rose' },
    { id: 'ENQ-2407', customer: 'Olivia Chen', initials: 'OC', summary: 'Kitchen tap replacement', source: 'Website', priority: 'Normal', time: '32 min ago', status: 'New', colour: 'violet' },
    { id: 'ENQ-2406', customer: 'Marcus Williams', initials: 'MW', summary: 'Annual rental inspection', source: 'Phone', priority: 'Normal', time: '1 hr ago', status: 'Contacted', colour: 'blue' },
    { id: 'ENQ-2405', customer: 'Harbour & Co.', initials: 'HC', summary: 'Quarterly maintenance check', source: 'Email', priority: 'Low', time: 'Yesterday', status: 'Qualified', colour: 'amber' },
  ],
  jobs: [
    { id: 'JOB-318', customer: 'Olivia Chen', initials: 'OC', title: 'Bathroom tap repair', time: '9:00 am', end: '10:30 am', address: '14 Albert Street, Brunswick', status: 'In progress', colour: 'violet', amount: 385 },
    { id: 'JOB-319', customer: 'Marcus Williams', initials: 'MW', title: 'Hot water service', time: '11:00 am', end: '12:30 pm', address: '82 Sydney Road, Coburg', status: 'Confirmed', colour: 'blue', amount: 620 },
    { id: 'JOB-320', customer: 'Daniel Thompson', initials: 'DT', title: 'Kitchen mixer installation', time: '2:00 pm', end: '3:30 pm', address: '19 Bell Street, Preston', status: 'Confirmed', colour: 'emerald', amount: 540 },
    { id: 'JOB-321', customer: 'Harbour & Co.', initials: 'HC', title: 'Leak inspection', time: '4:00 pm', end: '5:00 pm', address: '220 Lygon Street, Carlton', status: 'Pending', colour: 'amber', amount: 220 },
  ],
  quotes: [
    { id: 'QT-0089', customer: 'Harbour & Co.', initials: 'HC', description: 'Bathroom plumbing upgrade', amount: 2480, status: 'Awaiting approval', date: '24 Oct 2026', valid: '7 days' },
    { id: 'QT-0088', customer: 'Olivia Chen', initials: 'OC', description: 'Kitchen tap replacement', amount: 385, status: 'Sent', date: '23 Oct 2026', valid: '14 days' },
    { id: 'QT-0087', customer: 'Daniel Thompson', initials: 'DT', description: 'Laundry rough-in', amount: 1620, status: 'Approved', date: '21 Oct 2026', valid: '14 days' },
    { id: 'QT-0086', customer: 'Marcus Williams', initials: 'MW', description: 'Hot water system replacement', amount: 3240, status: 'Draft', date: '20 Oct 2026', valid: '14 days' },
  ],
  invoices: [
    { id: 'INV-0142', customer: 'Harbour & Co.', initials: 'HC', description: 'Quarterly maintenance', amount: 1450, status: 'Overdue', due: '21 Oct 2026' },
    { id: 'INV-0141', customer: 'Olivia Chen', initials: 'OC', description: 'Bathroom tap repair', amount: 385, status: 'Awaiting payment', due: '31 Oct 2026' },
    { id: 'INV-0140', customer: 'Daniel Thompson', initials: 'DT', description: 'Kitchen mixer installation', amount: 540, status: 'Paid', due: '28 Oct 2026' },
    { id: 'INV-0139', customer: 'Marcus Williams', initials: 'MW', description: 'Call-out & diagnosis', amount: 220, status: 'Paid', due: '24 Oct 2026' },
  ],
  payments: [
    { id: 'PAY-0038', customer: 'Daniel Thompson', invoiceId: 'INV-0140', amount: 540, status: 'Settled', date: '28 Oct 2026' },
    { id: 'PAY-0037', customer: 'Marcus Williams', invoiceId: 'INV-0139', amount: 220, status: 'Settled', date: '24 Oct 2026' },
  ],
  expenses: [
    { id: 'EXP-0062', supplier: 'Reece Plumbing Supplies', description: 'Pipe fittings and valves', category: 'Materials', amount: 284, date: '29 Oct 2026' },
    { id: 'EXP-0061', supplier: 'Shell Australia', description: 'Work ute fuel', category: 'Vehicle', amount: 96, date: '28 Oct 2026' },
    { id: 'EXP-0060', supplier: 'Bunnings Warehouse', description: 'Safety equipment', category: 'Equipment', amount: 178, date: '25 Oct 2026' },
  ],
  activity: [
    { icon: 'sparkle', title: 'Daily brief is ready', detail: 'Your Tuesday morning summary', time: '8:32 am', tone: 'violet' },
    { icon: 'phone', title: 'New urgent enquiry captured', detail: 'Sophie Martin · Hot water system', time: '8:24 am', tone: 'rose' },
    { icon: 'file', title: 'Quote approved by customer', detail: 'QT-0087 · Daniel Thompson', time: 'Yesterday', tone: 'emerald' },
  ],
  notifications: [{ id: 'n1', text: 'Urgent enquiry from Sophie Martin', time: '8 min ago', read: false }, { id: 'n2', text: 'Quote QT-0089 needs your review', time: '1 hr ago', read: false }, { id: 'n3', text: 'Invoice INV-0142 is overdue', time: 'Yesterday', read: true }],
  automations: [{ name: 'AI receptionist', detail: 'Answer and qualify incoming calls', enabled: true }, { name: 'Enquiry follow-up', detail: 'Remind me about untouched enquiries', enabled: true }, { name: 'Quote reminders', detail: 'Follow up on quotes nearing expiry', enabled: true }, { name: 'Invoice reminders', detail: 'Prepare reminders for overdue invoices', enabled: false }],
  audit: [],
}

export const revenue = [
  { month: 'May', revenue: 12400 }, { month: 'Jun', revenue: 15800 }, { month: 'Jul', revenue: 14300 },
  { month: 'Aug', revenue: 19100 }, { month: 'Sep', revenue: 16800 }, { month: 'Oct', revenue: 22450 },
]
