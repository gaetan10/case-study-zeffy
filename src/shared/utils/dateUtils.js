
export function dateFormatter(timestamp){
    const date = new Date(timestamp);

    const day = date.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    const hour = date.getHours() % 12 || 12; // Convert to 12-hour format
    const minute = date.getMinutes();
    const period = date.getHours() < 12 ? 'AM' : 'PM';  

    const formattedDate = `${day} ${month} ${hour}:${minute.toString().padStart(2, '0')} ${period}`;

    return formattedDate
};