export async function fetchAppointments() {
    try {
        const response = await fetch('/api/appointments');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Invalid JSON response');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        return { error: 'Failed to fetch appointments' }; // Graceful fallback
    }
}
