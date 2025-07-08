document.getElementById('requestCallbackBtn').addEventListener('click', () => {
  const phone = prompt('Please enter your phone number for a callback:');
  if (phone) {
    // You can hook this up to your backend POST endpoint
    console.log('Request callback for:', phone);
    alert('Thank you! We will call you soon.');
  }
});
