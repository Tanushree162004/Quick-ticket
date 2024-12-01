function showBookingForm(title) {
     document.getElementById('booking-options').classList.add('hidden');
     document.getElementById('booking-form').classList.remove('hidden');
     document.getElementById('booking-form-title').innerText = title;
   }

   function showMainPage() {
     document.getElementById('booking-options').classList.remove('hidden');
     document.getElementById('booking-form').classList.add('hidden');
   }