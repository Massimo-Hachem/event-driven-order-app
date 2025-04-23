const form = document.getElementById('orderForm');
const responseMsg = document.getElementById('responseMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const orderId = document.getElementById('orderId').value.trim();
  const item = document.getElementById('item').value.trim();

  if (!orderId || !item) {
    showMessage('Please fill out all fields.', 'error');
    return;
  }

  const order = { id: orderId, item };

  try {
    const response = await fetch('https://api.example.com/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });

    const result = await response.json();

    if (response.ok) {
      showMessage(`✅ Order placed! ID: ${result.messageId || 'N/A'}`, 'success');
      form.reset();
    } else {
      showMessage(`❌ ${result.error || 'Something went wrong.'}`, 'error');
    }
  } catch (err) {
    showMessage('❌ Network error — check your connection.', 'error');
    console.error(err);
  }
});

function showMessage(message, type = 'success') {
  responseMsg.textContent = message;
  responseMsg.className = `response ${type}`;
}
