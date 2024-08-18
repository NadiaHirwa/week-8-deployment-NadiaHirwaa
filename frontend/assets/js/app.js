async function fetchUserProfile() {
    const token = localStorage.getItem('token');
    
    try {
        const response = await fetch('/api/user/profile', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        if (response.ok) {
            return await response.json();
        } else {
            alert('Failed to fetch user profile');
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}

document.getElementById('logout').addEventListener('click', function () {
    localStorage.removeItem('token');
    window.location.href = '/frontend/pages/login.html';
});
