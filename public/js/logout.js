const logout = async () => {
    const response = await fetch('/api/users/logout');
  
    if (response.ok) {
      document.location.replace('/api/users/login');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('#logout')?.addEventListener('click', logout);